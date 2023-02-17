import React, { Component } from 'react'
import video from '../images/ehsonVideo.mp4'
import '../styles/video.css'

class ehsonVideo extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ Biz haqimizda</h1>
      <h3 className='video_cl'>Eng so'nggi yangiliklar</h3>
      <p className='video_text'>"Zangi ota" ziyoratgohi tashabbusi va "Vaqf" Xayriya Jamoat Fondi bilan hamkorlikda Chirchiq shahriga ehson tarqatildi.</p>
      <video  className='video_mosque' controls >
      <source src={video} type="video/mp4"/>
     </video>
      </div>
      </div>
    );
  }   
}

export default ehsonVideo;