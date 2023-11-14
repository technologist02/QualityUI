import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { updateUserData } from "../features/users/users-slice"

export const Profile = () => {
    const userData = useSelector(state => state.user.userData)
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    
    const dispatch = useDispatch()
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!email) {
            return alert("Email не должен быть пустым")
        } 
        dispatch(updateUserData({
            login: userData.login,
            name,
            surname,
            email,
            })
        )
    }

    useEffect(() => {setName(userData.name);setSurname(userData.surname);setEmail(userData.email)}, [])

    return (
        <div className="container-sm">
            <h3>Профиль</h3>
            <form>
                <label htmlFor="loginId" className="form-label">Логин</label>
                <input type="text" className="form-control" id="loginId" value={userData.login} disabled/>
                <label htmlFor="nameId" className="form-label">Имя</label>
                <input type="text" className="form-control" id ="nameId" value={name} onChange={(event) => setName(event.target.value)} />
                <label htmlFor="surnameId" className="form-label">Фамилия</label>
                <input type="text" className="form-control" id ="surnameId" value={surname} onChange={(event) => setSurname(event.target.value)} />
                <label htmlFor="emailId" className="form-label">Email</label>
                <input type="email" className="form-control" id="emailId" value={email} onChange={(event) => setEmail(event.target.value)} />
                <label htmlFor="dataId" className="form-label">Присоединился</label>
                <input type="text" className="form-control" id="dataId" value={userData.created} disabled/>
                <button className="btn btn-primary" onClick={handleSubmit}>Обновить данные</button>
            </form>
        </div>
    )
}