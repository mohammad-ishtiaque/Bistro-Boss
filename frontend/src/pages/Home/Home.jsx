import React from 'react'
import Footer from '../../Layout/Footer'
import Navbar from '../../Layout/Navbar'
import Banner from './Banner'
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Category />
            <Footer />
        </div>
    )
}

export default Home
