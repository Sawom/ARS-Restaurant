import React from 'react';
import ShopBanner from '../ShopBanner/ShopBanner';
import useMenu from '../../../Hooks/useMenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopTab from '../ShopTab/ShopTab';

const OurShop = () => {
    const [menu] = useMenu([]);
    const offered = menu.filter( (item)=> item.category === 'offered'  );
    const dessert = menu.filter( (item)=> item.category === 'dessert' );
    const pizza = menu.filter( (item)=> item.category === 'pizza' );
    const salad = menu.filter( (item)=> item.category === 'salad' );
    const soup = menu.filter( (item)=> item.category === 'soup' );
    const drinks = menu.filter( (item)=> item.category === 'drinks' );

    return (
        <div>
            <ShopBanner></ShopBanner>
            <section className='container mx-auto' >
                 <Tabs>
                    <TabList>
                        <Tab> Dessert </Tab>
                        <Tab> Pizza </Tab>
                        <Tab> Salad </Tab>
                        <Tab> Soup </Tab>
                        <Tab> Drinks </Tab>
                    </TabList>
                    {/* 1 */}
                    <TabPanel>
                        <ShopTab fooditems={dessert} ></ShopTab>
                    </TabPanel>
                    {/* 2 */}
                    <TabPanel>
                        <ShopTab fooditems={pizza} ></ShopTab>
                    </TabPanel>
                    {/* 3 */}
                    <TabPanel>
                        <ShopTab fooditems={salad} ></ShopTab>
                    </TabPanel>
                    {/* 4 */}
                    <TabPanel>
                        <ShopTab fooditems={soup} ></ShopTab>
                    </TabPanel>
                    {/* 5 */}
                    <TabPanel>
                        <ShopTab fooditems={drinks} ></ShopTab>
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    );
};

export default OurShop;