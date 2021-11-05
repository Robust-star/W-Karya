import { Grid, Paper, Typography, makeStyles, Button } from "@material-ui/core";
import React from "react";
import Ladies from "./images/ladies.png";
import EmailInput from "../lib/EmailInput";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
    body: {
        padding: "50px 50px",
    },
    inputBox: {
        width: "400px",
        borderColor: '#E2E5DE',
        borderRadius: '5px',
        padding: '7px'
    },
    inputBox1: {
        width: "400px",
        borderColor: '#E2E5DE',
        borderRadius: '5px',
        padding: '7px',
        lineHeight: '4em',
    },
    submitButton: {
        width: "300px",
        backgroundColor: '#94483B',
        color: "white",
    },
    image: {
        height: "560px",
        marginLeft: '0',
        borderRadius: '10px',
    },
    nature: {
        background: "linear-gradient(to bottom,white, #FFEEE5,white)",
        borderRadius: "5% 5% 5% 5%",
    },
    heading: {
        color: "#94483B",
        textAlign: "center",

    },
    headingText: {
        textAlign: "center",
        fontSize: "10px",
        color: '#7E7E7E',
        maxWidth: '450px',
    },
    firstColoumn: {
        marginTop: '10%',

    },
    first1Coloumn: {

        backgroundColor: "#F5F5F5"
    },
    secondColoumn: {
        marginLeft: '0',
    },
    main: {
        width: '100%'
    }
}));

function Contact() {
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <Grid container >
                <Grid item xs={6} className={classes.firstColoumn}>
                    <Paper elevation={3} className={classes.body} className={classes.first1Coloumn}>
                        <Grid
                            container
                            direction="column"
                            spacing={2}
                            alignItems="center"
                            justify="center"

                        >
                            <Grid item>
                                <h3 className={classes.heading}>Contact Us</h3>
                                <h4 className={classes.headingText}>
                                    For further questions, including partnership opportunities,
                                    please email hello@creative- tim.com or contact using our
                                    contact form.
                                </h4>
                            </Grid>
                            <Grid item>
                                <Grid item>
                                    <label className={classes.label}>Full Name:</label><br />
                                    <input className={classes.inputBox} type='text' placeholder=" Full Name" />
                                </Grid>
                                <Grid item>
                                    <label className={classes.label}>Email:</label><br />
                                    <input className={classes.inputBox} type='email' placeholder="Email" />
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Grid item>
                                    <label className={classes.label}>How We Can Help You:</label><br />
                                    <input className={classes.inputBox1} type='text' placeholder=" Write Here" />
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.submitButton}
                                >
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={6} className={classes.secondColoumn}>
                    <img className={classes.image} src={Ladies} alt="" />
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
}

export default Contact;
