import { NavLink } from "react-router-dom"
import styles from './authNav.module.scss'


export const AuthNav = () => {
    return(
        <div className={styles.authNav}>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    )
}