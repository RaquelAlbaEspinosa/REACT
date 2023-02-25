import React, { useContext } from 'react'
import { AppContext } from './context/ContextProvider'

export const ShowData = () => {
    const [state] = useContext(AppContext);
    console.log(state);
  return (
    <div>
        <h2>ShowData</h2>
        <p>Nombre: {state.user?.name}</p>
        <p>Apellido: {state.user?.surname}</p>
        <p>Email: {state.user?.email}</p>
    </div>
  )
}
