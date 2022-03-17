import React from 'react';

function ContactRow(props) {
  const row = props.contacts;
  return row.map((contact) => {
    let person = (
      <tr key={contact.id}>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td>{contact.email}</td>
      </tr>
    );
    return person;
  });
}

export default ContactRow;
