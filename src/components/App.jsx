import { Component } from "react";
import { nanoid } from "nanoid";
// import css from './formPhone.module.css';
import ContactForm from "./contactForm/contactForm";
import ContactList from "./contactList/contactList";
import Filter from "./filter/filter";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }
  
   
  componentDidMount() {
    const contactStorage = localStorage.getItem('contats')
    if (contactStorage) {
      this.setState({ contacts: JSON.parse(contactStorage)})
    }
  }
  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }

  addContact = (name, number) => {
    if (name.trim() === '') {
      return alert('no text in input');
    }

    const isDuplicateContact = this.state.contacts.some((contact) => 
    contact.name.toLowerCase() === name.toLowerCase());
    if (isDuplicateContact) {
      return alert(`'${name}' is already in contacts.`);
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) =>
      contact.id !== contactId),
    }));
  };

  handleChangeFilter = (filter) => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.addContact} />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.handleChangeFilter} />
          <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
        </div>
      </div>
    );
  }
}




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

