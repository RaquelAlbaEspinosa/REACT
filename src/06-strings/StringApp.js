import React, { useState } from 'react'

export const StringApp = () => {

    const [userName, setUserName] = useState("");

    const handleChange = (event) => {
        //React genera eventos sintéticos, un objeto en el que mete muchas propiedades y se puede recoger en la función aunque no mandemos ningún valor, si hay más de un input con la misma función los eventos son diferentes igualmente.
        // dentro del evento está el componente target y dentro value que es lo que se está escribiendo en el input
        setUserName(event.target.value);
        // React quiere que el input esté completamente enlazado al estado
        // le ponemos un value al input que dependa del estado, se cierra el círculo
    }

  return (
    <div>
        <h1>Manejo de inputs</h1>
        <hr />
        <h2>Nombre de usuario: {userName}</h2>
        <form>
            <label>Nombre de usuario</label>
            <input 
                type="text" 
                placeholder='Nombre'
                onChange={handleChange}
                value={userName}
            />
        </form>
    </div>
  )
}
