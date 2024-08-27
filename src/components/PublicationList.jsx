import React, { useEffect, useState } from "react";
import "../styles/componentStyles.css";
import PublicationCard from "./PublicationCard";
import { Fade } from "react-awesome-reveal";
import Loading from '../assets/source.gif';
import publicationsData from '../publications.json';

export default function PublicationList() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    setPublications(publicationsData.articles);
  }, []);


  // Group publications by year
  const publicationsByYear = publications.reduce((acc, publication) => {
    const year = publication.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(publication);
    return acc;
  }, {});

  // Ensure publications are new to old
  const sortedYears = Object.keys(publicationsByYear).sort((a,b) => parseInt(b) - parseInt(a));

  // Show loading screen if publications have not loaded in yet
  if (publications.length === 0) {
    return (
      <Fade direction="up" triggerOnce>
        <img className="loading-gif" src={Loading} alt="loading" />
      </Fade>
    );
  }

  return (
    <div className="publist-content">
      <div className="article-list">
        {sortedYears.map((year) => (
          <Fade key={year} direction="up" triggerOnce>
            <div>
              <Fade direction="up" triggerOnce>
                <p id="articles-year">{year}</p>
                {publicationsByYear[year].map((article) => (
                  <PublicationCard key={article.citation_id} article={article} />
                ))}
              </Fade>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}