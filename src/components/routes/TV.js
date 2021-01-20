import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getTv } from "../../util/reducer";
import Card from "../Card";

import Loading from "../Loading";

import "../../styles/Tv.scss";

export default function Tv() {
  const { isLoaded, upcomingTv, popularTv } = useSelector(
    (reducer) => reducer.tv,
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTv());
  }, [dispatch]);

  return (
    <section className="Tv">
      {isLoaded ? (
        <div className="Tv-container">
          <div className="Tv-now-playing">
            <h2>Popular Shows</h2>
            <div className="Tv-list">
              {upcomingTv.data.map((movie) => (
                <Card key={movie.id} {...movie} />
              ))}
            </div>
          </div>

          <div className="Tv-now-playing">
            <h2>Airing Today</h2>
            <div className="Tv-list">
              {popularTv.data.map((movie) => (
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
