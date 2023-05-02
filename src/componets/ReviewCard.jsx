import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const ReviewCard = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://magic-recipe-server-humayun63.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <Carousel autoPlay centerMode infiniteLoop stopOnHover showThumbs={false}>
                {
                    reviews.map(review => (
                        <div key={review.id} className='bg-orange-300 m-4 p-6 rounded-md text-center'>
                            <div className='w-1/2  mx-auto'>
                                <img src={review.image} alt="" className='h-64 w-32 rounded-md mx-auto my-4' />
                            </div>
                            <h4 className='text-2xl font-medium my-4'>{review.name}</h4>
                            <p>{review.review}</p>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default ReviewCard;