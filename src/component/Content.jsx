import React from 'react'
import { image1 } from '../utils/constant';

const Content = () => {
  return (
    <div className="container">
      <div className="flex flex-col-reverse items-center justify-between w-full lg:flex-row">
        <div class="flex flex-col items-center w-full text-center lg:w-1/2 lg:text-left lg:items-start">
          <h1 className="text-2xl font-semibold md:text-4xl text-neutral-600 lg:text-6xl">
            Lessons and insights <br className="hidden lg:block" />
            <span className="text-green-500">from 8 years</span>
          </h1>
          <p className="my-5 text-neutral-600 lg:my-0 lg:mt-4 lg:mb-8">
            Where to grow your business as a photographer: site or social media?
          </p>
          <a class="bg-green-500 text-white px-5 py-3 inline-block rounded-md text-center text-base font-medium shadow-sm transition-opacity duration-300 ease-in-out hover:opacity-80">
            Register
          </a>
        </div>
        <div className='w-full lg:w-1/2'>
            <img src={image1} />
            
        </div>
      </div>
    </div>
  );
}

export default Content
