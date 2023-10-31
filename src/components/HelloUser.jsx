import { useDispatch, useSelector } from "react-redux"
import { Logout } from "../features/users/users-slice"


export const HelloUser = () => {
    const dispatch = useDispatch()
    const username = useSelector(state => state.user.user)

    return(
        <div>
            <span style={{color:"yellow", fontSize:16}}>{username}</span>
            <button className="btn btn-primary btn-sm" style={{margin:10}} onClick={() => dispatch(Logout())}>Выйти</button>
        </div>
    )
} 