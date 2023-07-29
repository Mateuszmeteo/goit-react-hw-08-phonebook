import Navigation from "components/Navigation/Navigation"
import styles from './header.module.scss'
import { UserMenu } from "components/UserMenu/UserMenu"


export const Header = () => {

    return(
        <header className={styles.header}>
            <div>logo</div>
            <div>linki
                <Navigation/>
                <UserMenu/>
            </div>
        </header>
    )
}