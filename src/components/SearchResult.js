import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { search } from "../util/reducer";

import Card from "./Card";
import Loading from "./Loading";
import "../styles/SearchResult.scss";

export default function SearchResult({ keyword }) {
  const { isLoaded, data } = useSelector(
    (reducer) => reducer.search,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(search(keyword));
  }, [keyword]);

  return (
    <div className="SearchResult">
      {isLoaded ? (
        <div className="SearchResult-container">
          <div className="SearchResult-search-result">
            <h2>Search Result</h2>
            {data.movies ? (
              <div className="SearchResult-list">
                {data.movies.map((movie) => (
                  <Card {...movie} />
                ))}
              </div>
            ) : (
              <div>{`Search results do not exist. keyword : ${keyword}`}</div>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
