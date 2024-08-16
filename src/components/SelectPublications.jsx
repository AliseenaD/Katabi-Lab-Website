import React from "react";
import '../styles/componentStyles.css';
import { Link } from "react-router-dom";

export default function SelectPublications() {
    const publications = [
        {
            link: 'https://people.csail.mit.edu/scyue/projects/bodycompass/',
            title: 'BodyCompass: Monitoring Sleep Posture with Wireless Signals',
            authors: 'Shichao Yue, Yuzhe Yang, Hao Wang, Hariharan Rahul, Dina Katabi',
            information: 'ACM International Joint Conference on Pervasive and Ubiquitous Computing (Ubicomp 2020)'
        },
        {
            link: 'https://rf-diary.csail.mit.edu/',
            title: 'In-Home Daily-Life Captioning Using Radio Signals',
            authors: 'Lijie Fan*, Tianhong Li*, Yuan Yuan, Dina Katabi',
            information: 'European Conference on Computer Vision (ECCV) 2020'
        }
    ];

    return (
        <div className="publications-content">
            <div className="publication-box">
                <p id="publications-title">Select Publications</p>
                <ul className="publications-list">
                    {publications.map((publication) => (
                        <li key={publication.title} className="publication-item">
                            <a href={publication.link}>{publication.title}</a>
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
    );
}