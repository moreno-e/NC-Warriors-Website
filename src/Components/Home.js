import NavBar from "./NavBar";
import 'fontsource-roboto'
import { Typography } from "@material-ui/core";

function Home(){
    return (
        <div>
            <NavBar>
                
            </NavBar>

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

        </div>

    );//EOR
}

export default Home;