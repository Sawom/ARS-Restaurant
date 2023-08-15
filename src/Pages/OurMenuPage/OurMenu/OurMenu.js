import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
import useMenu from '../../../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import OrderFoodButton from '../OrderFoodButton/OrderFoodButton';
import DessertBanner from '../DessertBanner/DessertBanner';
import PizzaBanner from '../PizzaBanner/PizzaBanner';
import SaladBanner from '../SaladBanner/SaladBanner';
import SoupBanner from '../SoupBanner/SoupBanner';
import DrinksBanner from '../DrinksBanner/DrinksBanner';

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
                {/* offered menu */}
                <section className='text-center mb-10 ' > 
                    <p className='text-blue-400 font-bold' >---Don't miss---</p> <br />
                    <p className='text-xl   ' > <span className=' py-4 border-y-4 uppercase' > today's offer </span> </p>
                </section>
                <MenuCategory foodItem={offered} ></MenuCategory>
                <OrderFoodButton></OrderFoodButton> 
                {/* dessert menu */}
                <DessertBanner></DessertBanner>
                <MenuCategory foodItem={dessert} ></MenuCategory>
                <OrderFoodButton></OrderFoodButton> 
                {/* pizza menu */}
                <PizzaBanner></PizzaBanner>
                <MenuCategory foodItem={pizza} ></MenuCategory>
                <OrderFoodButton></OrderFoodButton> 
                {/* salad menu */}
                <SaladBanner></SaladBanner>
                <MenuCategory foodItem={salad} ></MenuCategory>
                <OrderFoodButton></OrderFoodButton> 
                {/* soup menu */}
                <SoupBanner></SoupBanner>
                <MenuCategory foodItem={soup} ></MenuCategory>
                <OrderFoodButton></OrderFoodButton> 
                {/* drinks menu */}
                <DrinksBanner></DrinksBanner>
                <MenuCategory foodItem={drinks} ></MenuCategory>
                <OrderFoodButton></OrderFoodButton> 
            </div>
            
        </div>
    );
};

export default OurMenu;