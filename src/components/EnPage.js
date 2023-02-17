import React from "react";
import Header from "../EnPageComponents/Header";
import Main from "../EnPageComponents/Main";
import AboutMosque from "../EnPageComponents/AboutMosque";
//import Carouselgallery from "../EnPageComponents/gallery";
//import CarouselEmployee from "../EnPageComponents/CarouselEmployee";
import MosquSlider from '../EnPageComponents/slide';
import PrayerTime from '../EnPageComponents/PrayerTime';
import Footer from '../EnPageComponents/Footer';
import Appvideo from "../EnPageComponents/video";
import ehsonVideo from "../EnPageComponents/ehsonVideo";


const EnPage = () => {
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

export default EnPage;