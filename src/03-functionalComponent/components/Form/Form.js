import React from "react";

export const Form = () => {
    return(
        <>
            <h2>Esto es un formulario</h2>
            <hr />
            <input placeholder="Nombre" type="text" />
            <input placeholder="Email" type="email" />
            <input placeholder="Password" type="password" />
        </>
    );
}