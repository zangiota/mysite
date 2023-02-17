import React from "react";
import Header from '../UzPageComponents/Header';
import Main from '../UzPageComponents/Main';
import AboutMosque from '../UzPageComponents/AboutMosque';
//import Carouselgallery from '../UzPageComponents/gallery';
//import CarouselEmployee from '../UzPageComponents/CarouselEmployee';
import MosquSlider from '../UzPageComponents/slide';
import PrayerTime from '../UzPageComponents/PrayerTime';
import Footer from '../UzPageComponents/Footer';
import Appvideo from "../UzPageComponents/video";
import ehsonVideo from "../UzPageComponents/ehsonVideo";

const UzPage = () => {
    return (
        <>
            <Header />
            <Main />
            <ehsonVideo />
            <Appvideo />
            <AboutMosque />
            <MosquSlider />
            <PrayerTime />
            <Footer />
        </>

    )
}

export default UzPage;