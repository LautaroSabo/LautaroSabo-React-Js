import React from 'react'
import { useState } from 'react'
import Item from '../Item'
import Modal from '../modal'
import "./ItemList.css"

const ItemList = ({ products }) => {
    
    const [modalshow, setModalShow] = useState(true);
    
    
    return (
        <div className='CardContainer'>
            {modalshow ? <Modal handleClose={setModalShow}/> : null}
            {products.map(product => {
                return <Item key={product.id} product={product} />
            })}
            
        </div>
    )
}

export default ItemList