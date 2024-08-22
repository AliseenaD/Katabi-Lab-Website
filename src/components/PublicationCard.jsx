import React from "react";
import '../styles/componentStyles.css';
import ArticleButton from "./ArticleButton";

export default function PublicationCard({ article }) {
    console.log(article);
    return (
        <div className="article-content">
            <p className="article-title">{article.title}</p>
            <p className="article-authors">{article.authors}</p>
            <div className="publication-link">
                <p className="article-publication">{article.publication}</p>
                <ArticleButton articleLink={article.link} />
            </div>
        </div>
    );
}