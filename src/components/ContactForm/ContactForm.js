import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router/lib';
import * as contactActions from '../../actions/ContactActions';
import ContactFormView from './ContactFormView/ContactFormView';
import EditContactFromView from './EditFormView/EditFormView';
import { head } from 'lodash';


class AddContactForm extends Component {
  constructor(props) {
    super(props);
    this.addContact = this.props.contactActions.addContact.bind(this);
    this.editContact = this.props.contactActions.editContact.bind(this);
  }  

  findContact() {
    return this.props.contactsArray.filter((contact) => contact.id === parseInt(this.props.params.id));
  }


  render() {
    return (
      this.findContact().length
      ?
      <EditContactFromView editContact={ this.editContact } contactData={ head(this.findContact()) } />
      :
      <ContactFormView addContact={ this.addContact } />
    );
  }

} 

function mapStateToProps(state) {
  return {
    contactsArray: state.contactsArray
  }
}

function mapDispatchToProps(dispatch) {
  return {
    contactActions: bindActionCreators(contactActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm);
