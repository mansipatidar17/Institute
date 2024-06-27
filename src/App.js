// https://www.selfstudys.com/books/neet-previous-year-paper/english/year-wise
// import logo from './logo.svg';
// https://levelup.gitconnected.com/displaying-pdf-in-react-app-6e9d1fffa1a9
import {withRouter} from 'react-router-dom';
import './App.css';
import Card from './component/Card'
import Nav from './component/Nav'
import Footer from './component/Footer';
  import About from './component/About';
import Feature from './component/Feature';
import Notes from './component/Notes';
import Homeimg from './component/Homeimg';
import Paper from './component/Paper';
// import Pdf from './component/Pdf';
import Email from './component/Email';
import Slider from './component/Slider';
import Previous from './component/Previous';
import Contact from './component/Contact';
// import Video from './component/Video'

import React, {useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ReactDOM from 'react-dom';
import Login1 from './component/Login1';
import Vlecture from './component/Vlecture';
import Signup from './component/Signup';
import Enroll from './component/Enroll';





function App() {

  return (
   
    <div>
    
     <Router>

    
     
     
 
     <div className='education'>
    <Routes>
   

    <Route path="/" element={<> <Nav/> <Homeimg/> <About /> 
  <Feature/> <Slider/> <Email/>  <Footer/></> }/> 
  
   
     <Route path='/About' element={<><Nav/><About/> <Feature/> <Footer/></>}/>
    <Route path="/Notes" element={<><Nav/><Notes/> <Footer/></>}/> 
    <Route path="/Course" element={<><Nav/><Slider/> <Footer/></>}/> 
    <Route path="/Previous" element={<><Nav/><Previous/> <Footer/></>}/> 
    <Route path="/Paper" element={<><Nav/><Paper/><Footer/></>}/> 
    <Route path="/Video" element={<><Nav/><Vlecture/><Footer/></>}/> 
    <Route path="/Enroll" element={<><Nav/><Enroll/><Footer/></>}/>
    <Route path="/contact" element={<><Nav/><Contact/><Footer/></>}/>
    {/* pdf */}
    <Route path="/Signup" element={<Signup/>}/>
    <Route path='/Login1' element={<Login1/>}/>



     
   
     </Routes>
     </div>
    <div style={{height:"60px",width:"60px",position:"fixed",right:"10px",bottom:"30px"}}>
      <a href='https://wa.me/917828479207'><img src="whatsp.webp" height="60px" width="60px" style={{}}/></a>
    </div>
    
     {/* <Footer/> */}

    
    

     </Router>
     
      

 
    
    </div>
  );
}

export default App;
