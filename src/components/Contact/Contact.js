import React from 'react';
import icons from 'font-awesome/css/font-awesome.min.css';
import styles from './Contact.css';
import { Link } from 'react-router/lib';

const Contact = (props) => {
  return (
    <div className={ styles.contact }>
      <img src={ props.contactData.imgUrl } alt="photo not available" className={ styles.profilePhoto } />
      <div className={ styles.profileDescription }>
        <span> { props.contactData.name } </span>
        <br />
        <span> { props.contactData.phoneNumber } </span>
        <div className={ styles.closeButton } onClick={ props.deleteContact.bind(null, props.contactData.id) } >
          <i className={ styles.fa + ' ' + icons.fa + ' ' + icons['fa-times'] } />
        </div>
        <Link to={`/editContact/${ props.contactData.id }`}>
          <div className={ styles.editButton } >
            <i className={ styles.fa + ' ' + icons.fa + ' ' + icons['fa-pencil-square-o'] } />
          </div>
        </Link>
      </div>
    </div>
  );
};


export default Contact;
