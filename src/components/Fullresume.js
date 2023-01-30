import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';

import  "./Testimonial.css";
import Eliassen from "./HeadShot/Eliassen.png";
import GPSTrackit from "./HeadShot/GPSTrackit.png";
import Deluxe from "./HeadShot/Deluxe.png";
import TEKsystems from "./HeadShot/Teksystems.png";



  
  
    const TEKSystemScript =
    [
    { 
    cred: "Senior Automation Engineer for API, Mobile, UI automation utilizing Selenium, Geb, Groovy, Spock, Page Object automation framework" 
    }
    ,
    { 
    cred: "Higher Diploma Computer Science - 1998/1999" 
    },
    
    { 
    cred: "B.A. Mathematical Studies and Sociology - 1995/1998" 
    },
    ]
  
  //styling
  
  function fullresume (props) {
  
  
    return (
      <section id="resume" 
      
      className="flex-container" centered
      onClick={props.click}>
        <div className="row work" />
        <div className="three columns header-col"></div>
        <div className="nine columns main-col" />
        <p></p>
     
        <p></p>
  
   
  
        <Accordion>
        
      
          <img
        className="testimonial"
           // className="d-block w-100"
  
           
  src={TEKsystems}
            alt="Image On"
            centered
          />
            <p>SENIOR AUTOMATION CONSULTANT MAY 2022 – PRESENT</p> 
         
       
       
        
         
          
  <p>Senior Automation Engineer for API, Mobile, UI automation utilizing Selenium, Geb, Groovy, Spock, Page Object automation framework</p>
  
        
       
     
        </Accordion>
       
  
       
        <Accordion>
     
      
            <p></p>
          <img
        className="testimonial"
           // className="d-block w-100"
  
           
  src={Eliassen}
            alt="Image One"
            centered
          />
            <p>SENIOR AUTOMATION CONTRACT ENGINEER MAY 2020 - APRIL 2022</p> 
        
     
    
      
          <p>
            Responsible for API and UI automation in C# framework.
          Developed both Behavioral Driven Development (BDD) and 
            Test Driven Development (TDD) automation frameworks.
            Created automation frameworks for deployments in Azure cloud utilizing design patterns
            and best practices.
            
          </p>
        
     
        </Accordion>
       
        <p></p>
       
        <Accordion>
         
   
          <img
        className="testimonial"
           // className="d-block w-100"
  src={GPSTrackit}
            alt="Image Two"
            centered
          />
          <p>SOFTWARE DEVELOPER DEC 2019 - APRIL 2020</p> 
 
       
       
          <p>
          
          <p>
            Responsible for developing GPS TRACKIT product line in React, Redux
            and Saga.
            Developed the first TDD automation framework from the ground up
            at GPS TRACKIT.
            Created BDD Rest-Assured API calls in the automation framework
            to validate API calls utilized in Postman.
          </p>
      
          </p>
       
        </Accordion>
      
  
         
         
          <div className="row item"></div>
         
        
        
        <div className="twelve columns">
        <p></p>
       
        <Accordion>
       
       
          <img
        className="testimonial"
           // className="d-block w-100"
  src={Deluxe}
            alt="Image Three"
            centered
          />
          <p>SENIOR AUTOMATION ENGINEER APRIL 2018 - NOV 2019</p> 
 
      
  
          <p>
      
          <p>
                Architected and utilized design patterns to create a new
                automation framework for DELUXE banking product lines. Programmed
                in Java/C# and Python Robot frameworks. Performed both API and UI
                automation on Business Mobile utilizing Python Robot and Java.{" "}
            
                Implemented Fluent and Dependency Injection design patterns in
                multiple automation frameworks for both iOS and Android
                applications.
             
              </p>
          
          
          </p>
      
        </Accordion>
          
        <p></p> 
        <div className="row skill">
          <div className="three columns header-col">
            <p></p>
         
            <h3>COMPETENT IN JAVA, C#, GROOVY GEB SPOCK, REACT, RUBY ON RAILS, AGILE AND SQL</h3>
      
          </div>
          <p></p>
  
    </div>
      
  
    </div>
        
  
    </section>
    );
  };
  export default fullresume;
  