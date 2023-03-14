import './App.css';
// import Chat from './Components/Chat/Chat';
import Rooms from './Pages/Rooms/Rooms';
import Registro from './Pages/Registro/Registro';
import Home from './Pages/Home/Home'
// import CreateRoom from './Components/CreateRooom/CreateRoom';
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import InicioSesion from './Pages/InicioSesion/InicioSesion';



function App() {
  return (
    <Router>     
      <div className="App">
        <div className="page-container">
          <header>
            <Header></Header>
          </header>
          <main>
            <Routes>         
              <Route exact path="/" element={<Home></Home>}></Route>
              <Route exact path="/rooms" element={<Rooms></Rooms>}></Route>
              <Route exact path="/registro" element={<Registro></Registro>}></Route>
              <Route exact path="/inicio" element={<InicioSesion></InicioSesion>}></Route>
                           
            </Routes> 
            {/* Otras rutas de la aplicación */}   
          </main>  
          <footer>
            <Footer></Footer>
          </footer>   
        
        </div>
      </div>
    </Router>
  );
}

export default App;
