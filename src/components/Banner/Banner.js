import React from 'react'
import '../style.css'
import Navbar from '../Navbar/Navbar'

const Banner = () => {
  return (
    <>
        <div className="banner">
          <Navbar/>
          <div className="banner-text">
            <p>KECAK FIRE DANCE</p>
          </div>
        </div>
    </>
  )
}

export default Banner