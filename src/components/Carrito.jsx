import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((prod) => (
                <div className='producto-carrito' key={prod.id}>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <img src={prod.imagen} alt={prod.titulo} />
                    <p>Precio unit: {prod.precio}€</p>
                    <p>Cant: {prod.cantidad}</p>
                    <p>Precio total: {prod.precio * prod.cantidad}€</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
            <div className='precio-total'>
                <div className='carrito-button'>
                    <button className='vaciar' onClick={handleVaciar}><FontAwesomeIcon icon={faTrash} /></button>
                    <button className='enviar'><Link to="/checkout">Finalizar compra</Link></button>
                </div>
                <h2 >Precio total: {precioTotal()}€</h2>
            </div>
            </> :
            <h2>Tu carrito de compra está vacío</h2>
        }
        
    </div>
  )
}

export default Carrito
