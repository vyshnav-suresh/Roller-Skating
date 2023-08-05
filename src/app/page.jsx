
import Movingbanner from '../components/Movingbanner'
import Achivements from '../components/main/Achivements'
import HeroText from '../components/main/Section1'
import Teams from '../components/main/Teams'
import React from 'react'


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
