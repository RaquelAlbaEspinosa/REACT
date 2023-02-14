import React from 'react'

export const Hijo = ({children, nombrico, setNombrico}) => {
    
  return (
    <div>
        <h1>Holiwis, soy el hijo</h1>
        {/* {children}
        {nombrico}
        <button onClick={() => nombrico == "Raquel" ? setNombrico("Mingus") : setNombrico("Raquel")}>Cambiar nombre</button> */}
    </div>
  )
}
