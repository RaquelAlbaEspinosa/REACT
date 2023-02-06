// esto es un módulo, lógica de javaScript, no va en mayúscula porque no es un componente

// 1- exportaciones con nombre antes de la sentencia

// export const PRUEBA1 = 2000;

// 2- exportaciones con nombre después de la sentencia

// const PRUEBA2 = 3000;

// 3- exportación por defecto, uno por archivo (módulo).

// const PRUEBA3 = "Este es el texto que exporto por defecto";

// export { PRUEBA2 };
// export default PRUEBA3;
// por defecto es sin llaves


// a) exportar con nombre antes de la sentencia un array con 3 nombres femeninos y pintarlos en nuestro componente ImportExportApp.

export const array1 = ["María", "Natalia", "Nazaret"];

// b) exportar con nombre después de la declaración de un array con 3 nombres masculinos y pintarlos en nuestro componente ImportExportApp.

const array2 = ["José", "Manuel", "Pedro"];
export { array2 };

// c) exportar por defecto antes de la sentencia una función que, pasados dos parámetros nos devuelva el resultado de su división y pintarlos.

export default function dividir (a, b) {
    return a / b;
}

// d) exportar antes de la sentencia un objeto que se llame User con 3 propiedades: name, surname, email. Y pintarlo.

export const user = {
    name: "Pedro",
    surname: "Montero",
    email: "pedrito123@gmail.com"
};