import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core";
import fShoes from './data/formal.json';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "500px",
    maxHeight: "400px",
  },
}));

function FormalSlider() {
  const classes = useStyles();
  return (

    <div className='ulist'>
      <ul >
        <Carousel
          autoPlay
          interval={2500}
          infiniteLoop
          showThumbs={false}
          dynamicHeight={false}
          showStatus={true}
        >


          {Object.keys(fShoes).map(keyName => {
            const fShoe = fShoes[keyName];
            return (
              // Set link over here
              <Link key={keyName}
                className="Link"
                to={`/formal/${keyName}`}>

                <div className="slider">
                  <img
                    src={fShoe.simg}
                    alt={fShoe.name}
                    className={classes.img}
                  />

                  <p className="legend">{fShoe.name} -  {fShoe.price} </p>
                </div>

              </Link>)
          })
          }


        </Carousel>
      </ul>
    </div >
  );
}

export default FormalSlider;