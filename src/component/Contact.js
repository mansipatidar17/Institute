import React from 'react'
import './Contact.css';

const Contact = () => {
  return (
    <> 
       <div className="contact_info " style={{marginTop:"100px"}}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 offset-lg-1 d-md-flex justify-content-between maindiv">
                    {/* phone number */}
                    <div className="contact_info_item d-md-flex justify-content-md-start align-items-center">
                           {/* <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone'/> */}
                           <div className="contact_info_content my-3">
                             {/* <div className="contact_info_title">
                                Phone
                             </div> */}
                              <i class="fa-solid fa-phone"></i>
                             <div className="contact_info_text ">
                                +91 1111 543 2198
                             </div>
                           </div>
                    </div>
                     {/*email address */}
                     <div className="contact_info_item d-flex justify-content-md-start align-items-center" >
                     {/* <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone'/> */}
                           <div className="contact_info_content ">
                             {/* <div className="contact_info_title">
                                Email
                             </div> */}
                             <i class="fa-solid fa-envelope"></i>
                             <div className='contact_info_text'>
                                youremail@gmail.com
                             </div>
                           </div>
                    </div>
                     {/* Address */}
                     <div className='contact_info_item d-flex justify-content-md-start align-items-center'>
                           {/* <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone'/> */}
                          
                           <div className='contact_info_content'>
                             {/* <div className='contact_info_title'>
                               Address
                             </div> */}
                           <i class="fa-sharp fa-solid fa-location-dot"></i>
                             <div className='contact_info_text'>
                                Khargone M.P.10
                             </div>
                           </div>
                    </div>
                </div>
            </div>
        </div>
        </div> 
       


       {/* contact us form */}
          {/* <div className='contact_form'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-10 offset-lg-1'>
                    <div className='contact_form_container py-5'>
                       <div className='contact_form_title'></div>
                    </div>
                </div>
              </div>
            </div>
            
            
            
          </div>  */}
<form action="" method="post">
{/* https://formspree.io/f/xyyawlal */}
<section id="contact">
 

 	<div class="form" >
              <h4>Let's Connect</h4>
              <p>Integer at lorem eget diam facilisis lacinia ac id massa.</p>
              <div class="form-col">
                     <input type="text" placeholder="Your Name" name="Name:"/>
                    
              </div>
              <div class="form-col">
              <input type="text" placeholder="Email" name="Email:"/>
              </div>
              <div class="form-col">
                     <textarea name="Email:" id="" cols="30" rows="8" placeholder="How can we help?" ></textarea>
              </div>
              <div class="form-col">
                     <button>Message</button>
              </div>
       </div>
      
 
 </section>
 </form>

 <section id="map">
        <iframe  title="myFrame"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59261.71627781473!2d75.57801420398216!3d21.824445037221928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd885c4bd93b163%3A0xae95ec27b40bf31d!2sKhargone%2C%20Madhya%20Pradesh%20451001!5e0!3m2!1sen!2sin!4v1677405703901!5m2!1sen!2sin"  style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

</section>






       
    </>
  )
}

export default Contact
