import React from 'react'
import './cardsItems.css'
import ItemCount from '../../components/ItemCount';


const Item = ({ product }) => {
    const agregarAlCarrito = (cantidad) => {
        console.log(`se agrego la ${cantidad} al carrito`)
    }
    return (
    
    
        <div className='CardsItems'>
        <h1 className='title'>{product.title}</h1>
        <img src={product.image} alt="imagenesProdctos" />
        <h3 className='description'>{product.description}</h3>
        <h3 className='price'> ${product.price}</h3>
        <h3 className='id'>Id: {product.id}</h3>
        <ItemCount initial={1} stock={7} onAdd={agregarAlCarrito} />
        </div>
    )
}
console.log(Item);

export default Item