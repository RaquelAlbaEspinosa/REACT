import React, { useState } from 'react'

export const ListaCompraApp = () => {
    const [listaProductos, setListaProductos] = useState([]);
    const [producto, setProducto] = useState("");

    const addProduct = () => {
        setListaProductos([...listaProductos, producto]);
        // spreat operator: copia los arrays por referencia
        // push nunca!!
        // nunca los métodos que modifican el array original
    }

  return (
    <div>
        <h1>Lista de la compra</h1>
        <hr />
        <input 
            type="text" 
            placeholder='Introduce un producto'
            onChange={(e) => setProducto(e.target.value)}
        />
        <button onClick={addProduct}>Añadir a la lista</button>
        <div>
            <h1>Lista de la compra</h1>
            {listaProductos.map((elem, index) => {
                return (
                    <p key={index}>{elem}</p>
                );
            })}
        </div>
    </div>
  )
}
