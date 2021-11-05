import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';


function NavBar() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">SkiShop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Hombres</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Mujeres</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Infantiles</a>
                    </li>
                </ul>
                </div>
                <Cart/>
            </div>
        </nav>
      </>
    );
}
export default NavBar;  