import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "../styles/Navi.scss";

export default function Navi() {
  const [isClicked, setIsClicked] = useState({
    Movies: false,
    Tv: false,
    Search: false,
  });

  const history = useHistory();

  const handleClick = (e) => {
    const divsion = e.target.className;
    setIsClicked({
      [divsion]: true,
    });
    history.push(`/${divsion}`);
  };

  const style = (division) => {
    return {
      borderBottom: `3px solid ${
        division ? "var(--navi-line-color)" : "var(--bg-color)"
      }`,
    };
  };

  const { Movies, TV, Search } = isClicked;

  return (
    <nav className="Navi">
      <ul>
        <li className="" style={style()} onClick={handleClick}>
          Home
        </li>
        <li className="Movies" style={style(Movies)} onClick={handleClick}>
          Movies
        </li>
        <li className="TV" style={style(TV)} onClick={handleClick}>
          TV
        </li>
        <li className="Search" style={style(Search)} onClick={handleClick}>
          Search
        </li>
      </ul>
    </nav>
  );
}
