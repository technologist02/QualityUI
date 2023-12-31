import { useDispatch, useSelector } from "react-redux"
import { Logout } from "./user-slice"
import { NavLink } from "react-router-dom"


export const HelloUser = () => {
    const dispatch = useDispatch()
    const username = useSelector(state => state.user.login)

    return(
        <div>
            <NavLink to="/Profile"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></NavLink>
            {/* <NavLink to="/Profile"><span style={{color:"yellow", fontSize:16}}>{username}</span></NavLink> */}
            <button className="btn btn-primary btn-sm" style={{margin:10}} onClick={() => dispatch(Logout())}>Выйти</button>
        </div>
    )
} 