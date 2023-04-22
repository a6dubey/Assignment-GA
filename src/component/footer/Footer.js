
import React from 'react';
import './footer.css';
import logo from '../../Images/gurujiLogo.png';
import socials from '../../Images/footer/socials';
import trusted from '../../Images/footer/trustedSeals';

function Footer() {

    return (
        <div className='footer-cont' >
            <div className='dp-visi'>
                <div className='footer-logo-cont'>
                    <img src={logo} alt='' />
                    <p>Guruji</p>
                </div>
                <div className='footer-cont-about'>
                    <p>About Guruji s2 to 3 lines what guruji do and how it works About Guruji s2 to 3 lines what guruji do and how it works</p>
                </div>
                <div className='social-cont'>
                    <div>
                        <img src={socials.socialBack} alt='socialbg' />
                        <img src={socials.facebookLogo} alt='facebooke' />
                    </div>
                    <div>
                        <img src={socials.socialBack} alt='socialbg' />
                        <img src={socials.instagramOuter} alt='instagrm' />
                        <img src={socials.instagramInner} alt='instagram' />
                    </div>
                    <div>
                        <img src={socials.socialBack} alt='socialbg' />
                        <img src={socials.twitterLogo} alt='twitter' />
                    </div>
                    <div>
                        <img src={socials.socialBack} alt='socialbg' />
                        <img src={socials.youtubeLogo} alt='youtube' />
                        <img src={socials.youtubePlay} alt='youtube' />
                    </div>
                </div>
                <div className='footer-trusted-cont'>
                    <p>Trusted & Seals</p>
                </div>
                <div className='trusted-logo-cont'>
                    <div>
                        <img src={trusted.trustedBack} alt='background' />
                        <img src={trusted.razorpay} alt='razorpayLogo' />
                    </div>
                    <div>
                        <img src={trusted.trustedBack} alt='background' />
                        <img src={trusted.paytmLogo} alt='paytmLogo' />
                    </div>
                </div>
                <div className='trusted-stripe'>
                    <img src={trusted.trustedBack} alt='background' />
                    <img src={trusted.stripeLogo} alt='paytmLogo' />
                </div>

                <div className='footer-middle-container'>
                    <div>
                        <div>
                            <h3>Company</h3>
                        </div>
                        <div>
                            <p>Home</p>
                            <p>Privacy Policy</p>
                            <p>T & C</p>
                            <p>Varied Payment</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Support</h3>
                        </div>
                        <div>
                            <p>Home</p>
                            <p>Privacy Policy</p>
                            <p>T & C</p>
                            <p>Varied Payment</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Collaborate</h3>
                        </div>
                        <div>
                            <p>Clever Tap</p>
                            <p>Exotel </p>
                            <p>Facebook</p>
                            <p> Quora</p>
                            <p> Google</p>
                            <p> Youtube</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Important Link</h3>
                        </div>
                        <div>
                            <p>Tarot Reader</p>
                            <p>Vedic Astrology</p>
                            <p>Palmistry</p>
                            <p>Gemology</p>
                            <p>Vastu</p>
                            <p>Numerology</p>
                        </div>
                    </div>
                </div>
                <div className='form-container'>
                <form>
                    <input placeholder='Your Name' />
                    <input placeholder='Mail ID' />
                    <textarea placeholder='Write Query' />
                    <button className='submit-btn'>Submit</button>
                </form>
                </div>
            </div>
        </div>
    );

}

export default Footer;
