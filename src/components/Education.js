import React from "react";
import  "./Testimonial.css";
import { Card } from 'semantic-ui-react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import UCC from './HeadShot/UCC.jpeg';
import NCState from './HeadShot/NCState.jpeg';


function Education(){
const educationdescript =
[
{ 
degree: "Masters in Computer Science - 2015" 
}
,
{ 
degree: "Higher Diploma Computer Science - 1998/1999" 
},

{ 
degree: "B.A. Mathematical Studies and Sociology - 1995/1998" 
},
]



  return (
    <section id="education" >
  
    <img
        className="testimonial"
src={NCState} 
        alt="Image One"
        style={{ height: '10%',
        padding: '15px', 
        borderRadius: '20px',
        boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
        width: '200px'}}
      />

      <p>{educationdescript[0].degree}</p> 

       <img
        className="testimonial"
src={UCC} 
        alt="Image Two"
        style={{ height: '10%',
        padding: '15px', 
        borderRadius: '20px',
        boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
        width: '200px'}}
      />

<p>{educationdescript[1].degree}</p>
      
    
      <div >
</div>
    
<img
        className="testimonial"
src={UCC} 
        alt="Image Three"
        style={{ height: '10%',
        padding: '15px', 
        borderRadius: '20px',
        boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
        width: '200px'}}
      />

<p>{educationdescript[2].degree}</p>
   


       <div >
</div>


</section>
  );
};

export default Education;
