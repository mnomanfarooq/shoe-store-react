import React from "react";
import shoejordan from "./images/jordan.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "200px",
    maxHeight: "200px",

  },
}));

function Slider() {
  const classes = useStyles();
  return (
    <Carousel
      autoPlay
      interval={3000}
      infiniteLoop
      showThumbs={false}
      dynamicHeight={true}
      showStatus={false}
    >
      <div className="slider">
        <img src={shoejordan} alt="" className={classes.img} />
        </div>
      <div  className="slider">
        <img
          src="https://cdn.shopify.com/s/files/1/0016/0074/9623/products/Beck-Black_grande.jpg"
          alt=""
          className={classes.img}
        />
      </div>
      <div  className="slider">
        <img
          src="https://cdn.shopify.com/s/files/1/0016/0074/9623/products/BRIDGPORT_ADVICE-BLACK_1_grande.jpg"
          alt=""
          className={classes.img}
        />
      </div>
    </Carousel>
  );
}

export default Slider;