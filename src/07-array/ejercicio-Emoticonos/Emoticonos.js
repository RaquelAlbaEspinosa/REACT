import React, { useState } from 'react';
import "./Emoticonos.scss";

export const Emoticonos = () => {
    const [listaEmoticonos, setListaEmoticonos] = useState([]);
    const [emoticono, setEmoticono] = useState([]);

    const addEmote = () => {
        if(listaEmoticonos.length < 6){
            setListaEmoticonos([...listaEmoticonos, emoticono]);
        }
    }

    const deleteEmote = () => {
        let listaEmoteProvisional = listaEmoticonos.map(e => e);
        listaEmoteProvisional.pop();
        setListaEmoticonos(listaEmoteProvisional);
    }

    const deleteAll = () => {
        setListaEmoticonos([]);
    }

  return (
    <div className='all'>
        <h1>Contador de estado anímico</h1>
        <div className='listado'>
            {listaEmoticonos.map(e => {
                return(
                    <p>{e}</p>
                );
            })}
        </div>
        <div className="funcButtons">
            <button onClick={deleteEmote}>Borrar</button>
            <button onClick={deleteAll}>Borrar todo</button>
            <button onClick={addEmote} className={emoticono == "😍" ? "rosa" : "azul"}>Añadir</button>
        </div>
        <div className="emoteButtons">
            <button onClick={() => setEmoticono("😍")}>😍</button>
            <button onClick={() => setEmoticono("😥")}>😥</button>
        </div>
    </div>
  )
}
