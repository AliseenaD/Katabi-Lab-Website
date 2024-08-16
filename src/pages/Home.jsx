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
    const [loadedIn, setLoadedIn] = useState(false);

    // Change load in class to start the load in
    useEffect(() => {
        setLoadedIn(true);
    }, []);

    const image = 'https://lh3.googleusercontent.com/3milkX-m2tPHzMbPZaiYETTwPooWYm9SIuEqUYX4RQ8KR7KbjZF3m4szp80hYkaOYRXKUe4u35vTHnZjpBC4vOw=w16383';
    console.log(loadedIn);
    return (
        <div className={`home-content ${loadedIn ? ' loaded' : ''}`}>
            <NavBar />
            <BannerImage image={image} title='Katabi Lab' />
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