import React, { useState } from "react";
import NavBar from "../components/NavBar";
import '../styles/Home.css';
import BannerImage from "../components/BannerImage";
import WelcomeSection from "../components/WelcomeSection";
import SelectPublications from "../components/SelectPublications";


export default function Home() {
    const image = 'https://lh3.googleusercontent.com/3milkX-m2tPHzMbPZaiYETTwPooWYm9SIuEqUYX4RQ8KR7KbjZF3m4szp80hYkaOYRXKUe4u35vTHnZjpBC4vOw=w16383';
    return (
        <div>
            <NavBar />
            <BannerImage image={image} title='Katabi Lab' />
            <WelcomeSection />
            <SelectPublications />
        </div>
    );
}