import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";

import Loading from "../Loading";
import { getDetail } from "../../util/reducer";

import "../../styles/Detail.scss";

export default function Detail() {
  const { id } = useParams();

  const history = useHistory();

  const { isLoaded, data } = useSelector(
    (reducer) => reducer.detail,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, getDetail]);

  const handleClick = () => {
    history.goBack();
  };

  return (
    <div
      className="Detail"
      style={{
        backgroundImage:
          isLoaded && `url(${data.movie.background_image_original})`,
      }}
    >
      {isLoaded ? (
        <div className="Detail-container">
          <img
            className="Detail-img"
            src={data.movie.large_cover_image}
            alt={data.movie.title}
          />
          <div className="Detail-contents">
            <h2>{`${data.movie.title}(${data.movie.year})`}</h2>
            <ul className="Detail-genres">
              {data.movie.genres.map((genres, index) => (
                <li key={index}>{`${index ? "/" : ""}${genres}`}</li>
              ))}
            </ul>
            <p>{data.movie.description_full}</p>
            <FontAwesomeIcon
              onClick={handleClick}
              className="Detail-faBackspace"
              icon={faBackspace}
              size="3x"
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
