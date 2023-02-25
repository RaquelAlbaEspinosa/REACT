import React from 'react'
import { getIdFromUri } from '../utils/utils';

export const Galeria = ({datos, selectData, setUrl, type}) => {

    const URL_IMG = "https://starwars-visualguide.com/assets/img/";
    const handleError = (e) => {
        e.target.src = '/images/StarWars/sinImagen.png'
    }

  return (
    <div className='galeria'>
        {datos.previous && <button onClick={() => setUrl(datos.previous)}>{"<"}</button>}
        {datos.results !== undefined ? 
        datos.results.map((dato, index) => {
            return (
            <div key={index} className="galeriaButtons" onClick={() => selectData(index)}>
                <img src={`${URL_IMG}/${type}/${getIdFromUri(dato.url)}.jpg`} alt="" onError={handleError} />
                <p>{dato.name ? dato.name : dato.title}</p>
            </div>
        )}) : <p>cargando...</p>
    }
        {datos.next && <button onClick={() => setUrl(datos.next)}>{">"}</button>}
    </div>
  )
}
