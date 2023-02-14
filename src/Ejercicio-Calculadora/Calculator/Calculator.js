import React, { useState } from 'react'
import "./Calculator.scss"

export const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [res, setRes] = useState("");
    const [operator, setOperator] = useState("+");
    const [bool, setBool] = useState(false);

    const operate = () => {
        if(operator == "/" && num2 == 0){
            alert("No se puede dividir por 0");
            setBool(false);
        } else if (isNaN(num1) || isNaN(num2)) {
            setBool(true);
        } else {
            let parseNum1 = parseInt(num1);
            let parseNum2 = parseInt(num2);
            switch(operator){
                case "+":
                    setRes(parseNum1 + parseNum2);
                break;
                case "-":
                    setRes(parseNum1 - parseNum2);
                break;
                case "/":
                    setRes(parseNum1 / parseNum2);
                break;
                case "*":
                    setRes(parseNum1 * parseNum2);
                break;
            }
            setBool(false);
        }
    }

    const clean = () => {
        setNum1("");
        setNum2("");
        setOperator("+");
        setRes("");
        setBool(false);
    }

  return (
    <div className='calculator'>
        <h1>Carlculadora</h1>
        <hr />
        <div className="numbers">
            <input 
                type="text"
                onChange={(e) => setNum1(e.target.value)}
                value={num1}
            />
            <p className='operator'>{operator}</p>
            <input 
                type="text"
                onChange={(e) => setNum2(e.target.value)}
                value={num2}
            />
        </div>
        <div className="operators">
            <button onClick={() => setOperator("+")} className={operator === "+" && "selected"}>+</button>
            <button onClick={() => setOperator("-")} className={operator === "-" && "selected"}>-</button>
            <button onClick={() => setOperator("/")} className={operator === "/" && "selected"}>/</button>
            <button onClick={() => setOperator("*")} className={operator === "*" && "selected"}>*</button>
        </div>
        <div className="buttons">
            <button onClick={operate}>Calcular</button>
            <button onClick={clean}>Limpiar</button>
        </div>
        {bool && <p className='warning'>Pon números, por favor</p>}
        <h2>Resultado: {res}</h2>
    </div>
  )
}
