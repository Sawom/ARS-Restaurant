import React from 'react';
import Showitem from '../../Homepage/Showitem/Showitem';

const MenuCategory = ({foodItem}) => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-8'>
                {
                    foodItem.map((item)=> <Showitem
                        key={item._id} item={item} 
                    ></Showitem>  )
                }
            </div>
        </div>
        

    );
};

export default MenuCategory;