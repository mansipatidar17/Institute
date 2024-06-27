import React from 'react';
import Carousel from 'react-elastic-carousel';
import './nav.css';
import {Link} from "react-router-dom";

const breakpoints = [{width:100,itemsToShow:1},
    {width:600,itemsToShow:2},
    {width:1000,itemsToShow:3},
    {width:1200,itemsToShow:3}]

const slider = () => {

       const items= [
          {id: 1, title: 'Neet UG'},
          {id: 2, title: 'Class 11'},
          {id: 3, title: 'class 12'},
          {id: 4, title: 'Class 10'},
          {id: 5, title: 'item #5'}
        ]
      
    //   const { items } = this.state;
  return (

    <div className='mt-5'>
          <h1 className='text-center mt-5' style={{color:"#2C6975"}}>Our Courses</h1>
         <Carousel breakPoints={breakpoints} className="mx-2">
        {/* {items.map(item => <div key={item.id}>{item.title}</div>)} */}
       { items.map((item) => {
                   
                    return (
                        <div className="card-deck row  mx-4 mt-5" key={item.id}>
      
     

  
  {/* <!-- Card --> */}
  <div className="card mb-4 col-md-3 "  style={{width:"300px"}}>

    {/* <!--Card image--> */}
    <div className="view overlay">
     {/* <i class ="fas fa-file-alt"></i> */}
     <img className="card-img-top" src="neet.jpg"
        alt="Card image cap" height={150}/>
     
      <a href="/">
        <div className="mask rgba-white-slight"></div>
      </a>
    </div>

    {/* <!--Card content--> */}
    <div className="card-body" >

      {/* <!--Title--> */}
      <h4 className="card-title">{item.title}</h4>
      {/* <!--Text--> */}
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
      <Link to= "/Enroll" className="btn  btn-md">Enroll Now </Link>

    </div>

  </div>
  {/* <!-- Card --> */}
  </div>

                       
                    )

                })
            }
      </Carousel>


      
    </div>
  )
}

export default slider
