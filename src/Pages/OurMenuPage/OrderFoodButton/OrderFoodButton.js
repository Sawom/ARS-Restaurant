import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillShopping} from 'react-icons/ai';

const OrderFoodButton = () => {
    return (
        <div>
            {/* button */}
            <div className='text-center my-5'>
                <Link to='/ourshop' >
                    <button className="btn btn-outline  border-4 mt-6"> <AiFillShopping></AiFillShopping>  ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default OrderFoodButton;