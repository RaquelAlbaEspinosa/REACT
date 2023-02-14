import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./AnimalForm.scss";

export const AnimalForm = () => {
    const [animal, setAnimal] = useState({
        especie: "",
        raza: "",
        nombre: "",
        sexo: "",
        color: "",
        castrado: false
    });
    const [paintedAnimal, setPaintedAnimal] = useState({});
    const handleChange = (e) => {
        let { name, value } = e.target;
        setAnimal({...animal, [name]:value });
    }

    const handleChangeCheck = (e) => {
        let { checked } = e.target;
        setAnimal({...animal, castrado:checked });
    }

  return (
    <div className='p-5'>
        <h1>Animales</h1>
        <hr className='pb-3' />
        <form className='animalicos mb-4'>
            <input 
                type="text" 
                name='especie' 
                placeholder='Especie'
                value={animal.especie}
                onChange={handleChange}
            />
            <input 
                type="text" 
                name='raza' 
                placeholder='Raza'
                value={animal.raza}
                onChange={handleChange}
            />
            <input 
                type="text" 
                name='nombre' 
                placeholder='Nombre'
                value={animal.nombre}
                onChange={handleChange}
            />
            <label htmlFor="">Hembra</label>
            <input 
                type="radio" 
                name='sexo' 
                value="Hembra"
                onChange={handleChange}
                checked= {animal.sexo === "Hembra"}
            />
            <label htmlFor="">Macho</label>
            <input 
                type="radio" 
                name='sexo' 
                value="Macho"
                onChange={handleChange}
                checked= {animal.sexo === "Macho"}
            />
            <input 
                type="text" 
                name='color' 
                placeholder='Color'
                value={animal.color}
                onChange={handleChange}
            />
            <label htmlFor="">Castrado</label>
            <input 
                type="checkbox" 
                name="castrado" 
                value={animal.castrado ? "on" : "off"}
                onChange={handleChangeCheck}
                checked={animal.castrado}
            />
            <button onClick={(e) => {setPaintedAnimal(animal); e.preventDefault(); setAnimal({especie: "", raza: "", nombre: "", sexo: "", color: "", castrado: false})}}>Aceptar</button>
        </form>
        <div>
            <p>Especie: {paintedAnimal.especie}</p>
            <p>Raza: {paintedAnimal.raza}</p>
            <p>Nombre: {paintedAnimal.nombre}</p>
            <p>Sexo: {paintedAnimal.sexo}</p>
            <p>Color: {paintedAnimal.color}</p>
            <p>Castrado: {paintedAnimal.castrado ? "sí" : "no"}</p>
        </div>
    </div>
  )
}
