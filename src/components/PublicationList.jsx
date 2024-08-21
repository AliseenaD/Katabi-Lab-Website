import React, { useEffect, useState } from "react";
import "../styles/componentStyles.css";
import PublicationCard from "./PublicationCard";
import { Fade } from "react-awesome-reveal";

export default function PublicationList() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    fetchPublications();
  }, []);

  // Fetch the publications
  async function fetchPublications() {
    try {
      const response = await fetch("http://localhost:3000/publications");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPublications(data.articles);
    } catch (error) {
      console.error("Error fetching Google Scholar data:", error);
    }
  }

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