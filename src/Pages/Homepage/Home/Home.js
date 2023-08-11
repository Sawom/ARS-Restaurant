import React from 'react';
import Banner from '../Banner/Banner';
import FoodCategory from '../FoodCategory/FoodCategory';
import Bannertwo from '../Bannertwo/Bannertwo';
import MenuItem from '../MenuItem/MenuItem';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <FoodCategory></FoodCategory>
            <Bannertwo></Bannertwo>
            <MenuItem></MenuItem>
        </div>
    );
};

export default Home;