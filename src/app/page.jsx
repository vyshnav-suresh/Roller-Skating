'use client'
import Footer from '@/components/common/Footer'
import Hero from '@/components/Hero'
import Movingbanner from '@/components/Movingbanner'
import Navbar from '@/components/common/Navbar'
import Services from '@/components/Services'
import React from 'react'
import HeroText from '@/components/main/Section1'
import Teams from '@/components/main/Teams'
import Achivements from '@/components/main/Achivements'

const page = () => {
  return (
    <div>
  <Movingbanner/>
  <HeroText/>
  <Teams/>
  <Achivements/>
  </div>
  )
}

export default page
