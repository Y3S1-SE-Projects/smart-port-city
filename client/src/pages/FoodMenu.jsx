import * as React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Avatar,Backdrop, IconButton, InputBase, Paper,Container,Typography,Box,Grid,CssBaseline,CardMedia,CardActions,CardContent,Card,Button} from "@mui/material";
import DocIcon from "../icons/DocIcon";
import SearchIcon from '@mui/icons-material/Search';
import {SERVER_URL} from "../utils/config";
import axios from "axios";
import {useState,useEffect} from "react";




const theme = createTheme({
    palette: {
        primary: {
            main: '#E13535'
        },
        background:{
            default:'#FBE5AC'
        }
    }

});

export default function FoodMenu(){

    const [foods,setFoods]=useState([]);
    const [food,setFood]=useState({});

    const vegFoodCode = '#12D843';
    const nonVegFoodCode = '#FD3535';

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
    const ViewAFood = (id) =>{
        axios.get(`${SERVER_URL}/food/${id}`).then(res=>{
            setFood(res.data);
            handleToggle();
        }).catch((error)=>{
            console.log(error.message)
        })
    }

    const getData = () =>{
        axios.get(`${SERVER_URL}/food`).then(res =>{
            setFoods(res.data);
            console.log(res.data)
        })
    }
    useEffect(()=>{getData()},[])

    return(

    <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
            {/* Hero unit */}
            <Box
                sx={{
                    bgcolor: '#FBE5AC',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="#E13535"
                        gutterBottom
                    >
                        <b>Food Menu</b>
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
                    {/*<Box sx={{ display: 'flex' }}>*/}
                    {/*    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />*/}
                    {/*    <TextField id="input-with-sx" label="With sx" variant="standard" width="50%" />*/}
                    {/*</Box>*/}
                </Container>
            </Box>
            <Container sx={{ py: 3, bgcolor: '#FBE5AC'}} maxWidth="md" >
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {foods.map((food) => (
                        <Grid item key={food} xs={12} sm={6} md={4}>
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
                                    <Typography gutterBottom variant="body2" component="h5">
                                        {food.origin}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {food.name}
                                    </Typography>
                                    <Typography>
                                        LKR {food.price}
                                    </Typography>
                                </CardContent>

                                <CardActions sx={{ justifyContent:"right" , mr: 2, mb: 2}}>
                                    <Avatar sx={{mr: 17, bgcolor: food.category==="Vegetarian"?vegFoodCode:nonVegFoodCode, width:20, height:20}}>
                                        <DocIcon style={{color: food.category==="Vegetarian"?vegFoodCode:nonVegFoodCode}}/>
                                    </Avatar>
                                    <Button size="small" variant="contained" onClick={()=>{ViewAFood(food._id)}}>View</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                    onClick={handleClose}>
                    <Card sx={{ width: 600 }}>
                        <CardMedia
                            component="img"
                            // sx={{
                            //     // 16:9
                            //     pt: '56.25%',
                            // }}
                            sx={{ maxHeight: 500 }}
                            image="https://source.unsplash.com/random"
                            alt="random"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.primary" align='center'>
                                {food.origin}
                            </Typography>
                            <Typography gutterBottom variant="h4" component="div" align='center'>
                                {food.name}
                            </Typography>


                            <Typography variant="body2" color="text.primary">
                                {food.description}
                            </Typography>
                            {/*<Typography variant="body2" color="text.primary">*/}
                            {/*    Group Co-Supervisor:*/}
                            {/*</Typography>*/}

                            {/*<Typography variant="body2" color="text.primary">*/}
                            {/*    Group members:*/}
                            {/*</Typography>*/}
                        </CardContent>
                        <CardActions sx={{ justifyContent:"right" , mr: 2, mb: 2}}>
                            <Avatar sx={{mr: 4, bgcolor: food.category==="Vegetarian"?vegFoodCode:nonVegFoodCode, width:20, height:20}}>
                                <DocIcon style={{color: food.category==="Vegetarian"?vegFoodCode:nonVegFoodCode}}/>
                            </Avatar>
                            <Typography variant="h5" sx={{mr: 40}}>
                                LKR {food.price}
                            </Typography>
                            <Button size="medium" variant="contained" onClick={()=>{handleClose()}}>Back</Button>
                        </CardActions>
                    </Card>
                </Backdrop>
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