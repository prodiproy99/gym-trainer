import React from 'react';
import Banner from '../Banner/Banner'; 
import GymTrainer from '../GymTrainer';
import Services from '../Services/Services'; 

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <GymTrainer></GymTrainer>
            <Services></Services> 
        </div>
    );
};

export default Home;