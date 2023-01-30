import React from "react";
import CharityWork from "./CharityWork.png";
import DogDays from "./DogDays.png";
import RaceCure from "./SusanKomen.jpeg";
import { Card } from 'semantic-ui-react';

import  "../Testimonial.css";
import { Button } from "semantic-ui-react";

const portfoliaopt =
[
{ title: "https://www.dogdaysrescue.org/",
websitelink: "Dog Days Rescue Charity" 
}

]



  const ButtonDogDaysPositive = () => (
    <div>
    
      <Button circular color='green' href= {portfoliaopt[0].title} class="ui toggle button"
      >{portfoliaopt[0].websitelink}</Button>
   
    </div>
  )

const Charity = () => {
  return (
   
   
>
 
           <p>Raised money and took part in the polar plunge for the Special Olympics</p>  
            
          
         <p></p>
         <p></p>
         <img
             className="testimonial"
   src={CharityWork}
             alt="Image One"
           />
        
          

          <p>Support Website for Dog Days Rescue</p>
           
           <ButtonDogDaysPositive/>
        
         <p></p>
         <p></p>
         <img
             
   src={DogDays}
             alt="Image Two"
           />
         
       
         
         <p>Raised money and ran in the Susan G Komen Race For The Cure</p>  
        
         <p></p>
         <p></p>
         <img
             
   src={RaceCure}
             alt="Image Three"
           />
         
  

 
  )
};

export default Charity;
