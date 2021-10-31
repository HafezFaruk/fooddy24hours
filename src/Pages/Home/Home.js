import React from 'react';
import AboudUs from '../AboudUs/AboudUs';
import Banner from '../Banner/Banner';
import FoodItems from '../FoodItems/FoodItems';
import Offiers from '../Offiers/Offiers';

const Home = () => {
    return (
        <div id="#home">
             <Banner />
             <FoodItems />
             <Offiers></Offiers>
             <AboudUs></AboudUs>
        </div>
    );
};

export default Home;