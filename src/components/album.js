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
  href: 'https://www.holdenbeale.com/',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},

  {image: require('../thumbnails/app1.png'), title: 'Dashboard App',
  href: 'https://www.holdenbeale.com/',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},

  {image: require('../thumbnails/app2.png'), title: 'Directory Monitor',
  href: 'https://www.holdenbeale.com/',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},

  {image: require('../thumbnails/app3.png'), title: 'Library App',
  href: 'https://www.holdenbeale.com/',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},

  {image: require('../thumbnails/app4.png'), title: 'MongoDB Updater',
  href: 'https://www.holdenbeale.com/',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},

  {image: require('../thumbnails/app5.png'), title: 'Pricing Webpage',
  href: 'https://www.holdenbeale.com/',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},

  {image: require('../thumbnails/app6.png'), title: 'Restaurant Review App',
  href: 'https://www.holdenbeale.com/',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},

  {image: require('../thumbnails/app7.png'), title: 'Sign In Page',
  href: 'https://www.holdenbeale.com/',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},

  {image: require('../thumbnails/app8.png'), title: 'Weather App',
  href: 'https://www.holdenbeale.com/',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},

  {image: require('../thumbnails/app9.png'), title: 'Weather History App',
  href: 'https://www.holdenbeale.com/',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},

  {image: require('../thumbnails/app10.png'), title: 'App Title Ten',
  href: 'https://www.holdenbeale.com/',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},

  {image: require('../thumbnails/app11.png'), title: 'App Title Eleven',
  href: 'https://www.holdenbeale.com/',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
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
                  <Button variant="outlined" color="primary" href = "https://www.holdenbeale.com/">
                    More Info
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
