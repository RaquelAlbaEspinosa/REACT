import React from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap';

export const PetForm = ({handleChange, savePet, pet, background, text}) => {
  return (
        <div ref={text}>
        <Form ref={background}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder='Nombre' 
                        name='name' 
                        value={pet.name} 
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Especie</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder='Especie' 
                        name='species' 
                        value={pet.species} 
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Raza</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder='Raza' 
                        name='breed' 
                        value={pet.breed} 
                        onChange={handleChange}
                        />
                </Form.Group>
                <Button onClick={savePet}>{localStorage.getItem("pet") ? "Logout" : "Login"}</Button>
            </Form>
            </div>
  )
}
