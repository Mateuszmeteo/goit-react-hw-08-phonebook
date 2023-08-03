import { useSelector, useDispatch} from 'react-redux'
// import { addContact, deleteContact, fetchContacts } from './../../components/redux/phonebook/operations';
// import { setFilter } from './../../components/redux/phonebook/phoneSlices'


// import { nanoid } from "nanoid";
import ContactForm  from "./../../components/contactForm/contactForm";
import ContactList from "./../../components/contactList/contactList";
import Filter from "./../../components/filter/filter";
import { useEffect } from 'react';
// import { selectUser } from 'components/redux/auth/selectors';
import { fetchContacts } from './../../components/redux/phonebook/operations';

function Contacts () {


  // const contacts = useSelector(selectAllContacts);
  // const filter = useSelector(selectFilteredContacts);
  // const dispatch = useDispatch();

  const dispatch = useDispatch();
  // const userName = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  // const handleAddContact = (name, number) => {
  //   if (name.trim() === '') {
  //     return alert('no text in input');
  //   }

  //   const isDuplicateContact = contacts.some((contact) => 
  //   contact.name.toLowerCase() === name.toLowerCase());
  //   if (isDuplicateContact) {
  //     return alert(`'${name}' is already in contacts.`);
  //   }

  //   const newContact = {
  //     id: nanoid(),
  //     name: name,
  //     number: number,
  //   };

  //   dispatch(addContact(newContact))
  // };

  // const handleDeleteContact = (contactId) => {
  //   dispatch(deleteContact(contactId))
  // };


  // const handleChangeFilter = (filterValue) =>{
  //   dispatch(setFilter(filterValue))
  // };


  // const filteredContacts = useSelector((state) => state.contacts.filteredContacts);




  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm 
        // onAddContact={handleAddContact} 
        />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter 
              // value={filter} 
              // onChange={handleChangeFilter} 
            />
        <ContactList 
        // contacts={contacts} onDeleteContact={handleDeleteContact} 
        />
      </div>
    </div>
  );
};



export default Contacts

/////////////////////////////////////===============================================////////////////////////////////
// const Contacts = () => {
//   return(
//     <div><h1>Contact Page</h1></div>
//   )


// }
// export default Contacts