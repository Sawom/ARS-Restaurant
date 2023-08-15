import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div>
            <div className="hero lg:h-[550px] topBanner">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mb-8">
                    <p className="mb-5 text-4xl font-bold">OUR MENU</p>
                    <p className="mb-5 text-xl font-bold"> Would You Like to Try a Dish? </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;