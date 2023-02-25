import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const OneUser = () => {
    const {id} = useParams();
    const navigate = useNavigate();
  return (
    <div>
        <h1>Página de usuario</h1>
        <h2>El id del user es: {id}</h2>

        <button onClick={()=> {navigate(-1)}}>Volver</button>
    </div>
  )
}
