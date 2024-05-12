import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import NavBar from '../components/Navbar/NavBar';
// import Team from '../components/Team'


const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <Intro />
            <Services />
            <Portfolio />
            {/* <Team/> */}
            <Clients />
            <Cta/>
            <Footer />
        </>

    )
}

export default Home;

