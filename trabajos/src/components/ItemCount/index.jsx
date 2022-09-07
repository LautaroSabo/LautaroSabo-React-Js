import React,{useState,useEffect } from 'react';
import './style.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        } else {
            alert("No hay suficiente stock disponible");
        }
    }

    const handleDecrement = () => {
        if (count <= 1){
            alert("eso no esta permitido")
        }
        else{
            
            setCount( count - 1);
        }
    }

    const addCart = () => {
        onAdd(count);
        setCount(initial);
        alert("Se ha guardado tu carrito!");
    }

    useEffect(()=> {
        console.log("Se montó el ItemCount");
    }, []);

    useEffect(()=> {
        console.log("Se actualiza el estado!")
    }, [count]);

    return (
    <div className='addCart'>
        <button onClick={handleDecrement}>-</button>
        <h2>{count}</h2>
        <button onClick={handleAdd}>+</button>
        <button onClick={addCart}>Agregar al carrito</button>
    </div>
    );
};

export default ItemCount;
