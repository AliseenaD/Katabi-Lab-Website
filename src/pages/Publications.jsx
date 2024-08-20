import React from "react";
import NavBar from "../components/NavBar";
import BannerImage from "../components/BannerImage";
import { Fade } from "react-awesome-reveal";
import PublicationList from "../components/PublicationList";

export default function Publications() {
    return (
        <div className="pubpage-content">
            <NavBar />
            <Fade direction="up" triggerOnce>
                <BannerImage title='Publications' />
            </Fade>
            <PublicationList />
        </div>  
    );
}