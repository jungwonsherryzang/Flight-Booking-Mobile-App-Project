import React from 'react';
import './styles.css';


import FlightInfo from './components/FlightInfo.jsx';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    margin: '20px',
  },

}))

const App = () => {
  const classes = useStyles();

  return (
    <div className="app">
      {/* header section */}
      <h1>Flight Booking App</h1>

      {/* Flight Info Components */}
      <FlightInfo />

    </div>

  );
};
export default App;
