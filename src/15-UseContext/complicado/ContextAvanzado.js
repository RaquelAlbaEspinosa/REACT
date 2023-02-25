import React from 'react'
import { ContextProvider } from './context/ContextProvider'
import { Home } from './Home'

export const ContextAvanzado = () => {
  return (
    <div>
        <ContextProvider>
            <Home />
        </ContextProvider>
    </div>
  )
}
