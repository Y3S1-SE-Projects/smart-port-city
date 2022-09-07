import * as React from "react";
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
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {TextField} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";


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
    return(

    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <CameraIcon sx={{ mr: 2 }} />
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
                    <Box sx={{ display: 'flex' }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField id="input-with-sx" label="With sx" variant="standard" />
                    </Box>
                </Container>
            </Box>
            <Container sx={{ py: 8, bgcolor: '#ECFBFF'}} maxWidth="md" >
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardMedia
                                    component="img"
                                    // sx={{
                                    //     // 16:9
                                    //     pt: '56.25%',
                                    // }}
                                    image="https://source.unsplash.com/random"
                                    alt="random"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Dr.Ruby Perrin
                                    </Typography>
                                    <Typography>
                                        MDS - Periodontology and Oral Implantology, BDS
                                    </Typography>
                                </CardContent>

                                <CardActions sx={{ justifyContent:"right" , mr: 2, mb: 2}}>
                                    <Button size="small" variant="contained">Book Now</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                Something here to give the footer a purpose!
            </Typography>

        </Box>
        {/* End footer */}
    </ThemeProvider>
    );

}