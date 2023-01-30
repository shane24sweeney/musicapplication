import './App.css';
import { React } from 'react';
import "./App.css";
import Education from "./components/Education";
import HeadShot from "./components/HeadShot/HeadShot";
import About from "./components/About";
import FullResume from "./components/Fullresume";
import Testimonials from "./components/Testimonials";
import Email from "./components/Email";
import Charity from "./components/Charity";
import "./App.css";
import Navigation from './components/Navigation';
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from 'react-router';


function App(){
  return (
    <div className="App">
     
    <BrowserRouter>
    <Navigation />
    <Routes>
    <Route path="home"  exact element={ <HeadShot/> } />
    <Route path="/about" exact element={<About/>}/>
    <Route  path="/contact" exact element={<Email/>}/>
    <Route  path="/fullresume" exact element={<FullResume/>}/>
    <Route  path="/testimonials" exact element={<Testimonials/>}/>
    <Route  path="/education" exact element={<Education/>} />
    <Route path="/charity" exact element={<Charity/>}/>
    </Routes>
    </BrowserRouter>

    
    
        </div>

        
      );

    
    } 
    
  export default App;