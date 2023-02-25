import React from 'react'
import { getIdFromUri } from '../utils/utils';

export const Ficha = ({cardInfo, type}) => {

    const URL_IMG = "https://starwars-visualguide.com/assets/img/";

    const handleError = (e) => {
        e.target.src = '/images/StarWars/sinImagen.png'
    }

  return (
    <div className='ficha'>
        {cardInfo.url !== undefined?
            <img src={`${URL_IMG}/${type}/${getIdFromUri(cardInfo.url)}.jpg`} alt="" onError={handleError} /> : <p>cargando...</p>
        }

        <h2>{cardInfo.name ? cardInfo.name : cardInfo.title}</h2>
    </div>
  )
}
