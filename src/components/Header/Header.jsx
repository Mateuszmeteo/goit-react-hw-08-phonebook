import Navigation from "components/Navigation/Navigation"
import styles from './header.module.scss'
import { UserMenu } from "components/UserMenu/UserMenu"
import { AuthNav } from "components/AuthNav/AuthNav"
import { useAuth } from "hooks/userAuth"


export const Header = () => {
    const { isLoggedIn } = useAuth()

    return(
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__nav}>
                    <Navigation/>
                </div>
                <div className={styles.header__log}>
                    {isLoggedIn ? <UserMenu/> : <AuthNav/>}
                </div>
            </div>
        </header>
    )
}