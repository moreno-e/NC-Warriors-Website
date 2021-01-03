import NavBar from "./NavBar";
import 'fontsource-roboto'
import { Typography, Container } from "@material-ui/core";
import Images from "./ImageSlider"
import { SliderData } from "./SliderData";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function Home(){
    const classes = useStyles();

    return (
        <div>
            <NavBar>               
            </NavBar>
            <Container>
            <div>
                <Typography variant="h1" style={{fontSize: 60}}>
                    Welcome to the N.C. Warriors Hockey Program
                </Typography>
                <Typography variant="h2" style={{fontSize: 30}}>
                    An All Disabled Veteran Hockey Team <br></br>
                  
                </Typography>
                <Typography variant="h2" style={{fontSize: 25}}>
                    Est. 2019 Raleigh, N.C.
                </Typography>
           
            </div>
            </Container>

            <div className="container">
                <div>
                hello
                </div>
                <div>
                <Images slides={SliderData}></Images>
                </div>
             
            </div>
         
            <div className={classes.root}>
                                   
            </div>
            
            
           
           

        </div>

    );//EOR
}

export default Home;