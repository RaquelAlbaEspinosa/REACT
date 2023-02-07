import React, { Component, Fragment } from "react"; //primero importamos React porque tiene unas clases padre con unas funcionalidades que vamos a usar.

import './CompClass.css';

// en los tipo clase no funcionan los ganchos (hooks).
export default class CompClass extends Component {
    render(){ 
        const name = "Raquel"
        const asignaturas = ["Node", "React"];
        const saludar = (nombre) => {
            console.log(`Hola ${nombre}`);
        }

        const buttonStyle = {
            color: "black", 
            backgroundColor: "yellow",
            width: "150px",
            borderRadius: "150px",
            padding: "5px"
        }
        return(
            // aquí no se puede quitar el nombre de fragment
            <Fragment>
                <div className="padre">
                    <h1>Componente tipo Clase</h1>
                    <div style={{ border: "1px solid black", color: "darkblue", backgroundColor: "lightblue", padding: "10px" }}>
                        {/* para meter estilo se hace como objetos, doble llave porque una es para decir que vamos a meter algo de javaScrypt y el otro para definir el objeto */}
                        <h1>name es: {name}</h1>
                        <p>alumna de: {asignaturas[0]}</p>
                        <button onClick={() => saludar(name)} style={buttonStyle}>Saludar</button>
                        {/* Cuando dentro de un evento queramos nombrar una función debe estar dentro de otra para que no se ejecute de primeras y pueda funcionar */}
                    </div>
                </div>
            </Fragment>
        );
    }
    
}