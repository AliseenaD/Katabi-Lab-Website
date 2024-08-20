import React, { useEffect, useState } from "react";
import '../styles/componentStyles.css';

export default function PublicationList() {
  const [publications, setPublications] = useState([]);
  const PUBLICATION_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetchPublications();
  }, []);

  
  async function fetchPublications() {
    const url = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=nst5fHgAAAAJ&sort=pubdate&api_key=${PUBLICATION_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPublications(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching Google Scholar data:', error);
    }
  }

  return (
    <div className="publist-content">
      {/* Render your publications here */}
    </div>
  );
}