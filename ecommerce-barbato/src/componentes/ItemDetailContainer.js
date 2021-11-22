import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetails'
const {casco} = require('./productos.js');


const ItemDetailContainer = () => {

    const productionPromise = (time) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (casco.length > 0) {
                    resolve(casco);
                } else {
                    reject("No tenesmos este producto disponible");
                }
            }, time);
        });
    }

    const [dato, setDato] = useState({});

    useEffect(() => {
        productionPromise(2000, casco[0])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;