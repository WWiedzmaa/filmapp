import React, { useEffect, useState } from "react";
import ApiUtil from "../api/ApiUtil";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./SerialCards.module.css"

const SerialCards = ({ serial }) => {
  const [detals, setDetals] = useState(null);

  useEffect(() => {
    async function serialDetals() {
      const det = await ApiUtil.getSerialsDetals(serial.id);
      setDetals(det);
    }
    serialDetals();
  }, []);

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={`https://image.tmdb.org/t/p/w500/${serial.poster_path}`}
            alt="poster"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {serial.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div>
              sesons {detals?.number_of_seasons} episodes {detals?.number_of_episodes}
              </div>
              {serial.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default SerialCards;
