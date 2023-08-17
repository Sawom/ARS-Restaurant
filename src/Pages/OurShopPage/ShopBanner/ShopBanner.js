import React from 'react';
import './ShopBanner.css'

const ShopBanner = () => {
    return (
        <div>
            <div className="hero lg:h-[550px] mb-8 shopBanner">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mb-8">
                    <p className="mb-5 text-4xl font-bold">OUR SHOP</p>
                    <p className="mb-5 text-xl font-bold"> Would You Like to Try a Dish? </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopBanner;