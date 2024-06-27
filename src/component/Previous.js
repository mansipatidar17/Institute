import React, { useState } from 'react'
import './Previous.css'
import {Link} from "react-router-dom";

const Previous = () => {
const Data =[{
    id:1,
    subj: "Chemesrty",
    paper: "/Paper"
},
{
    id:2,
    subj:" Physics",
    paper: "/Paper"
},
{
    id:3,
    subj:" Bio",
    paper: "/Paper"
}
]

// const [item,setItem] = useState(Data)

  return (
    <div className='container'>
        <div className='row justify-content-evenly previous'>
            {
        
                Data.map((elem)=>{
                    const{subj,paper} = elem
                    return (
                       
                        <div className='col-md-3 p-5 my-2  mx-3 text-center text-white' style={{background:"#2C6975"}}>

                           
                           <Link to={paper} className='text-white'><h2>{subj}</h2></Link> 
                           

                        </div>
                       
                    )

                })
            
}
        </div>


      
    </div>
  )
}

export default Previous
