import React from 'react';
import Banner from '../Banner/Banner';
import FoodCategory from '../FoodCategory/FoodCategory';
import Bannertwo from '../Bannertwo/Bannertwo';
import MenuItem from '../MenuItem/MenuItem';
import CallUs from '../CallUs/CallUs';
import BannerThree from '../BannerThree/BannerThree';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <FoodCategory></FoodCategory>
            <Bannertwo></Bannertwo>
            <MenuItem></MenuItem>
            <CallUs></CallUs>
            <BannerThree></BannerThree>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;