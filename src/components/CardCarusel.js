import { Button, IconButton } from "@mui/material";
import Carousel, { carouselClasses } from "mui-carousel";
import React from "react";
import styles from "./CardCarusel.module.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const CardCarusel = (props) => {
  return (
    <Carousel
      renderPrev={({ disabled }) => (
        <Button className={styles.bnt} disabled={disabled}>
          Prev
        </Button>
      )}
      renderNext={({ disabled }) => (
        <Button className={styles.bnt} disabled={disabled}>
          Next
        </Button>
      )}
      renderDot={({ current }) => (
        <IconButton variant={current ? "contained" : "outlined"}>
          <FiberManualRecordIcon />
        </IconButton>
      )}
      dots={true}
      showSlides={4}
      speed={1000 * 5}
      spacing={5}
      autoPlay={true}
      infinity
      pauseOnHover
      centerMode
      transitionDuration={10000}
      disableTransition={false}
      sx={{
        [`& .${carouselClasses.list}`]: {
          px: 3,
        },
        [`& .${carouselClasses.item} > *`]: {
          transition: "all 1s",
        },
        [`& .${carouselClasses.center} > *`]: {
          transform: "scale(1.3)",
        },
      }}
    >
      {props.children}
    </Carousel>
  );
};

export default CardCarusel;
