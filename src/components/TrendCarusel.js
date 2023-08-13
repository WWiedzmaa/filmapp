import React from "react";
import Carousel from "react-material-ui-carousel";

const TrendCarusel = (props) => {
  return <Carousel
  navButtonsAlwaysVisible>
  {props.children}
  </Carousel>;
};

export default TrendCarusel;
