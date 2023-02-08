import React, { useState } from 'react';
import { EjercicioUseState1 } from '../04-useState/ejercicio/EjercicioUseState1';
import "./style.scss";

let user1 = {
    id: 1,
    name: "Santi",
    email: "Santi@santi"
}
let user2 = {
    id: 2,
    name: "María",
    email: "Maria@maria"
}
let photo1 = "/assets/images/astrid1.jpg";
let photo2 = "/assets/images/astrid2.jpg";

export const BooleanosUseState = () => {

    const [bool1, setBool1] = useState(true);

    const cambiarATrue = () => {setBool1(true)}
    const cambiarAFalse = () => {setBool1(false)}

    const [bool2, setBool2] = useState(true);

    // const cambiarBool2 = () => {
    //     bool2 ? setBool2(false) : setBool2(true);
    // }

    const [selectedUser, setSelectedUser] = useState(user1);
    const [bool3, setBool3] = useState(true); //para que dependa del booleano y no del objeto
    const changeSelectedUser = () => {
        bool3 ? setSelectedUser(user2) : setSelectedUser(user1);
        setBool3(!bool3);
    }

    const [selectedPhoto, setSelectedPhoto] = useState(photo1);
    const [bool4, setBool4] = useState(true);
    const changeSelectedPhoto = () => {
        bool4 ? setSelectedPhoto(photo2) : setSelectedPhoto(photo1);
        setBool4(!bool4);
    }
    
  return (
    <div className='contPrincipalBool'>
        <h1>BoolApp</h1>
        <hr />
        <div className="contEjemplosBool">
            {/* -------------Card 1------------- */}
            <div className="cardEjem">
                <h4>Cambiar estados booleanos</h4>
                <p>Pintar bool1</p>
                {/* <h3>pintar bool1: {`${bool1}`}</h3> */}
                <h3>Valor bool1: {bool1 ? "true" : "false"}</h3>
                <button onClick={cambiarATrue}>Cambiar a true</button>
                <button onClick={cambiarAFalse}>Cambiar a false</button>
            </div>
            {/* -------------Card 2------------- */}
            <div className="cardEjem">
                <h4>Cambiar booleano con un botón</h4>
                <p>Pintar bool2</p>
                <h3>Valor bool2: {bool2 ? "existo" : "no existo"}</h3>
                <button onClick={() => setBool2(!bool2)}>Cambiar bool2</button>
                {bool2 && <h3>¡Estoy aquí!</h3>}
                {/* si existe lo pintas y sino no */}
                {/* {bool2 && <EjercicioUseState1 />} */}
            </div>
            {/* -------------Card 3------------- */}
            <div className="cardEjem">
                <h2>Cambiar usuarios</h2>
                <hr />
                <div className="users">
                    <div className='box'>
                        <h4>Usuario {user1.id}</h4>
                        <p>Nombre: {user1.name}</p>
                        <p>Email: {user1.email}</p>
                    </div>
                    <div className='box'>
                        <h4>Usuario {user2.id}</h4>
                        <p>Nombre: {user2.name}</p>
                        <p>Email: {user2.email}</p>
                    </div>
                </div>
                <div>
                    <p>Nombre: {selectedUser.name}</p>
                    <p>Email: {selectedUser.email}</p>
                    <button onClick={changeSelectedUser}>Cambiar de usuario</button>
                </div>
            </div>
            {/* -------------Card 4------------- */}
            <div className="cardEjem">
                <h2>Cambiar foto</h2>
                <hr />
                <div className="photos">
                    <div className="photo"><img src={photo1} alt="" /></div>
                    <div className="photo"><img src={photo2} alt="" /></div>
                </div>
                <button onClick={changeSelectedPhoto}>Cambiar foto</button>
                <div className="photoFinish"><img src={selectedPhoto} alt="" /></div>
            </div>
        </div>
    </div>
  )
}
