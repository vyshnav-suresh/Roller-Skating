'use client'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import Movingbanner from '@/Components/Movingbanner'
import Navbar from '@/Components/Navbar'
import Services from '@/Components/Services'
import React from 'react'

const page = () => {
  return (
    <div>
    {/* <Layout> */}
  <Navbar/>
  <Movingbanner/>
      <Hero />
      <Services />
      {/* <AwardsSection/> */}

      {/* <Why img="image and card.png" title="WHY CHOOSE US" subTitle="Find Favorites and Discover New Ones" para=" At vero eos et accusamus et iusto odio dignissimos ducimus */}
              {/* blanditiis praesen voluptatum deleniti." classes="md:flex-row" headColor="text-[#03A66B]" buttonClass="" /> */}
      {/* <Why img="image & card.png" title="HOME DELIVERY" subTitle="Sit at Home We Will Take Care Your Order" para="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos " classes="md:flex-row-reverse" headColor="text-[#F9BA45]" buttonClass="" class2="lg:pr-24 md:pr-16" /> */}
      {/* <Why img="Hocquei.jpg" title="Download our app" subTitle="Get the Groceries app order more easily." para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut." classes="md:flex-row" mainclass="bg-[#FEF5F5]" headColor="text-[#F54748]" buttonClass="" imageClass="" /> */}
      <Footer/>

    {/* </Layout> */}

    </div>

  )
}

export default page
