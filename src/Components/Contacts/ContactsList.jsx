import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p className="name">
          {name}: <span>{number}</span>
        </p>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
