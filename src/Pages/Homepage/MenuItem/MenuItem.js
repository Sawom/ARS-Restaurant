import React, { useEffect, useState } from 'react';
import Showitem from '../Showitem/Showitem';

const MenuItem = () => {
    const[menu , setMenu] = useState([]);

    {/* food menu are loaded here which category is popular */}
    useEffect( ()=>{
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const foodData =   data.filter(  (fooditem)=> fooditem.category === 'popular' )
                setMenu(foodData)
        }  )
    },[])

    return (
        <div className='container mt-10 mx-auto'>
            {/* heading */}
            <section className='text-center mb-10 ' > 
                <p className='text-blue-400 font-bold' >---Check it out---</p> <br />
                <p className='text-xl   ' > <span className=' py-4 border-y-4 uppercase' > FROM OUR MENU </span> </p>
            </section>
            {/* data showing */}
            <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8' >
                {
                    menu.map( (item)=> <Showitem
                        key={item._id} item={item}
                    ></Showitem> )
                }
            </div>
            {/* button */}
            <div className='text-center '>
                <button className="btn btn-outline  border-4 mt-6">View Full Menu</button>
            </div>
            
            
        </div>
    );
};

export default MenuItem;