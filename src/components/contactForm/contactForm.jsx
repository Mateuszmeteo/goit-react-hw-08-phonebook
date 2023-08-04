import { useDispatch } from 'react-redux';
import { addContact } from 'components/redux/phonebook/operations';

import styles from './contactForm.module.scss'

const ContactForm = () => {

  const dispatch = useDispatch()
  

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
          className={styles.contactForm}
          onSubmit={handleSubmit}>
      <label className={styles.contactForm__label}>Name
      <input className={styles.contactForm__input}
        type="text"
        name="name"
        placeholder='Name your contacts'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      </label>
      <label className={styles.contactForm__label}>Number
      <input className={styles.contactForm__input}
        type="tel"
        name="number"
        placeholder='Number your contacts'
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      </label>
      <button className={styles.contactForm__btn} 
      type='submit'>Add contact</button>
    </form>
  );
};
export default ContactForm

