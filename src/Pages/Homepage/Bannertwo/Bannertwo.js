import React from 'react';
import './Bannertwo.css'

const Bannertwo = () => {
    return (
        <div  className=' mt-10 mx-auto container backgroundImage bg-fixed text-white pt-8 my-20' >
            {/* parallax effect. created manually */}
             <div className=" bg-slate-600 bg-opacity-70 pb-20 pt-22 p-36">
                <p className='text-3xl text-center font-bold ' >We Provide Best Food For You!</p>
            </div>
            
        </div>
    );
};

export default Bannertwo;