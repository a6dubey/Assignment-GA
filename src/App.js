import Carousel from 'react-material-ui-carousel';

import './App.css';

import { Navbar,VideoCaraousel,Card,Review,Footer } from './component';
import cardsImage from './Images/card';

import star from './Images/star.png' ;
import tornPage from './Images/tornPage.png';
import tornDark from './Images/tornDark.png';
import leftSolutionImg from './Images/manyproblem/leftImage.png';
import rightSolutionImg from './Images/manyproblem/leftImage.png';
import rotateImg from './Images/manyproblem/rotate_img.png';
import middleSun from './Images/manyproblem/sun.png' ;
import VideoCarousel from './component/videosCaraousel/VideoCaraousel';
import sun from './Images/Videocaraousel/sun.png';
import banner from './Images/Videocaraousel/banner.png'
import darkDot from './Images/Videocaraousel/darkdot.png';
import lightDot from './Images/Videocaraousel/lightdot.png';

function App() {

let cards  = [
  { image: cardsImage.image},
  { image: cardsImage.image2},
  { image: cardsImage.image3},
  { image: cardsImage.image4},
  { image: cardsImage.image5},
  { image: cardsImage.image6},
  { image: cardsImage.image7},
  { image: cardsImage.image8},
  { image: cardsImage.image9},
]

  return (
    <div className="App">
      <Navbar />
      <div className='Video-caraousel-main'>
        <div className='sun-container'>
          <img src={sun} />
        </div>
          <div className='review-head-cont'>
            <img src={star} />
            <p>User Testimonial </p>
            <img src={star} />
          </div>
        <VideoCarousel />
        <div className='banner-container'>
            <img src={banner} />
          </div>
          <div className='dot-container'>
            <img src={darkDot} />
            <img src={lightDot} />
            <img src={lightDot} />
            <img src={lightDot} />
            <img src={lightDot} />

          </div>
      </div>
      <div className='all-cards-container'>
        <div className='premium-astro-cont'>
          <img src={star} />
          <p>Premium Astrologers</p>
          <img src={star} />
        </div>
        <div className='card-container'>
        {cards.map((card, index) => (
          <Card key={index} image={card.image}  />
        ))}
        </div>
      </div>
      <img className='torn' src={tornPage} />
      <div className='manyProblem-container'>
        <div className='premium-astro-cont'>
            <img src={star} />
            <p>Many Problems one Solution </p>
            <img src={star} />
        </div>
          <div className='mpos-content'>
            <div className='left-div'>
                <img src={leftSolutionImg} />
            </div>
            <div className='middle-div'>
                <img className='rotate' src={rotateImg} />
                <img src={middleSun} />
            </div>
            <div className='right-div'>
                <img src={rightSolutionImg} />
            </div>
          </div>
      </div>
      <Review />
      <img className='torn' src={tornDark} />
      <Footer />
    </div>
  );
}

export default App;
