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

function App() {
  return (<Context>
    <div className="App">
        <Header />
        <main className='container-fluid'>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/Films" element={<FilmItemContext><Films/></FilmItemContext>}/>
            <Route path="/Extruders" element={<Extruders/>}/>
            <Route path="/Standarts" element={<StandartNames/>}/>
            <Route path="/AddOrder" element={<Order/>}/>
            <Route path="/Orders" element={<Main/>}/>
          </Routes>
        </main>
    </div>
    </Context>
  );
}

export default App;
