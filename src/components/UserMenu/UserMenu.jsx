import { useAuth } from "hooks/userAuth"


export const UserMenu = () => {
    const { user } = useAuth()

    return(
        <div>
            <p>mango@mail.com {user?.name}</p>
            <button>Logout</button>
        </div>
    )
}