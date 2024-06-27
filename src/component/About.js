import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className=''>
      
       <div className='about-us-section mt-md-1'>
        <div className='container'>
         <div className='row'>
          <div className='col-12 col-lg-6 mb-md-4 mb-lg-0'>
           <div className='img-head'>
            <img src="about.jpg" alt=""/>
           </div>
          </div>
           <div className='col-12 col-lg-6'>
            <h2 className='text-head'>
                KNOW MORE ABOUT US
            </h2>
            <div className='break-small mb-2'></div>
            <p className='text-para'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
             enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
             voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
             culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <div className='row'>
                <div className='col-12 col-md-4 mb-2 mb-md-0'>
                    <div className='box'>
                        <i class='fa fa-users mb-3'></i>
                        <h4 className='mb-0'>TOTAL students</h4>
                        <p className='mb-0'>1000</p>
                    </div>
                </div>
                <div className='col-12 col-md-4 mb-2 mb-md-0'>
                    <div className='box'>
                        <i class='fa fa-graduation-cap mb-3'></i>
                        <h4 className='mb-0'>TOTAL Courses</h4>
                        <p className='mb-0'>10</p>
                    </div>
                </div>
                <div className='col-12 col-md-4 mb-2 mb-md-0'>
                    <div className='box'>
                        <i class='fa fa-paper-plane mb-3'></i>
                        <h4 className='mb-0'>TOTAL CLIENTS</h4>
                        <p className='mb-0'>999</p>
                    </div>
                </div>
            </div>
           </div>
         </div>
        </div>
       </div>
      </div>
    // </div> 
  )
}

export default About