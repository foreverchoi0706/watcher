import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../styles/Card.scss";

export default function Card({ id, title, year, rating, medium_cover_image }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const history = useHistory();

  const handleMouseOver = (e) => {
    e.target.style.opacity = "0.7";
    setIsMouseOver(true);
  };

  const handleMouseOut = (e) => {
    e.target.style.opacity = "1";
    setIsMouseOver(false);
  };

  const handleClick = (id) => {
    history.push(`/Detail/${id}`);
  };

  return (
    <div className="Card">
      <img
        className="Card-img"
        src={medium_cover_image}
        alt={title}
        onClick={() => handleClick(id)}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <strong className="Card-name" onClick={() => handleClick(id)}>{`${
        title.length > 15 ? title.substring(0, 15) + "..." : title
      }`}</strong>
      <br />
      <span className="Card-year">{year}</span>
      {isMouseOver && (
        <strong className="Card-rating">{`⭐${rating}/10`}</strong>
      )}
    </div>
  );
}
