
import { useDispatch } from "react-redux"
import { logIn } from "components/redux/auth/operations"

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
        <form 
        onSubmit={handleSubmit}
        >
            <label>
                Email 
                <input type="email" name="email"></input>
            </label>
            <label>
                Password 
                <input type="password" name="password"></input>
            </label>
                <button type="submit">Log in</button>
        </form>
    )
}