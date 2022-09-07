import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import DocIcon from "../icons/DocIcon"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {useState} from "react";
import moment from "moment";
import {AccountCircle} from "@mui/icons-material";

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

export default function BookAppointment() {

     const today = moment().format('YYYY-MM-DDTkk:mm');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
        });
    };

    return (

        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: '#033E8A'}}>
                        <DocIcon style={{color: '#ffffff'}}/>
                    </Avatar>
                    <Typography component="h1" variant="h5" color="#033E8A">
                        <b>Book an Appointment</b>
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                                <TextField id="input-with-sx" label="With sx" variant="standard" />
                            </Box>
                            <Grid item xs={12}  sx={{mt: 3}}>
                                <TextField
                                    name="patientName"
                                    required
                                    fullWidth
                                    id="patientName"
                                    label="Patient Name"
                                    variant="filled"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="mobileNumber"
                                    required
                                    fullWidth
                                    id="mobileNumber"
                                    label="Mobile Number"
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="age"
                                    label="Age"
                                    type="number"
                                    id="age"
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio sx={{
                                            color: "#033E8A",
                                            '&.Mui-checked': {
                                                color: "#033E8A",
                                            },
                                        }}/>} label="Female"/>
                                        <FormControlLabel value="male" control={<Radio sx={{
                                            color: "#033E8A",
                                            '&.Mui-checked': {
                                                color: "#033E8A",
                                            },
                                        }}/>} label="Male"/>
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="datetime-local"
                                    label="Appointment Date & Time"
                                    type="datetime-local"
                                    variant="filled"
                                    //defaultValue="2017-05-24T10:30"
                                    sx={{ width: 250 }}
                                    inputProps={{
                                        min:today
                                    }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Book Now
                        </Button>

                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}