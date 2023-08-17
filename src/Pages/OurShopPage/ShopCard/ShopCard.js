import React from 'react';

const ShopCard = ({item}) => {
    const{name,recipe,image,category,price} = item;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="food" /></figure>
                <p className='absolute right-0 bg-black text-white mr-4 mt-4 px-4 ' > ${price} </p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                         <button className="btn btn-outline  border-4 mt-6">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;