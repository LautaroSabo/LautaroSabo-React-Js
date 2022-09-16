import React, { useEffect, useState } from 'react';
// import { products } from '../../components/data/products';
import ItemList from '../../components/ItemList';
import './styles.css';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {

  const {categoryId} = useParams ();
  // console.log(categoryId);


  const [productos, setProductos] = useState([])

  useEffect(() => {

    (async () => {

      try {
        if (categoryId){
          const response = await fetch(
            `https://fakestoreapi.com/products/category/${categoryId}`
        );
        const productos = await response.json();
        setProductos(productos);
        }
        else {
          const response = await fetch(
              "https://fakestoreapi.com/products"
          );
          const productos = await response.json();
          setProductos(productos);
        }
      } catch (error) {
        console.log(error);
      }

    })()

  }, [categoryId])

  // console.log (productos)

  return (
    <div >
      <ItemList products={productos}/>
    </div>
  )
};

export default ItemListContainer;