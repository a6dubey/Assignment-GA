import React from 'react';

import './card.css';

import cardHues from '../../Images/card/cardhues';

function Card(props) {
    let image = props.image ;


    return (
        <div className='caraousel'>
            <div className='exp-on'>
                <p >10+ Years</p>
                <img className='uphue' src={cardHues.downHue} alt='downhue' />
                <img className='upsidehue' src={cardHues.sideHue} alt='sidehue' />
                <div className='status-cont'>
                        <img src={cardHues.statusbg} />
                        <img className='online' src={cardHues.online} />
                </div>    
                <span > online</span>
            </div> 
            <div className='detail-box'>
                <p className='title'>Astrologer Ramraj</p>
                <div >
                    <p > Specialities</p>
                    <span> Love,Business,Life</span>
                </div>
                <div>
                    <p > Skills</p>
                    <span > Vedic Astrology,Kundali,</span>
                </div>
            </div>    
            <div className='price-box'>
                <p>Price</p>
                <p className='price'>₹10 <span>/min</span> </p>
            </div>           
            <div className='card'>
                <img className='sidehue' src={cardHues.sideHue} alt='sidehue' />
                <img className='downhue' src={cardHues.downHue} alt='downhue' />
                <img className='displayPic' src={image} alt='hue' />
                <img className='contact' src={cardHues.contactGroup} alt='hue' />
            </div>
            <p className='hidden'>i</p>
        </div>
    );

}

export default Card;
