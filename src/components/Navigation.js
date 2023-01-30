import React from 'react';
import {  Nav, NavbarBrand} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Button } from "semantic-ui-react";


function Navigation() {

  const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
    }};

  return (
    <div style={{color:'white'}}>
        <div className="container-fluid">
            <Nav className="ml-auto">
            <NavbarBrand>
            <NavLink to="/home" className="nav-link">
            <button style={theme}>Home</button></NavLink> 
              </NavbarBrand>
              <NavbarBrand>
                <NavLink to="/contact" className="nav-link">
               <button style={theme}>Contact</button>  
                </NavLink>
              </NavbarBrand>
              <NavbarBrand>
                <NavLink to="/about" className="nav-link"> 
                <button style={theme}>About</button>
                </NavLink>
              </NavbarBrand>
              <NavbarBrand>
                <NavLink to="/fullResume" className="nav-link">
              <button style={theme}>Full Resume</button>
                </NavLink>
              </NavbarBrand>
              <NavbarBrand>
                <NavLink to="/testimonials" className="nav-link">
             <button style={theme}>Testimonials</button>  
                  </NavLink>
              </NavbarBrand>
              <NavbarBrand>
                <NavLink to="/education" className="nav-link">
             <button style={theme}>Education</button> 
                </NavLink>
              </NavbarBrand>
              <NavbarBrand>
                <NavLink to="/charity" className="nav-link">
            <button style={theme}>Charity Work</button> 
                  </NavLink>
                  </NavbarBrand>
            </Nav>
           

        </div>
      
    
    </div>
  
  )
  
}

export default Navigation;