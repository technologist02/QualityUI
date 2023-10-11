import { useContext } from "react"
import { UserContext } from "../Context/user-context"


export const HelloUser = () => {
    const {username, logout } = useContext(UserContext)

    return(
        <div>
            <span style={{color:"yellow", fontSize:16}}>{username}</span>
            <button className="btn btn-primary btn-sm" style={{margin:10}} onClick={() => logout()}>Выйти</button>
        </div>
    )
} 