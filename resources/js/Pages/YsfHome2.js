import React, { useEffect,useState } from 'react';
import { Head } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

import Nav from './YsfNav'
import Foot from './Footer'
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import { Icon } from '@iconify/react';

const YsfHome = () => {

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    const toggleNav2 = () => {
        if (toggleMenu){

            setToggleMenu(!toggleMenu)
        }
    }


    const redirectchekout = () => {
      Inertia.get('/checkout', {  }, { replace: false })
    }


    const [toggleMenu,setToggleMenu] = useState(false)



    const settings = {
        lazyload: true,
        nav: true,
        mouseDrag: true,
        items: 1,
  gutter: 5,
  autoplay: true,
  controlsText: ['<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8l8-8z"/><path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8l-8-8z"/><path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Z"/></svg>  '],
  autoplayTimeout: 2000,
  autoplayButtonOutput: false,
  controls: true,

  responsive: {
    420: {
      items: 3
    }
  }
      };

    return (

        
     
                <div onClick={() => toggleNav2()} class=" bg-body bg-no-repeat bg-contain w-full h-full overflow-hidden">
                    <Head>
  <title>Home - Ecom Bunny</title>
</Head>


           <nav  className="max-w-[1500px] w-full  lg:px-5 mx-auto py-5 flex gap-8 xl:gap-28 items-center justify-between relative transition-all duration-300 ease-out">
  <a href="#" className="w-32 h-full object-cover px-5 lg:px-0"> <img src="https://res.cloudinary.com/luxiptv/image/upload/v1649172427/full-logo_eatapv.png" alt="logo" className="w-full h-auto object-cover inline-block" /></a>
  <div onClick={(e) => {
        //stop clicks getting to the overlay
        e.stopPropagation();
      }} className= {toggleMenu ? "navigation nav-active" : "navigation "} >
    
    <div className='grid grid-cols-2'>
    <div className="w-6/12 ml-3 flex justify-center lg:hidden ">
      <a href="#"><img src="https://res.cloudinary.com/luxiptv/image/upload/v1649172427/full-logo_eatapv.png" alt="logo" className="w-40 h-auto object-contain " /></a>
    </div>

    <div onClick={ () => toggleNav() } className="w-full flex justify-center lg:hidden ">
      <div>
   
   
      <svg   className=" object-contain  w-8 h-8"  color='white' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4l-66.1.3c-4.4 0-8-3.5-8-8c0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 0 1-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4l66-.3c4.4 0 8 3.5 8 8c0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2c0 4.4-3.6 8-8 8z"/></svg>
      </div>
    </div>

    </div>
    
  
  
    <Nav />


  </div>
  <div className="toggle-btn inline-block lg:hidden pr-5">
    <button onClick={ () => toggleNav() }   className="w-12 h-12 flex justify-center items-center rounded-full bg-white">
    <svg className="   w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
  </div>
</nav>

   <header class="max-w-[1050px] w-full mx-auto">
       
      <div className='grid grid-cols-1 md:grid-cols-2 p-4'>
      <div>
       <img src="https://res.cloudinary.com/luxiptv/image/upload/v1649172279/digital-marketing-agency_ccktgc.svg" alt="img" class=""/>

       </div>
      <div class= "md:order-first	 flex flex-col items-center ">
           <h1 class="heading-primary text-white mb-8">The Simplest Page Builder... Ever.

</h1>
           <h2 class="text-primary-text text-left">
           A brand new opportunity to start and grow your business. It’s time to stop paying $100+ a month for basic tools. Create your pages/website in under 15 minutes for just $10, unlimited leads, no extra fees and so much more.






               <div class="flex flex-col gap-2 items-left mt-11">
                   <button onClick={ () => redirectchekout() }  class="bg-primary btn-secondary py-1">JOIN US NOW <span class="text-[10px] text-white opacity-60 block">Instant Access</span></button>
                   <p class="text-[10px] text-white opacity-60 flex items-left gap-2"><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568492/dollor_bjbku7.svg" alt=""/> 
                    10-Days Money-Back Guarantee
                  </p>

               </div>
        </h2>
       </div>

     


      </div>
   </header>

   <section className="py-[26px] px-5 lg:px-14 bg-white rounded-lg max-w-[1050px] w-full mx-auto mt-12 mb-12 grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8  md:gap-5 box-shadow">
  <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5">
    <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568571/pllay-button_klqan5.svg" alt="play" className="w-11 lg:w-14 h-11 lg:h-14 object-contain" />
    <p className="text-secondary">Quickest Page Builder</p>
  </div>
  <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5">
    <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568596/multi-user_vs0ppe.svg" alt="play" className="w-11 1g:w-14 h-11 lg:h-14 object-contain" />
    <p className="text-secondary">Solutions For Your Business
</p>
  </div>
  <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5">
    <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568615/fhd_d117tj.svg" alt="play" className="w-11 lg:w-14 h-11 lg:h-14 object-contain" />
    <p className="text-secondary">Best  <br /> Quality</p>
  </div>
  <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5">
    <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568634/danger_a5jboy.svg" alt="play" className="w-11 lg:w-14 h-11 lg:h-14 object-contain" />
    <p className="text-secondary">Brand New Opportunity</p>
  </div>
</section>
<div>
  {/* active users */}
  <section className=" max-w-[1050px] w-full mx-auto pt-12 mb-[70px] ">
    <div className="py-[26px] px-5 sm:px-[52px] bg-white rounded-lg  grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-11">
      <div className="flex justify-center items-center flex-col">
        <p className="w-full h-14 bg-blue-10 rounded-md heading-tertiory text-white flex justify-center items-center font-semibold user-shadow">129K +</p>
        <p className="text-normal text-black-10 mt-1">Active Users</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="w-full h-14 bg-blue-10 rounded-md heading-tertiory text-white flex justify-center items-center font-semibold user-shadow">54K +</p>
        <p className="text-normal text-black-10 mt-1">Total Subscriptions</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="w-full h-14 bg-blue-10 rounded-md heading-tertiory text-white flex justify-center items-center font-semibold user-shadow">5 Years</p>
        <p className="text-normal text-black-10 mt-1">Experiance</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="w-full h-14 bg-blue-10 rounded-md heading-tertiory text-white flex justify-center items-center font-semibold user-shadow">98</p>
        <p className="text-normal text-black-10 mt-1">Cloud Servers</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="w-full h-14 bg-blue-10 rounded-md heading-tertiory text-white flex justify-center items-center font-semibold user-shadow">12</p>
        <p className="text-normal text-black-10 mt-1">Server Locations</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="w-full h-14 bg-blue-10 rounded-md heading-tertiory text-white flex justify-center items-center font-semibold user-shadow">99.98%</p>
        <p className="text-normal text-black-10 mt-1">Uptime</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="w-full h-14 bg-blue-10 rounded-md heading-tertiory text-white flex justify-center items-center font-semibold user-shadow">4.8</p>
        <p className="text-normal text-black-10 mt-1">Truspilot Score</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="w-full h-14 bg-blue-10 rounded-md heading-tertiory text-white flex justify-center items-center font-semibold user-shadow">1 Hours</p>
        <p className="text-normal text-black-10 mt-1">Average Support Answer</p>
      </div>
    </div>
  </section>
  {/* uptime */}
  <section className="max-w-[1050px] w-full mx-auto mb-24">
    <div className="mb-7 flex gap-3 items-end">
      <h2 className="text-3xl font-lato text-white font-bold">Uptime </h2>
      <span className="text-[22px] font-lato font-bold opacity-50 text-white">Last 90 days</span>
    </div>
    <div className="bg-white rounded-lg py-[18px] px-5 lg:px-12 lg:pr-16 ">
      <div className="grid md:grid-cols-timeup gap-5 items-center border-b py-5">
        <p className="text-secondary">Control Panel</p>
        <p className="text-secondary text-primary order-3 md:order-2">100%</p>
        <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568659/first-green_u7rnc9.svg" alt="img" className=" w-full h-8 sm:h-auto object-cover sm:object-contain order-2 md:order-3" />
        <div className="hidden md:inline-block order-last">
          <input type="checkbox" name="checkbox" id="up" className="hidden" />
          <label htmlFor="up" className="flex items-center gap-3 ">
            <span className="outer w-[25px] h-[25px] rounded-full bg-[rgba(60,214,114,.21)] flex justify-center items-center transition-all duration-200 ">
              <span className="inner w-3.5 h-3.5 bg-primary rounded-full inline-block animate-pulse">
              </span>
            </span> 
            Up</label>
        </div>
      </div>
      <div className="grid md:grid-cols-timeup gap-5 items-center border-b py-5">
        <p className="text-secondary">Load Balancers</p>
        <p className="text-secondary text-primary order-3 md:order-2">99.99%</p>
        <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568659/first-green_u7rnc9.svg" alt="img" className="h-7 sm:h-full object-cover sm:object-contain w-full order-2 md:order-3" />
        <div className="hidden md:block order-last">
          <input type="checkbox" name="checkbox" id="up" className="hidden" />
          <label htmlFor="up" className="flex items-center gap-3">
            <span className="outer w-[25px] h-[25px] rounded-full bg-[rgba(60,214,114,.21)] flex justify-center items-center transition-all duration-200 ">
              <span className="inner w-3.5 h-3.5 bg-primary rounded-full inline-block animate-pulse">
              </span>
            </span> 
            Up</label>
        </div>
      </div>
      <div className="grid md:grid-cols-timeup gap-5 items-center border-b py-5">
        <p className="text-secondary">Members Area</p>
        <p className="text-secondary text-primary order-3 md:order-2">99.95%</p>
        <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568701/green-bar_vhzwmj.svg" alt="img" className="w-full h-8 sm:h-auto object-cover sm:object-contain order-2 md:order-3" />
        <div className="hidden md:block order-last">
          <input type="checkbox" name="checkbox" id="up" className="hidden" />
          <label htmlFor="up" className="flex items-center gap-3">
            <span className="outer w-[25px] h-[25px] rounded-full bg-[rgba(60,214,114,.21)] flex justify-center items-center transition-all duration-200 ">
              <span className="inner w-3.5 h-3.5 bg-primary rounded-full inline-block  animate-pulse">
              </span>
            </span> 
            Up</label>
        </div>
      </div>
    </div>
  </section>
  {/* live tv channels */}
 
  <div  onClick={ () => redirectchekout() } className="max-w-[522px] wfull text-center mx-auto mb-14">
      <button className="btn-primary">  Get My Instant Access Now <i className="bx bx-chevron-right text-4xl" />
      </button>
      <p className="text-small text-white mt-2.5">30-Days Money-Back Guarantee</p>
    </div>
  {/* footer */}
  <footer className="bg-[#0e2566] py-[14px] text-center flex justify-center gap-1 flex-wrap px-5">
    <p className="text-lg text-white font-light"> ECOM BUNNY | All Rights Reserved 2010 - 2022 | </p>
  </footer>
</div>


            
        </div>
    );
};

export default YsfHome;