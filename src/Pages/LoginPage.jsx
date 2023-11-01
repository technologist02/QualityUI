import { useState } from "react"
import { ControledInput } from "../FormComponents/ControledInput"
import { User } from "../Entities/user"
import { useDispatch, useSelector } from "react-redux"
import { authorizeUser } from "../features/users/users-slice"
import { useNavigate } from "react-router-dom"



export const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const isUserAuth = useSelector(state => state.user.isUserAuth)
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !pass){
            alert("Введите логин и пароль!")
        }
        else{
            dispatch(authorizeUser(new User(name, pass)))
        }      
    }

    if (isUserAuth) {
        console.log(isUserAuth)
        navigate("/Orders")
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