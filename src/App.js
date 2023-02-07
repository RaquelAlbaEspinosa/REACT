import { Fragment } from 'react';
// -------------------01-import/export-------------------
// import ImportExportApp from './01-import-export/ImportExportApp';

// -------------------02-CompClass-------------------
// import CompClass from './02-classComponents/CompClass';

// -------------------03-FunctionalCompApp-------------------
import { FunctionalCompApp } from './03-functionalComponent/FunctionalCompApp';

// -------------------03-FunctionalCompApp-------------------
import { ContadorApp } from './04-useState/explicacion/ContadorApp';

// import './App.css'; // importamos los estilos
// ya no se usa class sino className porque ya existe un class en javaScript
// para inyectar js se hace entre llaves, aunque intentemos poner lo mínimo posible dentro del return, mejor ponerla antes.
// siempre debe retornar una sola cosa, sino rompe. meter todo dentro de un div por ejemplo
// se puede poner fragment en vez de un div pero se debe importar primero. Simplemente es un contenedor para meter todo el código que necesitemos, también se puede poner solo como <> </>. Sirve por si coge estilos los div por herencia que no los coja
// el App debe estar lo más limpio posible

import Coche from "./Ejercicio-Class/Coche";
import { Section } from "./Ejercicio-Function/Section";
import './App.css';
import { TheSimpsons } from './TheSimpsons/TheSimpsons';
import { EjercicioUseState1 } from './04-useState/ejercicio/EjercicioUseState1';

function App() {
  return (
    <Fragment>
      {/* 01 clase import/export */}
      {/* ====================== */}

      {/* <ImportExportApp /> */}

      {/* 02 clase componente tipo clase */}
      {/* ====================== */}
      {/* <CompClass /> */}

      {/* 03 clase functional component */}
      {/* ====================== */}
      {/* <FunctionalCompApp /> */}

      {/* Ejercicio Class Coche */}
      {/* <Coche /> */}
      {/* Ejercicio Function Section */}
      {/* <Section /> */}

      {/* Ejercicio los Simpsons */}
      {/* <TheSimpsons /> */}

      
      {/* 04 useState */}
      {/* ====================== */}
      {/* <ContadorApp /> */}

      {/* Ejercicio useState */}
      <EjercicioUseState1 />
      
    </Fragment>
  );
}
// importa de manera automática solo si está abierto el otro archivo cuando lo llamas

export default App;
