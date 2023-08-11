import React from 'react';
import Banner from '../Banner/Banner';
import FoodCategory from '../FoodCategory/FoodCategory';
import Bannertwo from '../Bannertwo/Bannertwo';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <FoodCategory></FoodCategory>
            <Bannertwo></Bannertwo>
        </div>
    );
};

export default Home;