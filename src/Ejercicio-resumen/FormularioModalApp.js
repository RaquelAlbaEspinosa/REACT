import React, { useState } from 'react';
import { ModalForm } from "./components/ModalForm";
import { Formul } from './components/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TableForm } from './components/TableForm';
import "./FormularioApp.scss";

const initialValues = {
    name: "",
    surname: "",
    email: "",
    password: ""
}

export const FormularioModalApp = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [user, setUser] = useState(initialValues);
    const [userList, setUserList] = useState([]);

    const handleChange = (e) => {
        let { name, value } = e.target;
        setUser({...user, [name]: value});
    }

    const saveUser = (e) =>{
        e.preventDefault();
        setUserList([...userList, user]);
        handleClose();
        setUser(initialValues);
    }

  return (
    <div>
        <div className="navbar"> 
        {/* esto iba en otro componente pero se me fue la olla */}
            <Button variant="primary" onClick={handleShow}>
                Registro
            </Button>
            <ModalForm 
                handleClose = {handleClose}
                show = {show} 
                setShow = {setShow} 
                user = {user} 
                handleChange = {handleChange} 
                saveUser = {saveUser}
            >
                <Formul user = {user} setUser = {setUser} handleChange = {handleChange}/>
            </ModalForm>
        </div>
        <h1>Formulario en Modal</h1>
        <div className="tabla">
            <TableForm userList = {userList} />
        </div>
    </div>
  )
}
