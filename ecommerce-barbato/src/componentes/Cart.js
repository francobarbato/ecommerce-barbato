import React from 'react';
import foto from './imagenes/carrito.png';

function Cart() {
    return (
      <>
        <button className="button" className="carrito" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                  <img src={foto} alt=""/>
                <span id="contador" className="badge bg-dark text-white ms-1 rounded-pill" className="sr-only">0</span>
        </button>
      </>
    );
}
export default Cart;