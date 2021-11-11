import React from 'react';
import ItemCount from './ItemCount'; 

function ItemListContainer(props) {
    return (
      <>
        <h3>{props.marca}</h3>
        <div>{props.color}</div>
        <div>{props.cantidad}</div>
        <div>{props.stock}</div>
        <hr/>
        <ItemCount stock={props.stock} initial={1}/>
      </>
    );
}
export default ItemListContainer;
