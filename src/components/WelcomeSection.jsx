import React from "react";
import '../styles/componentStyles.css';
import Photo from '../assets/dina-katabi-1.jpg';
import { Fade, Slide } from "react-awesome-reveal";

export default function WelcomeSection() {
    return (
        <Fade direction="up" triggerOnce>
            <div className="welcome-content">
                <div className="welcome-description">
                    <p id="welcome-header">WELCOME</p>
                    <p>The Katabi Lab at MIT is interested in the intersection of machine learning and physiological signals, 
                        focused on discovering biomarkers for neurological and inflammatory diseases as well as new machine 
                        learning techniques for this unique intersection of health and AI. On the health side, our main focus 
                        is on sleep. Many neurological and inflammatory diseases are known to impact sleep, but their exploration in 
                        this domain has been limited due to the size and complexity of physiological signals. Our approach is to use 
                        state-of-the-art machine learning models to assist in understanding these complex signals, and developing 
                        new tools to predict, diagnose or monitor diseases that other otherwise difficult or impossible to assess 
                        in the current standard of care. We publish our work in major medical journals including Nature, Nature 
                        Medicine, Science Translational, etc. On the machine learning side, our focus in on exploring self-supervision in the Computer Vision and Natural Language Processing domains. Our work spans projects in representation learning and generative AI. ____. We publish our work in major Machine Learning conferences including NeurIPS, ICML, ECCV, etc.
                    </p>
                </div>
                <div className="welcome-image">
                    <img src={Photo} alt="Katabi" className="katabi-image" />
                </div>
            </div>
        </Fade>
    );
}