import React from 'react';
import ContactRow from './ContactRow';

function ContactList(props) {
  console.log(props);
  const { contacts, selectContact } = props;
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        <ContactRow contacts={contacts} />
      </tbody>
    </table>
  );
}

export default ContactList;
