import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    makeStyles,
    Paper,
    Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import React from "react";
import Footer from "./Footer";
import About1 from "./images/aboutCollage.png"
import About2 from "./images/abt2.jpeg";
import Card1 from "./images/img1.jpeg";
import Card2 from "./images/img2.jpeg";
import Card3 from "./images/img31.jpg";

const useStyles = makeStyles((theme) => ({
    Outer: {
        width: "100%",
    },
    submitButton: {
        width: "100px",
        backgroundColor: "#193E6C",
        color: "white",
        borderRadius: " 20px ",
    },
    image1: {
        height: "500px",
        marginLeft: "60px",
        marginRight: "10px",
    },
    image2: {
        height: "300px",
        marginLeft: "60px",
        borderRadius: "10px",
    },
    first2: {
        marginTop: "100px",
    },
    first2Heading: {
        fontWeight: "400",
        fontSize: "42px",
    },
    first2Para: {
        fontWeight: "400",
        fontSize: "15px",
        maxWidth: "650px",
    },
    section2: {
        background: "linear-gradient(0deg, #94483B 30%, #FFDCC5 90%)",
        padding: "40px",
    },
    section21: {
        backgroundColor: "white",
        padding: "40px",
        paddingLeft: "60px",
    },
    second1head: {
        fontSize: "40px",
        fontWeight: "400",
    },
    second1para: {
        fontSize: "15px",
        fontWeight: "400",
    },
    second2: {
        margin: "auto",
    },
    span1: {
        color: "#94483B",
        fontWeight: "bold",
    },
    section3: {
        margin: "auto",
        justify: "center",
    },
    section3head: {
        fontSize: "40px",
        fontWeight: "500",
    },
    section3para: {
        maxWidth: "800px",
        fontSize: "15px",
    },
    card: {
        padding: "20px",
    },
    cardpaper: {
        padding: "30px",
    },
    cardimage: {
        width: "285px",
    },
    cardhead: {
        fontSize: "30px",
        fontWeight: "400",
    },
    cardpara: {
        fontSize: "15px",
        fontWeight: "400",
        color: "grey",
    },
    cardpara1: {
        fontSize: "12px",
        fontWeight: "200",
        color: "grey",
    },
    cardlink: {
        fontSize: "15px",
        fontWeight: "400",
        color: "blue",
    },
}));

function Aboutus() {
    const classes = useStyles();
    let history = useHistory();
    const handleClick = (location) => {
        console.log(location);
        history.push(location);
    };
    return (
        <div className={classes.Outer}>
            <Grid container>
                <Grid xs={6}>
                    <img className={classes.image1} src={About1} alt="" />
                </Grid>
                <Grid xs={6} className={classes.first2}>
                    <h1 className={classes.first2Heading}>W-Karya</h1>
                    <p className={classes.first2Para}>
                        Welcome to the W-Karya. We aim to change the face of leadership
                        through its employment programs aimed at women. Focusing on
                        value-based leadership and promote confidence to help them earn
                        their livings. We aim to provide an application and website specific
                        to women carving out a safer engagement portal.
                    </p>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.submitButton} onClick={() => handleClick("/signup")}
                    >
                        Join Us
                    </Button>
                </Grid>
            </Grid>

            <Grid container className={classes.section2}>
                <Grid container className={classes.section21}>
                    <Grid xs={6} className={classes.second1}>
                        <h1 className={classes.second1head}>About Us</h1>
                        <p className={classes.second1para}>
                            The application is creating
                            <span className={classes.span1}>
                                {" "}
                                equal and safe opportunities
                            </span>{" "}
                            for women of unprivileged section. These women can grab these
                            opportunities and can create a life that they want. They can
                            acquire the jobs that they are skilled in. They can also{" "}
                            <span className={classes.span1}> enroll for training </span> in a
                            particular field and can then pursue work in that field.
                            <br /> In this application, the companies and NGOs can put up
                            their job application. All the{" "}
                            <span className={classes.span1}>
                                {" "}
                                requirements and eligibility
                            </span>{" "}
                            will be listed there. The job description will specify the skills,
                            locality and documents required. The users interested in the job
                            can apply. Further, the companies or NGOs can{" "}
                            <span className={classes.span1}> contact the applicants</span> and
                            acquaint them with further process. <br />
                            Since the data revolution in India, even the people from secluded
                            areas have the access to internet now. So, this product will be
                            made available as{" "}
                            <span className={classes.span1}> website and mobile app.</span>
                        </p>
                    </Grid>
                    <Grid xs={6} className={classes.second2}>
                        <img className={classes.image2} src={About2} alt="" />
                    </Grid>
                </Grid>
            </Grid>

            <div className={classes.section3}>
                <center>
                    <h1 className={classes.section3head}> Our latest blog posts </h1>
                    <p className={classes.section3para}>
                        The National Hookah Community Association (NHCA) is a 501(c)6
                        non-profit organization that protects and serves its members who are
                        facing threats from new legislation at the local, state, and federal
                        level.
                    </p>
                </center>
                <Grid container spacing={0} justify="center">
                    <Grid xs={3} className={classes.card}>
                        <Paper elevation={4} className={classes.cardpaper}>
                            <img src={Card1} alt="" className={classes.cardimage} />
                            <br />
                            <h1 className={classes.cardhead}>Culture</h1>
                            <p className={classes.cardpara}>
                                The NGOs and companies enrolled with us provide a friendly and thriving work culture. The employees are provided flexible time. All the women are welcomed and nurtured.
                            </p>
                            <p className={classes.cardpara1}>
                                May 20th 2021
                            </p>
                            <a href=""><p className={classes.cardlink}>
                                Read More...
                            </p></a>
                        </Paper>
                    </Grid>
                    <Grid xs={3} className={classes.card}>
                        <Paper elevation={4} className={classes.cardpaper}>
                            <img src={Card2} alt="" className={classes.cardimage} />
                            <br />
                            <h1 className={classes.cardhead}>Opportunities</h1>
                            <p className={classes.cardpara}>
                                W-Karya provides numerous opportunities to women who want to create a simple yet best life for themselves. We think about the future of women and generates potential scope.
                            </p>
                            <p className={classes.cardpara1}>
                                May 20th 2021
                            </p>
                            <a href=""><p className={classes.cardlink}>
                                Read More...
                            </p></a>
                        </Paper>
                    </Grid>
                    <Grid xs={3} className={classes.card}>
                        <Paper elevation={4} className={classes.cardpaper}>
                            <img src={Card3} alt="" className={classes.cardimage} />
                            <br />
                            <h1 className={classes.cardhead}>Safety</h1>
                            <p className={classes.cardpara}>
                                W-Karya understands the importance of safety for women. We have strict policy against security and welfare for our users. We ensure refuge for the well-being of the women.
                            </p>
                            <p className={classes.cardpara1}>
                                May 20th 2021
                            </p>
                            <a href=""><p className={classes.cardlink}>
                                Read More...
                            </p></a>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    );
}

export default Aboutus;
