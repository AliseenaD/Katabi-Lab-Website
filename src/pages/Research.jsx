import React from "react";
import NavBar from "../components/NavBar";
import BannerImage from "../components/BannerImage";
import Image from '../assets/BannerImage.jpg';

export default function Reserch() {
    return (
        <div className="research-content">
            <NavBar /> 
            <BannerImage title='Research' />
        </div>
    );
}