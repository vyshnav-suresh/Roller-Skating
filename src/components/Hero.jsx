// import Image from 'next/image';
// import { BsFillPlayFill } from 'react-icons/bs';
// import Carousel from './Carousal';

import React from "react";
import Carousels from "./Carousal";

export default function Hero() {
 
  
  return (
    <>
      <section className="text-green-700   body-font">
        <div className="container mx-auto flex px-5 md:py-24 py-10 md:flex-row flex-col items-center max-w-7xl">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font md:text-6xl sm:text-4xl text-3xl mb-4 font-extrabold text-gray-900">
              RIS
              <span className="text-[#F54748] font-medium"></span>
            </h1>
            <p className="mb-8 leading-relaxed text-xl font-medium">
            Fast Wheels, Sharp Skills! 
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#ffde05] border-0 py-2 px-6 focus:outline-none hover:bg-[#da1d1d] rounded text-lg">
                Join Now
              </button>
            
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Carousels/>
          </div>
        </div>
      </section>
    </>
  );
}
