import React from "react";
import CharityWork from "./HeadShot/CharityWork.png";
import DogDays from "./HeadShot/DogDays.png";
import RaceCure from "./HeadShot/SusanKomen.jpeg";
import  "./Testimonial.css";
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

function Charity ()  {
  return (
    <div>
  <p>
    Raised money and took part in the polar plunge for the Special Olympics
  </p>
         <img
             className="testimonial"
   src={CharityWork}
   style={{ height: '10%',
        padding: '15px', 
        borderRadius: '20px',
        boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
        width: '200px'}}
      />
    <p>Support Website for Dog Days Rescue</p>       
           <ButtonDogDaysPositive/>
        
         <p></p>
         <p></p>
         <img
             
   src={DogDays}
             alt="Image Two"
             style={{ height: '10%',
        padding: '15px', 
        borderRadius: '20px',
        boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
        width: '200px'}}
           />
          <p>Raised money and ran in the Susan G Komen Race For The Cure</p>
         <p></p>
         <p></p>
         <img
             
   src={RaceCure}
             alt="Image Three"
             style={{ height: '10%',
        padding: '15px', 
        borderRadius: '20px',
        boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
        width: '200px'}}
           />
         
         
 </div>
  )
};

export default Charity;
