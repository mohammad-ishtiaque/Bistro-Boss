import React from 'react'
import Navbar from '../../Layout/Navbar'
import Footer from '../../Layout/Footer'
import { Helmet } from 'react-helmet-async';
import Cover from '../../components/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle';
import MenuCategory from './MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Navbar />
            <Cover img={menuImg} title={"Our Menu"} description={'WOULD YOU LIKE TO TRY A DISH?'} />
            {/* main Cover */}
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"} />
            {/* Offered Menu items */}
            <MenuCategory items={offered} />
            {/* dessert menu items */}
            <MenuCategory items={dessert} title="dessert" coverImg={menuImg} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt
          ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt
          quibusdam nemo." />
            {/* pizza menu items */}
            <MenuCategory items={pizza} title="pizza" coverImg={menuImg} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt
          ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt
          quibusdam nemo." />
            {/* salad menu items */}
            <MenuCategory items={salad} title="salad" coverImg={menuImg} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt
          ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt
          quibusdam nemo." />
            {/* soup menu items */}
            <MenuCategory items={soup} title="soup" coverImg={menuImg} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt
          ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt
          quibusdam nemo." />

            <Footer />

        </div>
    )
}

export default Menu
