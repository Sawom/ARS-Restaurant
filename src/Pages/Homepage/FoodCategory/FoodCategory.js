import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

const FoodCategory = () => {
    return (
        <div className='container mx-auto' >
            {/* swiper from react awesome component */}
             <section className='text-center mb-10 ' > 
                <p className='text-blue-400 font-bold' >---From 11:00am to 10:00pm---</p> <br />
                <p className='text-xl   ' > <span className=' py-4 border-y-4 uppercase' > Order Online </span> </p>
             </section>
             <Swiper 
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="food" />
            <p className='text-2xl text-center uppercase -mt-12 text-green-500 font-bold' > Salad</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="food" />
            <p className='text-2xl text-center uppercase -mt-12 text-green-500 font-bold' > Pizza</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="food" />
            <p className='text-2xl text-center uppercase -mt-12 text-green-500 font-bold' > Soup</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="food" />
            <p className='text-2xl text-center uppercase -mt-12 text-green-500 font-bold' > desert</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="food" />
            <p className='text-2xl text-center uppercase -mt-12 text-green-500 font-bold' > vegetable</p>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default FoodCategory;