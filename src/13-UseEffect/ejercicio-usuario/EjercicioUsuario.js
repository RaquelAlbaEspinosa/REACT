import React, { useState, useEffect } from 'react';
import "./EjercicioUsuario.scss";

const initialValues = {
    name: "",
    surname: ""
}

export const EjercicioUsuario = () => {
    const [user, setUser] = useState(initialValues);
    const [paintUser, setPaintUser] = useState(initialValues);
    const [showForm, setShowForm] = useState(false);
    
    const handleChange = (e) => {
        let { name, value } = e.target;
        setUser({...user, [name]:value});
    }

    const saveUser = () => {
        setPaintUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        setShowForm(false);
    }

    const removeData = () => {
        setUser(initialValues);
    }

    const loginout = () => {
        if(localStorage.getItem("user")){
            localStorage.removeItem("user");
            setPaintUser(initialValues);
            setUser(initialValues);
        } else {
            setShowForm(!showForm);
        }
    }

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem("user"));
            setPaintUser(usuario);
    }, []);


  return (
    <div className='all'>
        <div className="navbar">
            <div className="name">
                {paintUser && <h2>{paintUser.name} {paintUser.surname}</h2>}
            </div>
            <button onClick={loginout}>{localStorage.getItem("user") ? "Logout" : "Login"}</button>
        </div>
        {showForm && 
        <div className="form">
            <label htmlFor="">Nombre</label>
            <input type="text" placeholder='Nombre'name='name' value={user.name} onChange={handleChange} />
            <label htmlFor="">Apellidos</label>
            <input type="text" placeholder='Apellidos' name='surname' value={user.surname} onChange={handleChange} />
            <button onClick={saveUser} disabled={!user.name && !user.surname}>Aceptar</button>
            <button onClick={removeData}>Cancelar</button>
        </div>
        }
    </div>
  )
}
