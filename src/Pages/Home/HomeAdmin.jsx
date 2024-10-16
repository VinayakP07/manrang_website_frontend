/* eslint-disable no-unused-vars */
import NavbarAdmin from '../../Components/Navbar/NavbarAdmin.jsx'
import styles from './HomeAdmin.module.css'
import Footer from '../../Components/Footer/Footer.jsx'
import Hero from '../../Sections/Home/Hero/Hero.jsx'
import Slider from '../../Sections/Home/Sliders/Slider.jsx'
import BottomBanner from '../../Sections/Home/BottomBanner/BottomBanner.jsx'

const HomeAdmin = () => {
  return (
    <>
        <NavbarAdmin/>

        <Hero/>

        <Slider/>

        <BottomBanner/>

        <Footer/>
    </>
  )
}

export default HomeAdmin