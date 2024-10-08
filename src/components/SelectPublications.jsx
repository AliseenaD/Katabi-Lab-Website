import React from "react";
import '../styles/componentStyles.css';
import { Link } from "react-router-dom";
import Paper1 from '../assets/Paper1.GIF';
import Paper2 from '../assets/pd_selected_publication.png';
import { Fade } from "react-awesome-reveal";

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
            title: 'Artificial intelligence-enabled detection and assessment of Parkinson’s disease using nocturnal breathing signals',
            authors: 'Yuzhe Yang, Yuan Yuan, Guo Zhang, Hao Wang, Ying-Cong Chen, Yingcheng Liu, Christopher G. Tarolli, Daniel Crepeau, Jan Bukartyk, Mithri R. Junna, Aleksandar Videnovic, Terry D. Ellis, Melissa C. Lipford, Ray Dorsey, Dina Katabi',
            information: 'Nature Medicine (2022)'
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