import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import '../styles/Home.css';
import BannerImage from "../components/BannerImage";
import WelcomeSection from "../components/WelcomeSection";
import SelectPublications from "../components/SelectPublications";
import {ReactComponent as SVG} from '../assets/LabLogoSvg.svg';
import MIT from '../assets/MIT-Logo.png';
import Footer from "../components/Footer";


export default function Home() {

    return (
        <div className='home-content'>
            <NavBar />
            <BannerImage title='Katabi Lab' />
            <WelcomeSection />
            <SelectPublications />
            <div className="icon-section">
                <SVG width={200} height={200} />
                <img src={MIT} alt="MIT logo" width={270} height={180} />
            </div>
            <Footer />
        </div>
    );
}