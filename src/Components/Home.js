import React from 'react';
import './../App.css';
import { makeStyles } from '@material-ui/core/styles';
import MenSlider from './MenSlider'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export function Home() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <div className="header"><h2>Welcome to Men Shoes Store</h2></div>
      <div className="home">
      <br /><br />
        <div className="center">
          <div className="slider">
          <MenSlider />
          </div>
          <div className="slider">
          <MenSlider />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
