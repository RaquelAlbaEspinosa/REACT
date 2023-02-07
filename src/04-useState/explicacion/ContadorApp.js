import React, { useState } from 'react'; //hay que importar el useState, no se hace solo


export const ContadorApp = () => {

  const [saludo, setSaludo] = useState("Buenos días");

  const [num, setNum] = useState(0);
  // El estado es INMUTABLE!!!!!!! No se puede modificar el estado de manera directa, solo a través de su seteo.

  const restar = () => {
    setNum(num - 1);
  }

  const reset = () => {setNum(0)};

  const cambiarSaludo = () => {
    if(saludo == "Buenos días"){
      setSaludo("Buenas noches")
    } else {
      setSaludo("Buenos días")
    }
  }

  return (
    <>
      <h1>ContadorApp</h1>
      <hr />
      <h2>Contador: {num}</h2>

      <button onClick={restar}>-1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => setNum(num + 1)}>+1</button>
      {/* estu último funciona pero mejor de la otra forma */}

      <hr />
      <h1>{saludo}</h1>
      <button onClick={cambiarSaludo}>Cambiar</button>
    </>
  )
}
