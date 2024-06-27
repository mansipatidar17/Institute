import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import './Email.css'


const Email = () => {

  return (
    <div className='' >
        <>
{/* <form className='container mt-5 ' action="https://formspree.io/f/xyyawlal" method="post">
<input type="text" className='mx-2' name='message'></input>
<button>Send</button>
</form> */}


<section class="newsletter container">
        <h2>Have Question in mind? <br></br>Let us help you</h2>
        {/* https://formspree.io/f/xyyawlal */}
        <form action="" method="post">
              <input type="text" name="message" id="email-box" placeholder="   Your Message..." required/>
              <input type="submit" value="Send" class="btn1"/>
       </form>
 </section>



        </>
      
    </div>
  )
}

export default Email
