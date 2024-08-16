import React from "react";
import '../styles/componentStyles.css';

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
                <ul className="publications-list">
                    {publications.map((publication) => (
                        <li className="publication-item">
                            <a href={publication.link}></a>
                            <p>{publication.title}</p>
                            <p>{publication.authors}</p>
                            <p>{publication.information}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}