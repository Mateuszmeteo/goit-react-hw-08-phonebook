import { useAuth } from "hooks/userAuth"
import styles from './userMenu.module.scss'

import { useDispatch } from "react-redux"
import { logOut } from "components/redux/auth/operations"


export const UserMenu = () => {
    const dispatch = useDispatch()
    const { user } = useAuth()

    const handleLogOut = () => dispatch(logOut())

    return(
        <div className={styles.userMenu}>
            <p className={styles.userMenu__p}>Welcome {user?.name}!</p>
            <button onClick={handleLogOut} className={styles.userMenu__btn}>Logout</button>
        </div>
    )
}