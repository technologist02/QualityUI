import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { updateUserData } from "../features/users/users-slice"

export const Profile = () => {
    const userData = useSelector(state => state.user.userData)
    const [name, setName] = useState(userData.name)
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
        <>
            
            <form>
                <div className="container">
                    <h3 style={{padding:"1rem"}}>Профиль</h3>
                    <div className="row mg-top">
                        <div className="col-2">
                            <label htmlFor="loginId" className="form-label">Логин</label>
                        </div>
                        <div className="col-5">
                            <input type="text" className="form-control" id="loginId" value={userData.login} disabled/>
                        </div>
                    </div>
                    <div className="row mg-top">
                        <div className="col-2">
                            <label htmlFor="nameId" className="form-label">Имя</label>
                        </div>
                        <div className="col-5">
                            <input type="text" className="form-control" id ="nameId" value={name} onChange={(event) => setName(event.target.value)} />  
                        </div>
                    </div>
                    <div className="row mg-top">
                        <div className="col-2">
                            <label htmlFor="surnameId" className="form-label">Фамилия</label>
                        </div>
                        <div className="col-5">
                            <input type="text" className="form-control" id ="surnameId" value={surname} onChange={(event) => setSurname(event.target.value)} />
                        </div>
                    </div>
                    <div className="row mg-top">
                        <div className="col-2">
                            <label htmlFor="emailId" className="form-label">Email</label>
                        </div>
                        <div className="col-5">
                            <input type="email" className="form-control" id="emailId" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                    </div>
                    <div className="row mg-top">
                        <div className="col-2">
                            <label htmlFor="dataId" className="form-label">Присоединился</label>
                        </div>
                        <div className="col-5">
                            <input type="text" className="form-control" id="dataId" value={userData.created} disabled/>
                        </div>
                    </div>
                    <button className="btn btn-primary mg-top" onClick={handleSubmit}>Обновить данные</button>
                </div>
                
            </form>
        </>
    )
}