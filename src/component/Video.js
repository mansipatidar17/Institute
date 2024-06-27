import React from 'react';
import ReactPlayer from 'react-player';
import './Previous.css'

const Video = () => {
const Data =[{
    id:1,
    subj: "Chemistry",
    Image: "about.jpg",
    Video1: "https://youtu.be/p1GmFCGuVjw"
},
{
    id:2,
    subj:" Physics",
    Image: "about.jpg",
    Video1: "https://youtu.be/p1GmFCGuVjw"
},
{
    id:3,
    subj:" Bio",
    Image: "about.jpg",
    Video1: "https://youtu.be/rm3i6cIxcFE"
}
]


  return (
    <div className='container'>
        <div className='row justify-content-evenly previous'>
            {
        
                Data.map((elem)=>{
                    const{subj , Image , Video1} = elem
                    return (
                        <div className='col-md-3 p-5 my-2  mx-3 text-center text-white' style={{background:"#fff",borderRadius:"20px"}}>

                            <img className="card-img-top " src={Image} style={{borderRadius:"50%",height:"190px"}} alt="Card image cap" />
                            <h2 style={{color:"black"}}>{subj} </h2>
                            <button  type="button" style={{background:"#2C6975",color:"#fff",borderRadius:"50px"}} className="btn  mt-4 " data-bs-toggle="modal" data-bs-target="#exampleModal"> Open video</button>


                            <div>
            
            
           




  <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content" style={{height:"500px"}}>
        <div className="modal-header">
          <h5 className="modal-title text-danger" id="exampleModalLabel">Video</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
             <ReactPlayer url={Video1} height="100%" width="100%"></ReactPlayer>
     
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

export default Video