import React from 'react';
import { Link } from 'react-router-dom';

const OrderFoodButton = () => {
    return (
        <div>
            {/* button */}
            <div className='text-center my-5'>
                <Link to='/ourshop' >
                    <button className="btn btn-outline  border-4 mt-6">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default OrderFoodButton;