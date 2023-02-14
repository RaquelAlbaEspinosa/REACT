import React from 'react'

export const Hermano1 = ({user, setUser}) => {

    const handleChange = (e) => {
        let {name, value} = e.target;
        setUser({...user, [name]: value});
        console.log(user);
    }
  return (
    <div>
        <h2>Formulario</h2>
        <form>
            <label>Nombre:</label>
            <br />
            <input type="text" placeholder='Nombre' name='name' onChange={handleChange} value = {user.name} />
            <br />
            <label>Email:</label>
            <br />
            <input type="email" placeholder='Email' name='email' onChange={handleChange} value = {user.email} />
            <br />
            <label>Contraseña:</label>
            <br />
            <input type="password" placeholder='Contraseña' name='password' onChange={handleChange} value = {user.password} />
        </form>
    </div>
  )
}
