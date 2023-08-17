import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./SearchResoult.module.css";

export const SearchResoult = () => {
  const location = useLocation();
  const { obj, type } = location.state;

  function description() {
    switch (type) {
      case "movie":
        return (
          <div>
            <div className={styles.know}>
              <span>Overview:</span> {obj.overview}
            </div>
            <div className={styles.know}>
              <span>Release date:</span> {obj.release_date}
            </div>
          </div>
        );
      case "tv":
        return (
          <div>
            <div className={styles.know}>
              <span>Overview:</span> {obj.overview}
            </div>
            <div className={styles.know}>
              <span>Release date:</span> {obj.first_air_date}
            </div>
          </div>
        );
      case "person":
        return (
          <div>
            <div className={styles.know}><span>Known for:</span></div>
            {obj.known_for.map((playIn) => (
              <div key={playIn.id} className={styles.play}>
                <div className={styles.know}>{playIn.title ?? playIn.name} </div>
              </div>
            ))}
          </div>
        );
      default:
        break;
    }
  }
  function star() {
    if (type === "tv" || type === "movie")
      return (
        <div className={styles.star}>
          <div className={styles.fivePointedStar}>
            <span>{Number(obj.vote_average).toFixed(1)}</span>
          </div>
        </div>
      );
  }
  return (
    <div>
      <div className={styles.root}>{obj.name ?? obj.title}</div>
      <div className={styles.main}>
        <div className={styles.img}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${
              obj.backdrop_path ?? obj.profile_path
            }`}
          />
          {star()}
        </div>
        <div className={styles.text}>
          <div className={styles.know}>
            <span>Type:</span> {type}
          </div>
          <div>{description()}</div>
        </div>
      </div>
    </div>
  );
};
