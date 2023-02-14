import React, { useState } from 'react';
import "./TablaBotones.scss";

export const TablaBotones = () => {
    const [bool, setBool] = useState(false);
    const[client, setClient] = useState("");
    const[clientList, setClientList] = useState([]);

    const addClient = () => {
        setClientList([...clientList, client]);
        setClient("");
    }

    const deleteClient = (index) => {
        let clientListProvisional = clientList.map(c => c);
        clientListProvisional.splice(index, 1);
        console.log(clientListProvisional);
        setClientList(clientListProvisional);
    }

  return (
    <div>
        <div className="entrada">
            <h1>Tabla con Botones</h1>
            <hr />
            <button onClick={() => setBool(!bool)} className={bool ? "Cerrar" : "Abrir"}>{bool ? "Cerrar" : "Abrir"}</button>
        </div>
        {bool && 
            <div className='abierto'>
                <h1>Tabla de clientes</h1>
                <input 
                    type="text" 
                    placeholder='Cliente' 
                    onChange={(e) => setClient(e.target.value)}
                    value={client}
                />
                <button onClick={addClient}>Añadir cliente</button>
                <table>
                    <tbody>
                        <tr className='principal'>
                            <td>Id</td>
                            <td>Nombre</td>
                            <td>Borrar</td>
                        </tr>
                        {clientList.map((c, index) => {
                            return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{c}</td>
                                <td><button onClick={() => deleteClient(index)}>Borrar</button></td>
                            </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        }
    </div>
  )
}
