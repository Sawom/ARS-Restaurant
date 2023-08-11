import React from 'react';
import Banner from '../Banner/Banner';
import FoodCategory from '../FoodCategory/FoodCategory';
import Bannertwo from '../Bannertwo/Bannertwo';
import MenuItem from '../MenuItem/MenuItem';
import CallUs from '../CallUs/CallUs';
import BannerThree from '../BannerThree/BannerThree';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <FoodCategory></FoodCategory>
            <Bannertwo></Bannertwo>
            <MenuItem></MenuItem>
            <CallUs></CallUs>
            <BannerThree></BannerThree>
        </div>
    );
};

export default Home;