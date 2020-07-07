import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import coronaImage from '../images/covid19.png';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 10,
  },
 
  title: {
    flexGrow: 10,
  },
}));

export default function HeaderAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  position="sticky" color="secondary" elevation={19}>
      <img src={coronaImage} alt="Covid-19" width="150" height="90" justify="center"/>
      
       
      
        <Toolbar>
          <Typography variant="h5" className={classes.title} >
            Covid-19  Global  Update  Tracker
          </Typography>
        </Toolbar>
        
        
      </AppBar>  
    </div>
  );
}
