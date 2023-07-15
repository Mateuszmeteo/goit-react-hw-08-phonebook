import { useSelector, useDispatch} from 'react-redux'
import { saveContact, deleteContact, setFilter, getFilteredContacts } from './redux/Store';

import { nanoid } from "nanoid";
import ContactForm  from "./contactForm/contactForm";
import ContactList from "./contactList/contactList";
import Filter from "./filter/filter";

export const App = () => {


  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();



  const handleAddContact = (name, number) => {
    if (name.trim() === '') {
      return alert('no text in input');
    }

    const isDuplicateContact = contacts.some((contact) => 
    contact.name.toLowerCase() === name.toLowerCase());
    if (isDuplicateContact) {
      return alert(`'${name}' is already in contacts.`);
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    dispatch(saveContact(newContact))
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId))
  };


  const handleChangeFilter = (filterValue) =>{
    dispatch(setFilter(filterValue))
  };


  const filteredContacts = useSelector(getFilteredContacts);




  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleChangeFilter} />
        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
      </div>
    </div>
  );
};





  // const getFilteredContacts = () => {
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()))
  // }

  // const filteredContacts = getFilteredContacts()