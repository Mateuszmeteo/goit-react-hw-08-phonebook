import { useDispatch } from "react-redux"
import { register } from "components/redux/auth/operations"


export const RegisterForm = () => {
    const dispatch = useDispatch()


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.currentTarget

        dispatch(register({
            name: form.element.name.value,
            email: form.element.email.value,
            password: form.element.password.value
        }))
        form.reset()
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Username 
                <input type="text" name="name"></input>
            </label>
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