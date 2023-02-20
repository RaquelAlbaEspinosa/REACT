import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalForm = ({ handleClose, children, show, setShow, user, handleChange, saveUser }) => {
  return (
    <div className='modal'>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h3>Formulario de registro</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={saveUser} type="submit">
            Submit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
