import React, { useEffect, useState } from "react";
import ApiUtil from "../api/ApiUtil";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./MovieCards.module.css"
import { Link } from "react-router-dom";

const MovieCards = ({ movie }) => {
  const [detals, setDetals] = useState(null);

  useEffect(() => {
    async function movieDetals() {
      const det = await ApiUtil.getMovieDetals(movie.id);
      setDetals(det);
    }
    
    movieDetals();
  }, []);
  return (
    <Link to={`/search/${
      movie.id + "-" + (movie.name)?.replaceAll(" ", "-")
    }`} 
    state={{ obj: movie, type: "movie" }} className={styles.root}>
      <Card sx={{ maxWidth: 345 }} className={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="poster"
          />
          <CardContent >
            <Typography gutterBottom variant="h5">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" >
               {movie.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default MovieCards;
