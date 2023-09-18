import { NavLink } from "react-router-dom"

export const Header = () => {
    return(
        <nav className="navbar navbar-dark bg-dark" style={{marginBottom:20}}>
            <div className="container-fluid">
                <ul className="nav">
                    <li className="nav-link"><NavLink to="/Orders">Заказы</NavLink></li>
                    <li className="nav-link"><NavLink to="/Order">Добавить заказ</NavLink></li>
                    <li className="nav-link"><NavLink to="/Films">Марки Пленок</NavLink></li>
                    <li className="nav-link"><NavLink to="/Extruders">Экструдеры</NavLink></li>
                    <li className="nav-link"><NavLink to ="/about">About</NavLink></li>
                    {/* <li><NavLink to ="/contacts">Contacts</NavLink></li> */}
                </ul>
            </div>
        </nav>
    )
}