import logo1 from "./images/image-product-1-thumbnail.jpg";
import logo2 from "./images/image-product-2-thumbnail.jpg";
import logo3 from "./images/image-product-3-thumbnail.jpg";
import logo4 from "./images/image-product-4-thumbnail.jpg";
import React, { useState } from 'react';

function Showroom() {
  const [imageSrc, setImageSrc] = useState(logo1);

  const handleImageClick = (src) => {
    setImageSrc(src);
    document.getElementById('shoe').className = src;
  };

  return (
    <div className="products">
      <div>
        <img src={imageSrc} alt='shoe' className='shoe' />
      </div>
      <div className='shoes'>
        <img
          onClick={() => handleImageClick(logo1)}
          src={logo1}
          alt='shoe'
          className='shoe1 small'
        />
        <img
          onClick={() => handleImageClick(logo2)}
          src={logo2}
          alt='shoe'
          className='shoe2'
        />
        <img
          onClick={() => handleImageClick(logo3)}
          src={logo3}
          alt='shoe'
          className='shoe3'
        />
        <img
          onClick={() => handleImageClick(logo4)}
          src={logo4}
          alt='shoe'
          className='shoe4'
        />
      </div>
    </div>
  );
}

export default Showroom;
