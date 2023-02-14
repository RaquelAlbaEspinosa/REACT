import React, { useState } from 'react'
import { Forms } from './components/Forms';
import { Info } from './components/Info';
import "./NavbarApp.scss";

const initialValues = {
    name: "",
    surname: "",
    address: "",
    city: "", 
    img: "149071.png"
}

export const NavbarApp = () => {
    // sé que la he liado bastante pero quise probar a hacerlo con children
    const [boolInfo, setBoolInfo] = useState(false);
    const [boolForm2, setBoolForm2] = useState(false);
    const [boolForm1, setBoolForm1] = useState(false);
    const [boolUser, setBoolUser] = useState(false);
    const [user, setUser] = useState(initialValues);

    const handleChange = (e) => {
        let {name, value} = e.target;
        setUser({...user, [name]: value});
        if(name === "img"){
            let finalValue = value.slice(12);
            setUser({...user, [name]: finalValue});
        }
    }

    const openInfo = () => {
        setBoolInfo(!boolInfo);
        setBoolForm1(false);
        setBoolForm2(false);
    }

    const openForms = () => {
        setBoolForm1(true);
        setBoolForm2(false);
        setBoolInfo(false);
        setBoolUser(false);
    }

  return (
    <div>
        <div className="navbar">
            <button onClick={openForms}>{boolUser ? "Cambiar perfil" : "Completar perfil"}</button>
            <img src={`/assets/images/${user.img}`} alt="" />
            <button onClick={openInfo} disabled = {!boolUser}>Ver info</button>
        </div>
        {(boolForm1 || boolForm2) && <div className="form">
            {boolForm1 &&
            <Forms 
                title = {"Formulario1"}    
                boolForm1 = {boolForm1} 
                setBoolForm1 = {setBoolForm1}
                boolForm2 = {boolForm2} 
                setBoolForm2 = {setBoolForm2}
                initialValues = {initialValues}
                setUser = {setUser}
            >
                <input 
                    type="text" 
                    placeholder='Nombre' 
                    name='name'
                    value={user.name}
                    onChange={handleChange}  
                />
                <input 
                    type="text" 
                    placeholder='Apellido' 
                    name='surname'
                    value={user.surname}
                    onChange={handleChange}  
                />
            </Forms>
            }
            {boolForm2 &&
            <Forms 
                title = {"Formulario2"}    
                boolForm1 = {boolForm1} 
                setBoolForm1 = {setBoolForm1}
                boolForm2 = {boolForm2} 
                setBoolForm2 = {setBoolForm2}
                initialValues = {initialValues}
                setUser = {setUser}
            >
                <input 
                    type="text" 
                    placeholder='Dirección' 
                    name='address'
                    value={user.address}
                    onChange={handleChange}  
                />
                <input 
                    type="text" 
                    placeholder='Ciudad' 
                    name='city'
                    value={user.city}
                    onChange={handleChange}  
                />
                <input type="file" name="img" id="img" onChange={handleChange} />
                <button onClick={() => setBoolUser(true)}>Aceptar</button>
            </Forms>
            }
        </div>}
        {boolUser && <div className="info">
            {boolInfo && <Info user = {user} setBoolInfo = {setBoolInfo} />}
        </div>}
    </div>
  )
}
