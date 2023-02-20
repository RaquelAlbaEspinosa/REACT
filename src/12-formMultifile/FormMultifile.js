import axios from 'axios';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react'
import "./FormMultifile.scss"

const initialvalue = {
    name: "",
    breed: ""
}

export const FormMultifile = () => {
    const [cat, setCat] = useState(initialvalue);
    const [archivos, setArchivos] = useState();

    const handleChange = (e) => {
        let { name, value } = e.target;
        setCat({...cat, [name]: value});
    }

    const handleFile = (e) => {
        let { files } = e.target;
        setArchivos(files);
    }

    const handleSubmit = () => {
        const newFormData = new FormData();
        newFormData.append("dataCat", JSON.stringify(cat));
        
        
        if (archivos) {
            for(const elem of archivos){
                newFormData.append("file", elem); //hay que meter cada elemento por separado
            }
        }
        
        // let all = [];
        // for (let [key, value] of newFormData.entries()) {
        //     let elem = (key,value);
        //     all.push(elem);
        // }
        // console.log(all);

        axios
            .post("http://localhost:4000/users/createUser", newFormData)
            .then((res) =>{console.log(res);})
            .catch((err) =>{console.log(err);})
    }

  return (
    <div className='ppal'>
        <label htmlFor="name">Nombre</label>
        <input 
            type="text" 
            name = "name"
            value = {cat.name}
            onChange = {handleChange}
            placeholder = "Nombre"
            id = "name"
        />
        <label htmlFor="breed">Raza</label>
        <input 
            type="text" 
            name = "breed"
            value = {cat.breed}
            onChange = {handleChange}
            placeholder = "raza"
            id = "breed"
        />
        <input 
            type="file" 
            name="img" 
            multiple 
            onChange={handleFile} 
        />
        <Button onClick={handleSubmit}>Guardar</Button>
    </div>
  )
}
