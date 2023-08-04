import { useDispatch} from 'react-redux'
import ContactForm  from "./../../components/contactForm/contactForm";
import ContactList from "./../../components/contactList/contactList";
import Filter from "./../../components/filter/filter";
import { useEffect } from 'react';
import { fetchContacts } from './../../components/redux/phonebook/operations';

import styles from './contacts.module.scss'

function Contacts () {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div>
      <div>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
        <h2 className={styles.subtitle}>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts
