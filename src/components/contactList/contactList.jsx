
import React from "react";
import styles from "./contactList.module.scss"
import { useDispatch, useSelector } from "react-redux";
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
  <ul className={styles.contactList}>
    {mapContacts.map((contact) => (
      <li className={styles.contactList__element}
        key={contact.id}>
        <h4 className={styles.contactList__h4}>{contact.name}</h4>
        <p className={styles.contactList__p}>{contact.number}</p>
        <button className={styles.contactList__btnDelete} onClick={() => handleDelete(contact.id)}>Delete</button>
      </li>
    ))}
  </ul>
  )
};

export default ContactList;
