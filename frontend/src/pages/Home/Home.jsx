import React from 'react'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'
import Banner from './Banner'
import Category from './Category';
import PopularMenu from './PopularMenu';
import Hero from './Hero';
import CallToAction from '../../components/CallToAction';
import Featured from './Featured';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Category />
            <Hero />
            <PopularMenu />
            <CallToAction />
            <Featured />
            <Reviews />
            <Footer />
        </div>
    )
}

export default Home
