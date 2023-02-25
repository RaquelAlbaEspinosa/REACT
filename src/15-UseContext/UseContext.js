import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import DataContext from '../context/DataContext'
import { Comp1 } from './components/Comp1'
import { CompHijo2 } from './components/CompHijo2'
// 1. crearlo en una carpeta a parte en src
// 2. proveer el context de datos y decirle a react cuál va a ser el alcance del context
// 3. pedir los datos al context
// no usarlo demasiado porque a niver rendimiento es regulín

const libros = [
    {
    titulo: "El código Da Vinci",
    autor: "Dan Brown",
    genero: "misterio"
    },
    {
    titulo: "El ocho",
    autor: "Katherine Neville",
    genero: "historica"
    }
]

export const UseContext = () => {

    const [book, setBook] = useState();

    useEffect(() => {
      setBook(libros[0]);
    }, []);
    

  return (
    <div>
        <h1>Este es el padre</h1>
        <hr />
        <div className="buttons">
            <Button onClick={() => setBook(libros[0])}>Libro1</Button>
            <Button onClick={() => setBook(libros[1])}>Libro2</Button>
        </div>
        <DataContext.Provider value={book}>
            <Comp1 />
            <CompHijo2 />
        </DataContext.Provider>

        
    </div>
  )
}
