import React, {useState} from 'react';
import './Login1.css';
import {Link} from "react-router-dom";


const Login1 = () => {
    const [name, setName] = useState("");
      const [pass , setPass] = useState(" ");
    // const [error, setError] = useState(false);
    const collectData= async(e) =>{
        e.preventDefault();
        if(!name || !pass)
        {
         alert("Pleaze Fill the data")
          return false;
        }
       
        
        
        
       else{
        console.log({name,pass});
       let result = await fetch("http://localhost:80/login",{
        method: "post",
        body:JSON.stringify({name,pass}),
        headers: {
            "Content-Type": "application/json"

        },
       });
       result = await result.json()
       console.log(result);
      }
      alert("Login Succesfully")
      
      
      

    }
  return (
   <div className='body'>
   <div className='boxbox'>
     <div className='formform'>
        <h2>Sign in</h2>
        <div className='inputBox'>
            <input  type='text' name= {name} value={name} onChange={(e)=>setName(e.target.value)} required="required"/>
            <span>Username</span> 
            
            <i></i>
        </div>
      
        <div className='inputBox'>
            <input  type='password' name={pass} value={pass} onChange={(e)=>setPass(e.target.value)}required="required"/>
            <span>Password</span> 
            <i></i>
        </div>
      
        <div className='links'>
            <Link to=''>Forget Password</Link>
            <Link to='/signup'>Signup</Link>
        </div>
        <input type='submit'  className ="login1"value='Login' onClick={collectData}/>
     </div>
   </div>
   
   
   </div>
     

    
  )
}

export default Login1