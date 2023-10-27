import { Main } from './Pages/Main';
import { Header } from './components/Header';
import { Route, Routes } from "react-router-dom";
import { Films } from './Pages/Films';
//import { Orders } from './Pages/Orders';
import { Context } from './Context/Context';
import { FilmItemContext } from './Context/add-or-update-film-context'; 
import { Extruders } from './Pages/Extruders';
import { Order } from './Pages/AddOrder';
import { StandartTitles } from './Pages/StandartQualityNames';
import { OrderItemContext } from './Context/add-or-update-order-context';
import { UserRegistrationForm } from './Pages/UserRegistrationForm';
import { LoginContext } from './Context/user-context';
import { LoginPage } from './Pages/LoginPage';
import { StandartQualityFilms } from './Pages/StandartsFilmQuality';

function App() {
  return (
    <LoginContext>
      <Context>
      <div className="App">
        <Header />
        <main className='container-fluid'>
          <OrderItemContext>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/Films" element={<FilmItemContext><Films/></FilmItemContext>}/>
            <Route path="/Extruders" element={<Extruders/>}/>
            <Route path="/StandartNames" element={<StandartTitles/>}/>
            <Route path="/StandartFilms" element={<StandartQualityFilms/>}/>
            <Route path="/AddOrder" element={<Order/>}/>
            <Route path="/Orders/:id" element={<Order/>}/>
            <Route path="/Orders" element={<Main/>}/>
            <Route path="/Registration" element={<UserRegistrationForm/>}/>
            <Route path="/Autorization" element={<LoginPage/>}/>
          </Routes>
          </OrderItemContext>
        </main>
      </div>
      </Context>
    </LoginContext>
  );
}

export default App;
