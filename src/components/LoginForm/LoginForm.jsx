
import { useDispatch } from "react-redux"
import { logIn } from "components/redux/auth/operations"

import styles from './loginForm.module.scss'

export const LoginForm = () => {
    const dispatch = useDispatch()


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.currentTarget

        dispatch(logIn({
            email: form.elements.email.value,
            password: form.elements.password.value
        }))
        form.reset()
    }

    return(
        <form className={styles.loginForm}
        onSubmit={handleSubmit}
        >
            <label className={styles.loginForm__label}>
                Email 
                <input className={styles.loginForm__input} 
                type="email" name="email"
                placeholder="Your email"></input>
            </label>
            <label className={styles.loginForm__label}>
                Password 
                <input className={styles.loginForm__input} 
                type="password" name="password"
                placeholder="Your password"></input>
            </label>
                <button className={styles.loginForm__btn} type="submit">Log in</button>
        </form>
    )
}