


export const LoginForm = () => {


    // handleSubmit = e => {
    //     e.preventDefault()
    //     const form = e.currentTarget

    //     console.log(form.value)
    //     form.reset()
    // }

    return(
        <form 
        // onSubmit={handleSubmit}
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