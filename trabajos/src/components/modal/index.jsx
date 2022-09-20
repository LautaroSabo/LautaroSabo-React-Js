import React, { useEffect } from 'react'
import "./style.css"

const Modal = ({handleClose}) => {

    useEffect(() =>{

        const handleEsc = (event) => {
        console.log(event);

        if(event.keyCode === 27){
            console.log("will close");
            handleClose(false)
        }

        if(event.keyCode === 13){
            handleSubmit()
        }
        };

        window.addEventListener("keydown",handleEsc);

        return () =>{
            window.removeEventListener("keydown",handleEsc)
        }

    },[handleClose]);

    const handleSubmit = (evento) => {
        evento?.preventDefault();
        console.log(evento)
    }

    const onClose = (e) => {
        
        handleClose(false)
    }



  return (
    <div className='divModal'>
        <form className='formModal' onSubmit={handleSubmit}>
            <h2>Titulo Modal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore aperiam rerum numquam nulla eum ipsam non porro illo, voluptate reprehenderit ut, officiis inventore possimus aliquam nobis eligendi necessitatibus sint!</p>
            <div>
                <button className='buttonModal' type='button' onClick={onClose}>Close</button>
                <button className='buttonModal2' type='Submit'>Send</button>
            </div>
        </form>
    </div>
  )
}

export default Modal