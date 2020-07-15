import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core";
import mShoes from './data/moccasins.json';
import { Link } from 'react-router-dom';
import Leed from './images/leedsnpm.jpg';
import Naval from './images/navalsnpm';
import Croze from './images/croze.jpg';

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "500px",
    maxHeight: "400px",
  },
}));

function MoccasinsSlider() {
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


          {/* {Object.keys(mShoes).map(keyName => {
            const mShoe = mShoes[keyName];
            return (
              // Set link over here
              <Link key={keyName}
                className="Link"
                to={`/moccasins/${keyName}`}>

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
          } */}


              <Link 
                className="Link"
                to={`/moccasins/leed-snpm`}>

                <div className="slider">
                  <img
                    src={Leed}
                    alt="Leed SNPM"
                    className={classes.img}
                  />

                  <p className="legend">LEED SNPM -  Rs. 4,995 </p>
                </div>

              </Link>


              <Link 
                className="Link"
                to={`/moccasins/naval-snpm`}>

                <div className="slider">
                  <img
                    src={Naval}
                    alt="Naval SNPM"
                    className={classes.img}
                  />

                  <p className="legend">NAVAL SNPM -  Rs. 4,995 </p>
                </div>

              </Link>

              <Link 
                className="Link"
                to={`/moccasins/croze`}>

                <div className="slider">
                  <img
                    src={Croze}
                    alt="Croze"
                    className={classes.img}
                  />

                  <p className="legend">CROZE -  Rs. 4,495 </p>
                </div>

              </Link>

        </Carousel>
      </ul>
    </div >
  );
}

export default MoccasinsSlider;