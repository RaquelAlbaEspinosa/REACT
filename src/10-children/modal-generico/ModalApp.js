import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ModalBasico } from './components/ModalBasico';

export const ModalApp = () => {
    const [show1, setShow1] = useState(false);
    const handleShow1 = () => setShow1(true);
    const [show2, setShow2] = useState(false);
    const handleShow2 = () => setShow2(true);
  return (
    <div>
        <h1>ModalApp</h1>
        <hr />
        <Button variant="primary" onClick={handleShow1}>
        Demo modal 1
        </Button>
        <Button variant="primary" onClick={handleShow2}>
        Demo modal 2
        </Button>
        <ModalBasico show = {show1} setShow = {setShow1} titulo = {"cookies malas"}>
            <h1>Aviso de cookies</h1>
            <p>Que sepas que voy a robarte todos los datos de tu ordenador si me das a aceptar, avisado quedas</p>
        </ModalBasico>
        <ModalBasico show = {show2} setShow = {setShow2} titulo ={"cookies buenas"}>
            <h1>Aviso de cookies buenas</h1>
            <p>Que sepas que voy a regalarte un montón de cosas si me das a aceptar, avisado quedas</p>
        </ModalBasico>
    </div>
  )
}
