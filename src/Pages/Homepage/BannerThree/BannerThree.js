import React from 'react';
import './BannerThree.css'
import bannerImg from '../../../assets/home/featured.jpg';

const BannerThree = () => {
    return (
        <div className='mt-10 mx-auto backImage  bg-fixed text-white pt-8 my-20'>
            {/* heading  */}
            <section>

            </section>
            {/* others */}
            <div className="md:flex  lg:flex space-x-4  bg-slate-700 bg-opacity-70 pb-20 pt-12 px-36">
                <div className='w-1/2' >
                    <img  src={bannerImg} alt="" />
                </div>
                <div className="md:ml-10 w-1/2">
                    <p className="uppercase text-2xl font-bold">Where can i get some?</p>
                    <p>Indulge your taste buds at ARS Restaurant  Join us for a culinary adventure that will satisfy your cravings. Our talented chefs have crafted a diverse menu, featuring mouthwatering appetizers, hearty main courses, and delectable desserts. Whether you're in the mood for a juicy burger, a classic pizza, or a refreshing salad, we have something for everyone.</p>
                    <button className="btn btn-outline text-white border-4 mt-6">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default BannerThree;