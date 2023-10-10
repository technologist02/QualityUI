import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../Context/user-context"
import { User } from "../Entities/user"


export const Login = () => {
    const {login, autorizeUser} = useContext(UserContext)
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")

    function handleSubmit(event){
        event.preventDefault()
        if (!name || !pass){
            alert("Введите логин и пароль!")
        }
        else{
            autorizeUser(new User(name, pass))
            if (login) {
                setName("");
                setPass("")
            }
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="login" placeholder="Логин, email"
                    value={name} onChange={(event) => setName(event.target.value)} className="btn btn-outline-warning btn-sm" style={{margin:10}}/>
                <input type="password" id="password" placeholder="Пароль"
                    value={pass} onChange={(event) => setPass(event.target.value)} className="btn btn-outline-warning btn-sm" style={{margin:10}}/>
                <button type="submit" className="btn btn-primary btn-sm" style={{margin:10}}>Вход</button>
                <NavLink to ="/Registration">Регистрация</NavLink>
                {/* <button type="button" className="btn btn-primary btn-sm" style={{margin:10}}>Регистрация</button> */}
            </form>            
        </div>
    )
}