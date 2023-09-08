import { NavLink } from "react-router-dom"

export const Header = () => {
    return(
        <nav className="grey darken-4">
            <div className="nav-wrapper">
                <ul id="nav-mobile">
                    <li><NavLink to="/Orders">Заказы</NavLink></li>
                    <li><NavLink to="/Films">Марки Пленок</NavLink></li>
                    <li><NavLink to ="/about">About</NavLink></li>
                    {/* <li><NavLink to ="/contacts">Contacts</NavLink></li> */}
                </ul>
            </div>
            </nav>
    )
}