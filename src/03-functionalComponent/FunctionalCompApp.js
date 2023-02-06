import React from 'react';
import { ComponentFoto } from './components/CompFoto/CompFoto';
import { Button } from './components/Button/Button';
import { Form } from './components/Form/Form';

export const FunctionalCompApp = () => {
    return(
        // foto, botón y formulario
        <>
            <h1>Hola, soy el segundo Functional Component</h1>
            <ComponentFoto />
            <Button />
            <Form />
        </>
    );
}