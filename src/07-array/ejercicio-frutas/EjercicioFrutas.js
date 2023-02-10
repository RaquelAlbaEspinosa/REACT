import React, { useState } from 'react';
import { fruits } from '../../data/frutasArray'; 

export const EjercicioFrutas = () => {
    const [listaFrutas, setListaFrutas] = useState(fruits);
  return (
    <div className='listaFrutas'>
        {listaFrutas.map((fruta, index) => {
            return(
                <div className="frutaCaja" key={index}>
                    <h4>{fruta.name}</h4>
                    <img src={fruta.img} alt="" />
                    <p>Calorías: {fruta.kcal}</p>
                    <p>Agua: {fruta.agua}</p>
                    <p>hc: {fruta.hc}</p>
                    <p>Fibra: {fruta.fibra}</p>
                    <p>Grasa: {fruta.grasa}</p>
                    <p>Proteína: {fruta.prot}</p>
                </div>
            );
        })}
    </div>
  )
}
