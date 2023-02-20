import React from 'react'
import Form from 'react-bootstrap/Form';

export const Formul = ({ user, handleChange }) => {
  return (
    <div className='form'>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label htmlFor='name'>Nombre</Form.Label>
            <Form.Control type="text" placeholder='Enter name' name='name' value={user.name} onChange={handleChange} id="name" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="surname">Apellido</Form.Label>
            <Form.Control type="text" placeholder='Enter surname' name='surname' value={user.surname} onChange={handleChange} id="surname" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="email" placeholder='Enter email' name='email' value={user.email} onChange={handleChange} id="email" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Constraseña</Form.Label>
            <Form.Control type="password" placeholder='Enter password' name='password' value={user.password} onChange={handleChange} id="password" />
        </Form.Group>
        </Form>
    </div>
  )
}
