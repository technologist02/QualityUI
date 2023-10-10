import { useState } from "react"
import { ControledInput } from "../FormComponents/ControledInput"
import { registry } from "../Api/api-user"
import { User } from "../Entities/user"

export const UserRegistrationForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        if(pass !== confirmPass){
            alert("Пароли не совпадают!!1")
        }
        else{
            const user = new User(name, pass)
            user.email = email
            console.log(user)
            registry(user);
        }
    }

    return(
        <div className="container" style={{maxWidth:400, marginTop:20}}>
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