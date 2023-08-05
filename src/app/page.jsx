'use client'
import Movingbanner from '../components/Movingbanner'
import React from 'react'
import Teams from '../components/main/Teams'
import HeroText from '../components/main/Section1'
import Achivements from '../components/main/Achivements'

const page = () => {
  return (
    <div className='bg-white_cream text-white_cream'>
    <Movingbanner/>
  <HeroText/>
  <Teams/>
  <Achivements/>
  </div>
  )
}

export default page
