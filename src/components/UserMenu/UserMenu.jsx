import { useAuth } from "hooks/userAuth"
import styles from './userMenu.module.scss'


export const UserMenu = () => {
    const { user } = useAuth()

    return(
        <div className={styles.userMenu}>
            <p className={styles.userMenu__p}>mango@mail.com {user?.name}</p>
            <button className={styles.userMenu__btn}>Logout</button>
        </div>
    )
}