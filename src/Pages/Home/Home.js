import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import FoodItems from '../FoodItems/FoodItems';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div id="#home">
             <Banner />
             <FoodItems />
             <Works />
             <Blog />
            
        </div>
    );
};

export default Home;