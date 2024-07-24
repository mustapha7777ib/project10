import logo1 from "./images/image-product-1-thumbnail.jpg";
import logo2 from "./images/image-product-2-thumbnail.jpg";
import logo3 from "./images/image-product-3-thumbnail.jpg";
import logo4 from "./images/image-product-4-thumbnail.jpg";
import logo5 from "./images/cart.svg";
import React, { useState } from 'react';

function Showroom() {
  const [imageSrc, setImageSrc] = useState(logo1);
  const [clickedImage, setClickedImage] = useState(null);
  const [click, setclick]= useState(0);

  const clickHandler1 = () => {
    setclick(click+1);
    console.log(`Clicked ${click} times.`);
  }
  const clickHandler2 = () => {
    if (click > 0) {

      setclick(click-1);
      console.log(`Clicked ${click} times.`);
    }
    else{
      setclick(click-1);
      console.log(`Clicked ${click} times.`);
    }
  }

  const handleImageClick = (src) => {
    setImageSrc(src);
    setClickedImage(src);
  };
  
  const point = <img className="cart" src={logo5}/>
  return (
    <>
    <div className="flex">
      <div className="products">
        <div>
          <img src={imageSrc} alt='shoe' className='shoe' />
        </div>
        <div className='shoes'>
          <img
            onClick={() => handleImageClick(logo1)}
            src={logo1}
            alt='shoe'
            className={`shoess ${clickedImage === logo1 ? 'clicked' : ''}`} 
          />
          <img
            onClick={() => handleImageClick(logo2)}
            src={logo2}
            alt='shoe'
            className={`shoess ${clickedImage === logo2 ? 'clicked' : ''}`} 
          />
          <img
            onClick={() => handleImageClick(logo3)}
            src={logo3}
            alt='shoe'
            className={`shoess ${clickedImage === logo3 ? 'clicked' : ''}`} 
          />
          <img
            onClick={() => handleImageClick(logo4)}
            src={logo4}
            alt='shoe'
            className={`shoess ${clickedImage === logo4 ? 'clicked' : ''}`} 
          />
        </div>
      </div>
      <div className="info">
        <p className="companyname">SNEAKER COMPANY</p>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className="body">These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className="price">
          <p className="cutprice">$125.00</p>
          <p className="discount">50%</p>
        </div>
        <p className="newprice"><s>$250.00</s></p>
        <div className="selection">
          <div className="amount">
            <p className="minus" onClick={() => clickHandler2()}>-</p>
            <p className="number">{click}</p>
            <p className="plus" onClick={() => clickHandler1()}>+</p>
          </div>
          <button className="cartcontainer"> 
          <p>{point}</p>
          <p className="text">Add to cart</p>
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Showroom;
