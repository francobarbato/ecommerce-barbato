import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
// import Cart from './componentes/Cart';
import Cards from './componentes/Cards';

function App() {
  return (
    <>
    <NavBar/>
    <h2>Cascos</h2>
      <div className="tarjeta">
        <Cards marca="Shred" color="Negro"/>
      </div>
      <div className="tarjeta">
        <Cards marca="Salomon" color="Rojo"/>
      </div>
      <div className="tarjeta">
        <Cards marca="Blizzard" color="Verde"/>
      </div>
    </>
  );
}

export default App;
