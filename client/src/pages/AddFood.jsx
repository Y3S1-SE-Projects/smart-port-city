import {createTheme, ThemeProvider} from "@mui/material/styles";
import axios from "axios";
import {SERVER_URL} from "../utils/config";
import {CssBaseline, Box, Container, Typography, Grid, LinearProgress, TextField} from "@mui/material";
import {Backdrop, IconButton, InputBase, Paper} from "@mui/material";
import {Search as SearchIcon} from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import DocIcon from "../icons/DocIcon";
import Button from "@mui/material/Button";
import React, {useState} from "react";
//import Notification from "../utils/Notification";


const theme = createTheme({
    palette: {
        primary: {
            main: '#E13535'
        },
        background: {
            default: '#FBE5AC'
        }
    },
    components: {
        MuiPaper: {
            defaultProps: {
                sx: {
                    p: '4px 10px',
                    mt: 3,
                    display: 'flex',
                    align: "center",
                    alignItems: 'center',
                    width: 600,
                    height: 48
                }
            }
        }
    }


});


export default function AddFood() {

    const [name, setName] = useState("");
    const [origin, setOrigin] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

    const [file, setFile] = useState(null);

    const [loading, setLoading] = useState(true);

    function handleClick() {
        setLoading(true);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // setLoading(true);

        // setName(event.target.value);
        // setCategory(event.target.value);
        // setPrice(event.target.value);
        //setDescription(event.target.value);
        //setFile(event.target.value);
        console.log(name);
        console.log(category);
        console.log(price);
        console.log(description);
        console.log(file);
        // setLoading(true);

        //
        // let formData = new FormData();
        // formData.append("file", file);
        // console.log(file);
        //
        // const newFood = {name,origin,price,description,category}
        // axios.post(`${SERVER_URL}/food`,newFood).then(res=>{
        //     setTimeout(() => {
        //         setLoading(false);
        //         Notification("success", `Food has been added successfully`)
        //     }, 2000);
        // }).catch((error)=>{
        //     console.log(error.message)
        // })
    }

    return (

        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: '#FBE5AC',
                        pt: 8,
                        pb: 6,
                    }}>
                    <Container maxWidth="md">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="#E13535"
                            gutterBottom>
                            <b>Add a Food </b>
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit}>

                            <Grid container justifyContent="center" alignItems="center" elevation={8}>
                                <Box sx={{ width: '50%' }}>
                                    {/*<LinearProgress />*/}
                                </Box>
                                <Paper>
                                    <InputBase
                                        sx={{ml: 2, flex: 1}}
                                        placeholder="Food Name"
                                        required
                                        value={name || ""}
                                        onChange={(event) => {
                                            setName(event.target.value)
                                        }}
                                        // error={errors.name}
                                        //helperText={errors.name ? errors.name : ""}
                                        name="name"
                                        autoFocus
                                    />
                                </Paper>
                                <Paper>
                                    <InputBase
                                        sx={{ml: 2, flex: 1}}
                                        placeholder="Category"
                                        required
                                        value={category || ""}
                                        onChange={(event) => {
                                            setCategory(event.target.value)
                                        }}
                                        //value={name}
                                        // onChange={(event)=> {setGroupname(event.target.value)}}
                                        // error={errors.name}
                                        //helperText={errors.name ? errors.name : ""}
                                        name="Category"
                                    />
                                </Paper>
                                <Paper>
                                    <InputBase
                                        sx={{ml: 2, flex: 1}}
                                        placeholder="Price"
                                        required
                                        type="number"
                                        value={price ||""}
                                        onChange={(event) => {
                                            setPrice(event.target.value)
                                        }}
                                        //value={name}
                                        // onChange={(event)=> {setGroupname(event.target.value)}}
                                        // error={errors.name}
                                        //helperText={errors.name ? errors.name : ""}
                                        name="price"
                                    />
                                </Paper>
                                <Paper
                                    sx= {{
                                        width: 600,
                                        height: 150,
                                        mt: 3,
                                    }}>
                                    <InputBase
                                        sx={{pt:3,ml: 3, flex: 1,width:583}}
                                        placeholder="Description"
                                        required
                                        multiline
                                        maxRows={6}
                                        value={description ||""}
                                        onChange={(event) => {
                                            setDescription(event.target.value)
                                        }}
                                        //value={name}
                                        // onChange={(event)=> {setGroupname(event.target.value)}}
                                        // error={errors.name}
                                        //helperText={errors.name ? errors.name : ""}
                                        name="name"
                                    />
                                </Paper>
                                <Paper>
                                <Button variant="contained" component="label" value={file} onChange={(event)=>{setFile(event.target.value)}}>
                                    Upload
                                    <input hidden accept="image/*" multiple type="file" />
                                </Button>
                                    {file && (
                                        <div>
                                            <strong>Selected file:</strong> {file.name}
                                        </div>
                                    )}
                                </Paper>


                            </Grid>

                            <Box textAlign="center">
                                <Button type="submit" size="large" style={{width: "25%", justifyContent: "center"}}
                                        variant="contained" sx={{mt: 3, mb: 2}}>
                                    Add Food
                                </Button>
                            </Box>
                        </Box>
                        {/*<Box sx={{ display: 'flex' }}>*/}
                        {/*    <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />*/}
                        {/*    <TextField id="input-with-sx" label="With sx" variant="standard" width="50%" />*/}
                        {/*</Box>*/}
                    </Container>
                </Box>
                <Container sx={{py: 3, bgcolor: '#FBE5AC'}} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {/*{foods.map((food) => (*/}
                        {/*    <Grid item key={food} xs={12} sm={6} md={4}>*/}
                        {/*        <Card*/}
                        {/*            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}*/}
                        {/*        >*/}
                        {/*            <CardMedia*/}
                        {/*                component="img"*/}
                        {/*                // sx={{*/}
                        {/*                //     // 16:9*/}
                        {/*                //     pt: '56.25%',*/}
                        {/*                // }}*/}
                        {/*                image="https://source.unsplash.com/random"*/}
                        {/*                alt="random"*/}
                        {/*            />*/}
                        {/*            <CardContent sx={{ flexGrow: 1 }}>*/}
                        {/*                <Typography gutterBottom variant="body2" component="h5">*/}
                        {/*                    {food.origin}*/}
                        {/*                </Typography>*/}
                        {/*                <Typography gutterBottom variant="h5" component="h2">*/}
                        {/*                    {food.name}*/}
                        {/*                </Typography>*/}
                        {/*                <Typography>*/}
                        {/*                    LKR {food.price}*/}
                        {/*                </Typography>*/}
                        {/*            </CardContent>*/}

                        {/*            /!*<CardActions sx={{ justifyContent:"right" , mr: 2, mb: 2}}>*!/*/}
                        {/*            /!*    <Avatar sx={{mr: 17, bgcolor: food.category==="Vegetarian"?vegFoodCode:nonVegFoodCode, width:20, height:20}}>*!/*/}
                        {/*            /!*        <DocIcon style={{color: food.category==="Vegetarian"?vegFoodCode:nonVegFoodCode}}/>*!/*/}
                        {/*            /!*    </Avatar>*!/*/}
                        {/*            /!*    <Button size="small" variant="contained" onClick={()=>{ViewAFood(food._id)}}>View</Button>*!/*/}
                        {/*            /!*</CardActions>*!/*/}
                        {/*        </Card>*/}
                        {/*    </Grid>*/}
                        {/*))}*/}
                    </Grid>
                    {/*<Backdrop sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}>*/}
                    {/*<Card sx={{ width: 600 }}>*/}
                    {/*    <CardMedia*/}
                    {/*        component="img"*/}
                    {/*        // sx={{*/}
                    {/*        //     // 16:9*/}
                    {/*        //     pt: '56.25%',*/}
                    {/*        // }}*/}
                    {/*        sx={{ maxHeight: 500 }}*/}
                    {/*        image="https://source.unsplash.com/random"*/}
                    {/*        alt="random"*/}
                    {/*    />*/}
                    {/*    <CardContent>*/}
                    {/*        <Typography variant="body2" color="text.primary" align='center'>*/}
                    {/*            {food.origin}*/}
                    {/*        </Typography>*/}
                    {/*        <Typography gutterBottom variant="h4" component="div" align='center'>*/}
                    {/*            {food.name}*/}
                    {/*        </Typography>*/}


                    {/*        <Typography variant="body2" color="text.primary">*/}
                    {/*            {food.description}*/}
                    {/*        </Typography>*/}
                    {/*        /!*<Typography variant="body2" color="text.primary">*!/*/}
                    {/*        /!*    Group Co-Supervisor:*!/*/}
                    {/*        /!*</Typography>*!/*/}

                    {/*        /!*<Typography variant="body2" color="text.primary">*!/*/}
                    {/*        /!*    Group members:*!/*/}
                    {/*        /!*</Typography>*!/*/}
                    {/*    </CardContent>*/}
                    {/*    <CardActions sx={{ justifyContent:"right" , mr: 2, mb: 2}}>*/}
                    {/*        <Avatar sx={{mr: 4, bgcolor: food.category==="Vegetarian"?vegFoodCode:nonVegFoodCode, width:20, height:20}}>*/}
                    {/*            <DocIcon style={{color: food.category==="Vegetarian"?vegFoodCode:nonVegFoodCode}}/>*/}
                    {/*        </Avatar>*/}
                    {/*        <Typography variant="h5" sx={{mr: 40}}>*/}
                    {/*            LKR {food.price}*/}
                    {/*        </Typography>*/}
                    {/*        <Button size="medium" variant="contained" onClick={()=>{handleClose()}}>Back</Button>*/}
                    {/*    </CardActions>*/}
                    {/*</Card>*/}
                    {/*</Backdrop>*/}
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