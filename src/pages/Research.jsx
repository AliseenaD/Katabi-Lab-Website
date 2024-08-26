import React from "react";
import NavBar from "../components/NavBar";
import BannerImage from "../components/BannerImage";
import Footer from "../components/Footer";
import '../styles/Research.css';
import { Fade } from "react-awesome-reveal";
import ResearchIntro from "../components/ResearchIntro";
import PlaceOne from '../assets/parkinsons.webp';
import PlaceTwo from '../assets/mit-parkinsons.webp';
import PlaceThree from '../assets/Place3.png';
import ProjectCard from "../components/ProjectCard";

export default function Reserch() {

    const projects = [
        {
            title: 'Biomarkers & Health Outcomes',
            image: PlaceOne,
            description: `We collaborate with hospitals across the US in collecting sleep studies, and use tools spanning machine learning, data visualization, and statistical analysis to discover and understand new ways of detecting and monitoring diseases. Our current projects are with Neurological diseases (Parkinson’s Disease, Alzheimer’s disease, Epilepsy), Psychiatric diseases (Major Depressive Disorder, General Anxiety Disorder) and inflammatory diseases (Cirrhosis, Crohn’s Disease)`
        }, 
        {
            title: 'Radio-Based Contactless Sensing',
            image: PlaceTwo,
            description: `Using our own proprietary technology developed by the lab, we have the ability to extract physiological signals from radio frequency signals with the use of a single wireless sensor in the home or in the hospital. This allows us to continuously monitor individuals with diseases for long periods of time without any sort of wearable sensor or necessary participation from the patient. We deploy and collect data from individuals with a variety of disease conditions (see: Discovering Biomarkers) to track their disease onset and recovery path.`
        },
        {
            title: 'Learning with Limited Supervision or Imbalanced Data',
            image: PlaceThree,
            description: `Our third area of interest involved learning in limited supervision scenarios. Specifically, we are interested in advancing the areas of representation learning and generative models to assist with learning large models where labels may be scarce. This work has applications both in the medical domain, where positive labels for certain diseases are quite scarce, or in classic applied learning tasks, in enabling more complex models that can learn better representations.`
        }
    ];

    return (
        <div className="research-content">
            <NavBar /> 
            <Fade direction="up" triggerOnce>
                <BannerImage title='Research' />
            </Fade>
            <ResearchIntro />
            <div className="cards-content">
                {
                    projects.map((project) => (
                        <ProjectCard key={project.title} project={project} /> 
                    ))
                }
            </div>
            <Footer />
        </div>
    );
}