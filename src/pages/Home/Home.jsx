import styles from './home.module.scss'


 const Home = () => {
    

    return (
        <div className={styles.home}>
            <div className={styles.home__div}>
                <h1 className={styles.home__title}>Welcome!</h1>
                <p className={styles.home__subtitle}>PhoneBook Web Application</p>
            </div>
            
        </div>
    )
}
export default Home