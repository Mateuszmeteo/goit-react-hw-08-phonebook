
import React from "react";
import css from "./contactList.module.css"
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getFilteredContacts } from "components/redux/Store";

const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);

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





  // const contact = useSelector(state => state.contacts.contacts)
  // const filter = useSelector(state => state.contacts.filter)