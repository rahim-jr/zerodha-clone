import React from 'react'
import Awards from './Awards';
import Hero from './Hero';
import Stats from './stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount'; 
import NavBar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
            <NavBar/> 
            <Hero/>  
            <Awards/> 
            <Stats/> 
            <Pricing/> 
            <Education/> 
            <OpenAccount/>
            <Footer/>              
        </>
    );
}

export default HomePage;