import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';

// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../components/SectionTitle';

const Category = () => {
    return (
        <>
            <section className='max-w-screen-xl mx-auto'>
                <SectionTitle heading={"Order Online"} subHeading={"From 11:00am to 10:00pm"} />
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='mb-16'>
                        <img src={slide1} alt="" />
                        <h3 className='text-4xl text-center text-white uppercase -mt-16'>
                            Salads
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" />
                        <h3 className='text-4xl text-center text-white uppercase -mt-16'>
                            Pizza
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" />
                        <h3 className='text-4xl text-center text-white uppercase -mt-16'>
                            Soups
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" />
                        <h3 className='text-4xl text-center text-white uppercase -mt-16'>
                            Dessert
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide className='mb-16'>
                        <img src={slide1} alt="" />
                        <h3 className='text-4xl text-center text-white uppercase -mt-16'>
                            Salads
                        </h3>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}

export default Category
