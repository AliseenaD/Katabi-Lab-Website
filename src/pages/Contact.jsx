import React from "react";
import NavBar from "../components/NavBar";
import BannerImage from "../components/BannerImage";
import { Fade } from "react-awesome-reveal";
import {ReactComponent as SVG} from '../assets/LabLogoSvg.svg';
import MIT from '../assets/MIT-Logo.png';
import ContactContent from "../components/ContactContent";
import Footer from "../components/Footer";
import Logos from "../components/Logos";

export default function Contact() {
    return (
        <div className="contact-content">
            <NavBar />
            <Fade direction="up" triggerOnce>
                <BannerImage title='Contact Us' />
            </Fade>  
            <ContactContent />
            <Logos />
            <Footer />
        </div>
    );
}