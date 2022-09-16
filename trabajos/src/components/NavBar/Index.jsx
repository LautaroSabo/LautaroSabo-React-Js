import React from 'react'
import CardWidget from '../CardWidget'
import './Styles.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Barra'>
            <CardWidget/>
            <h1>Lesa</h1>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/category/men's clothing">Men's clothing</Link>
            </li>
            <li>
                <Link to="/category/women's clothing">Women's clothing</Link>
            </li>
            <li>
                <Link to="/category/electronics">Electronics</Link>
            </li>
            <li>
                <Link to="/category/jewelery">Jewelery</Link>
            </li>
            
        </div>
    )
}

export default Navbar