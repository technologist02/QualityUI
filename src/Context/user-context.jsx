import { createContext, useState } from "react";
import { autorizeUser } from "../Api/api-user";

export const UserContext = createContext()

export const LoginContext = (props) => {
    const [login, setLogin] = useState(false)
    const [userName, setUserName] = useState("")

    async function tryLoadUserData() {
        sessionStorage.getItem(tokenKey)
    }
    
    async function autorizeUser(name, password) {
        const data = await autorize(name, password)
        if (response.ok) {
            sessionStorage.setItem(tokenKey, data.access_token);
            //sessionStorage.setItem(userName, data.)
            setLogin(true)
            // setUserName()
        }
    }

    const data = {
        login,
        userName,
        autorizeUser,
        tryLoadUserData
    }

    return <UserContext.Provider value={data}>
        {props.children}
    </UserContext.Provider>

}

