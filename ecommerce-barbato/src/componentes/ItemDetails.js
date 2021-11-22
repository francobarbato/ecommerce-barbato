import ItemCount from './ItemCount';
import imagen from './imagenes/casco.jpg';

const {casco} = require('./productos.js');



function ItemDetail(){
    return(
        <>
        <div className="tarjeta">
        <img className="img" src={imagen} alt=""/>
        <h3>{casco[0].marca}</h3>
        <div>${casco[0].precio}</div>
        <div>Unidades:{casco[0].stock}</div>
        <ItemCount stock={casco[0].stock} initial={1}/>
        </div>
        
        </>
    );
}
export default ItemDetail;