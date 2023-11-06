import { useState, useEffect } from "react"
import { ControledInput } from "../components/FormComponents/ControledInput"
import { User } from "../Entities/user"
import { useDispatch, useSelector } from "react-redux"
import { registryUser } from "../features/users/users-slice"
import { useNavigate} from "react-router-dom";

export const UserRegistrationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isUserAuth = useSelector(state => state.user.isUserAuth)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    useEffect(()=> {if (isUserAuth) {
        alert("Вы авторизованы")
        navigate("/Orders")
    }}, [isUserAuth, navigate])
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(pass !== confirmPass){
            alert("Пароли не совпадают!!1")
        }
        else{
            const user = new User(name, pass)
            user.email = email
            console.log(user)
            dispatch(registryUser(user));
        }
    }

    return(
        <div className="pos-center border rounded border-3">
            <form onSubmit={handleSubmit}>
                <h3 style={{textAlign:"center"}}>Регистрация</h3>
                <ControledInput type="text" id="userName" text="Имя пользователя" value={name} setValue={(text) => setName(text)}/>
                <ControledInput type="email" id="email" text="Электронная почта" value={email} setValue={(text) => setEmail(text)}/>
                <ControledInput type="password" id="password" text="Пароль" value={pass} setValue={(text) => setPass(text)}/>
                <ControledInput type="password" id="confirmPassword" text="Подтвердите пароль" value={confirmPass} setValue={(text) => setConfirmPass(text)}/>
                <button style={{display:"block", marginLeft:"auto", marginRight:"auto"}} type="submit" className="btn btn-primary">Поехали</button>
            </form>    
        </div>
    )
}