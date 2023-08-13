import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styles from "./SearchResoult.module.css"

export const SearchResoult = () => {
  const location = useLocation();
  const { obj } = location.state;

  console.log(obj);
  return (
    <div>
      <div className={styles.root}>{obj.name ?? obj.title}</div>
      <div className={styles.main}>
        <img src={`https://image.tmdb.org/t/p/w500/${obj.backdrop_path ?? obj.profile_path}`} />
        <div className={styles.text}>
        <div>
            <span>Type:</span> {obj.media_type}
          </div>
          <div>
            <span>Overview:</span> {obj.overview}
          </div>
          <div>
            <span>Release date:</span> {obj.release_date ?? obj.first_air_date}
          </div>
          <div>
            <span>Vote average</span> {obj.vote_average}
          </div>
        </div>
      </div>
    </div>
  );
};
