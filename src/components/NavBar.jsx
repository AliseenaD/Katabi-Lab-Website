import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/componentStyles.css';
import {ReactComponent as SVG} from '../assets/LabLogoSvg.svg';
import { Fade, Slide } from "react-awesome-reveal";

export default function NavBar() {
    const [menu, setMenu] = useState(false); // For hamburger menu functionality

    // Reset menu at certain sizes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                setMenu(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    return (
        <Fade triggerOnce direction="up">
            <div className="nav-contents">
                <Link className="link" id="katabi-link" to='/'><SVG width="50" height="50" /></Link>
                <div className="hamburger" onClick={() => setMenu(!menu)}>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
                <ul className={`nav-links ${menu ? ' open' : ''}`}>
                    <li>
                        <Link className="link" to='/research'>Research</Link>
                    </li>
                    <li>
                        <Link className="link" to='/publications'>Publications</Link>
                    </li>
                    <li>
                        <Link className="link" to='/people'>People</Link>
                    </li>
                    <li>
                        <Link className="link" to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </Fade>
        
    );
}