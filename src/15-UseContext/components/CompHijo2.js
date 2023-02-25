import React, { useContext } from 'react'
import DataContext from '../../context/DataContext'

export const CompHijo2 = () => {
    let data = useContext(DataContext);
    console.log(data);
  return (
    <div>
        <h2>CompHijo2</h2>
    </div>
  )
}
