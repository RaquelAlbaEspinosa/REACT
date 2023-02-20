import { Children, Fragment } from 'react';
// -------------------01-import/export-------------------
// import ImportExportApp from './01-import-export/ImportExportApp';

// -------------------02-CompClass-------------------
// import CompClass from './02-classComponents/CompClass';

// -------------------03-FunctionalCompApp-------------------
import { FunctionalCompApp } from './03-functionalComponent/FunctionalCompApp';

// -------------------03-FunctionalCompApp-------------------
import { ContadorApp } from './04-useState/explicacion/ContadorApp';

// -------------------05-Booleanos-------------------
import { BooleanosUseState } from './05-booleanos/BooleanosUseState';

// -------------------06-Strings-------------------
import { StringApp } from './06-strings/StringApp';


// -------------------07-Array-------------------
import { MapeoArray } from './07-array/explicacionMapeo/MapeoArray';

// -------------------08-Objetos-------------------
import { FormularioApp } from './08-objetos/explicacion/FormularioApp';

// -------------------09-Props-------------------
// import { PropsApp } from './09-Props/explicacion/PropsApp';

// -------------------10-Children-------------------
// import { ChildrenApp } from './10-children/explicación/ChildrenApp';
// import { ModalApp } from './10-children/modal-generico/ModalApp';

// -------------------12-FormMultifile-------------------
import { FormMultifile } from "./12-formMultifile/FormMultifile";

// -------------------13-UseEffect-------------------
import { UseEffectApp } from './13-UseEffect/UseEffectApp';

// -------------------14-UseRef-------------------
import { UseRef } from './14-UseRef/UseRef';


// import './App.css'; // importamos los estilos
// ya no se usa class sino className porque ya existe un class en javaScript
// para inyectar js se hace entre llaves, aunque intentemos poner lo mínimo posible dentro del return, mejor ponerla antes.
// siempre debe retornar una sola cosa, sino rompe. meter todo dentro de un div por ejemplo
// se puede poner fragment en vez de un div pero se debe importar primero. Simplemente es un contenedor para meter todo el código que necesitemos, también se puede poner solo como <> </>. Sirve por si coge estilos los div por herencia que no los coja
// el App debe estar lo más limpio posible

// import Coche from "./Ejercicio-Class/Coche";
// import { Section } from "./Ejercicio-Function/Section";
import './App.css';
// import { TheSimpsons } from './TheSimpsons/TheSimpsons';
// import { EjercicioUseState1 } from './04-useState/ejercicio/EjercicioUseState1';
// import { EjercicioAudio } from './Ejercicio-Audio/EjercicioAudio';
// import { EjercicioBingo } from './Ejercicio-Bingo/EjercicioBingo';
// import { EjercicioFormulario } from './Ejercicio-Formulario/EjercicioFormulario';
// import { Calculadoras } from './Ejercicio-Calculadora/Calculadoras';
// import { EjercicioListaCompra } from './07-array/ejercicio-listaCompra/EjercicioListaCompra';
// import { TablaBotones } from './07-array/ejercicio-TablaBotones/TablaBotones';
// import { Emoticonos } from './07-array/ejercicio-Emoticonos/Emoticonos';
// import { AnimalForm } from './08-objetos/ejercicio-animal/AnimalForm';
// import { EjerPasoHermanos } from './09-Props/ejercicioPasoHermanos/EjerPasoHermanos';
// import { ContadorDistanciaApp } from './09-Props/ejerContDistanciaApp/ContadorDistanciaApp';
// import { NavbarApp } from './09-Props/ejercicio-navbar/NavbarApp';
// import { Cards } from './09-Props/ejercicio-cards/Cards';
// import { FormularioModalApp } from './Ejercicio-resumen/FormularioModalApp';
// import { EjercicioUsuario } from './13-UseEffect/ejercicio-usuario/EjercicioUsuario';
// import { EjerClaseUSeRef } from './14-UseRef/ejercicio-UseRef/EjerClaseUSeRef';
import { EjecicioRepasoHook } from './EjercicioRepasoHooks/EjecicioRepasoHook';

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
      {/* <EjercicioUseState1 /> */}

      {/* 05 Booleanos */}
      {/* ====================== */}
      {/* <BooleanosUseState /> */}

      {/* Ejercicio Audio */}
      {/* <EjercicioAudio /> */}

      {/* Ejercicio Bingo */}
      {/* <EjercicioBingo /> */}

      {/* 06 strings */}
      {/* ====================== */}
      {/* <StringApp /> */}

      {/* Ejercicio Formulario */}
      {/* <EjercicioFormulario /> */}

      {/* Ejercicio calculadora */}
      {/* <Calculadoras /> */}

      {/* 07 array */}
      {/* ====================== */}
      {/* <MapeoArray /> */}

      {/* Ejercicio Lista de la Compra */}
      {/* <EjercicioListaCompra /> */}

      {/* Ejercicio Tabla de Botones */}
      {/* <TablaBotones /> */}

      {/* Ejercicio Emoticonos */}
      {/* <Emoticonos /> */}

      {/* 08 objetos */}
      {/* ====================== */}
      {/* <FormularioApp /> */}

      {/* Ejercicio formulario animales */}
      {/* <AnimalForm /> */}

      {/* 09 objetos */}
      {/* ====================== */}
      {/* <PropsApp /> */}

      {/* Ejercicio Paso Hermanos */}
      {/* <EjerPasoHermanos /> */}

      {/* Ejercicio Contador */}
      {/* <ContadorDistanciaApp /> */}

      {/* 09 objetos */}
      {/* ====================== */}
      {/* <ChildrenApp /> */}

      {/* 10 Modal */}
      {/* ====================== */}
      {/* <ModalApp /> */}

      {/* Ejercicio navbar */}
      {/* <NavbarApp /> */}

      {/* Ejercicio cards */}
      {/* <Cards /> */}

      {/* Ejercicio resumen */}
      {/* <FormularioModalApp /> */}

      {/* 12 multifile */}
      {/* ====================== */}
      {/* <FormMultifile /> */}

      {/* 13 useEffect */}
      {/* ====================== */}
      {/* <UseEffectApp /> */}

      {/* Ejercicio user */}
      {/* <EjercicioUsuario /> */}

      {/* 14 UseRef */}
      {/* ====================== */}
      {/* <UseRef /> */}

      {/* Ejercicio UseRef */}
      {/* <EjerClaseUSeRef /> */}

      {/* EjercicioRepasoHooks */}
      <EjecicioRepasoHook />
      
    </Fragment>
  );
}
// importa de manera automática solo si está abierto el otro archivo cuando lo llamas

export default App;
