import { Header } from "components/Header/Header"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import styles from './layout.module.scss'
import { Footer } from "components/Footer/Footer"


export const Layout = ({children}) => {

    return(
        <div className={styles.layout}>
            <Header />
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
            <Footer />
        </div>
    )
}