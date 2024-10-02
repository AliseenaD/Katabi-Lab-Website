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
import { Helmet } from 'react-helmet';


export default function Home() { 
    // Google analyitcs
    useEffect(() => {
        ReactGA.initialize('G-JQVK2Z45WT');
        ReactGA.send("pageview");
      }, []);

    return (
        <div className='home-content'>
            <Helmet>
                <meta name="ahrefs-site-verification" content="eede26ab7d2cdee97ae9a9947776a3c8fccc774b871481e0d0265add8f985986" />
            </Helmet>

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