import React, { useState } from 'react'
// import { GenericForm } from './components/GenericForm';
// import { Hijo } from './components/Hijo'
import { Section } from './components/Section';

export const ChildrenApp = () => {
    const nombre = "Santi";
    const [nombrico, setNombrico] = useState("Raquel");
    console.log(nombrico);
  return (
    <div>
        <h1>ChildrenApp</h1>
        <hr />
        {/* <Hijo nombrico = {nombrico} setNombrico = {setNombrico}>
            <h4>Esto lo paso por children</h4>
            <p>Si hay más de un elemento es un array</p>
        </Hijo> */}
        {/* <GenericForm>
            <input type="text" placeholder='nombre' value={nombrico} onChange={(e) => setNombrico(e.target.value)} />
            <input type="text" placeholder='email' />
            <input type="text" placeholder='password' />
        </GenericForm>
        <GenericForm>
            <input type="text" placeholder='raza' />
            <input type="text" placeholder='sexo' />
            <input type="text" placeholder='color' />
            <Hijo />
        </GenericForm> */}
        <Section>
            <h1>Título primero</h1>
        </Section>
        <Section>
            <h1>Título segundo</h1>
        </Section>
        <Section>
            <h1>Título tercero</h1>
        </Section>
        <Section>
            <h1>Título cuarto</h1>
        </Section>
    </div>
  )
}
