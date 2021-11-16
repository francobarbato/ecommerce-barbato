import {Item} from './Item';

function ItemList(){

        
        let produccion = (timeout, task) =>{
        return new Promise((resolve, reject) => {
            if(Item.length > 0){
                setTimeout(() => {
                    resolve(task)
                }, timeout);
            }else{
                reject("no tenemos productos en este momento")
            }
        })
    }

    produccion(5000, console.log("Cargando los datos..."))
        .then(() => produccion(3000, console.log(Item[0])))
        .then(() => produccion(3000, console.log(Item[1])))
        .then(() => produccion(3000, console.log(Item[2])))
        .catch(err => console.log(err))
}

export default ItemList;
