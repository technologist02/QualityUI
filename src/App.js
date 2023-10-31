import { Main } from './Pages/Main';
import { Header } from './components/Header';
import { Route, Routes } from "react-router-dom";
import { Films } from './Pages/Films';
import { Extruders } from './Pages/Extruders';
import { Order } from './Pages/AddOrder';
import { StandartTitles } from './Pages/StandartQualityNames';
import { UserRegistrationForm } from './Pages/UserRegistrationForm';
import { LoginContext } from './Context/user-context';
import { LoginPage } from './Pages/LoginPage';
import { StandartQualityFilms } from './Pages/StandartsFilmQuality';
import { AutorizePage } from './Pages/AutorizePage';

function App() {
  return (
    <LoginContext>
      <div className="App">
        <Header />
        <main className='container-fluid'>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/Films" element={<Films/>}/>
            <Route path="/Extruders" element={<Extruders/>}/>
            <Route path="/StandartNames" element={<StandartTitles/>}/>
            <Route path="/StandartFilms" element={<StandartQualityFilms/>}/>
            <Route path="/AddOrder" element={<Order/>}/>
            <Route path="/Orders/:id" element={<Order/>}/>
            <Route path="/Orders" element={<Main/>}/>
            <Route path="/Registration" element={<UserRegistrationForm/>}/>
            <Route path="/Autorization" element={<LoginPage/>}/>
            <Route path="/AutorizePage" element={<AutorizePage/>}/>
          </Routes>
        </main>
      </div>
    </LoginContext>
  );
}

export default App;
