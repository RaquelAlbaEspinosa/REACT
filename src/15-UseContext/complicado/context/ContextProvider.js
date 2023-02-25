import React, { createContext, useState } from 'react'

const AppContext = createContext();

export const ContextProvider = ({children}) => {

    const [state, setState] = useState([]);

  return (
    <>
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    </>
  )
}

export {AppContext};
