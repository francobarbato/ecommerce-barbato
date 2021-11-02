import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a class="navbar-brand" href="#">ShiShop</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Hombres</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mujeres</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Infantiles</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default App;
