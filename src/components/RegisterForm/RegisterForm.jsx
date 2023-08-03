import { useDispatch } from "react-redux"
import { register } from "components/redux/auth/operations"

import styles from './registerForm.module.scss'


export const RegisterForm = () => {
    const dispatch = useDispatch()


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.currentTarget

        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value
        }))
        form.reset()
    }

    return(
        <form className={styles.registerForm}
            onSubmit={handleSubmit}>
            <label className={styles.registerForm__label}>
                Username 
                <input className={styles.registerForm__input}
                type="text" name="name"
                placeholder="Your name"></input>
            </label>
            <label className={styles.registerForm__label}>
                Email 
                <input className={styles.registerForm__input} 
                type="email" name="email"
                placeholder="Your email"></input>
            </label>
            <label className={styles.registerForm__label}>
                Password 
                <input className={styles.registerForm__input} 
                type="password" name="password"
                placeholder="Your password"></input>
            </label>
                <button className={styles.registerForm__btn}
                type="submit">Register</button>
        </form>
    )
}