import React from 'react'
import UserContext from '../../context/UserContext'
import PetContext from '../../context/PetContext'
import ClaveContext from '../../context/ClaveContext'
import { Hijo1 } from './components/Hijo1'
import { Hijo2 } from './components/Hijo2'

export const EjerUseContext = () => {
    const user = {
        nombre: "Juan",
        email: "juan@gmail.com",
        password: "1234"
    }
    
    

  return (
    <div>
        <h1>EjerUseContext</h1>
        <hr />
        <UserContext.Provider value={user}>
                <Hijo1 />
                <Hijo2 />
        </UserContext.Provider>
        
    </div>
  )
}
