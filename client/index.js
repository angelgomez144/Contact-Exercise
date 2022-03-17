import Axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';

class Main extends React.Component {
  constructor() {
    super();
    this.state = { contacts: [], selectedContact: {} };
    this.selectContact = this.selectContact.bind(this);
  }
  async componentDidMount() {
    try {
      const res = await Axios.get('/api/contacts');
      const contacts = res.data;
      this.setState({ contacts });
    } catch (err) {
      console.log('whoops');
    }
  }

  async selectContact(contactId) {
    try {
      const res = await Axios.get(`/api/${contactId}`);
      const selectedContact = res.data;
      this.setState({ selectedContact });
    } catch (err) {
      console.log('whoops');
    }
  }

  render() {
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
          <ContactList contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
