import React, { Component, Fragment } from 'react';
import "./ImageGalery.css";

export default class ImageGalery extends Component {
  render() {
    const image1 = {
        name : "Imagen 1",
        photo : <img src="/assets/images/simpsonsImages/img1.jpg" alt="" />,
        medidas : "50 x 75",
        price : "15.00"
    }
    const image2 = {
        name : "Imagen 2",
        photo : <img src="/assets/images/simpsonsImages/img2.jpg" alt="" />,
        medidas : "50 x 75",
        price : "15.00"
    }
    const image3 = {
        name : "Imagen 3",
        photo : <img src="/assets/images/simpsonsImages/img3.jpg" alt="" />,
        medidas : "50 x 75",
        price : "15.00"
    }

    let arrayImages = [image1, image2, image3];

    return (
      <Fragment>
      <div className="imagesGalery">
            <div className='images'>
                <p>{image1.name}</p>
                {image1.photo}
                <p>{image1.medidas}</p>
                <p>Pvp: {image1.price} €</p>
            </div>
            <div className='images'>
                <p>{image2.name}</p>
                {image2.photo}
                <p>{image2.medidas}</p>
                <p>Pvp: {image2.price} €</p>
            </div>
            <div className='images'>
                <p>{image3.name}</p>
                {image3.photo}
                <p>{image3.medidas}</p>
                <p>Pvp: {image3.price} €</p>
            </div>
        
        </div>
      </Fragment>
    )
  }
}
