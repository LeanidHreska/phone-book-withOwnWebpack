import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Contact from './Contact/Contact';
import FilterBlock from './FilterBlock/FilterBlock';
import AddContactButton from './AddContactButton/AddContactButton';

import * as contactActions from '../actions/ContactActions';

import styles from './ProvideData.css';


class ProvideData extends Component {

  render() {
    return (
      <main>
        <AddContactButton />
        <FilterBlock filterByName={ this.props.contactActions.filterContacts.bind(this) } />
        { 
          this.props.contactsArray.length
          ?
          this.props.contactsArray.map((contactData) => {
            return <Contact contactData={ contactData } key={ contactData.id + contactData.name }
              deleteContact={ this.props.contactActions.deleteContact.bind(this) }        
            />
          })
          :
            this.props.filter 
            ? 
            <span className={ styles.span } > no results found </span>
            :
            <span className={ styles.span } > contact list is empty </span>
        }
      </main>
    );
  }

}

function mapStateToProps(state) {
  return {
    contactsArray: state.filter ? state.filteredContactsArray : state.contactsArray,
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    contactActions: bindActionCreators(contactActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProvideData);
