import React, { useState, useRef, useEffect } from 'react'
import { Button } from 'react-bootstrap';


const initialValue = {
    name: "",
    tel: ""
}

export const UseRef = () => {
    const inputName = useRef();
    const inputTel = useRef();
    const buttonRef = useRef();

    const [user, setUser] = useState(initialValue);

    console.log(inputName, inputTel);

    const handleSubmit = () => {
        setUser({
            name: inputName.current.value,
            tel: inputTel.current.value
        });
    }

    useEffect(() => {
        inputName.current.focus();
    }, []);

  return (
    <div>
        <h1>Formulario UseRef</h1>
        <h2>{user.name} {user.tel}</h2>
        <div className="form">
            <input placeholder='nombre' ref={inputName} />
            <input placeholder='telefono' ref={inputTel} />
            <Button onClick={handleSubmit} ref={buttonRef}>Aceptar</Button>
        </div>
    </div>
  )
}
