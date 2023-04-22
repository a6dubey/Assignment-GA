
import React from 'react';

import './navbar.css';
import logo from '../../Images/gurujiLogo.png';
import navImages from '../../Images/nav';
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {

    return (
<div className="navbar" >
    
    <div className="navbar__navContainer">
        <div className="navbar__logo">
            <GiHamburgerMenu className="navbar__ham"/>
            <img src={logo} alt="logo" />
            <p>Guruji</p>
        </div>
        <div className="navbar__nav">
            <p>Home</p>
            <p>Call with Astrologer</p>
            <p>Live(Coming Soon) </p>
        </div>
        <div className="navbar__profile">
            <img src={navImages.profile} alt="logo" />
        </div>
    </div>



    <div className="navbar__title">
        <p>"Astrology for Clarity"</p>
        <article>
            Your Name is a Vedic Astrologer and has expertise in Vaastu and Mantra
            Theraphy
        </article>
    </div>

    <div className="navbar__btnContainer">
        <button className="navbar__consultBtn">Consult Now</button>
    </div>

    <div className="navbar__lowNav">
        <div className="navbar__service">
            <img src={navImages.customerCare} alt="customer-care" />
            <p>24 X 7 Customer Support </p>
        </div>
        <div className="navbar__service ">
            <img src={navImages.refundImg} alt="customer-care" className="refund" />
            <p>100% Refund if Unsatisfied</p>
        </div>
        <div className="navbar__service">
            <img src={navImages.lockImg} alt="customer-care" />
            <p>Private & Confidential</p>
        </div>
        <div className="navbar__service">
            <img src={navImages.verified} alt="customer-care" />
            <p>
            Verified <br /> Astrologer
            </p>
        </div>
        <div className="navbar__service">
            <img src={navImages.securepay} alt="customer-care" />
            <p>
            Secure <br /> Payment
            </p>
        </div>
    </div>

    <div className="navbar__cour">
        <img src={navImages.bDot} />
        <img src={navImages.lDot} />
        <img src={navImages.lDot} />
    </div>
    </div>
    );

}

export default Navbar;



