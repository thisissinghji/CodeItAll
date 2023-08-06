import React from "react";
import "./article.css";
const Article = ({ imgURL, externalLink, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgURL} alt="Blog_image1" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <h3> <a href={externalLink} target="_blank" rel="noopener noreferrer">
        {title}
      </a></h3>
        </div>
      </div>
    </div>
  );
};

export default Article;
