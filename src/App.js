import { Main } from './Pages/Main';
import { Header } from './components/Header';
import { Route, Routes } from "react-router-dom";
import { Films } from './Pages/Films';
import { Orders } from './Pages/Orders';
import { Context } from './Context/Context';
import { FilmItemContext } from './Context/FilmContext'; 
import { Extruders } from './Pages/Extruders';
import { Order } from './Pages/AddOrder';

function App() {
  return (<Context>
    <div className="App">
        <Header />
        <main className='container-fluid'>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/Films" element={<FilmItemContext><Films/></FilmItemContext>}/>
            <Route path="/Extruders" element={<Extruders/>}/>
            <Route path="/AddOrder" element={<Order/>}/>
            <Route path="/Orders" element={<Main/>}/>
          </Routes>
        </main>
    </div>
    </Context>
  );
}

export default App;
