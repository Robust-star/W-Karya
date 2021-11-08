import { Grid, Typography, Button, Link, TextField } from "@material-ui/core";
import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import {
    makeStyles
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import women from './images/girl.png';
import vector from './images/Vector.png'
const useStyles = makeStyles((theme) => ({

    nav: {
        height: "200px",
        Background: "#FFEEE5"
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
    footerh3: {
        color: "#22343D",
        fontWeight: "600",
        lineHeight: "30px",
        // textAlign: "center"
    },
    link: {
        color: "#22343D",
        TransitionEvent: "all 0.2s ease",
        lineHeight: "28px",
        textTransform: "uppercase",
        textDecoration: "none",
        fontWeight: "600"

    },
    list: {
        listStyle: "none",
        paddingLeft: "0px"
    },
    copy: {
        background: "#193E6C",
        margin: "0px",
        textAlign: "center",
        height: "50px",
        justifyContent: "center",
        verticalAlign: "middle",
        paddingTop: "15px",
        color: "white"
    },
    social: {
        margin: "10px 10px"
    },
    Twitter: {
        width: "40px",
        fontSize: "10px",
        height: "40px",
        textAlign: "center",
        lineHeight: "48px",
        borderRadius: "50%",
        background: "#193E6C",
        transition: "all 0.2s linear",
        color: "white",
        '&:hover': {
            background: "#00ACED"
        }
    },
    insta: {
        width: "40px",
        fontSize: "10px",
        height: "40px",
        textAlign: "center",
        lineHeight: "48px",
        borderRadius: "50%",
        background: "#193E6C",
        transition: "all 0.2s linear",
        color: "white",
        '&:hover': {
            background: "#cd486b"
        }
    },
    face: {
        width: "40px",
        fontSize: "16px",
        height: "40px",
        textAlign: "center",
        lineHeight: "48px",
        borderRadius: "50%",
        background: "#193E6C",
        transition: "all 0.2s linear",
        color: "white",
        '&:hover': {
            background: "#3B5998"
        }
    }
}));
const Footer = (props) => {
    const classes = useStyles();
    let history = useHistory();
    const handleClick = (location) => {
        console.log(location);
        history.push(location);
    };
    return (
        <div className={classes.nav}>
            <Grid
                container
                item
                // direction="column"
                // alignItems="center"

                // justify="center"
                style={{ padding: "50px", paddingTop: "10px", background: "#FFEEE5" }}

            >
                <Grid item md={3} xs={12}>
                    <h3 className={classes.footerh3}>Find us on</h3>
                    <Link className={classes.social} href="#" target="_blank"><Twitter className={classes.Twitter} /></Link>
                    <Link className={classes.social} href="#" target="_blank"><Facebook className={classes.face} /></Link>
                    <Link className={classes.social} href="#" target="_blank"><Instagram className={classes.insta} /></Link>
                </Grid>
                <Grid item md={3} xs={12}>
                    <h3 className={classes.footerh3}>FAQs</h3>
                    <ul className={classes.list}>
                        <li><Link className={classes.link} href="#">Why choose us?</Link>
                        </li>
                        <li><Link className={classes.link} href="#">Where we are?</Link>
                        </li>
                        <li><Link className={classes.link} href="#">Charges</Link>
                        </li>
                        <li><Link className={classes.link} href="#">Compensation</Link>
                        </li>
                        <li><Link className={classes.link} href="#">Job Security</Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item md={3} xs={12}>
                    <h3 className={classes.footerh3}>Resources</h3>
                    <ul className={classes.list}>
                        <li><Link className={classes.link} href="#">All jobs</Link>
                        </li>
                        <li><Link className={classes.link} href="#">Association</Link>
                        </li>
                        <li><Link className={classes.link} href="#">Contact</Link>
                        </li>
                        <li><Link className={classes.link} href="#">Aboutus</Link>
                        </li>
                        <li><Link className={classes.link} href="#">Policy</Link>
                        </li>
                    </ul>
                </Grid>
                <Grid item md={3} xs={12}>
                    <h3 className={classes.footerh3}>Knowing you're always on the best energy deal. </h3>
                    <ul className={classes.list}>
                        <li><TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        </li>
                        <li>
                            <Button className={classes.config} onClick={() => handleClick("/signup")}>Join us</Button>
                        </li>
                    </ul>
                </Grid>

            </Grid>
            <p className={classes.copy}>© W-Karya 2021 All right reserved.</p>
        </div>

    );
};


export default Footer;
