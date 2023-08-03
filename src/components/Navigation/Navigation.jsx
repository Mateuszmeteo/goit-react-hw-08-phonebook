
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.scss'
import { useAuth } from 'hooks/userAuth';

const Navigation = () => {
  const { isLoggedIn } = useAuth()
  return (
    <nav className={styles.navigation}>
          <Link className={styles.navigation__link} to="/">Home</Link>
          {isLoggedIn && <Link className={styles.navigation__link} to="/contacts">Contacts</Link>}
    </nav>
  );
};

export default Navigation;
