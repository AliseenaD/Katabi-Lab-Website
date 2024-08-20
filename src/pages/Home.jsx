import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import '../styles/Home.css';
import BannerImage from "../components/BannerImage";
import WelcomeSection from "../components/WelcomeSection";
import SelectPublications from "../components/SelectPublications";
import Footer from "../components/Footer";
import { Fade, Slide } from "react-awesome-reveal";
import Logos from "../components/Logos";


export default function Home() {

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