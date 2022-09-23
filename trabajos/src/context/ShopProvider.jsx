import React, { useState } from 'react'
import { createContext } from "react";




export const Shop = createContext(null)


const ShopProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    
    const addItem = (item) => {

        const productRepeated = inInCart(item.id)
        console.log(productRepeated)

        if (productRepeated) {
            const cartModified = cart.map(product => {
                if (product.id === item.id) {
                    product.setCant += item.setCant
                    return product
                }
                return product
            })
            console.log(cart)
            console.log(cartModified)
        } else {
            const cartModificado = [...cart, item]
            setCart(cartModificado)
        }
        
    }
    

    const removeItem = (id) => {
        return 
    }
    

    const clearCart = () =>{
        return cart.Shift()
    }

    // console.log(clearCart)
    
    

    const inInCart = (id) => {
        return cart.some(product => product.id === id)
    }
    console.log(setCart)


    return (
        <div>
            <button onClick={removeItem}>Eliminar Item</button>
            <button onClick={clearCart}>Eliminar Carrito</button>
            <Shop.Provider value={{ cart, addItem }}>
                {children}
            </Shop.Provider>
        </div>
    )
}

export default ShopProvider

