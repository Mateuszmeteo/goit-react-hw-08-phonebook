import React from "react";
import css from './filter.module.css'
import { useDispatch } from "react-redux";
import { setFilter } from "components/redux/phonebook/phoneSlices";

const Filter = () => {
  // const filter = useSelector((state) => state.contacts.filter)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value))
  }

  return(
  <div className={css.filterDiv}>
    <label>Find contacts by name</label>
    <input type='text' 
          // value={filter} 
          // onChange={handleChange} 
          onChange={e => handleChange(e)}/>
  </div>
  )
};

export default Filter;


