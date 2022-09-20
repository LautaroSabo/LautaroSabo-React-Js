
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from '../ItemCount'
import "./style.css"

const ItemDetail =  ({product}) =>  {
  // console.log("product")

  const [cant, setCant] = useState(0);
  const navigate = useNavigate();

  const addCart = (cantidad) =>{
    setCant(cantidad);

  }
  console.log(cant);

  const handleFinish = () =>{
    navigate('/cart')
  }
  return (
    <div className='itemDetail'>
      
      <img className='imgDetail' src={product.image} alt='Product-Detail'/>
        <div className='textDetail'>
          <h1>{product.title}</h1> 
          {/* <h4>{product.description}</h4>  */}
          {!cant ? <ItemCount initial={1} stock={7} onAdd={addCart} />: <button onClick={handleFinish}>Finalizar compra</button>}
        </div>
        
    </div>
    
  )
  
}



export default ItemDetail






// const ItemDetail =  ({product}) =>  {
//   console.log("product")
//   return (
//     <div className='itemDetaill'>
      
//         <h1>{product.title}</h1> 
//             <img src={product.image} alt='Product-Detail'/>
//         <h4>{product.description}</h4> 
        
//         <ItemCount/>
//     </div>
    
//   )
  
// }