/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar/Navbar'
import styles from './Home.module.css'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Sections/Home/Hero/Hero'
import Slider from '../../Sections/Home/Sliders/Slider'
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