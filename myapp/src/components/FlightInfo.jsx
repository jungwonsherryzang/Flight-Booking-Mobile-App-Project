import React, { useState, useEffect } from 'react';
import '../styles.css';
import { Grid, Typography, Paper, Select, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { FaPlaneDeparture, FaPlaneArrival, FaChild, FaCalendarCheck, FaPlane, FaSearch } from 'react-icons/fa';
import { GiPerson } from 'react-icons/gi';


import { RadioGroup, FormControlLabel, Radio, FormControl, InputLabel, MenuItem } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    info: {
        width: '550px',
        [theme.breakpoints.down('xs')]: {
            width: '300px', //width on mobile devices
        },
    },

    paper: {
        padding: '10px',
        border: '2px solid black',
        margin: '10px',
    },

    gridContainer: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },

    gridPaper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        background: 'rgba(239, 243, 246, 1)',
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 500,
    },

    form: {
        margin: theme.spacing(1),
        minWidth: 100,
        padding: theme.spacing(1),
        textAlign: 'center',
    },

    button: {
        margin: theme.spacing(1),
        textAlign: 'center',
    }
    

}));

const FlightInfo = () => {
    const classes = useStyles();
    const [triptype, setTriptype] = useState("switching");
    const [airport, setAirport] = useState();



    return (
        <Grid container className={classes.gridContainer} spacing={2}>
            <div className={classes.body}/>
            <Paper className={classes.paper}>
                <Grid item xs={12}>
                    <div>
                    <Paper className={classes.gridPaper}>
                        <FormControl className="body">
                                <RadioGroup row name="triptype" value={triptype} onChange={e => setTriptype(e.target.value)}>
                                    <FormControlLabel value="Round-Trip" control={<Radio />} label={<Typography variant="h6" className='font-loader'>Round-Trip</Typography>} />
                                    <FormControlLabel value="Oneway-Trip" control={<Radio />} label={<Typography variant="h6" className='font-loader'>OneWay-Trip</Typography>} />
                                    <FormControlLabel value="Multi-City" control={<Radio />} label={<Typography variant="h6" className='font-loader'>MultiCity-Trip</Typography>}/>
                                </RadioGroup>
                        </FormControl>
                    </Paper>
                    </div>
                </Grid>
                <div>Test</div>

                {/* Departure Section */}
                <Grid item xs={12}>
                    <div>
                        <Typography className='font-loader'>FLYING FROM<FaPlane/></Typography>
                        <Paper className={classes.gridPaper}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel className='font-loader'><FaPlaneDeparture/>Select Departure Airport</InputLabel>
                                <Select className='font-loader' value={airport} autoWidth label="Airport" onChange={e => setAirport(e.target.value)}>
                                    <MenuItem className='font-loader' value='' selected disabled hidden>Select Airport</MenuItem>
                                    <MenuItem className='font-loader' value={'DAB'}>Daytona Beach International Airport</MenuItem>
                                    <MenuItem className='font-loader' value={'MOC'}>Orlando International Airport</MenuItem>
                                    <MenuItem className='font-loader' value={'MIA'}>Miami International Airport</MenuItem>
                                    <MenuItem className='font-loader' value={'ATL'}>Hartsfield-Jackson Atlanta International Airport</MenuItem>
                                </Select>
                            </FormControl>
                        </Paper>
                    </div>
                </Grid>
                <div>Test</div>

                {/* Arrival Section */} 
                <Grid item xs={12}>
                    <div>
                        <Typography className='font-loader'>FLYING TO<FaPlane/></Typography>
                        <Paper className={classes.gridPaper}>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel className='font-loader'><FaPlaneArrival/>Select Arrival Airport</InputLabel>
                                <Select className='font-loader' value={airport} autoWidth label="Airport" onChange={e => setAirport(e.target.value)}>
                                    <MenuItem className='font-loader' value='' selected disabled hidden>Select Airport</MenuItem>
                                    <MenuItem className='font-loader' value={'PAO'}>Palo Alto Airport</MenuItem>
                                    <MenuItem className='font-loader' value={'SEA'}>Seattle-Tacoma International Airport</MenuItem>
                                    <MenuItem className='font-loader' value={'SFO'}>San Francisco International Airport</MenuItem>
                                    <MenuItem className='font-loader' value={'PDX'}>Portland International Airport</MenuItem>
                                </Select>
                            </FormControl>
                        </Paper>
                    </div>
                </Grid>
                <div>Test</div>

                {/* Date Section */}
                {/* Departure Date Section */}
                <Grid container spacing={3}>
                <Grid item xs={12} sm={6} spacing={3}>
                    <div>
                        <Typography className='font-loader'>DEPARTURE DATE<FaCalendarCheck/></Typography>
                            <Paper className={classes.gridPaper}>
                                <input className={classes.form} type='date' />
                            </Paper>
                        <div>Test</div>
                    </div>
                </Grid>

                {/* Arrival Date Section */}
                <Grid item xs={12} sm={6} spacing={0.5}>
                    <div>
                        <Typography className='font-loader'>RETURNING DATE<FaCalendarCheck/></Typography>
                            <Paper className={classes.gridPaper}>
                                <input className={classes.form} type='date' />
                            </Paper>
                        <div>Test</div>
                    </div>
                </Grid>

                {/* Passenger Section */}
                {/* Adult Section */}
                <Grid item xs={12} sm={6} spacing={3}>
                    <div>
                        <Typography className='font-loader'>ADULTS (18+)<GiPerson/></Typography>            
                            <Paper className={classes.gridPaper}>
                                <select className={classes.form}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </Paper>
                        <div>Test</div>
                    </div>
                </Grid>

                {/* Children Section */}
                <Grid item xs={12} sm={6} spacing={3}> 
                    <div>
                        <Typography className='font-loader'>CHILDREN (0-17)<FaChild/></Typography>
                            <Paper className={classes.gridPaper}>
                                <select className={classes.form}>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </Paper>
                        <div>Test</div>
                    </div>
                </Grid>


                {/* Class and Price Section*/}
                {/* Class Section */}
                <Grid item xs={12} sm={6} spacing={3}>
                    <div>
                        <Typography className='font-loader'>CLASS</Typography>
                            <Paper className={classes.gridPaper}>
                                <select className={classes.form}>
                                    <option>Ecomony</option>
                                    <option>Business</option>
                                </select>
                            </Paper>
                        <div>Test</div>
                    </div>
                </Grid>

                {/* Price Section */}
                <Grid item xs={12} sm={6} spacing={3}>
                    <div>
                        <Typography className='font-loader'>PRICE</Typography>
                            <Paper className={classes.gridPaper}>
                                <select className={classes.form}>
                                    <option>All Prices</option>
                                    <option>$ 1000</option>
                                    <option>$ 2000</option>
                                    <option>$ 3000</option>
                                    <option>$ 4000</option>
                                    <option>$ 5000</option>
                                </select>
                            </Paper>
                        <div>Test</div>
                    </div>
                </Grid>
                </Grid>

                {/* Button Section */}
                <Paper className={classes.gridPaper}>
                    <Button className={classes.button} variant="contained" size="large" color="primary" onClick={() => {}}>
                        <FaSearch/>Search Flight
                    </Button>
                </Paper>
            </Paper>
        </Grid>
    );
};
export default FlightInfo;