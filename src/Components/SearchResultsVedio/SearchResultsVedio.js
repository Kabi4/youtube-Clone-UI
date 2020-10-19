import React from "react";
import "./SearchResultsVedio.css";
const SearchResultsVedio = ({
  thumbnail,
  title,
  description,
  views,
  subs,
  channel,
  timestamp,
}) => {
  return (
    <div className="searchResultsVedio">
      <img src={thumbnail} alt="thumbnail" />
      <div className="searchResultsVedio__text">
        <h3>{title}</h3>
        <p className="searchResultsVedio__text__info">
          {channel} · <span style={{padding: "2px",backgroundColor: "lightgrey", color: "red",fontWeight: "800"}}>{subs} Subscribers</span> · <span style={{padding: "2px",backgroundColor: "lightgrey", color: "skyblue",fontWeight: "800"}}>{views} Views</span> · {timestamp} ago
        </p>
        <p className="searchResultsVedio__text__description">{description>340?description.slice(0,337)+"...":description}</p>
      </div>
    </div>
  );
};

export default SearchResultsVedio;
