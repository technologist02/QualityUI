import { useDispatch, useSelector } from "react-redux"
import { Logout } from "./users-slice"
import { NavLink } from "react-router-dom"


export const HelloUser = () => {
    const dispatch = useDispatch()
    const username = useSelector(state => state.user.login)

    return(
        <div>
            <NavLink to="/Profile"><span style={{color:"yellow", fontSize:16}}>{username}</span></NavLink>
            <button className="btn btn-primary btn-sm" style={{margin:10}} onClick={() => dispatch(Logout())}>Выйти</button>
        </div>
    )
} 