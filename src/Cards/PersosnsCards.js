import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./PersonCard.module.css";
import { Link } from "react-router-dom";

const PersosnsCards = ({ person }) => {
  return (
    <Link
      to={`/search/${person.id + "-" + person.name?.replaceAll(" ", "-")}`}
      state={{ obj: person, type: "person" }}
      className={styles.root}
    >
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
    </Link>
  );
};

export default PersosnsCards;
