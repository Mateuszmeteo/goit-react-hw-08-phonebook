import React from "react";
import css from './filter.module.css'

const Filter = ({ value, onChange }) => (
  <div className={css.filterDiv}>
    <label>Find contacts by name</label>
    <input type='text' value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);

export default Filter;
