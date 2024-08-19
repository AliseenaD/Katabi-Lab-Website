import React from "react";
import '../styles/componentStyles.css';
import { Link } from "react-router-dom";
import Paper1 from '../assets/Paper1.GIF';
import Paper2 from '../assets/Paper2.PNG';
import { Fade, Slide } from "react-awesome-reveal";

export default function SelectPublications() {
    const publications = [
        {
            link: 'https://people.csail.mit.edu/scyue/projects/bodycompass/',
            photo: Paper1,
            title: 'BodyCompass: Monitoring Sleep Posture with Wireless Signals',
            authors: 'Shichao Yue, Yuzhe Yang, Hao Wang, Hariharan Rahul, Dina Katabi',
            information: 'ACM International Joint Conference on Pervasive and Ubiquitous Computing (Ubicomp 2020)'
        },
        {
            link: 'https://rf-diary.csail.mit.edu/',
            photo: Paper2,
            title: 'In-Home Daily-Life Captioning Using Radio Signals',
            authors: 'Lijie Fan*, Tianhong Li*, Yuan Yuan, Dina Katabi',
            information: 'European Conference on Computer Vision (ECCV) 2020'
        }
    ];

    return (
        <Fade direction="up" triggerOnce>
            <div className="publications-content">
                <p id="publications-title">SELECT PUBLICATIONS</p>
                <div className="publication-box">
                    <ul className="publications-list">
                        {publications.map((publication) => (
                            <li key={publication.title} className="publication-item">
                                <a href={publication.link}>{publication.title}</a>
                                <img src={publication.photo} alt={publication.title} />
                                <p>{publication.authors}</p>
                                <p>{publication.information}</p>
                                <hr></hr>
                            </li>
                        ))}
                    </ul>
                    <div className="publications-button">
                        <Link className="button" to='/publications'>Publications</Link>
                    </div>
                </div>
            </div>  
        </Fade>
    );
}