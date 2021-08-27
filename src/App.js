import React, { Component } from 'react';

import ContactForm from './componets/ContactForm';
import './index.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        {/* <ContactList ... /> */}
      </div>
    );
  }
}

export default App;
