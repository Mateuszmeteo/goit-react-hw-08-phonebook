
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom"
import { Layout } from "./Layout/Layout"
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute"
import { PrivatedRoute } from "./PrivateRoute/PrivateRoute"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { useAuth } from "hooks/userAuth";

import styles from './app.module.scss'

const HomePage = lazy(() => import('./../pages/Home/Home'))
const LoginPage = lazy(() => import('./../pages/Login/Login'))
const RegistredPage = lazy(() => import('./../pages/Register/Register'))
const ContactPage = lazy(() => import('./../pages/Contacts/Contacts'))

export const App = () => {

  const dispatch = useDispatch()
  const {isRefreshing } = useAuth() 

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])


  return isRefreshing ? (<div>Refreshing User...</div>) : (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />}/>
          <Route path='/register' element={
            <RestrictedRoute redirectTo='/contacts' component={<RegistredPage/>}/>
          }
          />
          <Route path='/login' element={
            <RestrictedRoute redirectTo='/contacts' component={<LoginPage/>}/>
          }
          />
          <Route path='/contacts' element={
            <PrivatedRoute redirectTo='/login' component={<ContactPage/>}/>
          }/>
        </Route>
      </Routes>
    </div>
    
  )
}


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
