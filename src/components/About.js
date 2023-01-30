import React from "react";
import  "./Testimonial.css";
import Tropies from "./HeadShot/Tropies.png";


function About (){
  
  return (
    <section id="about">
   
   <img
             className="about"
   src={Tropies}
   style={{ height: '10%',
        padding: '15px', 
        borderRadius: '20px',
        boxShadow: '15px 15px 15px 15px rgb(20 20 20 / 60%)',
        width: '200px'}}
      />
        
      
         <p>
Your mind is clear. Your heart rate is racing with anticipation and
        excitement. The world's surroundings suddenly disappear and it's just
        you and the open road ahead. That is running a race in a nutshell. For
        an avid runner, this is the motivation to keep going. Completing
        something from start to finish for a sense of accomplishment and
        victory. The feeling and high from being a software developer is very
        similar. You receive the same satisfaction of seeing something through
        from beginning to end. The excitement and anticipation of knowing you're
        about to create something new is unlike any other. A challenge has been
        extended and accepted, and it's time to see it through to victory. I am
        both a runner and a software developer, and feel very fortunate to be
        able to experience such satisfaction in both my career and fitness
        journey.
        </p>
        <p></p>
          <cite>
            Shane James Sweeney,  You have to fail to succeed
          </cite>
   
 
  

     
     </section>
     
  );
};

export default About;
