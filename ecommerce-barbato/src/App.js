import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <h2>Cascos</h2>
      <div className="tarjeta">
        <ItemListContainer marca="Shred" color="Color: Negro" cantidad="Unidades disponibles:" stock="5"/>
      </div>
      <div className="tarjeta">
        <ItemListContainer marca="Salomon" color="Rojo" cantidad="Unidades disponibles:" stock="10"/>
      </div>
      <div className="tarjeta">
        <ItemListContainer marca="Blizzard" color="Verde" cantidad="Unidades disponibles:" stock="8"/>
      </div>
    </>
  );
}

export default App;
