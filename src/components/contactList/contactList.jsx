
import React from "react";
import css from "./contactList.module.css"
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "components/redux/phonebook/phoneSlices";
import { deleteContact } from "components/redux/phonebook/operations";


const ContactList = () => {
  const filteredContacts = useSelector(setFilter);

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
