import React,{useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import {SERVER_URL} from "../utils/config";
import {createTheme} from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import {ThemeProvider} from "@emotion/react";

const theme = createTheme({
    palette: {
        primary: {
            main: '#033E8A'
        },
        secondary:{
            main: '#2B91BF'
        },
        background:{
            default:'#ECFBFF'
        }

    },
});

export default function ChannelingHome() {

    const [doctors,setDoctors]=useState([]);


    const getData = () =>{
        axios.get(`${SERVER_URL}/doctor`).then(res =>{
            setDoctors(res.data);
            console.log(res.data)
        })
    }
    useEffect(()=>{getData()},[])
    return(
        <ThemeProvider theme={theme}>
        <div>
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="#033E8A"
                gutterBottom
            >
                <b>--Welcome to DocCARE--</b>
            </Typography>

            <br/> <br/> <br/>
    <Carousel autoPlay={true}>
        <div>
            <img src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2JlY29taW5nLWRvY3Rvci5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==" />
            <p className="legend">We care for your health every moment</p>
        </div>
        <div>
            <img src="https://i.cbc.ca/1.6428388.1650663839!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_780/shutterstock-large-file.jpg" />
            <p className="legend">We care for your health every moment</p>
        </div>
        <div>
            <img src="https://assets.weforum.org/article/image/responsive_big_webp_Xv2UsfTDCmqKcUQmaygVRjSqVVZX2S3pKtSvgdwpUGM.webp" />
            <p className="legend">We care for your health every moment</p>
        </div>
    </Carousel>

            <Grid direction='row' container justifyContent="center">
                <Box textAlign="center"  sx={{mr: 3}}>
                    <Link to={`/channeling-doctor`} textDecoration='none'>
                    <Button
                        type="submit"
                        width="60%"
                        size="large"
                        variant="outlined"
                        sx={{mt: 3, mb: 2}}
                    >
                        View Doctors
                    </Button>
                    </Link>
                </Box>

            <Box textAlign="center">
                <Link to={`/channeling-doctor`} textDecoration='none'>
            <Button
                type="submit"
                width="60%"
                size="large"
                variant="contained"
                sx={{mt: 3, mb: 2}}
            >
                Book Now
            </Button>
                </Link>
            </Box>
            </Grid>

            <br/> <br/> <br/>

            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="#033E8A"
                gutterBottom
            >
                <b>--DISCOVER BEST DOCTORS--</b>
            </Typography>

            <Container sx={{ py: 8, bgcolor: '#ECFBFF'}} maxWidth="md" >
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {doctors.map((doctor) => (
                        <Grid item key={doctor} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="img"
                                    // sx={{
                                    //     // 16:9
                                    //     pt: '56.25%',
                                    // }}
                                    image={doctor.image}
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {doctor.name}
                                    </Typography>
                                    <Typography>
                                        {doctor.description}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent:"right" , mr: 2, mb: 2}}>
                                    <Link to={`/book-appointment/${doctor._id}`}><Button size="small" variant="contained">Book Now</Button></Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

        </div>
        </ThemeProvider>
    );
}