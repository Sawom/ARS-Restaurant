import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import useMenu from '../../../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

const OurMenu = () => {
    const [menu] = useMenu([]);
    const offered = menu.filter( (item)=> item.category === 'offered'  );
    const dessert = menu.filter( (item)=> item.category === 'dessert' );
    const pizza = menu.filter( (item)=> item.category === 'pizza' );
    const salad = menu.filter( (item)=> item.category === 'salad' );
    const soup = menu.filter( (item)=> item.category === 'soup' );
    const drinks = menu.filter( (item)=> item.category === 'drinks' );

    return (
        <div className='' >
            {/* ourmenu page er page er shb kichu ei jaygay load kortechi */}
            <TopBanner></TopBanner>
            <div className='container mx-auto'>
                {/* load and filter menu */}
                <p>todays offer</p>
                <MenuCategory foodItem={offered} ></MenuCategory>
                <p>dessert</p>
                <MenuCategory foodItem={dessert} ></MenuCategory>
                pizza
                <MenuCategory foodItem={pizza} ></MenuCategory>
                salad
                <MenuCategory foodItem={salad} ></MenuCategory>
                soup
                <MenuCategory foodItem={soup} ></MenuCategory>
                drinks
                <MenuCategory foodItem={drinks} ></MenuCategory>
            </div>
            
        </div>
    );
};

export default OurMenu;