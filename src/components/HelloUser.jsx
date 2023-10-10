import { useEffect, useContext } from "react"
import { UserContext } from "../Context/user-context"


export const HelloUser = () => {
    const {username, logout } = useContext(UserContext)

    return(
        <div>
            <span className="btn btn-warning btn-sm">{username}</span>
            <button className="btn btn-primary btn-sm" style={{margin:10}} onClick={() => logout()}>Выйти</button>
        </div>
    )
} 