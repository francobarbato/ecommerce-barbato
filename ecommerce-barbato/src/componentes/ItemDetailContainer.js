import { useEffect } from 'react';
import imagen from './imagenes/casco.jpg';
const {casco} = require('./ItemDetails');



function ItemDetailContainer(){

       const productionPromise = (timeout) => {
    return new Promise((resolve, reject) => {    
            if (casco.length > 0) {
                setTimeout(() => {
                 resolve(casco);   
                },timeout);       
            } else {
                reject("no tenemos productos para vos");
            }
        
    })
    }

    useEffect(() =>{
        productionPromise(5000, casco)
        .then(() => casco.map(producto => {console.log(producto.name);}))
        .catch(() => console.log("no hay productos"))
    }, [])


    return(
        <>
        <div className="tarjeta">
        <img className="img" src={imagen} alt=""/>
        <h3>{casco[0].marca}</h3>
        <div>${casco[0].precio}</div>
        </div>
        </>
    );
}

export default ItemDetailContainer;