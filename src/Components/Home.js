import React from 'react';
import './../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slider from './Slider'

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
      <div className="header"><h2>Welcome to Shoes Store</h2></div>
      <div className="home">
      <br /><br /><br /><br />
        <div>
          <div>
          <Slider />
          </div>
          <div>

          </div>
          <div>

          </div>
        </div>

        {/* <Grid container spacing={2}>
          <Grid item xs>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
        </Grid> */}

      </div>
    </div>
  );
}

export default Home;