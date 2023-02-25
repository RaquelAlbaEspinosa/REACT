import React, { useContext, useState } from 'react'
import { AppContext } from './context/ContextProvider';

const initialValue = {
    name: "",
    surname: "",
    email: ""
}

export const Formulario = () => {

    const [user, setUser] = useState(initialValue);

    const [state, setState] = useContext(AppContext);

    const handleChange = (e) => {
        let {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = () => {
        setState({...state, user});
    }

  return (
    <div>
        <h2>Formulario</h2>
        <input 
            type="text" 
            placeholder='Nombre'
            name = "name"
            value = {user.name}
            onChange = {handleChange}
        />
        <input 
            type="text" 
            placeholder='Apellido'
            name = "surname"
            value = {user.surname}
            onChange = {handleChange}
        />
        <input 
            type="text" 
            placeholder='Email'
            name = "email"
            value = {user.email}
            onChange = {handleChange}
        />
        <button onClick={handleSubmit}>Aceptar</button>
    </div>
  )
}
