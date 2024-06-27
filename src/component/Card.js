import React from 'react'
import './nav.css';
const Card = () => {
  return (
   
    <div>
       <h1 className='text-center mt-5'>Our Features</h1>
  
        

{/* <!-- Card deck -->  */}
 <div className="card-deck row justify-content-evenly mx-4 mt-5  ">
      
     

  
  {/* <!-- Card --> */}
  <div className="card mb-4 col-md-3 " >

    {/* <!--Card image--> */}
    <div className="view overlay">
     {/* <i class ="fas fa-file-alt"></i> */}
     <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/14.webp"
        alt="Card image cap"/>
     
      <a href="/">
        <div className="mask rgba-white-slight"></div>
      </a>
    </div>

    {/* <!--Card content--> */}
    <div className="card-body" >

      {/* <!--Title--> */}
      <h4 className="card-title">Card title</h4>
      {/* <!--Text--> */}
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
      <button type="button" className="btn btn-light-blue btn-md">Read more</button>

    </div>

  </div>
  {/* <!-- Card --> */}

  {/* <!-- Card --> */}
  <div className="card mb-4 col-md-3 ">

    {/* <!--Card image--> */}
    <div className="view overlay">
      <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/14.webp"
        alt="Card image cap"/>
      <a href="/">
        <div className="mask rgba-white-slight"></div>
      </a>
    </div>

    {/* <!--Card content--> */}
    <div className="card-body">

      {/* <!--Title--> */}
      <h4 className="card-title">Card title</h4>
      {/* <!--Text--> */}
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
      <button type="button" className="btn btn-light-blue btn-md">Read more</button>

    </div>

  </div>
  {/* <!-- Card --> */}

  {/* <!-- Card --> */}
  <div className="card mb-4 col-md-3 ">

    {/* <!--Card image--> */}
    <div className="view overlay">
      <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/images/15.webp"
        alt="Card image cap"/>
      <a href="#!">
        <div className="mask rgba-white-slight"></div>
      </a>
    </div>

    {/* <!--Card content--> */}
    <div className="card-body">

      {/* <!--Title--> */}
      <h4 className="card-title">Card title</h4>
      {/* <!--Text--> */}
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
        content.</p>
      {/* <!-- Provides extra visual weight and identifies the primary action in a set of buttons --> */}
      <button type="button" className="btn btn-light-blue btn-md">Read more</button>

    </div>

  </div>
  {/* <!-- Card --> */}


{/* <!-- Card deck --> */}
      
    </div>
     </div>

    
  )
}

export default Card;
