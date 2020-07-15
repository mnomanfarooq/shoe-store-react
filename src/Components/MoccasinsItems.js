import React from 'react'
import { useParams } from 'react-router-dom';
import Shoes from './data/moccasins.json'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
  },
  image: {
    width: 400,
    height: 400,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function MoccasinsShoes() {
  const classes = useStyles();

  const { id } = useParams();
  const Shoe = Shoes[id];

  if (!Shoe)
    return <div className="page-div"><br /><br /><br /><h2>Product Not Found!</h2></div>

  return (
    <div className="page-div">
      <br />

      <h2>Moccasins Shoes - Product Details </h2>

      <br />
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item>
              <Typography gutterBottom variant="subtitle1">
                <b>{Shoe.name}</b>
              </Typography>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt={Shoe.name} src={Shoe.fimg} />
              </ButtonBase>
              <Grid item>
                <Typography variant="subtitle1"><b>Price: {Shoe.price}</b></Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} sm container>

              <Grid item>
                <Typography variant="subtitle1" ><b>Availability:</b> {Shoe.avail}</Typography>
              </Grid>

              <Grid>
                <Typography variant="subtitle1" gutterBottom>
                  <b>Product details:</b> {Shoe.details}
                </Typography>
              </Grid>

            </Grid>

          </Grid>
        </Paper>
      </div>
    </div>
  );
}