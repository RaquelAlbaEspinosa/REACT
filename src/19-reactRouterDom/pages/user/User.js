import React from 'react'
import { useNavigate } from 'react-router-dom'

export const User = () => {
    const navigate = useNavigate(); //es un CustomHook de react router dom
  return (
    <div>
        <h1>Todos los usuarios</h1>

        <button onClick={() => {navigate('/OneUser/1')}}>User 1</button>
        <button onClick={() => {navigate('/OneUser/2')}}>User 2</button>
        <button onClick={() => {navigate('/OneUser/3')}}>User 3</button>
        <button onClick={() => {navigate('/OneUser/4')}}>User 4</button>
    </div>
  )
}
