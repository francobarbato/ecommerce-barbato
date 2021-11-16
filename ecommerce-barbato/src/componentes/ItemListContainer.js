import React from 'react';
import ItemCount from './ItemCount'; 
import ItemList from './ItemList';  

function ItemListContainer(props) {
    return (
      <>
        <h3>{props.marca}</h3>
        <div>{props.color}</div>
        <div>{props.cantidad}</div>
        <div>{props.stock}</div>
        <hr/>
        <ItemCount stock={props.stock} initial={1}/>
        <ItemList/>
      </>
    );
}
export default ItemListContainer;