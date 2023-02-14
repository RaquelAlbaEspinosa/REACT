import React, { useState } from 'react'

export const Forms = ({ children, title, boolForm1, setBoolForm1, boolForm2, setBoolForm2, initialValues, setUser }) => {

    const changeForm = () => {
        setBoolForm1(!boolForm1);
        setBoolForm2(!boolForm2);
    }
    const cancel = () => {
        setUser(initialValues);
        setBoolForm1(false);
        setBoolForm2(false);
    }

  return (
    <div>
        <h2>{title}</h2>
            {children}
        <button onClick={changeForm}>{boolForm1 ? "Siguiente" : "Anterior"}</button>
        <button onClick={cancel}>Cancelar</button>
    </div>
  )
}
