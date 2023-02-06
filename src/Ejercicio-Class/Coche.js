import React, { Component, Fragment } from "react";
import "./Coche.css";

export default class Coche extends Component {
    render(){
        const brand = "Renault";
        const model = "Megane";
        const color = "Rojo";
        const registration = "9876DDD";
        const price = 15000;
        let calculateFullPrice = (price) => {
            return price + (price * 21 / 100);
        }

        return(
            <Fragment>
                <div className="background">
                    <h1>Modelo de coche</h1>
                    <div className="coche">
                        <div>
                            <p><strong>Marca:</strong> { brand }</p>
                            <p><strong>Modelo:</strong> { model }</p>
                            <p><strong>Color:</strong> { color }</p>
                            <p><strong>Matrícula:</strong> { registration }</p>
                            <p><strong>Precio sin iva:</strong> { price } €</p>
                        </div>
                        <div>
                            <h2>Precio final con impuestos</h2>
                            <h3>{ calculateFullPrice(price) } €</h3>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}