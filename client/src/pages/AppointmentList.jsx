import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import {SERVER_URL} from "../utils/config";
import {Container, InputBase} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
 import Notification from "../utils/Notification";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import moment from "moment";
import EditIcon from '@mui/icons-material/Edit';
import {Link, useNavigate} from "react-router-dom";

function preventDefault(event) {
    event.preventDefault();
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#033E8A',
            back: '#e13636'
        },
        secondary:{
            main: '#2B91BF'
        },
        background:{
            default:'#ECFBFF'
        }

    },
});

const filters = [
    {
        value: 'Doctor',
        label: 'Doctor',
    },
    {
        value: 'Patient',
        label: 'Patient',
    },
];

export default function AppointmentList() {

    const [filter, setFilter] = React.useState('Doctor');

    const handleChange = (event) => {
        setFilter(event.target.value);
    };
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [id, setId] = React.useState();
    const handleClose = () => {
        setOpen(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const handleToggle2 = (id) => {
        setId(id);
        setOpen2(!open2);
    };

    const [count, setCount] = React.useState("");
    const [appointments, setAppointments] = React.useState([]);
    const [group, setGroup] = React.useState({});

    const getData = () =>{
        axios.get(`${SERVER_URL}/appointment`).then(res =>{
            setAppointments(res.data);

        })
    }
    React.useEffect(()=>{getData()},[0])


    const deleteAppointment = (id) =>{

        axios.delete(`${SERVER_URL}/appointment/${id}`).then(res=>{
            console.log(res.data)
            handleClose2();
            Notification('warning',"Appointment is deleted",6000);
        }).catch((error)=>{
            Notification('error',"Appointment is not deleted",6000);
            handleClose2();
            console.log(error)
        })
    }

    const UpdateAppointment = (id) =>{

        navigate(`/update-appointment/${id}`)
    }
    const ViewAGroup = (name) =>{

        // axios.get(`${SERVER_URL}/group/${name}`).then(res=>{
        //     console.log(res.data);
        //     setGroup(res.data);
        //     handleToggle();
        // }).catch((error)=>{
        //     console.log(error.message)
        // })
    }
    return(

    <ThemeProvider theme={theme} >
        <Container maxWidth='xl'   sx={{ bgcolor: '#ECFBFF',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 1920,
            backgroundPosition: 'center',
            justifyContent:'center',
            align: 'center'
        }}>
            <Typography component="h1" variant="h5" color="#033E8A" align='center'>
                <b>Appointments</b>
            </Typography>

            <Grid container direction='row' justifyContent="center" >

                <Grid container
                      direction="row"
                      justifyContent="center"
                      alignItems="center">
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', mt:5, display: 'flex', align:"center", alignItems: 'center', width: 500 }}>
                        <TextField
                            id="outlined-select-filter"
                            select
                            size="small"
                            value={filter}
                            onChange={handleChange}
                            helperText="Please select to filter"
                        >
                            {filters.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon color="primary" />
                        </IconButton>
                    </Paper>
                </Grid>

            <Paper sx={{p:10, mt:5, display: 'flex', flexDirection: 'column',maxWidth:1500, alignItems: 'center'}}>
            {/*<Paper sx={{ p: 10,m:10, display: 'flex', flexDirection: 'column',maxWidth:950, alignItems: 'center'}}>*/}
                <br/>

                <Grid container direction='row' justifyContent="flex-end" >
                <Button size="small" variant="contained">Book Appointment</Button>
                </Grid>
                <br/>
                <Table size="small" sx={{ maxWidth: 950 }}  component={Paper} elevation={7}>
                    <TableHead>
                        <TableRow
                            sx={{
                                backgroundColor: "#ECFBFF",
                                borderBottom: "2px solid #033E8A",
                                "& th": {
                                    color: "rgba(96, 96, 96)"
                                }
                            }}
                        >
                            <TableCell><b>Doctor</b></TableCell>
                            <TableCell><b>Appt Date</b></TableCell>
                            <TableCell><b>Booking Date</b></TableCell>
                            <TableCell><b>Patient</b></TableCell>
                            <TableCell><b>Status</b></TableCell>

                            <TableCell align={"center"}><b>Actions</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow key={appointment._id}>
                                <TableCell>{appointment.docname}</TableCell>
                                <TableCell>{moment(appointment.ApptDate).format("DD-MM-YYYY [at] HH:mm")}</TableCell>
                                <TableCell>{moment(appointment.BookDate).format("DD-MM-YYYY")}</TableCell>
                                <TableCell>{appointment.Patient}</TableCell>
                                <TableCell>{appointment.Patient}</TableCell>
                                <TableCell>
                                    <Stack direction="row" spacing={1} align="right">

                                        <Button type={"button"} variant="outlined" color="success" startIcon={<EditIcon size="small" />} onClick={()=>{UpdateAppointment(appointment._id)}}>
                                            <Link to={`/update-appointment/${id}`}> Edit</Link>
                                        </Button>

                                        <Button type={"button"} variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={()=>{handleToggle2(appointment._id)}}>
                                            Delete
                                        </Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}

                        <div>
                            <Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={open}
                                onClick={handleClose}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Group Name: {group.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.primary">
                                            Group Leader: {group.leader}
                                        </Typography>

                                        <Typography variant="body2" color="text.primary">
                                            Group Supervisor: {group.supervisor}
                                        </Typography>
                                        <Typography variant="body2" color="text.primary">
                                            Group Co-Supervisor: {group.co_supervisor}
                                        </Typography>

                                        <Typography variant="body2" color="text.primary">
                                            Group members: {group.member2}, {group.member3} and {group.member4}
                                        </Typography>
                                    </CardContent>
                                    {/*<CardActions>*/}
                                    {/*    <Button size="small">Share</Button>*/}
                                    {/*    <Button size="small">Learn More</Button>*/}
                                    {/*</CardActions>*/}
                                </Card>
                            </Backdrop>

                            <Dialog
                                open={open2}
                                onClose={handleClose2}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title" sx={{color: 'primary.back'}}>
                                    {"Warning!"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description" >
                                        Are you sure you want to delete this appointment?
                                        <br/> You can't undo this action.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button sx={{color: 'primary.main'}} onClick={handleClose2}>Cancel</Button>
                                    <Button sx={{color: 'primary.back'}} onClick={()=>{deleteAppointment(id)}} autoFocus>
                                        <b>Delete</b>
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </TableBody>
                </Table>
                <br/>
                <Button size="small" color="secondary" variant="contained">Generate Report</Button>
            </Paper>
            </Grid>
        </Container>

    </ThemeProvider>

    );
}


