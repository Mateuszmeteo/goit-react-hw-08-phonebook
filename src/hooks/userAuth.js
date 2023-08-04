
import { useSelector } from "react-redux"
import {
    selectUser,
    selectIsLoggedIn,
    selectIsRefreshing
} from './../components/redux/auth/selectors'

export const useAuth = () => {

    // const isLoggedIn = true
    // const isRefreshing = false
    // // const user = false

    const isLoggedIn = useSelector(selectIsLoggedIn)
    const isRefreshing = useSelector(selectIsRefreshing)
    const user = useSelector(selectUser)

    return{
        isLoggedIn,
        isRefreshing,
        user
    }
}