import React, { useEffect, useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-8 max-w-screen-xl mx-auto'>
            <SectionTitle heading={"Testimonials"} subHeading={"What Our Clients Say"} />


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='flex flex-col items-center mx-24 my-16'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                                className='mb-4'
                            />
                           <FaQuoteLeft className='text-4xl'/>
                            <p className='py-4'>{review.details}</p>
                            <h3 className='text-2xl text-yellow-500'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </section>
    )
}

export default Reviews
