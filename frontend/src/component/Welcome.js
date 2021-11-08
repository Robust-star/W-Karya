import { Grid, Typography, Button } from "@material-ui/core";
import {
  makeStyles
} from "@material-ui/core";
import wimage from "./images/imagewe.png"
import { useHistory } from "react-router-dom";
import women from './images/girl.png';
import vector from './images/Vector.png'
import Footer from "./Footer";
const useStyles = makeStyles((theme) => ({
  Outer: {
    width: '100%',
  },
  Gb: {
    background: '#FFEEE5',
    height: "657px",
    borderRadius: "0 0 60% 60%"
  },
  Gb2: {
    background: '#FFEEE5',
    height: "450px",
    borderRadius: "60% 60% 0 0"
  },
  Gb3: {
    background: '#FFEEE5',
    background: 'linear-gradient(to top,white,#FFEEE5, white)',
    height: "657px",
    // borderRadius: "60% 60% 60% 60%"
  },
  body: {
    background: '#FFEEE5'
  },
  imgConfig: {
    height: "450px"
  },
  welcomeTag: {
    fontFamily: "Source Sans Pro",
    fontSize: "50px",
    fontWeight: "1000",
    color: "#193E6C",
    paddingLeft: "32px",
    paddingBottom: "80px"
  },
  thanks: {
    fontSize: "23px",
    fontWeight: "700",
    color: "#825C48",
    lineHeight: "36px"
  },
  content: {
    paddingLeft: "32px",
    color: "#825C48",
    fontWeight: "700",
    fontSize: "23px",
  },
  config: {
    top: "25px",
    borderRadius: "28px",
    background: "#193E6C",
    color: "white",
    left: "20px",
    width: '125px',
    fontWeight: "700",
    '&:hover': {
      backgroundColor: 'Red',
      color: 'White',
      fontWeight: "700"
    },
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "32px",
    paddingRight: "50px",
    width: "265px"
  },
  heading: {
    textAlign: "center",
    color: "#193E6C",
    fontSize: "50px",
    fontWeight: "500",

  },
  wi: {
    height: "500px",
    // left: "0px"
    paddingLeft: "150px"
  },
  new: {
    fontFamily: "Source Sans Pro",
    fontWeight: "500",
    paddingLeft: "120px",
    paddingTop: "100px"
    // fontSize: "16px",

  }
}));
const Welcome = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };
  return (
    <div className={classes.Outer}>
      <div className={classes.Gb}>
        <Grid
          container
          item
          // direction="column"
          alignItems="center"

          // justify="center"
          style={{ padding: "30px", paddingTop: "10px" }}

        >
          <Grid item md={5} xs={12}>
            <Typography variant="h2" className={classes.welcomeTag}>Find your job & <br />make sure goal</Typography>
            <Typography variant="h5" className={classes.content}>Lorem ipsum asdaa erwt asde<br />looking forward to excel ahead.</Typography>
            <div className={classes.center}>
              <Button className={classes.config} onClick={() => handleClick("/signup")}>Join us</Button>
            </div>
          </Grid>
          <Grid item md={3} xs={12}>
            <img src={women} className={classes.imgConfig} alt="Logo" />
          </Grid>
          <Grid item md={4} xs={12}>
            <img src={vector} alt="Logo" />
            <img src={vector} alt="Logo" />
            <h2 className={classes.thanks}>Thanks to W-Karya, my life took a U-turn, <br />looking forward to excel ahead.</h2>
          </Grid>

        </Grid>
      </div>
      <div className={classes.Gb3}>
        <h2 className={classes.heading}>We've done some legendary work for you</h2>
        <Grid
          container
          item
          // direction="column"
          // alignItems="center"

          // justify="center"
          style={{ padding: "30px", paddingTop: "10px" }}

        >
          <Grid item md={5} xs={12}>
            <Typography variant="h5" className={classes.new}>We aim to change the face of leadership through its employment programs aimed at women.The application is creating equal and safe opportunities for women of unprivileged section. Focusing on value-based leadership and promote confidence to help them earn their livings. We aim to provide an application and website specific to women carving out a safer engagement portal.</Typography>
          </Grid>
          <Grid item md={7} xs={12}>
            <img src={wimage} className={classes.wi}></img>;
          </Grid>


        </Grid>
      </div>
      <div className={classes.Gb2}>
        <br />
        <h2 className={classes.heading}>Testimonals</h2>
        <Grid
          container
          item
          // direction="column"
          alignItems="center"

          // justify="center"
          style={{ padding: "30px", paddingTop: "10px" }}
        // className={classes.Gb2}
        >

        </Grid>
      </div>
      <Footer></Footer>
    </div>

  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
