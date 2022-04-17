import React from 'react';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import PopularProducts from '../PopularProducts/PopularProducts';
import SelectShop from '../SelectShop/SelectShop';
import ShopHero from '../ShopHero/ShopHero';

const Shop = () => {
    return (
        <div>
           <ShopHero></ShopHero> 
           <SelectShop></SelectShop>
           <PopularProducts></PopularProducts>
           <FeaturedProducts></FeaturedProducts>
        </div>
    );
};

export default Shop;