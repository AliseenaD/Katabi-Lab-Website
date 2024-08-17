import React from "react";
import '../styles/componentStyles.css';

export default function Profiles({ individuals }) {
    return (
        <div className="profiles-content">
            <div className="group-title">
                <p>{individuals.title}</p>
            </div>
            <div className="individuals-content">
                <ul className="profile-list">
                    {
                        individuals.content.map((individual) => (
                            <li key={individual.name}>
                                <div className="list-photo">
                                    <img src={individual.image} alt={individual.name} width={300} />
                                </div>
                                <div className="list-description">
                                    <p id="list-name">{individual.name}</p>
                                    <p id="list-bio">{individual.bio}</p>
                                    <p id="list-email">email: {individual.email}</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}