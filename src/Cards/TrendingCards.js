import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./TrendingCards.module.css"

const TrendingCards = ({ trend }) => {

  return (
    <div className={styles.root}>
      <Card >
        <CardActionArea>
          <CardMedia
            component="img"
            height={"10%"}
            image={`https://image.tmdb.org/t/p/w780/${
              trend.backdrop_path ?? trend.backdrop_path}`}
            alt="poster"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {trend.name ?? trend.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default TrendingCards;
