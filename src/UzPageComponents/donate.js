import React, { Component } from 'react'
import donate from '../images/mosqu1.mp4'
import '../styles/video.css'

class video extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ Biz haqimizda</h1>
      <h3 className='video_cl'>Eng so'nggi yangiliklar</h3>
      <p className='video_text'>"Zangi ota" ziyoratgohi tashabbusi va "Vaqf" Xayriya Jamoat Fondi bilan hamkorlikda Chirchiq shahriga ehson tarqatildi.</p>
      <video  className='video_mosque' controls >
      <source src={donate} type="video/mp4"/>
     </video>
      </div>
      </div>
    );
  }   
}

export default video;