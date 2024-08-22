import React from "react";
import '../styles/componentStyles.css';
import { LiaGlobeSolid } from "react-icons/lia";

export default function ArticleButton({ articleLink }) {
    return (
        <div className="button-cited">
            <a className="article-button" href={articleLink} target="_blank" ><LiaGlobeSolid className="globe-icon" size={20} />Page</a>
        </div>
    );
}