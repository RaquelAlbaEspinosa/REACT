import React, { useState } from 'react'
import './EjerPasoHermanos.scss'
import { Hermano1 } from './components/Hermano1'
import { Hermano2 } from './components/Hermano2'

const initialValue = {
    name : "", email: "", password: ""
}

export const EjerPasoHermanos = () => {
    const [user, setUser] = useState(initialValue);
    const [bool, setBool] = useState(false)
    // const [paintUser, setPaintUser] = useState({});
  return (
    <div className='all'>
        <h1>EjerPasoHermanos</h1>
        <hr />
        <div className="hermanos">
            <div className="hermano">
                <Hermano1 user = {user} setUser = {setUser} />
            </div>
            <div className="hermano">
                <Hermano2 user = {user} bool = {bool} />
            </div>
        </div>
        <button onClick={() => setBool(!bool)}>ver/ocultar datos</button>
        <button onClick={() => setUser(initialValue)}>limpiar campos con funcion</button>
    </div>
  )
}
