
import Contacts from "pages/Contacts/Contacts"
import { Home } from "pages/Home/Home"
import { Login } from "pages/Login/Login"
import { Register } from "pages/Register/Register"
import { Route, Routes } from "react-router-dom"
import { Header } from "./Header/Header"
import { Layout } from "./Layout/Layout"


function App () {


  return(
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Route>
      </Routes>
    </div>
    
  )
}
export default App

///////////////

// import { useSelector, useDispatch} from 'react-redux'
// import { saveContact, deleteContact, setFilter, fetchContacts } from './redux/Store';


// import { nanoid } from "nanoid";
// import ContactForm  from "./contactForm/contactForm";
// import ContactList from "./contactList/contactList";
// import Filter from "./filter/filter";
// import { useEffect } from 'react';

// const App = () => {


//   const contacts = useSelector(state => state.contacts.contacts);
//   const filter = useSelector(state => state.contacts.filter);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);


//   const handleAddContact = (name, number) => {
//     if (name.trim() === '') {
//       return alert('no text in input');
//     }

//     const isDuplicateContact = contacts.some((contact) => 
//     contact.name.toLowerCase() === name.toLowerCase());
//     if (isDuplicateContact) {
//       return alert(`'${name}' is already in contacts.`);
//     }

//     const newContact = {
//       id: nanoid(),
//       name: name,
//       number: number,
//     };

//     dispatch(saveContact(newContact))
//   };

//   const handleDeleteContact = (contactId) => {
//     dispatch(deleteContact(contactId))
//   };


//   const handleChangeFilter = (filterValue) =>{
//     dispatch(setFilter(filterValue))
//   };


//   const filteredContacts = useSelector((state) => state.contacts.filteredContacts);




//   return (
//     <div>
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onAddContact={handleAddContact} />
//       </div>
//       <div>
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={handleChangeFilter} />
//         <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
//       </div>
//     </div>
//   );
// };



// export default App








////////////////////
