import React from 'react'
import "./Previous.css"

const Paper = () => {


    const Data = [
        {
            id:1,
            year:"2022"
        },

        {
            id:2,
            year:"2021"
        },
        {
            id:3,
            year:"2020"
        },
        {
            id:4,
            year:"2019"
        }, {
            id:5,
            year:"2018"
        }, {
            id:6,
            year:"2017"
        }, {
            id:7,
            year:"2016"
        },
        {
            id:8,
            year:"2015"
        },
        {
            id:9,
            year:"2014"
        }
    ]
  return (
    <div className='container' style={{marginTop:"100px"}}>
        {/* <div className='mt-5 p-2 mx-md-2 search' >
        <i class="fa fa-search" aria-hidden="true"></i> <input type="text" placeholder='Search Your Subject Here' className='' style={{border:"none",outline:"none"}}></input>
        </div> */}
        <div className='paper mt-5'>
            {
        
                Data.map((elem)=>{
                    const{year} = elem
                    return (
                        <div className='text-center py-4  pbox' style={{background:"#fff"}}>

                           
                            <div className='' style={{fontSize:"30px"}}><span style={{color:"#2C6975"}}><i className="fas fa-calendar-alt"></i></span><span className='mx-2' style={{fontWeight:"bold"}}>{year}</span></div>
                            <p className='mt-1'>Previous year Paper</p>
                           

                        </div>
                    )

                })
            
}
        </div>


      
    </div>
  )
}

export default Paper
