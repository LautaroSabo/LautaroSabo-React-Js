import React, { useEffect, useState } from 'react';
import { products } from '../../components/data/products';
import ItemCount from '../../components/ItemCount';
import ItemList from '../../components/ItemList';
import './styles.css';


const ItemListContainer = ({ greeting }) => {

  const agregarAlCarrito = (cantidad) => {
    console.log(`se agrego la ${cantidad} al carrito`)
  }


  const [productos, setProductos] = useState([])

  useEffect(() => {

    (async () => {
      const obtenerProductos = new Promise((accept, reject) => {
        setTimeout(() => {
          accept(products)
        }, 2000);
      })

      try {
        const productos = await obtenerProductos;
        setProductos(productos);
      } catch (error) {
        console.log(error);
      }

    })()

  }, [])

  console.log (productos)

  return (
    <div >
      <ItemList products={productos}/>
      <ItemCount initial={1} stock={7} onAdd={agregarAlCarrito} />
    </div>
  )
};

export default ItemListContainer;