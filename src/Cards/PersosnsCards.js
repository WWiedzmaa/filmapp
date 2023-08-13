import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./PersonCard.module.css";

const PersosnsCards = ({ person }) => {
  console.log("person", person);
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
          alt="poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {person.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div className={styles.know}>Known for:</div>
            {person.known_for.map((playIn) => (
              <div key={playIn.id} className={styles.play}>
                <div>{playIn.title ?? playIn.name} </div>
              </div>
            ))}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PersosnsCards;
