import React, { Component } from 'react'
import video from '../images/ehsonVideo.mp4'
import '../styles/video.css'

class ehsonVideo extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ О нас</h1>
      <h3 className='video_ cl'> Последние новости</h3>
      <p className='video_text'>Пожертвование были переданы в город Чирчик по инициативе мемориального комплекса «Занги-ота» и благотворительного общественного фонда «Вакф».</p>
      <video  className='video_mosque' controls >
      <source src={video} type="video/mp4"/>
     </video>
      </div>
      </div>
    );
  }   
}

export default ehsonVideo;