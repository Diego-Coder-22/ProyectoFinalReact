import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/carrito">
        <FontAwesomeIcon className="carrito-icon" icon={faCartShopping} />
            <span className="numerito">{cantidadEnCarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget