import { Main } from './Pages/Main';
import { Header } from './components/Header';
import { Route, Routes } from "react-router-dom";
import { Films } from './Pages/Films';
import { Orders } from './Pages/Orders';
import { Context } from './components/Context';
import { FilmItemContext } from './Context/FilmContext'; 

function App() {
  return (<Context>
    <div className="App">
        <Header />
        <main className='container content'>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/Films" element={<FilmItemContext><Films/></FilmItemContext>}/>
            <Route path="/Orders" element={<Main/>}/>
          </Routes>
        </main>
    </div>
    </Context>
  );
}

export default App;
