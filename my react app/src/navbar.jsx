import React from 'react';
import logo from "./images/icon-cart.svg";
import logo1 from "./images/image-avatar.png";


function Navbar() {

    return (
        <>
        <div className="flex1">
            <p id='company-name'>sneakers</p>
            <div className='ind'>
                <p className='headings'>Collections</p><hr className='hoverss'/>
            </div>
            <div className='ind'>
                <p className='headings'>Men</p><hr className='hoverss'/>
            </div>
            <div className='ind'>
                <p className='headings'>Women</p><hr className='hoverss'/>
            </div>
            <div className='ind'>
                <p className='headings'>About</p><hr className='hoverss'/>
            </div>
            <div className='ind'>
                <p className='headings contact'>Contact</p><hr className='hoverss'/>
            </div>
            <img id='cart' src={logo} alt="Cart Icon" />
            <img id='avatar' src={logo1} alt="Avatar Icon" />
        </div>
        <div className='random'>
            <hr/>
        </div>
        </>
    );
}

export default Navbar;
