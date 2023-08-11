import React from 'react';
import './BannerThree.css'
import bannerImg from '../../../assets/home/featured.jpg';

const BannerThree = () => {
    return (
        <div className='mt-10 backImage  bg-fixed text-white pt-8 my-20'>
            {/* heading  */}
            <section>

            </section>
            {/* others */}
            <div className="md:flex container mx-auto justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img className='w-50' src={bannerImg} alt="" />
                </div>
                <div className="md:ml-10">
                     <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default BannerThree;