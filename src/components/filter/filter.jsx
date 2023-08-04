import React from "react";
import styles from './filter.module.scss'
import { useDispatch } from "react-redux";
import { setFilter } from "components/redux/phonebook/phoneSlices";

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value))
  }

  return(
  <div className={styles.filterContacts}>
    <label className={styles.filterContacts__label}>Find contacts by name
    <input  className={styles.filterContacts__input}
          type='text' 
          placeholder="Find contacts"
          onChange={e => handleChange(e)}/>
      </label>
  </div>
  )
};

export default Filter;


