import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
// import Cart from './componentes/Cart';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <h2>Cascos</h2>
      <div className="tarjeta">
        <ItemListContainer marca="Shred" color="Negro"/>
      </div>
      <div className="tarjeta">
        <ItemListContainer marca="Salomon" color="Rojo"/>
      </div>
      <div className="tarjeta">
        <ItemListContainer marca="Blizzard" color="Verde"/>
      </div>
    </>
  );
}

export default App;
