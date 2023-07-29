
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
          <Link to="/">Home</Link>
          <Link to="/contacts">Contacts</Link>
          {/* <Link to="/login">Login</Link>
          <Link to="/register">Register</Link> */}
    </nav>
  );
};

export default Navigation;
