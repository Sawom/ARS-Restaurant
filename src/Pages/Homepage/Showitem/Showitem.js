import React from 'react';

const Showitem = ({item}) => {
    const{name,recipe,image,category,price} = item;
    return (
        <div className=' flex space-x-3'>
            <img style={{borderRadius:'0px 200px 200px 200px'}} src={image} className='w-[150px]'  alt="food" />
            <div>
                <p className='text-xl font-bold' > {name} --- </p>
                <p> {recipe} </p>
            </div>
            <p> ${price}</p>
        </div>
    );
};

export default Showitem;