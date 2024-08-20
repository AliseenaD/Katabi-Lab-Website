import React from "react";
import '../styles/componentStyles.css';
import {ReactComponent as SVG} from '../assets/LabLogoSvg.svg';
import MIT from '../assets/MIT-Logo.png';
import CSAIL from '../assets/csailLogo.png';
import { Fade } from "react-awesome-reveal";

export default function Logos() {
    return (
        <Fade direction="up" triggerOnce>
            <div className="icon-section">
                <SVG width={200} height={200} />
                <img src={MIT} alt="MIT logo" width={270} height={180} />
                <img src={CSAIL} alt="CSAIL logo" width={270} height={180} />
            </div>
        </Fade>
    );
}