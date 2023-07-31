import Image from 'next/image';
import React from "react";

export default function Services() {
  return (
    <>
      <section className="text-gray-600 body-font bg-[#FEF5F5]">
        <div className="container px-5 md:py-24 py-10 mx-auto max-w-7xl">
          <div className="flex flex-col text-center w-full mb-20">
            <span className="text-[#FE6A6A] text-xs"></span>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Skating classes avilable for all categories
            </h1>
          </div>
          <div>
          <h1 className='mb-3 text-black text-2xl font-bold'>Roller Hockey 🏒</h1>
          <div className="flex flex-wrap -m-4 text-center">
          
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
              <h1 className="">
                  Sub Jr
                </h1>
                <h2 className="title-font font-medium text-xl text-gray-900">
                  Sub Jr
                </h2>
                {/* <p className="leading-relaxed mt-5 text-xs">
                  Enjoy Order in a hand using the fresness of grocerie
                </p> */}
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
              <h1 className="">
                  Sub Jr
                </h1>
                <h2 className="title-font font-medium text-xl text-gray-900">
                  Sub Jr
                </h2>
                {/* <p className="leading-relaxed mt-5 text-xs">
                  Enjoy Order in a hand using the fresness of grocerie
                </p> */}
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
              <h1 className="">
                  Age 12-15
                </h1>
                <h2 className="title-font font-medium text-xl text-gray-900">
                  Junior
                </h2>
                <p className="leading-relaxed mt-5 text-xs">
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                {/* <Image
                  src="/img/Group 1736.png"
                  alt=""
                  className=""
                  width={100}
                  height={100}
                /> */}
                <h1>Age 16-above</h1>
                <h2 className="title-font font-medium text-xl text-gray-900">
                Senior     
                </h2>
                <p className="leading-relaxed mt-5 text-xs">
                  {/* If you get rotten items - return immediately to us. */}
                </p>
              </div>
            </div>
          </div>
          </div>
          <div className='mt-3'>
          <h1 className='mb-3 text-black text-2xl font-bold'>Inline and quad Skating 🏒</h1>
          <div className="flex flex-wrap -m-4 text-center">
          
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
              <h1 className="">
                  Sub Jr
                </h1>
                <h2 className="title-font font-medium text-xl text-gray-900">
                  Sub Jr
                </h2>
                {/* <p className="leading-relaxed mt-5 text-xs">
                  Enjoy Order in a hand using the fresness of grocerie
                </p> */}
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
              <h1 className="">
                  Sub Jr
                </h1>
                <h2 className="title-font font-medium text-xl text-gray-900">
                  Sub Jr
                </h2>
                {/* <p className="leading-relaxed mt-5 text-xs">
                  Enjoy Order in a hand using the fresness of grocerie
                </p> */}
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
              <h1 className="">
                  Age 12-15
                </h1>
                <h2 className="title-font font-medium text-xl text-gray-900">
                  Junior
                </h2>
                <p className="leading-relaxed mt-5 text-xs">
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full relative">
              <div className="bg-white flex justify-center align-middle items-center flex-col px-6 py-10 rounded-lg">
                {/* <Image
                  src="/img/Group 1736.png"
                  alt=""
                  className=""
                  width={100}
                  height={100}
                /> */}
                <h1>Age 16-above</h1>
                <h2 className="title-font font-medium text-xl text-gray-900">
                Senior     
                </h2>
             
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
