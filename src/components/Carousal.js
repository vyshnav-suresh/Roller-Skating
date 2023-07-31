import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import React from "react";

const Carousels = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // add this option
      autoplaySpeed: 3000, // set the time between slides (in milliseconds)
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
    return (
      <div className="">
        <div className="container  ">
          <Slider {...settings}>
            <div className="px-4">
             
               <Image src="/img/Hocquei.jpg" alt='image1' height={200} width={1500}/>
            </div>
            {/* <div className="px-4">
              <img className="rounded-lg" src="https://via.placeholder.com/350x150" alt="Slide 3" />
            </div>
            <div className="px-4">
              <img className="rounded-lg" src="https://via.placeholder.com/350x150" alt="Slide 4" />
            </div> */}
            <div className="px-4">
               <Image src="/img/ris.png" height={200} alt="image2" width={1500}/>
            </div>
          </Slider>
  </div>
  </div>
    )}
export default Carousels;