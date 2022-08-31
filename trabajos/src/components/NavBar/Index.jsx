import React from 'react'
import CardWidget from '../CardWidget'
import './Styles.css'

const Navbar = () => {
    return (
        <div className='Barra'>
            <CardWidget/>
            <h1>Lesa</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            
        </div>
    )
}

export default Navbar