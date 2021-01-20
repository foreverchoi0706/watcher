import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getMovies } from "../../util/reducer";
import Card from "../Card";

import Loading from "../Loading";

import "../../styles/Movies.scss";

export default function Movies() {
  const { isLoaded, upcomingMovies, popularMovies } = useSelector(
    (reducer) => reducer.movies,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <section className="Movies">
      {isLoaded ? (
        <div className="Movies-container">
          <div className="Movies-now-playing">
            <h2>Upcoming Movies</h2>
            <div className="Movies-list">
              {upcomingMovies.data.map((movie) => (
                <Card {...movie} />
              ))}
            </div>
          </div>

          <div className="Movies-now-playing">
            <h2>Popular Movies</h2>
            <div className="Movies-list">
              {popularMovies.data.map((movie) => (
                <Card {...movie} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
}
