import React from 'react';
import { useState,useEffect  } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Testimonials = () => {
    const [review, setReview] = useState([]);

    // from database
    useEffect(()=>{
        fetch('https://ars-restaurant-db.vercel.app/reviews')
            .then(res=> res.json())
            .then( (data) => {
                setReview(data)
            })
            
    },[])

    return (
        <div className='mt-10 mb-10 mx-auto container' >
            {/* heading */}
            <section>

            </section>
            {/* reviews showing here */}
      <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]} className='grid grid-cols-1' >
        {
            review.map( (quote)=> <SwiperSlide 
                key={quote._id} >
                    <div className="flex flex-col items-center mx-24 my-16" >
                        <Rating style={{ maxWidth: 150 }} value={quote.rating} readOnly  /> <br />
                        <p> {quote.details} </p> <br />
                        <p className='text-xl text-yellow-600' > {quote.name} </p>
                    </div>
            </SwiperSlide> )
        }
      </Swiper>
        </div>
    );
};

export default Testimonials;