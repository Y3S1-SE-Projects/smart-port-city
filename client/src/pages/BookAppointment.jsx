import React,{useEffect,useState} from "react";
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
import moment from "moment";
import {AccountCircle} from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import axios from "axios";
import {SERVER_URL} from "../utils/config";
import Notification from "../utils/Notification";
import {useParams} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#033E8A'
        },
        background: {
            default: '#ECFBFF'
        }
    },
});

export default function BookAppointment() {

    const {id} = useParams();
    const [doctor, setDoctor] = useState("")
    const [Patient, setPatient] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState('')
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("")
    const [Apptdate, setApptdate] = useState("");

    const today = moment().format('YYYY-MM-DDTkk:mm');

    const getAdoc = () =>{
        axios.get(`${SERVER_URL}/doctor/${id}`).then(res =>{
            setDoctor(res.data);
        })
    }
    useEffect(()=>{getAdoc()},[])


    const handleSubmit = async (event) => {
        event.preventDefault();
        const docname = doctor.name;
        let momentDate = moment(Apptdate).format();

        const newAppnt = {docname, Patient,phone,email,age,gender,Apptdate:momentDate};
        console.log(newAppnt)

        await axios.post(`${SERVER_URL}/appointment`,newAppnt).then((res)=>{
            setTimeout(()=>{
                Notification("success","Appointment fixed");

            },1000)
        }).catch((error)=> {
            console.log(error);
        })
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
                            <Grid item xs={12} sx={{mt: 3}}>
                                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                    <PersonIcon sx={{color: 'action.active', mr: 1, my: 0.5}} fontSize="large"/>
                                    <TextField
                                        name="patientName"
                                        required
                                        fullWidth
                                        value={Patient}
                                        onChange={(event) => {
                                            setPatient(event.target.value)
                                        }}
                                        id="patientName"
                                        label="Patient Name"
                                        variant="filled"
                                        autoFocus
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                    <CallIcon sx={{color: 'action.active', mr: 1, my: 0.5}} fontSize="large"/>
                                    <TextField
                                        name="mobileNumber"
                                        required
                                        fullWidth
                                        value={phone}
                                        onChange={(event) => {
                                            setPhone(event.target.value)
                                        }}
                                        id="mobileNumber"
                                        label="Mobile Number"
                                        variant="filled"
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                    <EmailIcon sx={{color: 'action.active', mr: 1, my: 0.5}} fontSize="large"/>
                                    <TextField
                                        required
                                        fullWidth
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value)
                                        }}
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        variant="filled"
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                    <PersonIcon sx={{color: 'action.active', mr: 1, my: 0.5}} fontSize="large"/>
                                    <TextField
                                        required
                                        fullWidth
                                        name="age"
                                        label="Age"
                                        value={age||""}
                                        onChange={(event) => {
                                            setAge(event.target.value)
                                        }}
                                        type="number"
                                        id="age"
                                        variant="filled"
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                        value={gender}
                                        onChange={(event) => {
                                            setGender(event.target.value)
                                        }}
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
                                <Box sx={{display: 'flex', alignItems: 'flex-end'}}>
                                    <CalendarMonthIcon sx={{color: 'action.active', mr: 1, my: 0.5}} fontSize="large"/>
                                    <TextField
                                        value={Apptdate}
                                        onChange={(event)=>{setApptdate(event.target.value)}}
                                        id="datetime-local"
                                        label="Appointment Date & Time"
                                        type="datetime-local"
                                        variant="filled"
                                        sx={{width: 250}}
                                        inputProps={{
                                            min: today
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Box>
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