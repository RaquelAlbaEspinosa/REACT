import React, { useState } from 'react';
import "./EjercicioListaCompra.scss";

export const EjercicioListaCompra = () => {
    const[lista, setLista] = useState([]);
    const[producto, setProducto] = useState("");
    const[listaBusqueda, setListaBusqueda] = useState([]);
    const[productoBusqueda, setProductoBusqueda] = useState("");

    const addProduct = () => {
        setLista([...lista, producto]);
        setProducto("");
    }

    const deleteProduct = () => {
        let listaProvisional = lista.map(prod => prod);
        listaProvisional.pop();
        setLista(listaProvisional);
    }

    const search = () => {
        let listaBusqProvisional = [];
        lista.map(prod => {
            if(prod.toLowerCase().includes(productoBusqueda.toLocaleLowerCase())){
                listaBusqProvisional = [...listaBusqProvisional, prod];
            }
            }
        );
        setListaBusqueda(listaBusqProvisional);
    }

  return (
    <div className='all'>
        <div className="func">
            <h1>Añadir productos</h1>
            <div className='add'>
                <label htmlFor="añadir">Por favor intruduzca un producto</label>
                <input 
                    type="text" 
                    placeholder='Producto' 
                    id="añadir" 
                    onChange={(e) => setProducto(e.target.value)} 
                    value= {producto}
                />
                <div className="buttons">
                    <button onClick={addProduct}>Añadir</button>
                    <button onClick={deleteProduct}>Borrar</button>
                </div>
            </div>
            <hr />
            <h2>Buscar productos</h2>
            <input 
                type="text"
                placeholder='Buscar'
                onChange={(e) => setProductoBusqueda(e.target.value)}
                value= {productoBusqueda}
            />
            <button onClick={search}>Buscar</button>
            <hr />
            <h2>Búsqueda</h2>
            <div className='busqueda'>
                {listaBusqueda.map((prod, index) => {
                    return(
                        <p key={index}>{prod}</p>
                    );
                })}
            </div>
        </div>
        <div className="paintList">
            <h1>Lista de la compra</h1>
            <div className="lista">
                {lista.map((prod, index) => {
                    return(
                        <p key={index}>- {prod}</p>
                    );
                })}
            </div>
        </div>
    </div>
  )
}
