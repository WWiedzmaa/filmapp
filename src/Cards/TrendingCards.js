import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./TrendingCards.module.css";
import { Link } from "react-router-dom";

const TrendingCards = ({ trend }) => {
  return (
    <Link
      to={`/search/${
        trend.id + "-" + (trend.name ?? trend.title)?.replaceAll(" ", "-")
      }`}
      state={{ obj: trend, type: trend.media_type }}
      className={styles.root}
    >
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ maxHeight: 500 }}
            image={`https://image.tmdb.org/t/p/w780/${
              trend.backdrop_path ?? trend.backdrop_path ?? trend.profile_path
            }`}
            alt="poster"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {trend.name ?? trend.title}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default TrendingCards;
