import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm  from "./contactForm/contactForm";
import ContactList from "./contactList/contactList";
import Filter from "./filter/filter";

export const App = () => {

  const [ contacts, setContacts] = useState([
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ] )
      const [filter, setFilter] = useState('')


  
   
  useEffect(() => {
    const contactStorage = localStorage.getItem('contats')
    if (contactStorage) {
      setContacts(JSON.parse(contactStorage))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = (name, number) => {
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

    setContacts((prevContacts) => [...prevContacts, newContact],
    );
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => 
      prevContacts.filter((contact) =>
      contact.id !== contactId),
    )
  };


  const handleChangeFilter = (filterValue) =>{
    setFilter(filterValue);
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  const filteredContacts = getFilteredContacts()

  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={addContact} />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleChangeFilter} />
        <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
      </div>
    </div>
  );
};

   







//==============================//=============//////////===========///

// import { FormPhone } from "./formPhone/formPhone";


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       {/* React homework template */}
//       <FormPhone />
//     </div>
//   );
// };

