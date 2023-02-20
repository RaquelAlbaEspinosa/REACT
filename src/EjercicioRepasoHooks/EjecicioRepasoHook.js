import React, { useState, useEffect, useRef } from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';
import { PetForm } from './components/PetForm';
import "./EjercicioRepasoHooks.scss";


const initialValue = {
    name: "",
    species: "",
    breed: ""
}

export const EjecicioRepasoHook = () => {
    const [pet, setPet] = useState(initialValue);
    const [paintPet, setPaintPet] = useState(initialValue);
    const [size1, setSize1] = useState(16);
    const [size2, setSize2] = useState(23);
    const background = useRef();
    const text = useRef();
    const text2 = useRef();

    const handleChange = (e) => {
        let { name, value } = e.target;
        setPet({...pet, [name]: value});
    }

    const savePet = () => {
        if(localStorage.getItem("pet")){
            localStorage.removeItem("pet");
            setPaintPet(initialValue);
        } else {
            setPaintPet(pet);
            localStorage.setItem("pet", JSON.stringify(pet));
        }
    }

    useEffect(() => {
        localStorage.getItem("pet") && setPaintPet(JSON.parse(localStorage.getItem("pet")));
        background.current.style.backgroundColor = "rgb(174, 255, 255)";
        text.current.style.color = "rgb(46, 107, 135)";
    }, []);
    useEffect(() => {
        text.current.style.fontSize = `${size1}px`;
        text2.current.style.fontSize = `${size2}px`;
    }, [size1, size2]);

    const makeBigger = () => {
        setSize1(size1 + 5);
        setSize2(size2 + 5);
    }

    const makeSmaller = () => {
        setSize1(size1 - 5);
        setSize2(size2 - 5);
    }
    
    const changeBackground = () => {
        switch (background.current.style.backgroundColor) {
            case "rgb(174, 255, 255)":
                background.current.style.backgroundColor = "rgb(255, 210, 218)"
                text.current.style.color = "rgb(170, 85, 193)"
                break;
            case "rgb(255, 210, 218)":
                background.current.style.backgroundColor = "rgb(220, 183, 255)"
                text.current.style.color = "rgb(95, 70, 176)"
                break;
            case "rgb(220, 183, 255)":
                background.current.style.backgroundColor = "rgb(174, 255, 255)"
                text.current.style.color = "rgb(46, 107, 135)"
                break;
        }
    }

  return (
    <div>
        <div className="encabezado">
            <h1>Ejercicio Repaso Hook</h1>
            <div className="buttons">
                <Button onClick={makeBigger}>+</Button>
                <Button onClick={makeSmaller}>-</Button>
                <Button onClick={changeBackground}>Cambiar estilo</Button>
            </div>
        </div>
        <div className="contenedor">
            <PetForm 
                handleChange={handleChange} 
                savePet={savePet} 
                pet ={pet} 
                background = {background}
                text = {text}
            />
            <div className="pet">
                {localStorage.getItem("pet") &&
                <div ref={text2}>
                    <p>Nombre: {paintPet.name}</p>
                    <p>Especie: {paintPet.species}</p>
                    <p>Raza: {paintPet.breed}</p>
                </div>
                }
            </div>
        </div>
    </div>
  )
}
