import { useAuth } from "hooks/userAuth"
import { Navigate } from "react-router-dom"

export const PrivatedRoute = ({component: Component, redirectTo = '/'}) => {
    const { isLoggedIn, isRefreshing } = useAuth()
    const shouldRedirect = !isLoggedIn && !isRefreshing

    return shouldRedirect ? <Navigate to={redirectTo}/> : Component

}