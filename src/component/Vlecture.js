import React from 'react'
import ReactPlayer from 'react-player';
import './Vlecture.css'

const Vlecture = () => {
    const Data =[{
        id:1,
        subj: "Chemistry",
        Image: "about.jpg",
        video:"https://youtu.be/Pg7p2F8zI5I"
        
    },
    {
        id:2,
        subj:" Physics",
        Image: "about.jpg",
        video:""
        
    },
    {
        id:3,
        subj:" Bio",
        Image: "about.jpg",
        video:""
        
    }
    ]

   
    
    
      return (
        <div className='container'>
            <div className='row justify-content-evenly previous'>
                {
            
                    Data.map((elem)=>{
                        const{ Image, subj, video} = elem
                        return (
                        <div className='col-md-3 p-5 my-2  mx-3 bodybody'>
                          <div className='container-two'>
                            <div className='card-two'>
                              <div className='lines-two'></div>
                              <div className='imgBx-two'>
                                <img src={Image}></img>
                              </div>
                              <div className='content-two'>
                                <div className='details-two'>
                                  <h2>{subj}</h2>
                                  <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <button type="button"  className="btn  mt-4 " data-bs-toggle="modal" data-bs-target="#exampleModal"> Open video</button>
    
                                </div>
                              </div>
                            </div>
                          </div>
                       
    
    
    
    
                           <div>
                
                
               
    
    
    
    
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content" style={{height:"500px"}}>
            <div className="modal-header">
              <h5 className="modal-title text-danger" id="exampleModalLabel">Video</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                 <ReactPlayer url={video} height="100%" width="100%"></ReactPlayer> 
         
            </div>
            <div className="modal-footer">
              <button type="button" className="btn " data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
            </div>
                               
    
                           </div>
                        )
    
                     })
                
     }
            </div>
    
    
          
         </div>
  )
}

export default Vlecture
