
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.scss'
import { useAuth } from 'hooks/userAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth()
  return (
    <nav className={styles.navigation}>
          <Link to="/">Home</Link>
          {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};

export default Navigation;
