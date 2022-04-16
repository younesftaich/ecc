import React, { useEffect,useState } from 'react';
import { Head } from '@inertiajs/inertia-react'

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
  <title>Home - FAST IPTV SHOP</title>
</Head>


           <nav  className="max-w-[1500px] w-full  lg:px-5 mx-auto py-5 flex gap-8 xl:gap-28 items-center justify-between relative transition-all duration-300 ease-out">
  <a href="#" className="w-68 h-full object-cover px-5 lg:px-0"> <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646744485/fastt_1_nrmss1.png" alt="logo" className="w-full h-auto object-cover inline-block" /></a>
  <div onClick={(e) => {
        //stop clicks getting to the overlay
        e.stopPropagation();
      }} className= {toggleMenu ? "navigation nav-active" : "navigation "} >
    
    <div className='grid grid-cols-2'>
    <div className="w-full ml-3 flex justify-center lg:hidden ">
      <a href="#"><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646744485/fastt_1_nrmss1.png" alt="logo" className="w-40 h-auto object-contain " /></a>
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
       <img src="https://res.cloudinary.com/benejma/image/upload/v1645026400/hero2_hcopcd.png" alt="img" class=""/>

       </div>
      <div class= "md:order-first	 flex flex-col items-center ">
           <h1 class="heading-primary text-white mb-8">The #1 Most Trusted IPTV Provider
</h1>
           <h2 class="text-primary-text text-left">Get access to all your favorite TV shows, Sport Channels, Series & Movies, Cartoon and Children, News, Music, Documentary and even more!.


               <div class="flex flex-col gap-2 items-left mt-11">
                   <button class="bg-primary btn-secondary py-1">JOIN US NOW <span class="text-[10px] text-white opacity-60 block">Instant Access</span></button>
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
    <p className="text-secondary">31K + TV <br /> Channels</p>
  </div>
  <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5">
    <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568596/multi-user_vs0ppe.svg" alt="play" className="w-11 1g:w-14 h-11 lg:h-14 object-contain" />
    <p className="text-secondary">Mutli Users  <br /> Access</p>
  </div>
  <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5">
    <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568615/fhd_d117tj.svg" alt="play" className="w-11 lg:w-14 h-11 lg:h-14 object-contain" />
    <p className="text-secondary">4K &amp; FHD  <br /> Quality</p>
  </div>
  <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-5">
    <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568634/danger_a5jboy.svg" alt="play" className="w-11 lg:w-14 h-11 lg:h-14 object-contain" />
    <p className="text-secondary">Anti-Buffer™   <br /> 7.3.1</p>
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
        <p className="text-normal text-black-10 mt-1">Total Streams</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="w-full h-14 bg-blue-10 rounded-md heading-tertiory text-white flex justify-center items-center font-semibold user-shadow">5 Years</p>
        <p className="text-normal text-black-10 mt-1">Experiance</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="w-full h-14 bg-blue-10 rounded-md heading-tertiory text-white flex justify-center items-center font-semibold user-shadow">98</p>
        <p className="text-normal text-black-10 mt-1">Streaming Servers</p>
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
        <p className="text-secondary">IPTV Panel</p>
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
  <section className="grid grid-cols-1 md:grid-cols-channel-odd bg-white py-6 lg:py-12 px-5 lg:px-14 max-w-[1050px] mx-auto w-full rounded-lg mb-[50px] gap-10 md:gap-6 lg:gap-8">
    <div>
      <p className="heading-secondary text-black-10 font-black mb-6">
        <span className="block text-blue-10 mb-2">31K +</span>
        Live TV Channels
      </p>
      <p className="text-secondary font-normal leading-7 text-[#2e4270] mb-6">With FAST IPTV SHOP we can offer you access to more than 31K IPTV channels of all countries around the world, we want to make sure that you won't be disappointed</p>
      <button className="bg-btn text-secondary text-white flex justify-between gap-2 items-center rounded-sm py-[14px] px-3"> <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568726/list_wglsxj.svg" alt="img" className="w-[22px] h-auto object-contain " />  Discover the channels list <i className="bx bx-chevron-right text-2xl" />
      </button>
    </div>
    <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646583309/ab01_h8jwwi_re1fxx.jpg" alt="img" className="w-full h-full object-contain" />
  </section>
  {/* live tv channels */}
  <section className="grid grid-cols-1 md:grid-cols-2 bg-white py-6 lg:py-10 px-5 lg:px-14 max-w-[1050px] mx-auto w-full rounded-lg mb-[50px] gap-10 md:gap-6 lg:gap-28">
    <img src="https://res.cloudinary.com/benejma/image/upload/v1646394463/ab03_sjemkj.jpg" alt="img" className="w-9/12 h-full object-contain" />
    <div>
      <p className="heading-secondary text-black-10 font-black mb-5">
        <span className="block text-blue-10 mb-2">EPG</span>
        in Most Channels
      </p>
      <p className="text-secondary font-normal leading-7 text-[#2e4270] mb-5  pr-0 xl:pr-10">EPG is one of our most requested features and providing a full and updated EPG has been our priority since day one. We can proudly say that we have been able to cover the majority of our IPTV channels.</p>
      <div className="max-w-[230px] w-full  ">
        <button className="bg-primary btn-secondary py-1">JOIN US NOW <span className="text-[10px] text-white opacity-60 block">Instant Access</span></button>
        <p className="text-[10px] text-black-default opacity-60 mt-2 flex justify-center gap-2"><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568759/dollor-2_fqjwul.svg" alt="img" className="w-auto h-auto object-contain " /> 
          10-Days Money-Back Guarantee
        </p>
      </div>
    </div>
  </section>
</div>
<div>
  {/* Movie Seriese */}
  <section className="grid grid-cols-1 md:grid-cols-2 bg-white py-6 lg:py-10 px-5 lg:px-14 max-w-[1050px] mx-auto w-full rounded-lg mb-[50px] gap-10 md:gap-6 lg:gap-10">
    <div>
      <p className="heading-secondary text-black-10 font-black mb-5">
        <span className="block text-blue-10 mb-2">Thousands</span>
        of Movies &amp; Series
      </p>
      <p className="text-secondary font-normal leading-7 text-[#2e4270] mb-5 ">We’ve made the impossible possible, with a full library of thousands of Movies &amp; Series (tv shows) you will be able to watch trailers, read reviews and get shows' seasons details, get the latest information on upcoming movies releases. Choosing the right movie has never been so easy.</p>
      <div className="max-w-[230px] w-full  ">
        <button className="bg-primary btn-secondary py-1">JOIN US NOW <span className="text-[10px] text-white opacity-60 block">Instant Access</span></button>
        <p className="text-[10px] text-black-default opacity-60 mt-2 flex justify-center gap-2"><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568759/dollor-2_fqjwul.svg" alt="img" className="w-auto h-auto object-contain " /> 
          30-Days Money-Back Guarantee
        </p>
      </div>
    </div>
    <img src="https://res.cloudinary.com/benejma/image/upload/v1646395010/ab02_vxdunl.webp" alt="img" className="w-full h-full object-contain" />
  </section>
  {/* IPTV experience */}
  <section className="max-w-[800px] xl:max-w-[1050px] w-full mx-auto mb-[30px] mt-[100px]">
    <div className="max-w-[600px] w-full mx-auto mb-12">
      <ul className="flex items-center gap-1 justify-center mb-[30px]">
        <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568788/yellow-star_kbjxno.svg" alt="star" className="w-[27px] h-auto object-contain" /></li>
        <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568788/yellow-star_kbjxno.svg" alt="star" className="w-[27px] h-auto object-contain" /></li>
        <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568788/yellow-star_kbjxno.svg" alt="star" className="w-[27px] h-auto object-contain" /></li>
        <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568788/yellow-star_kbjxno.svg" alt="star" className="w-[27px] h-auto object-contain" /></li>
        <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568788/yellow-star_kbjxno.svg" alt="star" className="w-[27px] h-auto object-contain" /></li>
      </ul>
      <div className="flex flex-col items-center">
        <h1 className="heading-secondary text-white mb-8 text-center sm:text-left leading-10">A Five-Star IPTV Provider</h1>
      </div>
    </div>
    <div className="relative">
      <div className="myslider my-container">


      <TinySlider  settings={settings}>
  
      
      

        <div className="px-0 w-full">
          <div className="bg-white py-[18px] px-[30px] w-full rounded-lg flex flex-col justify-between h-[225px] box-shadow">
            <div className="flex items-center gap-3 justify-between mb-3">
              <ul className="flex items-center gap-1">
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
              </ul>
              <p className="text-[11px] font-lato text-[#2e4270] font-normal">2 days ago</p>
            </div>
            <div className>
              <h2 className="text-sm text-[#2e4270] font-semibold uppercase">EXCELENT SERVICE</h2>
              <p className="text-[11px] text-[#234270] mb-2">“Excellent service, top quality ,i buy more for sure.”</p>
            </div>
            <a href="#" className="text-[11px] text-[#234270] text-normal">Jhonson Alain</a>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white py-[18px] px-[30px] w-full rounded-lg flex flex-col justify-between h-[225px] box-shadow">
            <div className="flex items-center gap-3 justify-between mb-3">
              <ul className="flex items-center gap-1">
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
              </ul>
              <p className="text-[11px] font-lato text-[#2e4270] font-normal">1 week ago</p>
            </div>
            <div>
              <h2 className="text-sm text-[#2e4270] font-semibold uppercase">Best IPTV Ever</h2>
              <p className="text-[11px] text-[#234270] mb-2">““I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.””</p>
            </div>
            <a href="#" className="text-[11px] text-[#234270] text-normal">Frank Payne</a>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white py-[18px] px-[30px] w-full rounded-lg flex flex-col justify-between h-[225px] box-shadow">
            <div className="flex items-center gap-3 justify-between mb-3">
              <ul className="flex items-center gap-1">
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
              </ul>
              <p className="text-[11px] font-lato text-[#2e4270] font-normal">1 day ago</p>
            </div>
            <div>
              <h2 className="text-sm text-[#2e4270] font-semibold uppercase">Professional</h2>
              <p className="text-[11px] text-[#234270] mb-2">Most trustworthy business I know off!</p>
            </div>
            <a href="#" className="text-[11px] text-[#234270] text-normal">Beverly Matthews</a>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white py-[18px] px-[30px] w-full rounded-lg flex flex-col justify-between h-[225px] box-shadow">
            <div className="flex items-center gap-3 justify-between mb-3">
              <ul className="flex items-center gap-1">
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
              </ul>
              <p className="text-[11px] font-lato text-[#2e4270] font-normal">1 week ago</p>
            </div>
            <div>
              <h2 className="text-sm text-[#2e4270] font-semibold uppercase">Best IPTV Ever</h2>
              <p className="text-[11px] text-[#234270] mb-2">““I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.””</p>
            </div>
            <a href="#" className="text-[11px] text-[#234270] text-normal">Frank Payne</a>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white py-[18px] px-[30px] w-full rounded-lg flex flex-col justify-between h-[225px] box-shadow">
            <div className="flex items-center gap-3 justify-between mb-3">
              <ul className="flex items-center gap-1">
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
              </ul>
              <p className="text-[11px] font-lato text-[#2e4270] font-normal">1 day ago</p>
            </div>
            <div>
              <h2 className="text-sm text-[#2e4270] font-semibold uppercase">Professional</h2>
              <p className="text-[11px] text-[#234270] mb-2">Most trustworthy business I know off!</p>
            </div>
            <a href="#" className="text-[11px] text-[#234270] text-normal">Beverly Matthews</a>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white py-[18px] px-[30px] w-full rounded-lg flex flex-col justify-between h-[225px] box-shadow">
            <div className="flex items-center gap-3 justify-between mb-3">
              <ul className="flex items-center gap-1">
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
              </ul>
              <p className="text-[11px] font-lato text-[#2e4270] font-normal">1 week ago</p>
            </div>
            <div>
              <h2 className="text-sm text-[#2e4270] font-semibold uppercase">Best IPTV Ever</h2>
              <p className="text-[11px] text-[#234270] mb-2">““I give them 1000 stars. Excellent service. Fast and reliable. Recommended without hesitation.””</p>
            </div>
            <a href="#" className="text-[11px] text-[#234270] text-normal">Frank Payne</a>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-white py-[18px] px-[30px] w-full rounded-lg flex flex-col justify-between h-[225px] box-shadow">
            <div className="flex items-center gap-3 justify-between mb-3">
              <ul className="flex items-center gap-1">
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
                <li><img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[18px] h-[18px] object-contain" /></li>
              </ul>
              <p className="text-[11px] font-lato text-[#2e4270] font-normal">1 day ago</p>
            </div>
            <div>
              <h2 className="text-sm text-[#2e4270] font-semibold uppercase">Professional</h2>
              <p className="text-[11px] text-[#234270] mb-2">Most trustworthy business I know off!</p>
            </div>
            <a href="#" className="text-[11px] text-[#234270] text-normal">Beverly Matthews</a>
          </div>
        </div>

        
</TinySlider>
      </div>
      <button className="text-5xl text-white absolute top-[120%] lg:top-1/2 left-4 lg:-left-14 transform -translate-y-1/2 prev-btn">
        <i className="bx bx-chevron-left" />
      </button>
      <button className="text-5xl text-white absolute top-[120%] lg:top-1/2  right-4 lg:-right-14 transform -translate-y-1/2 next-btn">
        <i className="bx bx-chevron-right" />
      </button>
    </div>
    <div className="w-full mt-20 lg:mt-12 mb-12">
      <ul className="flex flex-wrap md:flex-nowrap items-center gap-5 w-full justify-center">
        <li className="text-[21px] text-white font-black">Excellent</li>
        <li className="flex items-center gap-2">
          <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[29px] h-[30px] object-contain" />
          <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[29px] h-[30px] object-contain" />
          <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[29px] h-[30px] object-contain" />
          <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[29px] h-[30px] object-contain" />
          <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568810/green-star_mlk1pg.svg" alt="img" className="w-[29px] h-[30px] object-contain" />
        </li>
        <li className="text-[21px] text-white font-black">8.9 out of 10</li>
        <li>
          <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568835/trust-piolt_rbzuit.svg" alt="img" className="w-40 h-auto object-contain" />
        </li>
      </ul>
    </div>
    <div className="max-w-[522px] wfull text-center mx-auto mb-14">
      <button className="btn-primary"> Get My Instant Access Now
        <i className="bx bx-chevron-right text-4xl" />
      </button>
      <p className="text-small text-white mt-2.5">30-Days Money-Back Guarantee</p>
    </div>
  </section>
  {/* money back gurrentee */}
  <section className="max-w-[1050px] w-full mx-auto bg-white rounded-lg py-14 px-5 md:px-10 flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-12">
    <img src="https://res.cloudinary.com/luxiptv/image/upload/v1646568853/30_plrmbt.svg" alt="img" className="w-32 h-auto object-contain" /> 
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-black-10 font-black capitalize">30-Days Money-Back Guarantee</h1>
      <p className="text-secondary text-[#2e4270] mt-7 font-normal leading-7">You've got nothing to lose and everything to gain with our intuitive IPTV service and 30-day money-back guarantee. For the fastest and most sophisticated IPTV provider, look no further than FAST IPTV SHOP.</p>
    </div>
  </section>
  {/* faq container */}      
  <section className="max-w-[1050px]  mx-auto w-full mt-24">
    <h2 className="heading-secondary text-center mt-10 md:mt-20 mb-9 md:mb-14 text-white">FAQ</h2>
    <div className="mb-[54px]">
  

      <details class="w-full mb-6 faq-box bg-white rounded-lg box-shadow">

<summary class="cursor-pointer faq-btn text-primary-text font-bold flex justify-between gap-10 text-left lg:gap-20 transition-all duration-300  items-start md:items-center w-full  pt-[16px] pb-[6px] px-5 md:px-12  text-black-10 mb-2 ">Can I stream on multiple devices?
  <button class="ml-auto">
  <svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
</button>
</summary>

<div class="text-secondary leading-7 font-medium px-5 md:px-12 mt-3 ">FAST IPTV SHOP can be actively streamed on one device at the same time. If you need an additional connection, just login in your members to add it.</div>
</details>


    
<details class="w-full mb-6 faq-box bg-white rounded-lg box-shadow">

<summary class="cursor-pointer faq-btn text-primary-text font-bold flex justify-between gap-10 text-left lg:gap-20 transition-all duration-300  items-start md:items-center w-full  pt-[16px] pb-[6px] px-5 md:px-12  text-black-10 mb-2">How many channels &amp; VOD do you provide?
  <button class="ml-auto">
  <svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
</button>
</summary>

<div class="text-secondary leading-7 font-medium px-5 md:px-12 mt-3 ">FAST IPTV SHOP offers you a wide variety of channels and VOD, as for today you will get access to more than 31K TV Channels and thousands of VOD</div>
</details>


<details class="w-full mb-6 faq-box bg-white rounded-lg box-shadow">

<summary class="cursor-pointer faq-btn text-primary-text font-bold flex justify-between gap-10 text-left lg:gap-20 transition-all duration-300  items-start md:items-center w-full  pt-[16px] pb-[6px] px-5 md:px-12  text-black-10 mb-2">Do I receive my access instantly?
  <button class="ml-auto">
  <svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
</button>
</summary>

<div class="text-secondary leading-7 font-medium px-5 md:px-12 mt-3 ">
Yes, your IPTV access will be available almost instantly after your payment,  they will be emailed instantly to you. You can also find them in your member's area.</div>
</details>


<details class="w-full mb-6 faq-box bg-white rounded-lg box-shadow">

<summary class="cursor-pointer faq-btn text-primary-text font-bold flex justify-between gap-10 text-left lg:gap-20 transition-all duration-300  items-start md:items-center w-full  pt-[16px] pb-[6px] px-5 md:px-12  text-black-10 mb-2">Can I share this IPTV access with my friend?
  <button class="ml-auto">
  <svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
</button>
</summary>

<div class="text-secondary leading-7 font-medium px-5 md:px-12 mt-3 ">Yes, you can share it with your friends, however, if you want to watch it you and your friend at the same time you gonna need to order the extra connection option</div>
</details>


<details class="w-full mb-6 faq-box bg-white rounded-lg box-shadow">

<summary class="cursor-pointer faq-btn text-primary-text font-bold flex justify-between gap-10 text-left lg:gap-20 transition-all duration-300  items-start md:items-center w-full  pt-[16px] pb-[6px] px-5 md:px-12  text-black-10 mb-2">How can I trust your website?
  <button class="ml-auto">
  <svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
</button>
</summary>

<div class="text-secondary leading-7 font-medium px-5 md:px-12 mt-3 ">FAST IPTV SHOP is one of the oldest TV service providers. We have been selling IPTV since 2010. You can check this by checking our whois domain. From the beginning, our main goal has been to build a good relationship with our customers so that they can trust us and subscribe to our services and then renew for the next years. Of course, we would never have made it if we were not serious</div>
</details>


<details class="w-full mb-6 faq-box bg-white rounded-lg box-shadow">

<summary class="cursor-pointer faq-btn text-primary-text font-bold flex justify-between gap-10 text-left lg:gap-20 transition-all duration-300  items-start md:items-center w-full  pt-[16px] pb-[6px] px-5 md:px-12  text-black-10 mb-2"> Do you offer any guarantee?
  <button class="ml-auto">
  <svg class="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
</button>
</summary>

<div class="text-secondary leading-7 font-medium px-5 md:px-12 mt-3 ">Before buying a product, everyone wants to be sure that there is some way to change their mind. This is another thing that traditional TV providers don't offer. If you sign the contract there is no going back, you're stuck with them. With FAST IPTV SHOP, we don't want this to happen to our customers. That's why we offer you up to 30 days to test our IPTV and ensure that it meets your requirements. Otherwise, we will refund the full payment to your bank.</div>
</details>


   
  


    </div>
    <div className="max-w-[522px] wfull text-center mx-auto mb-14">
      <button className="btn-primary">  Get My Instant Access Now <i className="bx bx-chevron-right text-4xl" />
      </button>
      <p className="text-small text-white mt-2.5">30-Days Money-Back Guarantee</p>
    </div>
  </section>
  {/* footer */}
  <footer className="bg-[#0e2566] py-[14px] text-center flex justify-center gap-1 flex-wrap px-5">
    <p className="text-lg text-white font-light"> FAST IPTV | All Rights Reserved 2010 - 2022 | </p>
  </footer>
</div>


            
        </div>
    );
};

export default YsfHome;