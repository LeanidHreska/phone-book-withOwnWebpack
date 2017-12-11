import React, { Component } from 'react';
import styles from './EditFormView.css';
import { Link } from 'react-router/lib';


class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.enableSaveButton = this.enableSaveButton.bind(this);
    this.state = { disableSaveButton: false };
  }  

  enableSaveButton() {
    this.setState({ disableSaveButton : !((this.contactName.value.length >= 3) && (this.contactNumber.value.length >= 5))})
  }

  componentDidMount() {
    this.contactName.value = this.props.contactData.name;
    this.contactNumber.value = this.props.contactData.phoneNumber;
    this.contactImgUrl.value = this.props.contactData.imgUrl;
  }

  render() {
    return (
      <div> 
        <form className={ styles.form } >
          <h1> Edit contact </h1>
          <input type="text" className={ styles.inputText } placeholder="Name"
                  ref={(input) => { this.contactName = input; }} onChange={ this.enableSaveButton } />

          <input type="text" className={ styles.inputText } placeholder="Phone number"
                  ref={(input) => { this.contactNumber = input; }} onChange={ this.enableSaveButton } />

          <input type="text" className={ styles.inputText } placeholder="Image URL"
                  ref={(input) => { this.contactImgUrl = input; }} />
          <Link to="/">
            <input type="submit" className={ styles.submit + ' ' + styles.cancelButton } value="Cancel"/> 
          </Link>
          <Link to="/">
            <input type="submit" className={ styles.submit + ' ' + styles.saveButton } value="Save" disabled={ this.state.disableSaveButton } 
            onClick={() => this.props.editContact(this.props.contactData.id, this.contactName.value, this.contactNumber.value, this.contactImgUrl.value) }
            /> 
          </Link>
        </form>
      </div>
    );
  }

} 

export default ContactForm;
