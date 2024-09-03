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

export default function Home() { 
    // Google analyitcs
    useEffect(() => {
        ReactGA.initialize('G-JQVK2Z45WT');
        ReactGA.send("pageview");
      }, []);

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