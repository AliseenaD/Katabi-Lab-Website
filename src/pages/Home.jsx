import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import '../styles/Home.css';
import BannerImage from "../components/BannerImage";
import WelcomeSection from "../components/WelcomeSection";
import SelectPublications from "../components/SelectPublications";
import Footer from "../components/Footer";
import { Fade } from "react-awesome-reveal";
import Logos from "../components/Logos";
import ReactGA from "react-ga4";

//ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);

export default function Home() { 
    // GOOGLE ANALYTICS  
    /*
    console.log("GA Measurement ID:", process.env.REACT_APP_GA_MEASUREMENT_ID);
    // Track page views
    useEffect(() => {
        // Send pageview with a custom path
        ReactGA.send({ hitType: "pageview", page: "/home" });
    }, []);
    */

    return (
        <div className='home-content'>
            <NavBar />
            <Fade triggerOnce direction="up">
                <BannerImage title='Katabi Lab' />
            </Fade>
            <WelcomeSection />
            <SelectPublications />
            <Logos />
            <Footer />
        </div>
    );
}