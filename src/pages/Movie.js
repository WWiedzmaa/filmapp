import React, { useEffect, useState } from "react";
import ApiUtil from "../api/ApiUtil";
import MovieCards from './../Cards/MovieCards';
import CardCarusel from "../components/CardCarusel";
import  styles from "./Movie.module.css";

export const Movie = () => {
  const [popMovie, setPopMovie] = useState(null);
  const [topMovie, settopMovie] = useState(null);
  const [onAirMovie, setOnAirMovie] = useState(null);

  useEffect(() => {
    async function popFilms() {
      const data = await ApiUtil.getpopularMovie();
      setPopMovie(data);
    }
    async function topFilms() {
      const data= await ApiUtil.getTopMovie();
      settopMovie(data);
    }
    async function onAirFilms() {
      const data= await ApiUtil.getOnAirMovie();
      setOnAirMovie(data);
    }
    popFilms();
    topFilms();
    onAirFilms()
  }, []);

  return <div>
    <div>
      <div className={styles.category}>Popular</div>
      <CardCarusel>
        {popMovie?.results.map((movie)=>(<MovieCards movie={movie} key={movie.id}/>))}
      </CardCarusel>
    </div>
    <div>
      <div className={styles.category}>Top Movie</div>
      <CardCarusel>
        {topMovie?.results.map((movie)=>(<MovieCards movie={movie} key={movie.id}/>))}
      </CardCarusel>
    </div>
    <div>
      <div className={styles.category}>On The Air</div>
      <CardCarusel>
        {onAirMovie?.results.map((movie)=>(<MovieCards movie={movie} key={movie.id}/>))}
      </CardCarusel>
    </div>
  </div>;
};
