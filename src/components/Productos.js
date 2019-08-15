import React, { Fragment } from 'react';
import ProdcutoLista from './ProductoLista';

function Productos({ productos, guardarRecargarProductos })
{
    return (
        <Fragment>
            <h1 className="text-center">Productos</h1>
            
            <ul className="list-group mt-5">
                {productos.map(producto => (
                    <ProdcutoLista
                        key={producto.id}
                        producto={producto}
                        guardarRecargarProductos={guardarRecargarProductos} />
                ))}
            </ul>
        </Fragment>
    )
}

export default Productos;