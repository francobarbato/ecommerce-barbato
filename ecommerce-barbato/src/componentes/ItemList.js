const {productos} = require('./Item');


    const produccion = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (productos.length > 0) {
                    resolve(productos);
                } else {
                    reject("no tenemos productos en este momento");
                }
            }, 5000);
        })
    }
    
    export default produccion;
