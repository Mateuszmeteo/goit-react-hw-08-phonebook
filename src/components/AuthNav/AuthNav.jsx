import { NavLink } from "react-router-dom"
import styles from './authNav.module.scss'


export const AuthNav = () => {
    return(
        <div className={styles.authNav}>
            <NavLink className={styles.authNav__link} to='/register'>Register</NavLink>
            <NavLink className={styles.authNav__link} to='/login'>Login</NavLink>
        </div>
    )
}