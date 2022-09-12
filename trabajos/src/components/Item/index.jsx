import React from 'react'
import './cardsItems.css'


const Item = ({ product }) => {
    return (
        <div className='CardsItems'>
        <h1>{product.name}</h1>
        <img src={product.img} alt="imagenesProdctos" />
        <h3>{product.descripcion}</h3>
        <h3>Stock: {product.stock}</h3>
        <h3>Id: {product.id}</h3>
        </div>
    )
}
console.log(Item);

export default Item