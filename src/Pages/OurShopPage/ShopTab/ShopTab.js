import React from 'react';
import ShopCard from '../ShopCard/ShopCard';

const ShopTab = ({fooditems}) => {
    return (
        <div>
           <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-10 ' >
                {
                    fooditems.map( (item)=> <ShopCard
                        key={item._id} item={item}
                    ></ShopCard>  )
                }
            </div> 
        </div>
    );
};

export default ShopTab;