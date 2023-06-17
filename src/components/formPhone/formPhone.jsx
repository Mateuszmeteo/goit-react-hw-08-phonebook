// import React from "react";
import { Component } from "react";
import { nanoid } from "nanoid";
import css from './formPhone.module.css'

export class FormPhone extends Component {
    constructor(props) {
        super(props)
        this.state = {
                contacts: [
                  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
                  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
                  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
                  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
                ],
                // contacts: [],
                filter: '',
                name: '',
                number: ''
         }
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const {name, contacts, number} = this.state

      //==dodac warunek numb//
      if (name.trim() === '') {
        return alert('no text in input')
      }

      const newContact = {
        id: nanoid(),
        name: name,
        number: number
      }
      this.setState({
        contacts: [...contacts, newContact],
        name: '',
        number: ''
      })

    }
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })

    }

    render() {
      const {name, contacts, number} = this.state
        return (
            <div>
                <h3>Phonebook</h3>
                <form 
                    className={css.formEl}
                    onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleChange}
                    />
                    <label>Number</label>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleChange}
                    />
                    <button type='submit'>Add contact</button>
                </form>
                <h3>Contacts</h3>
                <label>Find contacts by name</label>
                <input 
                  type='text'
                  // value={filter}
                />
                <ul>
                  {contacts.map((contact) => (
                    <li key={contact.id}>
                      {contact.name}: {contact.number}
                    </li>
                  ))}
                </ul>
            </div>
        )
    }
}

///======================================================================///////////////==========////////////////////////===========================///////////



// import { Component } from "react";
// import { nanoid } from "nanoid";

// export class FormPhone extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//                 contacts: [],
//                 name: ''
//          }
//     }

//     handleSubmit = (e) => {
//       e.preventDefault()
//       // const value = e.target.value
//       console.log(this.state)

//     }

//     render() {
//       const {name} = this.state
//         return (
//             <div>
//                 <h3>Phonebook</h3>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                         value={name}
//                     />
//                     <button type='subbmit'>Add contact</button>
//                 </form>
//                 <h3></h3>
//                 <ul></ul>
//             </div>
//         )
//     }
// }







