import * as types from '../constants/ActionsType';


export function deleteContact(id) {

  return {
    type: types.DELETE_CONTACT,
    payload: {
      id
    }
  }

}

export function addContact(name, phoneNumber, imgUrl) {

  return {
    type: types.ADD_CONTACT,
    payload: {
      name,
      phoneNumber,
      imgUrl
    }
  }

}

export function editContact(id, name, phoneNumber, imgUrl) {

  return {
    type: types.EDIT_CONTACT,
    payload: {
      id,
      name,
      phoneNumber,
      imgUrl
    }
  }

}

export function filterContacts(name) {
  
  return {
    type: types.FILTER_BY_NAME,
    payload: {
      name
    }
  }

}
