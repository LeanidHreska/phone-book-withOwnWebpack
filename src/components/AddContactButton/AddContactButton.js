import React from 'react';
import styles from './AddContactButton.css';
import icons from 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router/lib';


const AddContactButton = (props) => {
  return (
    <div className={ styles.addContactButton } >
      <Link to="addContact"><i className={ styles.fa + ' ' + icons.fa + ' ' + icons['fa-plus'] } /></Link>
    </div>
  );
};

export default AddContactButton;
