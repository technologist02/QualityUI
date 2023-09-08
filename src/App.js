import { Main } from './Pages/Main';
import { Header } from './components/Header';
import { Route, Routes } from "react-router-dom";
import { Films } from './Pages/Films';
import { Orders } from './Pages/Orders';

function App() {
  return (
    <div className="App">
        <Header />
        <main className='container content'>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/Films" element={<Films/>}/>
            <Route path="/Orders" element={<Main/>}/>
          </Routes>
        </main>
    </div>
  );
}

export default App;
