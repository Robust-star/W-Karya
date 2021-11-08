import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles, Link
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import wkarya from "./images/Rectangle 129 (1).png";
import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: "Nunito Sans",
    fontSize: 24,
    color: "#193E6C",
    fontWeight: 900,
    fontStyle: "normal",
  },
  Toolbar: {
    background: "#FFEEE5",

  },
  button: {
    color: "#193E6C",
    fontSize: 20,
    fontWeight: 700,
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",

  },
  wk: {
    height: "40px",
    paddingTop: "13px"
  }
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed" className={classes.Toolbar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link href="/"><img src={wkarya} className={classes.wk}></img></Link>
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="#193E6C" className={classes.button} onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/home")}>
                Jobs
              </Button>
              <Button
                color="inherit" className={classes.button}
                onClick={() => handleClick("/applications")}
              >
                Applications
              </Button>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" className={classes.button} onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" className={classes.button} onClick={() => handleClick("/about")}>
              About us
            </Button>
            <Button color="inherit" className={classes.button} onClick={() => handleClick("/contact")}>
              Contact us
            </Button>
            <Button color="inherit" className={classes.button} onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="inherit" className={classes.button} onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
