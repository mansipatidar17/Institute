import React from 'react'
import {Link} from "react-router-dom";


import './nav.css';
const Nav = () => {
  return (
    <div>


<header>
  {/* <!-- list-group-flush --> */}
    {/* <!-- Sidebar --> */}
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
      <div className="position-sticky" >
        <div className="list-group list-group-flush mx-3 mt-5" >
          <Link to="/" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
            <i className="fa fa-home me-3"></i><span>Home</span>
          </Link>
          <Link to='/About' className="list-group-item list-group-item-action py-2 ripple">
            <i className="fas fa-chart-area fa-fw me-3"></i><span>About</span>
          </Link>
          <Link to="/Course" className="list-group-item list-group-item-action py-2 ripple"><i
              className="fa fa-graduation-cap me-3"></i><span>Courses</span></Link>
          <Link to="/Notes" className="list-group-item list-group-item-action py-2 ripple"><i
              className="fa fa-file me-3"></i><span>Notes</span></Link>
              {/* <div className="dropdown list-group-item list-group-item-action py-2 ripple">
              <div className='dropdown-toggle' type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: "#2C6975"}} >
                <i className="fa-sharp fa-solid fa-file-circle-question me-3"></i><span>Previous year</span></div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link to="/Previous" className="dropdown-item">class 9th</Link>
    {/* <a className="dropdown-item" href="#">class 10th</a>
    <a className="dropdown-item" href="#">class 11th</a>
    <a className="dropdown-item" href="#">class 12th</a> */}
  {/* </div>
                </div>  */}
      <Link to="/previous" className="list-group-item list-group-item-action py-2 ripple"> <i className="fa-sharp fa-solid fa-file-circle-question me-3"></i><span>Previous Year</span></Link>

           
          {/* <!-- <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
              className=" me-3"></i><span>Test Series</span></a> --> */}
          <Link to="/Video" className="list-group-item list-group-item-action py-2 ripple"><i
              className="fa fa-video-camera me-3"></i><span>Video Lectures</span></Link>
          <Link to="/contact" className="list-group-item list-group-item-action py-2 ripple"><i className=" fa fa-solid fa-id-card-clip me-3"></i><span>Contact Us</span></Link>
          {/* <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
              className="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
              className="fas fa-users fa-fw me-3"></i><span>Users</span></a>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple"><i
              className="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a> */}
        </div>
      </div>
    </nav>
    {/* <!-- Sidebar -->
  


    {/* <!-- Navbar --> */}
  <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top ">
  
    <div className="container-fluid">
      {/* <!-- Toggle button --> */}
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>

     <Link  to="/"><h2 className="my-auto mansi"  style={{color:'#2C6975',marginLeft:'20px'}}>
 <i className="fa-sharp fa-solid fa-graduation-cap mx-md-2" ></i>Education</h2></Link>
 {/* <div id='"google_element'></div> */}
  <Link to="/Login1" className="btn  my-3 mx-md-5">Login</Link>
    </div>
   
  </nav>
  </header>
  {/* <!--Main Navigation--> */}
  
  {/* <!--Main layout--> */}
  {/* <main style={{margintop: '100px'}}> */}
    

    {/* </main> */}


        </div>

 
  )
}

export default Nav
