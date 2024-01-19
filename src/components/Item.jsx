import React from "react"
import { Link } from "react-router-dom"

const Item = ({producto})=>{
    return (
        <div className="producto">
            <img src={producto.imagen} alt={producto.titulo} />
            <div>
                <h4>{producto.titulo}</h4>
                <p>Categoria: {producto.categoria}</p>
                <p>Precio: {producto.precio}€</p>
                { producto.stock <= 5 && <p className="unidades">Quedan solo {producto.stock} unidades!</p> }
                <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default Item