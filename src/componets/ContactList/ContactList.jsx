import React from 'react';
import s from './ContactList.module.css'

const ContactList = ({ contacts, onDeletContacts}) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.item} key={id}>
        <p>{name}:</p>
        <p>{number}</p>
        <button onClick={() => onDeletContacts(id)} className={s.btn}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
