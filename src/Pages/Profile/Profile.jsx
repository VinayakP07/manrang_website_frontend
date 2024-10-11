/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Profile.module.css'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function Profile() {
  return (
    <div>
        <Navbar/>
        
        <ProfileCard/>

        <Footer/>
    </div>
  )
}

export default Profile
