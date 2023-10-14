import { NavLink } from "react-router-dom"
import { Login } from "./Login"
import { useContext } from "react"
import { UserContext } from "../Context/user-context"
import { HelloUser } from "./HelloUser"

export const Header = () => {
    const {login} = useContext(UserContext)
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
                    <li className="nav-link"><NavLink to ="/about">About</NavLink></li>
                    {/* <li><NavLink to ="/contacts">Contacts</NavLink></li> */}
                </ul>
                {login ? <HelloUser/> : <Login/>}
            </div>
        </nav>
    )
}