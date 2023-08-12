import React from 'react';
import './BannerThree.css'
import bannerImg from '../../../assets/home/featured.jpg';

const BannerThree = () => {
    return (
        <div className='mt-10 mx-auto backImage bg-fixed text-white pt-8 my-20'>
            
            <div className=" container mx-auto bg-slate-700 bg-opacity-70 pb-20 pt-12 px-10">
                    {/* heading */}
                <section className='text-center mb-10 ' > 
                    <p className='text-blue-400 font-bold' >---Check it out---</p> <br />
                    <p className='text-xl   ' > <span className=' py-4 border-y-4 uppercase' > FROM OUR MENU </span> </p>
                </section>
                {/* others */}
                <div className='md:flex space-x-4'>
                    <div className='w-1/2' >
                        <img  src={bannerImg} alt="" />
                    </div>
                    <div className=" w-1/2">
                        <p className="uppercase text-2xl font-bold">Where can i get some?</p> <br />
                        <p>Indulge your taste buds at ARS Restaurant  Join us for a culinary adventure that will satisfy your cravings. Our talented chefs have crafted a diverse menu, featuring mouthwatering appetizers, hearty main courses.</p>
                        <button className="btn btn-outline text-white border-4 mt-6">Order Now</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default BannerThree;