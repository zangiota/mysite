import React, { Component } from 'react'
import donate from '../images/mosqu1.mp4'
import '../styles/video.css'

class video extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ О нас</h1>
      <h3 className='video_cl'> Последние новости</h3>
      <p className='video_text'>Пожертвование были переданы в город Чирчик по инициативе мемориального комплекса «Занги-ота» и благотворительного общественного фонда «Вакф».</p>
      <video  className='video_mosque' controls >
      <source src={donate} type="video/mp4"/>
     </video>
      </div>
      </div>
    );
  }   
}

export default video;