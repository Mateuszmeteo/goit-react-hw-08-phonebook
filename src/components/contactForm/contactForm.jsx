import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/phonebook/operations';
import { nanoid } from 'nanoid';

import css from './contactForm.module.css'
import { useState } from 'react';

const ContactForm = () => {

  const dispatch = useDispatch()

  // const [name, setName] = useState('')
  // const [number, setNumber] = useState('')


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (name.trim() === '') {
  //     return;
  //   }

  //   const newContact = {
  //     id: nanoid(),
  //     name: name,
  //     number: number
  //   };

  //   dispatch(addContact(newContact));

  //   setName('');
  //   setNumber('');

  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === 'name') {
  //     setName(value)
  //   } else if (name === 'number') {
  //     setNumber(value)
  //   }
  // };


  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    let newName = form.elements.name.value;
    let newNumber = form.elements.number.value;
    dispatch(
      addContact({
        name: newName,
        number: newNumber,
      })
    );
    form.reset();
  };

  return (
    <form 
          className={css.formEl}
          onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        // value={name}
        // onChange={handleChange}
      />
      <label>Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        // value={number}
        // onChange={handleChange}
      />
      <button type='submit'>Add contact</button>
    </form>
  );
};
export default ContactForm

// ContactForm.propTypes = {
//   addNewName: propTypes.func,
// };
