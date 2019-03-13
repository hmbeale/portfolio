import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from "@material-ui/core/styles";
import * as avatarURL from '../thumbnails/avatar_square.png';
import {cards} from './cards.js'
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  bigAvatar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: theme.spacing.unit * 3,
    width: 200,
    height: 200,
  },
  subText: {
    marginTop: 0
  },
  nameText: {
    marginBottom: 0
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
  paper: {
   position: 'absolute',
   width: theme.spacing.unit * 50,
   backgroundColor: theme.palette.background.paper,
   boxShadow: theme.shadows[5],
   padding: theme.spacing.unit * 4,
   outline: 'none',
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



class Album extends React.Component {

  state = {
      openContact: false,
      openAbout: false
    };

    handleContactOpen = () => {
      this.setState({ openContact: true });
    };

    handleContactClose = () => {
      this.setState({ openContact: false });
    };

    handleAboutOpen = () => {
      this.setState({ openAbout: true });
    };

    handleAboutClose = () => {
      this.setState({ openAbout: false });
    };


render(){
  const { classes } = this.props;
  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
          <Avatar
              alt="Holden Beale Avatar"
              src= {avatarURL}
              className={classes.bigAvatar} />
            <Typography
              component="h2"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
              className={classes.nameText}
            >
              Holden Beale
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
              className={classes.subText}
            >
               javascript geek
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                <Button variant="contained" color="primary" onClick={this.handleContactOpen}>Contact Me</Button>
                    <Modal
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                      open={this.state.openContact}
                      onClose={this.handleContactClose}
                    >
                      <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="h6" id="modal-title">
                          You may email me at
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                          holden.beale@gmail.com
                        </Typography>
                      </div>
                    </Modal>
                </Grid>
                <Grid item>
                <Button variant="outlined" color="primary" onClick={this.handleAboutOpen}>About</Button>
                    <Modal
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                      open={this.state.openAbout}
                      onClose={this.handleAboutClose}
                    >
                      <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="h6" id="modal-title">
                          Thanks for dropping by my site!
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                          I write web applications for fun and for money. Most of
                          my knowledge and experience is on the front end (I
                          enjoy working with React especially), but I can wrangle
                          a little Python and Node as well.
                        </Typography>
                        <Typography variant = "subtitle1">
                        You can check out my GitHub here: 
                        </Typography>
                        <Typography variant = "subtitle1">
                        https://github.com/hmbeale/
                        </Typography>
                      </div>
                    </Modal>
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

      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}



}

Album.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Album);
