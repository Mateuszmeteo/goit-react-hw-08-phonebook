// import React from "react";
import { Component } from "react";
import { nanoid } from "nanoid";
import css from './formPhone.module.css'

export class FormPhone extends Component {
    constructor(props) {
        super(props)
        this.state = {
                contacts: [],
                name: ''
         }
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const {name, contacts} = this.state

      if (name.trim() === '') {
        return alert('no text in input')
      }

      const newContact = {
        id: nanoid(),
        name: name
      }
      this.setState({
        contacts: [...contacts, newContact],
        name: ''
      })

    }
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })

    }

    render() {
      const {name, contacts} = this.state
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
                    <button type='submit'>Add contact</button>
                </form>
                <h3>Contacts</h3>
                <ul>
                  {contacts.map((contact) => (
                    <li key={contact.id}>{contact.name}</li>
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







