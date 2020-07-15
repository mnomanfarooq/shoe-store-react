import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@material-ui/core";
//import fShoes from './data/formal.json';
import { Link } from 'react-router-dom';
import Beck from './images/beck.jpg';
import Austin from './images/austin.jpg';
import Pixel from './images/pixel.jpg';

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


          {/* {Object.keys(fShoes).map(keyName => {
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
          } */}

<Link 
                className="Link"
                to={`/formal/beck`}>

                <div className="slider">
                  <img
                    src={Beck}
                    alt="Beck"
                    className={classes.img}
                  />

                  <p className="legend">BECK -  Rs. 9,995 </p>
                </div>

              </Link>


              <Link 
                className="Link"
                to={`/formal/pixel`}>

                <div className="slider">
                  <img
                    src={Pixel}
                    alt="Pixel"
                    className={classes.img}
                  />

                  <p className="legend">PIXEL -  Rs. 10,995 </p>
                </div>

              </Link>

              <Link 
                className="Link"
                to={`/formal/austin`}>

                <div className="slider">
                  <img
                    src={Austin}
                    alt="Austin"
                    className={classes.img}
                  />

                  <p className="legend">AUSTIN -  Rs. 10,995 </p>
                </div>

              </Link>



        </Carousel>
      </ul>
    </div >
  );
}

export default FormalSlider;