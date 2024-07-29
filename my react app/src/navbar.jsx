import React from 'react';
import logo from "./images/icon-cart.svg";
import logo1 from "./images/image-avatar.png";
import { useState } from 'react';


function Navbar(props) {
    const [classs,setclass] = useState('cartbody11')
    const [classs2,setclass2] = useState('cartbody112')
    var a = props.click;
    var c = typeof a;
    var b = props.imageSrc;
    const handleclick = () => {
        if (a == 0){
            console.log(c);
            setclass2('cartbody111')
        }
        else if (a != 0 && classs == 'cartbody1' ){
            setclass('cartbody11')
            setclass2('cartbody112')
        }
        else if (a != 0 && classs == 'cartbody11' ){
            setclass('cartbody1')
            setclass2('cartbody112')
        }
        else{
            setclass('cartbody1')
            setclass2('cartbody112')
        }
    }
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
            <div className='cartbody'>
                <img id='cart' src={logo} alt="Cart Icon" onClick={() => handleclick()}/>
                <div className={classs}>
                    <p>Cart</p>< hr className='line'/>
                    <div className='cartbody2'>
                        <img className='logoo' src={b}/>
                        <div className='cartbody3'>
                            <p className='text1'>Fall Limited Edition Sneakers</p>
                            <div>
                                <p>$125 x {a} <span className='okk'>${125 * a}</span></p>
                            </div>
                            <button className= 'buttonn'>
                                <p className='buttonn1'>Checkout</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={classs2}>
                    <p>Cart</p>< hr className='line'/>
                    <p className='empty'>Your cart is empty</p> 
                </div>

            </div>
            <img id='avatar' src={logo1} alt="Avatar Icon" />
        </div>
        <div className='random'>
            <hr/>
        </div>
        </>
    );
}

export default Navbar;
