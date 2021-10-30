import React from 'react';
import Offerings from '../../Offerings/Offerings';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Offerings></Offerings>
        </div>
    );
};

export default Home;