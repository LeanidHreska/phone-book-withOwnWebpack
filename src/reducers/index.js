import * as types from '../constants/ActionsType';



const initialState = {
  contactsArray: [
    {
      id: 1,
      name: 'Alexey',
      phoneNumber: "375441234567",
      imgUrl: "https://picsum.photos/125/125/?random",
    },
    {
      id: 2,
      name: 'Victor',
      phoneNumber: "375447654321",
      imgUrl: "https://picsum.photos/135/135/?random"
    },
    {
      id: 3,
      name: 'Ivan',
      phoneNumber: "375331234517",
      imgUrl: "https://picsum.photos/130/130/?random",
    },
    {
      id: 4,
      name: 'Sergey',
      phoneNumber: "375731234517",
      imgUrl: "https://picsum.photos/140/140/?random",
    }
  ]
};

export default function AppState(state = initialState, action) {
  
  switch (action.type) {
    case types.DELETE_CONTACT:
      return {
        ...state,
        contactsArray: state.contactsArray.filter((contact) => contact.id !== action.payload.id)
      }

    case types.ADD_CONTACT:
      const contactsArray = state.contactsArray;
      contactsArray.push(
        {
          id: contactsArray[contactsArray.length - 1].id + 1,
          name: action.payload.name,
          phoneNumber: action.payload.phoneNumber,
          imgUrl: action.payload.imgUrl
        }
      );
      return {
        ...state,
        contactsArray: contactsArray
      }

    case types.EDIT_CONTACT: 
      
      return {
        ...state,
        contactsArray: state.contactsArray.map(
          (contact) => contact.id === action.payload.id ? Object.assign(contact, action.payload): contact)
      }
    
    case types.FILTER_BY_NAME:
      
      return {
        ...state,
        filteredContactsArray: state.contactsArray.filter(
          (contact) => contact.name.toUpperCase().indexOf(action.payload.name.toUpperCase()) > -1),
        filter: action.payload.name
      }
    
    default: return state;
  }
}
