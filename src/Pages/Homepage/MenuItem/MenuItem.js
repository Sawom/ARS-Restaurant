import React from 'react';
import Showitem from '../Showitem/Showitem';
import {FaRegListAlt} from 'react-icons/fa';
import useMenu from '../../../Hooks/useMenu';
import { Link } from 'react-router-dom';

const MenuItem = () => {
    const[menu] = useMenu([]);
    // usemenu hook theke anche data gula. fetch hoiche usemenu hook e.
    // pore filter kore popular gula ekhane dekhaiche
    const popular = menu.filter( (item)=> item.category === 'popular' )

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
                    popular.map( (item)=> <Showitem
                        key={item._id} item={item}
                    ></Showitem> )
                }
            </div>
            {/* button */}
            <div className='text-center '>
                <Link to='/ourmenu' >
                    <button className="btn btn-outline  border-4 mt-6"> <FaRegListAlt></FaRegListAlt> View Full Menu</button>
                </Link>
                
            </div>
            
            
        </div>
    );
};

export default MenuItem;