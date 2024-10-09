/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import styles from './Home.module.css'
import Footer from '../../Components/Footer/Footer.jsx'
import Hero from '../../Sections/Home/Hero/Hero.jsx'
import Slider from '../../Sections/Home/Sliders/Slider.jsx'
import BottomBanner from '../../Sections/Home/BottomBanner/BottomBanner.jsx'

const Home = () => {
  return (
    <>

        <Navbar/>

        <Hero/>

        <Slider/>

        <BottomBanner/>

        <Footer/>
        
    </>
  )
}

export default Home