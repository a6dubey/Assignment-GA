
import './review.css';

import star from '../../Images/star.png';
import reviewImages from '../../Images/Review';

function Review() {


    return (
        <div className='review-container'>
            <div className='review-head-cont'>
                <img src={star} />
                <p>User Review </p>
                <img src={star} />
            </div>
            <div className='review-white-box'>
                <div className='review-star-cont'>
                    <img src={reviewImages.reviewDarkStar} />
                    <img src={reviewImages.reviewDarkStar} />
                    <img src={reviewImages.reviewDarkStar} />
                    <img src={reviewImages.reviewDarkStar} />
                    <img src={reviewImages.reviewLightStar} />
                </div>
                    <p>Explore the Mysteries of the Universe with Our Expert Astrology Services Explore the Mysteries of the Universe with Our Expert Astrology ServicesExplore the Mysteries of the Universe with </p>
                    <div className='both-arr-container'>
                        <div className='arrow-cont'>
                            <img src={reviewImages.arrow} />
                        </div>
                        <div className='arrow-cont right'>
                            <img src={reviewImages.arrow} />
                        </div>
                    </div>
            </div>
            <div className='review-dp'>
                <img src={reviewImages.reviewDp} />
            </div>
        </div>
    );

}

export default Review;
