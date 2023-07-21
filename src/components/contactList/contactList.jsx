
import React from "react";
import css from "./contactList.module.css"
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectFilteredContacts } from "components/redux/Store";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch()


  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId))
  }

  return(
  <ul>
    {filteredContacts.map((contact) => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button className={css.btnDelete} onClick={() => handleDelete(contact.id)}>Delete</button>
      </li>
    ))}
  </ul>
  )
};

export default ContactList;
