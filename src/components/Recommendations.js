import React from 'react';
import Jason from "../components/HeadShot/Jason.jpeg";
import Carousel from 'react-bootstrap/Carousel';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Card } from 'semantic-ui-react';



  const Recommendations = () => {

    const theme = createMuiTheme({
        typography: {
          fontSize: "10px",
          fontFamily: [
            'Raleway', 'sans-serif',
            
          ].join(','),
        },});

    return (
        
       
        <Card centered    
        className="flex-container flex-item"
        style = {theme}>
        <h1>Jason Craven -  Director Of Architecture at GPS Trackit</h1>  
             <img
          src={Jason}
        />
           
            <p>
            Shane was a great pleasure to have on the team. 
            He was tremendous with all of the system automation work that he has been doing for years, but also stepped up and made the effort to pick up tasks with new technologies and help there as well. 
            I could always count on Shane to keep me informed about his progress, and be certain that he would make every effort possible to get the job done, both right and on time.I offer my highest recommendation for Shane and would attest that he would be an asset in almost any organization. 
            </p> 
            {props.data}  
         
          </Card>  
            



      

    

    )
}
export default Recommendations;