import { NavLink, useLocation } from "react-router-dom"
import { Login } from "../features/users/Login"
import { HelloUser } from "../features/users/HelloUser"
import { useSelector, useDispatch } from "react-redux"
import { loadUserData } from "../features/users/user-slice"
import { useEffect } from "react"

export const Header = () => {
    const isAuth = useSelector(state => state.user.isUserAuth)
    const dispatch = useDispatch()
    const token = sessionStorage.getItem("tokenKey")
    const location = useLocation()
    
    useEffect(() => {
        if (token) {
            dispatch(loadUserData())
        }
    }, [token, dispatch])
    // console.log(token)
    // console.log(location)
    if (location.pathname === "/AutorizePage" || location.pathname === "/Registration") return null
    return(
        <nav className="navbar navbar-dark bg-dark" style={{marginBottom:20}}>
            <div className="container-fluid">
                <ul className="nav">
                    <li className="nav-link"><NavLink to="/Orders">Заказы</NavLink></li>
                    <li className="nav-link"><NavLink to="/AddOrder">Добавить заказ</NavLink></li>
                    <li className="nav-link"><NavLink to="/Films">Марки Пленок</NavLink></li>
                    <li className="nav-link"><NavLink to="/Extruders">Экструдеры</NavLink></li>
                    <li className="nav-link"><NavLink to="/StandartFilms">Стандарты пленок</NavLink></li>
                    <li className="nav-link"><NavLink to="/StandartNames">Стандарты качества</NavLink></li>
                    <li className="nav-link"><NavLink to="/Roles">Управление доступом</NavLink></li>
                    <li className="nav-link"><NavLink to ="/about">About</NavLink></li>
                    {/* <li><NavLink to ="/contacts">Contacts</NavLink></li> */}
                </ul>
                {isAuth ? <HelloUser/> : <Login/>}
            </div>
        </nav>
    )
}