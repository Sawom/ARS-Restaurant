import React from 'react';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import img6 from '../../../assets/home/service.jpg';

const Bannertwo = () => {
    return (
        <div  className='container mx-auto mt-20' >
            <ParallaxProvider>
                <ParallaxBanner
                    layers={[
                        { image: img6, speed: -20 },
                        {
                        speed: -10,
                        children: (
                            <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-5xl text-yellow-400 font-bold">We Provide Best Food For You!</h1>
                            </div>
                        ),
                        },
                    ]}
                    className="aspect-[2/1]"
                    />
             </ParallaxProvider>
            
        </div>
    );
};

export default Bannertwo;