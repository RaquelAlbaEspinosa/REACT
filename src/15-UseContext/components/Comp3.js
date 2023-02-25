import React, { useContext } from 'react'
import DataContext from '../../context/DataContext'

export const Comp3 = () => {
    let data = useContext(DataContext);
  return (
    <div>
        <h4>Este es el Comp3 "biznieto"</h4>

        <p>título: {data?.titulo}</p>
        <p>autor: {data?.autor}</p>
        <p>genero: {data?.genero}</p>
    </div>
  )
}
