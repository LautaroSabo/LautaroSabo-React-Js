import React, { useEffect, useState } from 'react';
// import { products } from '../../components/data/products';
import ItemList from '../../components/ItemList';
import './styles.css';


const ItemListContainer = ({ greeting }) => {




  const [productos, setProductos] = useState([])

  useEffect(() => {

    (async () => {
      // const obtenerProductos = new Promise((accept, reject) => {
      //   setTimeout(() => {
      //     accept(products)
      //   }, 2000);
      // })

      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const productos = await response.json();
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
    </div>
  )
};

export default ItemListContainer;