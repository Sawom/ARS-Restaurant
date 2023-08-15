import React from 'react';
import '../TopBanner/Banner.css';

const SaladBanner = () => {
    return (
        <div>
            <div className="hero lg:h-[450px] saladBanner my-5">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md mb-8">
                    <p className="mb-5 text-4xl font-bold">Salad Items</p>
                    <p className="mb-5 text-xl font-bold"> Would You Like to Try? </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaladBanner;