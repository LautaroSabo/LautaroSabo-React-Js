
import React from 'react'
import ItemCount from '../ItemCount'
import "./style.css"

const ItemDetail =  ({product}) =>  {
  // console.log("product")
  return (
    <div className='itemDetail'>
      
      <img className='imgDetail' src={product.image} alt='Product-Detail'/>
        <div className='textDetail'>
          <h1>{product.title}</h1> 
          <h4>{product.description}</h4> 
          <ItemCount initial={1} stock={7}  />
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