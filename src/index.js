import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import 'font-awesome/css/font-awesome.min.css';

import ProvideData from './components/ProvideData';
import ContactForm from './components/ContactForm/ContactForm';


import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={ store } >
    <div>
      <header className={ styles.header }>phoneBook</header>
      <Router history={ browserHistory } >
        <Route path="/" component={ ProvideData } />
        <Route path="/addContact" component={ ContactForm } />
        <Route path="/editContact/:id" component={ ContactForm } />

      </Router>
    </div>
  </Provider>, 
  document.getElementById('root'));


