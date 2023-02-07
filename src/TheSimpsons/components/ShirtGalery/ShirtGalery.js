import React, { Component, Fragment } from 'react';
import "./ShirtGalery.css";

export default class ShirtGalery extends Component {
  render() {
    // él hace cada tarjeta por separado
    let cami1 = {
        name : "Camiseta1",
        image : <img src="/assets/images/simpsonsImages/camis1.jpg" alt="" />,
        price : "20.00"
    }
    let cami2 = {
        name : "Camiseta2",
        image : <img src="/assets/images/simpsonsImages/camis2.jpg" alt="" />,
        price : "20.00"
    }
    let cami3 = {
        name : "Camiseta3",
        image : <img src="/assets/images/simpsonsImages/camis3.jpg" alt="" />,
        price : "20.00"
    }
    let cami4 = {
        name : "Camiseta4",
        image : <img src="/assets/images/simpsonsImages/camis4.jpg" alt="" />,
        price : "20.00"
    }
    let cami5 = {
        name : "Camiseta5",
        image : <img src="/assets/images/simpsonsImages/camis5.jpg" alt="" />,
        price : "20.00"
    }
    return (
      <Fragment>
        <div className="camisGalery">
            <div className='camis'>
                <p>{cami1.name}</p>
                {cami1.image}
                <p>Pvp: {cami1.price} €</p>
            </div>
            <div className='camis'>
                <p>{cami2.name}</p>
                {cami2.image}
                <p>Pvp: {cami2.price} €</p>
            </div>
            <div className='camis'>
                <p>{cami3.name}</p>
                {cami3.image}
                <p>Pvp: {cami3.price} €</p>
            </div>
            <div className='camis'>
                <p>{cami4.name}</p>
                {cami4.image}
                <p>Pvp: {cami4.price} €</p>
            </div>
            {/* <div className='camis'>
                <p>{cami5.name}</p>
                {cami5.image}
                <p>Pvp: {cami5.price} €</p>
            </div> */}
        
        </div>
      </Fragment>
    )
  }
}
