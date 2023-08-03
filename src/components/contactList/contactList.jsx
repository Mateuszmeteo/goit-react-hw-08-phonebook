
import React from "react";
import css from "./contactList.module.css"
import { useDispatch, useSelector } from "react-redux";
// import { setFilter } from "components/redux/phonebook/phoneSlices";
import { deleteContact } from "components/redux/phonebook/operations";
import { selectAllContacts, selectFilteredContacts } from "components/redux/phonebook/selectors";


const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch()
  const contacts = useSelector(selectAllContacts)
  let mapContacts

  if (filteredContacts === `` || filteredContacts === []) {
    mapContacts = contacts;
  } else {
    mapContacts = filteredContacts;
  }


  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId))
  }

  return(
  <ul>
    {mapContacts.map((contact) => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button className={css.btnDelete} onClick={() => handleDelete(contact.id)}>Delete</button>
      </li>
    ))}
  </ul>
  )
};

export default ContactList;
