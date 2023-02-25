import { useState } from "react";


export const useContador = (valorInicial=0) => { //para poner qué pasaría si no hay valorInicial

    const [contador, setContador] = useState(valorInicial);

    const restar = () => {
        setContador(contador - 1);
    }

    const sumar = () => {
        setContador(contador + 1);
    }

    const reset = () => {
        setContador(0);
    }
    
  return {contador, sumar, restar, reset}
}
