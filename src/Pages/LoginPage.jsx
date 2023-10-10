import { useState, useContext } from "react"
import { ControledInput } from "../FormComponents/ControledInput"
import { User } from "../Entities/user"
import { UserContext } from "../Context/user-context"

export const LoginPage = () => {
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")
    const {login, autorizeUser} = useContext(UserContext)

    const handleSubmit = (event) => {
        event.preventDefault();
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
        <div className="container" style={{maxWidth:400, marginTop:20}}>
            <form onSubmit={handleSubmit}>
                <h3 style={{textAlign:"center"}}>Войти</h3>
                <ControledInput type="text" id="userName" text="Имя пользователя" value={name} setValue={(text) => setName(text)}/>
                <ControledInput type="password" id="password" text="Пароль" value={pass} setValue={(text) => setPass(text)}/>
                <button style={{display:"block", marginLeft:"auto", marginRight:"auto"}} type="submit" className="btn btn-primary">Вход</button>
            </form>
            
        </div>
    )
}