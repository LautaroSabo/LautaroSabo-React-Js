import React from 'react'
import Item from '../Item'
import "./ItemList.css"

const ItemList = ({ products }) => {
    return (
        <div className='CardContainer'>
            {products.map(product => {
                return <Item key={product.id} product={product} />
                
            })}
            
        </div>
    )
}

export default ItemList