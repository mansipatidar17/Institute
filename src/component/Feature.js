import React from 'react'
import './Feature.css'
// import { FaBeer} from 'react-icons/fa';

const Feature = () => {
  return (
    <div className=''>
<div className='container mt-5'>
 <div className='row justify-content-evenly'>
    <div className='col-lg-2 col-sm-6 '>
        <div className='item'>
            <span className='icon feature_box_col_one'><i class="fa-solid fa-pen-to-square"></i></span>
            <h3 className='mt-4'>Test Series</h3>
        </div>
    </div>

    <div className='col-lg-2 col-sm-6 '>
        <div className='item'>
            <span className='icon feature_box_col_one'><i class="fa fa-book" aria-hidden="true"></i></span>
            <h3 className='mt-4'>Syllabus</h3>
        </div>
    </div>

    <div className='col-lg-2 col-sm-6 '>
        <div className='item'>
            <span className='icon feature_box_col_one' ><i className="fa fa-file "></i></span>
            <h3 className='mt-4'>Notes</h3>
        </div>
    </div>

    <div className='col-lg-2 col-sm-6 '>
        <div className='item'>
        <span className='icon feature_box_col_one' ><i className="fa fa-video-camera "></i></span>
 <h3 className='mt-4'>Video Lectures</h3>
        </div>
    </div>

    <div className='col-lg-2 col-sm-6 '>
        <div className='item'>
            <span className='icon feature_box_col_one'><i class="fa-sharp fa-solid fa-file-circle-question"></i></span>
            <h3 className='mt-4'>Previous year</h3>
        </div>
    </div>

 </div>

</div>




      
    </div>
  )
}

export default Feature
