import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./SearchResoult.module.css";
import ApiUtil from "../api/ApiUtil";
import YouTubeIcon from '@mui/icons-material/YouTube';

export const SearchResoult = () => {
  const location = useLocation();
  const { obj, type } = location.state;
  const [video, setVideo] = useState([]);
  const [videoTv, setVideoTV] = useState([]);
  const [actDetals, setActDetals] = useState(null);

  useEffect(() => {
    async function movieVideo() {
      const video = await ApiUtil.getVideo(obj.id);
      setVideo(video.results.filter((v) => v.type === "Trailer"));
    }
    async function movieVideoTv() {
      const vid = await ApiUtil.getSerialVideo(obj.id);
      setVideoTV(vid.results.filter((v) => v.type === "Trailer"));
    }
    async function personDetals() {
      const detals = await ApiUtil.getPersonsDetals(obj.id);
      setActDetals(detals);
    }
    if (type === "person") {
      personDetals();
    }
    if (type === "movie") {
      movieVideo();
    }
    if (type === "tv") {
      movieVideoTv();
    }
  }, []);

  console.log(actDetals);
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

            <div className={styles.know}>
              <span>Trailers: </span>
            </div>
            <div className={styles.trailer}>
              {video?.map((video) => (
                <Link
                  to={`https://www.youtube.com/watch?v=${video.key}`}
                  key={video.id}
                  target="_blank"
                >
                  <div className={styles.know}><YouTubeIcon/>{video.name} </div>
                </Link>
              ))}
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
            <div className={styles.know}>
              <span>Trailers: </span>
            </div>
            <div className={styles.trailer}>
              {videoTv?.map((video) => (
                <Link
                  to={`https://www.youtube.com/watch?v=${video.key}`}
                  key={video.id}
                  target="_blank"
                >
                  <div className={styles.know}><YouTubeIcon/>{video.name}</div>
                </Link>
              ))}
            </div>
          </div>
        );
      case "person":
        return (
          <div>
            <div className={styles.know}>
              <span> Birthday: </span>
              {actDetals?.birthday}
            </div>
            <div className={styles.know}>
              <span>Place of birth: </span> {actDetals?.place_of_birth}
            </div>
            <div className={styles.know}>
              <span>Known for:</span>
            </div>
            {obj.known_for.map((playIn) => (
              <div key={playIn.id} className={styles.play}>
                <div className={styles.know}>
                  {playIn.title ?? playIn.name}{" "}
                </div>
              </div>
            ))}
            <div className={styles.know}>
              <span>Biography: </span> {actDetals?.biography}
            </div>
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
