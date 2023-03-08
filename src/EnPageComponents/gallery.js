import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/gallery.css'
import img1 from '../images/a1.jpg'
import img2 from '../images/a2.jpg'
import img3 from '../images/a3.jpg'
import img4 from '../images/a4.jpg'
import img5 from '../images/a5.jpg'
import img6 from '../images/a6.jpg'
import img8 from '../images/a7.jpg'
import img9 from '../images/a8.jpg'
import img10 from '../images/b1.jpg'
import img11 from '../images/b2.jpg'
import img12 from '../images/b3.jpg'
import img13 from '../images/b4.jpg'
import img14 from '../images/b5.jpg'
import img15 from '../images/b6.jpg'


export const sliderData=[
    {
        id:1,
        image:img1
        
    },
    {
        id:2,
        image:img2
    },
    {
        id:3,
        image:img3
    },
    {
        id: 4,
        image:img4
    },
    {
        id:5,
        image:img5
    },
    {
        id:6,
        image:img6
    },
    {
        id:8,
        image:img8
    },
    {
        id:9,
        image:img9
    },
    {
        id:10,
        image:img10
        
    },
    {
        id:11,
        image:img11
    },
    {
        id:12,
        image:img12
    },
    {
        id: 13,
        image:img13
    },
    {
        id:14,
        image:img14
    },
    {
        id:15,
        image:img15
    }
]

const Imageslider = () => {
    return (
        <>
          <section className='about-gallery' id="gallery">
                <div className='container'>
                    <div className='about-slide__row'>
                        <h1 className='about-gallery__title'>/ About us</h1>
                        <h3 className='carousel-gallery-title'>Latest news</h3>
                        <p className='carousel-galley-subttile'>Donation meat was distributed by "Zangiota ziyoratgohi" to residents living in Yangi hayot District of Tashkent City and  O'rta, Bog'zor and Yuksalish MFY in Zangiota, Yangiyul district of Tashkent region.</p>
                        <Carousel AnimationHandler={'slide'} infiniteLoop >
                            {
                                sliderData.map((element, i) => {
                                    return (

                                        <div className='carousel-image__card' key={i} >
                                             
                                             <div className='carousel-card' >
                                                <img className='carousel-img' src={element.image} alt='images' />                                       
                                            </div>
                                           
                                        </div>
                                    )

                                })
                            }
                        </Carousel>
                    </div>
                </div>
            </section>  
        </>
    )
}


export default Imageslider;