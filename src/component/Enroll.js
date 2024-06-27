import React from 'react';
import './Enroll.css';

const Enroll = () => {
  return (<div className='body'>
    <div className='container5'>
        <div className='title'>Registration</div>
        <form action='#'>
            <div className='user-details'>
                <div className='input-box'>
                  <span className='details'>Full Name</span>
                  <input type='text' placeholder='Enter your name' required></input>
                </div>
                <div className='input-box'>
                  <span className='details'>Username</span>
                  <input type='text' placeholder='Enter your username' required></input>
                </div>
                <div className='input-box'>
                  <span className='details'>Email</span>
                  <input type='text' placeholder='Enter your email' required></input>
                </div>
                <div className='input-box'>
                  <span className='details'>Phone Number</span>
                  <input type='text' placeholder='Enter your number' required></input>
                </div>
                <div className='input-box'>
                  <span className='details'>Password</span>
                  <input type='text' placeholder='Enter your password' required></input>
                </div>
                <div className='input-box'>
                  <span className='details'>Confirm Password</span>
                  <input type='text' placeholder='Confirm your password' required></input>
                </div>
            </div>
            <div className='gender-details'>
              <input type='radio' name='gender' id='dot-1'></input>
              <input type='radio' name='gender' id='dot-2'></input>
              <input type='radio' name='gender' id='dot-3'></input>
              <span className='gender-title'>Gender</span>
              <div className='category'>
                <label for="dot-1">
                  <span className='dot one'></span>
                  <span className='gender'>Male</span>
                </label>
                <label for="dot-2">
                  <span className='dot two'></span>
                  <span className='gender'> Female</span>
                </label>
                <label for="dot-3">
                  <span className='dot three'></span>
                  <span className='gender'>Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className='button'>
              <input type='submit'  value='Register'></input>
            </div>
        </form>
      	
      
 
 
 

    </div>
    </div>
  )
}

export default Enroll;