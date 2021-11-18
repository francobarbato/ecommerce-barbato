import './App.css';
import NavBar from './componentes/NavBar';
import productosPromise from './componentes/ItemList';
import { useEffect, useState } from 'react';

function App() {

  const [datos, setDatos] = useState([]);

  useEffect(() =>{
    productosPromise()
        .then(result => setDatos(result))
        .catch(err => console.log(err))
}, [])

  return (
    <>
    <NavBar/>
    <h2>Cascos</h2>
    <ol>
          {
          datos.map((dato) => <li>{dato.marca}</li>)
          }
      </ol>
    </>
  );
}

export default App;
