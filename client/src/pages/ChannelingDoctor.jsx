import React,{useEffect, useState} from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {IconButton, InputBase, Paper, TextField} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import {SERVER_URL} from "../utils/config";
import { Link } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import DocIcon from "../icons/DocIcon";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme({
    palette: {
        primary: {
            main: '#033E8A'
        },
        background:{
            default:'#ECFBFF'
        }
    },
});

export default function ChannelingDoctor(){

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
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <DocIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    Doctor Channeling
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            {/* Hero unit */}
            <Box
                sx={{
                    bgcolor: '#ECFBFF',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="#033E8A"
                        gutterBottom
                    >
                        <b>Channeling Doctors</b>
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Discover the best doctors available in the smart port city and make an appointment right now as preferred.
                    </Typography>
                    <Grid container
                          direction="row"
                          justifyContent="center"
                          alignItems="center">

                        <Paper
                            component="form"
                            sx={{ p: '4px 10px', mt:5, display: 'flex', align:"center", alignItems: 'center', width: 500 }}>
                            {/*<IconButton sx={{ p: '10px' }} aria-label="menu">*/}
                            {/*    <MenuIcon />*/}
                            {/*</IconButton>*/}
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" >
                                <SearchIcon color="primary" />
                            </IconButton>
                        </Paper>
                    </Grid>
                    <Box textAlign="center"  sx={{mr: 3}}>

                    </Box>
                </Container>
            </Box>
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
        </main>
        {/* Footer */}
        {/*<Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">*/}
        {/*    <Typography variant="h6" align="center" gutterBottom>*/}
        {/*        Footer*/}
        {/*    </Typography>*/}
        {/*    <Typography*/}
        {/*        variant="subtitle1"*/}
        {/*        align="center"*/}
        {/*        color="text.secondary"*/}
        {/*        component="p"*/}
        {/*    >*/}
        {/*        Something here to give the footer a purpose!*/}
        {/*    </Typography>*/}

        {/*</Box>*/}
        {/* End footer */}
    </ThemeProvider>
    );

}