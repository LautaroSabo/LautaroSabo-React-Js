import React from 'react'
import './cardsItems.css'
import {useNavigate } from 'react-router-dom';


const Item = ({ product }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/detail/${product.id}`)
    }
    return (
        <div className='CardsItems' onClick={handleNavigate}>
        <div className='headTitulo'><h1 className='title'>{product.title}</h1></div>
        <div className='itemImg'><img className='imgItem' src={product.image} alt="imagenesProdctos" /></div>
        <div className='footerItem'>
        <h3 className='price'> ${product.price}</h3>
        <h3 className='DetailItem'>Detalles Producto</h3>
        </div>
        

        
        </div>
    )
}
console.log(Item);

export default Item