import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Ficha } from './components/Ficha'
import { Galeria } from './components/Galeria'

import "./ApiStarWars.scss";

export const ApiStarWars = () => {

    const [datos, setDatos] = useState({});
    const [cardInfo, setCardInfo] =  useState({});
    const [url, setUrl] = useState("https://swapi.dev/api/people/");
    const [type, setType] = useState("characters");

    useEffect(() => {
        axios
        .get(url) //pedir
        .then((res) => {
            setDatos(res.data);
            setCardInfo(res.data.results[0]);
        }) //si llega bien
        .catch((err) => console.log(err)) //si llega mal
      
    }, [url])

    const selectData = (index) => {
        setCardInfo(datos.results[index]);
    }
    
    

  return (
    <div className='ppal'>
        <section>
            <Ficha cardInfo = {cardInfo} type = {type} />
            <div className='botones'>
                <button onClick={() => {setUrl("https://swapi.dev/api/people/"); setType("characters")}}>Personajes</button>
                <button onClick={() => {setUrl("https://swapi.dev/api/films/"); setType("films")}}>Peliculas</button>
                <button onClick={() => {setUrl("https://swapi.dev/api/planets/"); setType("planets")}}>Planetas</button>
                <button onClick={() => {setUrl("https://swapi.dev/api/species/"); setType("species")}}>Especies</button>
                <button onClick={() => {setUrl("https://swapi.dev/api/starships/"); setType("starships")}}>Naves</button>
                <button onClick={() => {setUrl("https://swapi.dev/api/vehicles/"); setType("vehicles")}}>Vehículos</button>
            </div>
        </section>
        <Galeria datos = {datos} selectData = {selectData} setUrl = {setUrl} type = {type} />
    </div>
  )
}
