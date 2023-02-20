import React, { useState } from 'react'
import { Card } from './components/Card'
import './Cards.scss'

export const Cards = () => {
    const [bool1, setBool1] = useState(false);
    const [bool2, setBool2] = useState(false);
    const [bool3, setBool3] = useState(false);
  return (
    <div>
        <div className="buttons">
            <button onClick={() => {setBool1(!bool1); setBool2(false); setBool3(false)}}>Card1</button>
            <button onClick={() => {setBool2(!bool2); setBool3(false); setBool1(false)}}>Card2</button>
            <button onClick={() => {setBool3(!bool3); setBool2(false); setBool1(false)}}>Card3</button>
        </div>
        <div className="tarjeta">
            {bool1 && 
            <Card 
              title = {"Card 1"} 
              img = {"astrid1.jpg"} 
              name = {"Astrid 1"} 
              setBool = {setBool1} 
            />}
            {bool2 && 
            <Card 
              title = {"Card 2"} 
              img = {"astrid2.jpg"} 
              name = {"Astrid 2"} 
              setBool = {setBool2} 
            />}
            {bool3 && 
            <Card 
              title = {"Card 3"} 
              img = {"ElCamino.jpg"} 
              name = {"El camino"} 
              setBool = {setBool3} 
            />}
        </div>
    </div>
  )
}
