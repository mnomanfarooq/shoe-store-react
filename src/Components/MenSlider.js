import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core";
import mShoes from './data/men.json';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "500px",
    maxHeight: "400px",
  },
}));

function MenSlider() {
  const classes = useStyles();
  return (

    <div className='ulist'>
       <ul >
        <Carousel
          autoPlay
          interval={2000}
          infiniteLoop
          showThumbs={false}
          dynamicHeight={false}
          showStatus={true}
        >


            {Object.keys(mShoes).map(keyName => {
              const mShoe = mShoes[keyName];
              return (
                // Set link over here
                <Link key={keyName}
                  className="Link"
                  to={`/formal/${keyName}`}>
                 
                  <div className="slider">
                     <img
                      src={mShoe.simg}
                      alt={mShoe.name}
                      className={classes.img}
                    />

              <p className="legend">{mShoe.name} -  {mShoe.price} </p>
                  </div>

                </Link>)
            })
            }


        </Carousel>
      </ul>
    </div >
  );
}

export default MenSlider;