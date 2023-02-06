import { array1, array2, user } from "./export-ejemplo"; 
// las llaves son fundamentales para las exportaciones con nombre

import dividir from "./export-ejemplo";

const ImportExportApp = () => {
    console.log("lista femenina", array1);
    console.log("lista masculina", array2);
    console.log("User", user);
    console.log("dividir", dividir);
    return(
        <>
        <h1>Soy el componente ImportExportApp</h1>
        <h2>Nombres femeninos: {array1.join(", ")}</h2>
        <h2>Nombres masculinos: {array2.join(", ")}</h2>
        <h2>Usuario: {user.name} {user.surname} - {user.email}</h2>
        <h2>División: {dividir(12, 2)}</h2>
        </>
    );
}

export default ImportExportApp;