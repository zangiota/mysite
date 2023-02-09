import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/gallery.css'
import img1 from '../images/ehson9.jpg'
import img2 from '../images/ehson10.jpg'
import img3 from '../images/ehson11.jpg'
import img4 from '../images/ehson12.jpg'
import img5 from '../images/ehson13.jpg'
import img6 from '../images/ehson16.jpg'
import img8 from '../images/ehson17.jpg'
import img9 from '../images/ehson18.jpg'


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
        id:"4",
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
    }
]

const Imageslider = () => {
    return (
        <>
          <section className='about-gallery' id="gallery">
                <div className='container'>
                    <div className='about-slide__row'>
                        <h1 className='about-gallery__title'>/ О нас</h1>
                        <h3 className='carousel-gallery-title'>Последние новости</h3>
                        <p className='carousel-galley-subttile'>20-21 января этого года мы раздали мясо и продукты питания в помощь населению в Чирчикском,Эшонгузарском и ряд районов нашей столицы.</p>
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