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
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
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
