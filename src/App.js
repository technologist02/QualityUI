import { Main } from './Pages/Main';
import { Header } from './components/Header';
import { Route, Routes } from "react-router-dom";
import { Films } from './Pages/Films';
import { Orders } from './Pages/Orders';
import { Context } from './Context/Context';
import { FilmItemContext } from './Context/add-or-update-film-context'; 
import { Extruders } from './Pages/Extruders';
import { Order } from './Pages/AddOrder';
import { StandartNames } from './Pages/StandartQualityNames';
import { OrderItemContext } from './Context/add-or-update-order-context';
import { UserRegistrationForm } from './Pages/UserRegistrationForm';
import { LoginContext } from './Context/user-context';

function App() {
  return (<Context>
    <div className="App">
        <LoginContext><Header /></LoginContext>
        <main className='container-fluid'>
          <OrderItemContext>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/Films" element={<FilmItemContext><Films/></FilmItemContext>}/>
            <Route path="/Extruders" element={<Extruders/>}/>
            <Route path="/Standarts" element={<StandartNames/>}/>
            <Route path="/AddOrder" element={<Order/>}/>
            <Route path="/Orders/:id" element={<Order/>}/>
            <Route path="/Orders" element={<Main/>}/>
            <Route path="/Registration" element={<UserRegistrationForm/>}/>
          </Routes>
          </OrderItemContext>
        </main>
    </div>
    </Context>
  );
}

export default App;
