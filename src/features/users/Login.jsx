import { useState } from "react"
import { NavLink } from "react-router-dom"
import { User } from "../../Entities/user"
import { useDispatch } from "react-redux"
import { authorizeUser } from "./user-slice"


export const Login = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState("")
    const [pass, setPass] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        if (!login || !pass){
            alert("Введите логин и пароль!")
        }
        else{
            dispatch(authorizeUser(new User(login, pass)))
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="login" placeholder="Логин, email"
                    value={login} onChange={(event) => setLogin(event.target.value)} className="btn btn-outline-warning btn-sm" style={{margin:10}}/>
                <input type="password" id="password" placeholder="Пароль"
                    value={pass} onChange={(event) => setPass(event.target.value)} className="btn btn-outline-warning btn-sm" style={{margin:10}}/>
                <button type="submit" className="btn btn-primary btn-sm" style={{margin:10}}>Вход</button>
                <NavLink to ="/Registration">Регистрация</NavLink>
                {/* <button type="button" className="btn btn-primary btn-sm" style={{margin:10}}>Регистрация</button> */}
            </form>            
        </div>
    )
}