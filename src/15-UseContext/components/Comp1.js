import React from 'react'
import { Comp2 } from './Comp2'

export const Comp1 = () => {
  return (
    <div>
        <h2>Este es comp1 "hijo"</h2>
        <hr />
        <Comp2 />
    </div>
  )
}
