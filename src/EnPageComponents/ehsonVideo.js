import React, { Component } from 'react'
import video from '../images/ehsonVideo.mp4'
import '../styles/video.css'

class ehsonVideo extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ About us</h1>
      <h3 className='video_cl'>Last news</h3>
      <p className='video_text'>The donation was transferred to the city of Chirchik at the initiative of the Zangi-ota memorial complex and the Vakf charitable public foundation.</p>
      <video  className='video_mosque' controls >
      <source src={video} type="video/mp4"/>
     </video>
      </div>
      </div>
    );
  }   
}

export default ehsonVideo;