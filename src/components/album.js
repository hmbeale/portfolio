import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    height: 140,
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

const cards = [
  {image: require('../thumbnails/app0.png'), title: 'Checkout App',
  href: 'https://hmbeale.github.io/checkout-demo/',
  description: 'A front end React interface for a checkout page.'},

  {image: require('../thumbnails/app1.png'), title: 'Dashboard App',
  href: 'https://hmbeale.github.io/demo-dashboard/',
  description: 'A front end React interface for a dashboard.'},

  {image: require('../thumbnails/app2.png'), title: 'Directory Monitor',
  href: 'https://github.com/hmbeale/dirMonitor',
  description: 'A Python script which monitors a directory and reacts to changes.'},

  {image: require('../thumbnails/app3.png'), title: 'Library App',
  href: 'https://github.com/hmbeale/local_lib/',
  description: 'A fullstack application which records books and book data. It uses Express and MongoDB.'},

  {image: require('../thumbnails/app4.png'), title: 'MongoDB Updater',
  href: 'https://github.com/hmbeale/mongoDBUpdater/',
  description: 'A NodeJS script which adds files to a local MongoDB.'},

  {image: require('../thumbnails/app5.png'), title: 'Pricing Webpage',
  href: 'https://hmbeale.github.io/pricing-demo/',
  description: 'A front end React interface for a pricing webpage.'},

  {image: require('../thumbnails/app6.png'), title: 'Restaurant Review App',
  href: 'https://github.com/hmbeale/restaurant_reviews/',
  description: 'A site which combines restaurant data, mapping, and customer reviews.'},

  {image: require('../thumbnails/app7.png'), title: 'Sign In Page',
  href: 'https://github.com/hmbeale/signIn-demo/',
  description: 'I seem to be broken!'},

  {image: require('../thumbnails/app8.png'), title: 'Weather App',
  href: 'https://hmbeale.github.io/weather/',
  description: 'An application that uses the Openweathermap api to show the weather.'},

  {image: require('../thumbnails/app9.png'), title: 'Weather History App',
  href: 'https://github.com/hmbeale/weather_hist/',
  description: 'An application that uses the NOAA api to return weather history.'}
];

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Holden Beale
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href = "https://www.holdenbeale.com/">
                    Contact Me
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href = "https://github.com/hmbeale/">
                    My Github
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}

          <Grid container spacing={40}>
          {cards.map(card => (
            <Grid item key={card} sm={6} md={4} lg={3}>
              <Card className={classes.card}>
               <CardActionArea href = {card.href}>
                <CardMedia
                  className={classes.cardMedia}
                  image= {card.image}
                  image = {card.image}
                  title= {card.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography>
                    {card.description}
                  </Typography>
                </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}

          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Album);
