import { createContext, useState } from "react";
import { autorize, getUserData } from "../Api/api-user";

export const UserContext = createContext()

export const LoginContext = (props) => {
    const [login, setLogin] = useState(false)
    const [username, setUsername] = useState("")
    const [tokenKey, setTokenKey] = useState("")

    async function tryLoadUserData() {
        try{
            setTokenKey(sessionStorage.getItem("tokenKey"))
            setUsername(sessionStorage.getItem("userName"))
            setLogin(true)
        }
        catch(error){
            console.log(error)
        }
    }
    
    async function autorizeUser(user) {
        const response = await autorize(user)
        if (response.ok) {
            const data = await response.text();
            console.log(data);
            sessionStorage.setItem("tokenKey", data);
            const userData = await getUserData(data)
            const name = await userData.text()
            console.log(name)
            sessionStorage.setItem("username", name)
            setLogin(true)
            setUsername(name)
        }
    }

    function logout(){
        sessionStorage.clear()
        setLogin(false)
    }

    const data = {
        login,
        username,
        autorizeUser,
        tryLoadUserData,
        logout
    }

    return <UserContext.Provider value={data}>
        {props.children}
    </UserContext.Provider>

}

