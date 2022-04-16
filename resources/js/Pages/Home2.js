import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Nav from './Nav'
import Footer from './Footer'
import axios from 'axios';

const Checkout2 = () => {
  
    const [toggleMenu, setToggleMenu] = useState(false)
    
    const [clicked, setClicked] = useState(false);
    const [checklink, setLink] = useState("");
    const [steptxt, setStep] = useState("Continue");
    const [showmodal, setShowModal] = useState(false);
    useEffect(() => {
        if (clicked) {
          // do something meaningful, Promises, if/else, whatever, and then
          window.location.assign('/checkout');
        }
      });
    const toggleNav = () => {
       setToggleMenu(!toggleMenu)
    }
    const [toggleCur, setToggle] = useState(false)
 
    const toggleCurrency = () => {
 
       setToggle(!toggleCur)
    }

    
    const toggleModal = () => {
 
      setShowModal(!showmodal)

   }
   const [email, setEmail] = useState("")

   const changemail = (e) => {
      setEmail(e.target.value)
   }

   const generalplan = () => {
      toggleModal()
   }

   const month1 = () => {
      toggleModal()
      setLink("&plan=1")

   }

   const month3 = () => {
      toggleModal()
      setLink("&plan=3")
   }

   const month6 = () => {
      toggleModal()
      setLink("&plan=6")
   }

   const month12 = () => {
      toggleModal()
      setLink("&plan=12")
   }

   const setplan = (plan) =>{
      redirect()
   }

   const retarget = (email) => {
    axios.post("https://luxuryiptv.com/public/latest/mwzapi/mailwizz-php-sdk/examples/retarget.php",{email : email}).then(function(result){
    })

 }
   const redirect = () => {
   //   retarget(email)
      setStep("Please Wait ...")
      axios.post("https://luxuryiptv.com/public/latest/mwzapi/mailwizz-php-sdk/examples/retarget.php",{email : email}).then(function(result){
        window.location.assign('/checkout?email='+email+checklink);

      })

   }

   
   return (
      <div className='bg-gray-100 min-h-screen'>


<Nav />

<nav className="  hidden bg-white-200">
            <div className="   max-w-6xl mx-auto px-4">
               <div className="   flex justify-between ">
                  <div className="   flex space-x-4">
                     <div>
                        <a href="/" className="  align-middle  flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                           <img className="  md:h-14 lg:h-12 w-9/12 h-9" src={"https://res.cloudinary.com/luxiptv/image/upload/v1641149589/XXXX_1_uhbud3.png"} />

                        </a>
                     </div>

                  </div>

                  <div className="  hidden font-bold md:flex space-x-4">
                     <div>
                        <a href="/" className="  inline-block align-middle items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                            Home
                        </a>
                        <a href="/" className="  inline-block align-middle  items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                            Pricing
                        </a>
                        <a href="/" className="  inline-block align-middle items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                            Installation Tutorials
                        </a>
                        <a href="/" className="  inline-block align-middle items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                            Contact Us
                        </a>
                     </div>

                  </div>

                  <div className="  align-middle  hidden md:flex items-center space-x-1">

                     <div className='relative'>
                        <div onClick={() => toggleCurrency()} className="  cursor-pointer  text-black p-4 px-8 rounded-xl  text-lg leading-6 font-semibold">
                           <div className=' space-x-2'>
                              <div className=' inline-block align-middle'>
                                 <Icon width="30" height="30" icon="twemoji:flag-for-flag-united-kingdom" color="#00CC99" />
                              </div>
                              <div className=' inline-block'>
                                 £ GBP
                              </div>
                              <div className=' inline-block align-middle'>
                                 <Icon color="black" width="25" height="25" icon="akar-icons:arrow-down" />

                              </div>
                           </div>   </div>
                        <div className={toggleCur ? "absolute  z-50 mt-2 rounded-md shadow-lg w-36 origin-top-right right-0" : "hidden"} >

                           <div className="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">

                              <a href="" className="block py-2 px-5 ">
                                 <div className=' space-x-2'>
                                    <div className=' inline-block align-middle'>
                                       <Icon width="30" height="30" icon="twemoji:flag-for-flag-united-kingdom" color="#00CC99" />
                                    </div>
                                    <div className=' inline-block'>
                                       £ GBP
                                    </div>

                                 </div>
                              </a>
                              <a href="" className="block py-2 px-5 ">
                                 <div className=' space-x-2'>
                                    <div className=' inline-block align-middle'>
                                       <Icon width="30" height="30" icon="twemoji:flag-for-flag-european-union" color="#00CC99" />
                                    </div>
                                    <div className=' inline-block'>
                                       € EUR
                                    </div>

                                 </div>
                              </a>
                              <a href="" className="block py-2 px-5 ">
                                 <div className=' space-x-2'>
                                    <div className=' inline-block align-middle'>
                                       <Icon width="30" height="30" icon="twemoji:flag-for-flag-united-states" color="#00CC99" />
                                    </div>
                                    <div className=' inline-block'>
                                       $ USD
                                    </div>

                                 </div>
                              </a>

                           </div></div>
                     </div>
                  </div>  <div className="   md:hidden flex items-center">
                     <button onClick={() => toggleNav()} className="   mobile-menu-button">
                        <a className="    text-black p-4 px-8 rounded-xl  text-lg leading-6 font-semibold">
                           <div className=' space-x-2'>
                              <div className=' inline-block align-middle'>
                                 <Icon width="30" height="30" icon="twemoji:flag-for-flag-united-kingdom" color="#00CC99" />
                              </div>
                              <div className=' inline-block'>
                                 £ GBP
                              </div>
                              <div className=' inline-block align-middle'>
                                 <Icon color="black" width="25" height="25" icon="akar-icons:arrow-down" />

                              </div>
                           </div>   </a>
                     </button>
                  </div>

               </div>
            </div>

            <div className={toggleMenu ? 'mobile-menu  md:hidden' : 'mobile-menu hidden md:hidden'}
            >
               <a className="  text-center  text-black   rounded-xl  text-lg leading-6 font-semibold">
                  <div className=' space-x-2   border-b-2 mt-2'>
                     <div className=' inline-block align-middle'>
                        <Icon width="30" height="30" icon="twemoji:flag-for-flag-united-kingdom" color="#00CC99" />
                     </div>
                     <div className=' inline-block'>
                        £ GBP
                     </div>

                  </div>   </a>
               <a className="  text-center  text-black   rounded-xl  text-lg leading-6 font-semibold">
                  <div className=' space-x-2   border-b-2 mt-2'>
                     <div className=' inline-block align-middle'>
                        <Icon width="30" height="30" icon="twemoji:flag-for-flag-european-union" color="#00CC99" />
                     </div>
                     <div className=' inline-block'>
                        € EUR
                     </div>

                  </div>   </a>
               <a className="  text-center  text-black   rounded-xl  text-lg leading-6 font-semibold">
                  <div className=' space-x-2   border-b-2 mt-2'>
                     <div className=' inline-block align-middle'>
                        <Icon width="30" height="30" icon="twemoji:flag-for-flag-united-states" color="#00CC99" />
                     </div>
                     <div className=' inline-block'>
                        $ USD
                     </div>

                  </div>   </a>




            </div>
         </nav>

         <section class="md:pt-24 pt-4 bg-purple-600 text-white ">
    <div class="px-8 mx-auto max-w-7xl lg:px-12 xl:px-16">
        <div class="flex flex-col lg:flex-row">


            <div class="w-full lg:w-1/2 lg:pr-10">
                <div class="relative max-w-lg mx-auto leading-6 text-center  border-gray-200 lg:text-left">
                    <h1 class="m-0 text-3xl font-bold leading-tight text-left  border-solid sm:text-4xl md:text-5xl">
                    START OFF 2022 WITH A BANG!

                    </h1>
                    <p class="pr-5 mx-0 my-5 text-base text-left  lg:my-8 xl:text-lg">
                    Today, we are revolutionizing the way you access the television. With +88,921 channels & vods, you'll be watching channels in a radically new, intelligent, and intuitive way.

</p>
                
                
                    <div className='space-x-2'>
            <img style={{"height" : "25px","verticalAlign" : "text-bottom"}} src='https://privatevpn.com/_design/new/pvpn-trustpilot.png' className=' inline-block '  ></img>
            <img style={{"height" : "15px","verticalAlign" : "middle","margin" : "1px 15px"}} src='https://privatevpn.com/_design/new/pvpn-trustpilot-stars.png' className=' inline-block'  ></img>
            <p style={{"lineHeight" : "29px"}} class=" inline-block text-base text-left align-middle  ">
            <strong className='font-bold'>4.9</strong> out of 5                 </p>
            </div>
            
            <div className='space-x-2 mt-4'>
            <button onClick={() => generalplan()}  class="inline-block h-12 px-8 text-white bg-green-700 rounded-full">Get Started</button>
            <p class=" inline-block text-base text-left  ">
            Full 30-day money-back guarantee                    </p>
            </div>
            
            
                </div>
            </div>


            <div class="relative hidden md:flex w-full mt-20 lg:w-1/2 lg:mt-0">
                <img src="https://res.cloudinary.com/luxiptv/image/upload/v1640530685/75_rwkoci.png" class="relative z-10 p-0 mt-10 transform shadow-2xl rounded-xl lg:scale-110"/>

    
            </div>

        </div>
    </div>
</section>

<section>
    <div className='grid mt-4 grid-cols-1 gap-3 md:pt-12 p-8 md:grid-cols-3  from-slate-400 via-gray-800 '>
    <div className='border-2 md:w-9/12  border-gray-500 rounded-3xl p-2'>
       <img src='https://res.cloudinary.com/luxiptv/image/upload/v1641150714/1633953943_micxrp.png'/>
       <h1 className=' text-center text-2xl font-bold  '>Full 4k/HD/FHD Quality
</h1>
       <h1 className=' text-center text-s  font-extralight  '>Most of our tv channels are available in 4k quality and some of them are in 8k.


</h1>
    </div>
    <div className='border-2 md:w-9/12 border-gray-500 rounded-3xl p-2'>
       <img src='https://res.cloudinary.com/luxiptv/image/upload/v1641150867/1633953952_pc5stw.png'/>
       <h1 className=' text-center text-2xl font-bold  '>Privacy Protection

</h1>
       <h1 className=' text-center text-s  font-extralight  '>Military-grade encryption shields you from governments and ISPs


</h1>
    </div>
    <div className='border-2 md:w-9/12  border-gray-500 rounded-3xl p-2'>
       <img src='https://res.cloudinary.com/luxiptv/image/upload/v1641150888/1633953969_oa7tl1.png'/>
       <h1 className=' text-center text-2xl font-bold  '>Channels by Category

</h1>
       <h1 className=' text-center text-s  font-extralight  '>
       Organization is a must, so we did make sure to user it on all our TV channels, you can now get country, A-Z


</h1>
    </div>

    </div>
</section>



<section className="py-8 leading-7  text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
  <div className="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
    <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
      <h2 className="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">
        Fair, simple pricing for all.
      </h2>
    </div>
    <div className="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-4">
      <div className="relative z-10 border-black flex flex-col items-center max-w-md p-4 mx-auto my-0 border-2 border-solid rounded-lg ml-4 mr-4 sm:my-0 sm:p-6 md:my-8 md:p-8">
        <h3 className="m-0 text-2xl text-center font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
          1 Month
        </h3>
        <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
          <p className="box-border m-0 text-3xl text-red-700 line-through leading-none border-solid p-2">
            £20
          </p>
          <p className="box-border m-0 text-6xl text-green-500 font-semibold leading-none border-solid">
            £11.99
          </p>
        </div>
        <p className=" mt-2 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
         Per Month
        </p>
        <p className="mt-6 mb-5 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
          <span className="bg-gray-500 rounded-full text-white px-3 py-1 uppercase font-medium">
            INCLUDES FREE VPN
          </span>
        </p>

        <button onClick={() => month1()}  className="bg-green-500 rounded-full text-white px-3 py-1 uppercase font-medium">
          Select Plan
        </button>
        <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Access To Over 14000 Tv Channels
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            All Wordlwide Sports Included (Epl , Efl , Spfl & Champions League Etc...)
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Access To Over 89000 (Movies, Series, Documentaries, Children, Anime, Sport Etc...)
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Easy Setup On All Your Devices
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            8k / 4k / Ultra Hd Picture Quality
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Stable During Football Games / Ppv Events

          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Anti-buffer™ 7.0

          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
Free Weekly Updates
          </li>
        </ul>
        <button onClick={() => month1()}  className="bg-green-500 rounded-full text-white px-3 py-1 uppercase font-medium">
          Select Plan
        </button>
      </div>
      <div className="relative mr-4 z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-gray-600 border-solid rounded-lg sm:p-6 md:px-8 md:py-16">
        <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl text-center md:text-4xl">
          12 Month
        </h3>
        <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
          <p className="box-border m-0 text-3xl text-red-700 line-through leading-none border-solid p-2">
            £7
          </p>
          <p className="box-border m-0 text-6xl text-green-500 font-semibold leading-none border-solid">
            £5.99
          </p>
        </div>
        <p className=" mt-2 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
          Per Month
        </p>
        <p className="mt-6 mb-5 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
          <span className="bg-gray-500 rounded-full text-white px-3 py-1 uppercase font-medium">
            INCLUDES FREE VPN
          </span>
        </p>
        <button onClick={() => month12()}  className="bg-green-500 rounded-full text-white px-3 py-1 uppercase font-medium">
          Select Plan
        </button>
        <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Access To Over 14000 Tv Channels
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            All Wordlwide Sports Included (Epl , Efl , Spfl & Champions League Etc...)
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Access To Over 89000 (Movies, Series, Documentaries, Children, Anime, Sport Etc...)
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Easy Setup On All Your Devices
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            8k / 4k / Ultra Hd Picture Quality
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Stable During Football Games / Ppv Events

          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Anti-buffer™ 7.0

          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
Free Weekly Updates
          </li>
        </ul>
        <button onClick={() => month1()}  className="bg-green-500 rounded-full text-white px-3 py-1 uppercase font-medium">
          Select Plan
        </button>
      </div>
      <div className="relative border-black z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg  sm:my-0 sm:p-6 md:my-8 md:p-8">
        <h3 className="m-0 text-center text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
          3 Month
        </h3>
        <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
          <p className="box-border m-0 text-3xl text-red-700 line-through leading-none border-solid p-2">
            £16
          </p>
          <p className="box-border m-0 text-6xl text-green-500 font-semibold leading-none border-solid">
            £9.74
          </p>
        </div>
        <p className=" mt-2 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
          Per Month
        </p>
        <p className="mt-6 mb-5 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
          <span className="bg-gray-500 rounded-full text-white px-3 py-1 uppercase font-medium">
            INCLUDES FREE VPN
          </span>
        </p>
        <button onClick={() => month3()}  className="bg-green-500 rounded-full text-white px-3 py-1 uppercase font-medium">
          Select Plan
        </button>
        <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Access To Over 14000 Tv Channels
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            All Wordlwide Sports Included (Epl , Efl , Spfl & Champions League Etc...)
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Access To Over 89000 (Movies, Series, Documentaries, Children, Anime, Sport Etc...)
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Easy Setup On All Your Devices
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            8k / 4k / Ultra Hd Picture Quality
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Stable During Football Games / Ppv Events

          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Anti-buffer™ 7.0

          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
Free Weekly Updates
          </li>
        </ul>
        <button onClick={() => month3()}  className="bg-green-500 rounded-full text-white px-3 py-1 uppercase font-medium">
          Select Plan
        </button>
      </div>
      <div className="relative border-gray-600 z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-lg ml-4 sm:my-0 sm:p-6 md:my-8 md:p-8">
        <h3 className="m-0 text-center text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl">
          6 Month
        </h3>
        <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
          <p className="box-border m-0 text-3xl text-red-700 line-through leading-none border-solid p-2">
            £11
          </p>
          <p className="box-border m-0 text-6xl text-green-500 font-semibold leading-none border-solid">
            £7.49
          </p>
        </div>
        <p className=" mt-2 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
          Per Month
        </p>
        <p className="mt-6 mb-5 text-lg leading-normal text-left text-gray-900 border-0 border-gray-200">
          <span className="bg-gray-500 rounded-full text-white px-3 py-1 uppercase font-medium">
            INCLUDES FREE VPN
          </span>
        </p>
        <button onClick={() => month6()}  className="bg-green-500 rounded-full text-white px-3 py-1 uppercase font-medium">
          Select Plan
        </button>
        <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Access To Over 14000 Tv Channels
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            All Wordlwide Sports Included (Epl , Efl , Spfl & Champions League Etc...)
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Access To Over 89000 (Movies, Series, Documentaries, Children, Anime, Sport Etc...)
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Easy Setup On All Your Devices
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            8k / 4k / Ultra Hd Picture Quality
          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Stable During Football Games / Ppv Events

          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
            Anti-buffer™ 7.0

          </li>
          <li className="inline-flex items-center block w-full mb-2 font-semibold text-left border-solid">
        
Free Weekly Updates
          </li>
        </ul>
        <button onClick={() => month6()}  className="bg-green-500 rounded-full text-white px-3 py-1 uppercase font-medium">
          Select Plan
        </button>
      </div>
    </div>
  </div>
</section>


<section className='bg-purple-700 text-white pt-4 px-12'>
<div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                <img class="rounded-lg shadow-xl" src="https://res.cloudinary.com/luxiptv/image/upload/v1641150909/1633954069_iv5kg8.png" alt=""/>
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                <p class="mb-2 text-2xl font-semibold leading-none text-left md:text-4xl   uppercase">1-click-setup</p>
                <h3 class="mt-2 text-xl sm:text-left md:text-2xl">Best Provider for all your devices</h3>
                <p class="mt-5 text-lg  text md:text-left">Access +80k Channels and vod in just 60 seconds, whether you’re on a computer, smartphone, Firestick, MAG, Smart TV or Enigma. Our apps let you stream  with no coding or complex setup required. <strong className=' font-bold'>Simply download and connect</strong>.</p>
                <div className='space-x-2 mt-4'>
            <button onClick={() => generalplan()}  class="inline-block h-12 px-8 text-white bg-green-700 rounded-full">Get Started</button>
            <p class=" inline-block text-base text-left  ">
            Full 30-day money-back guarantee                    </p>
            </div>  
            </div>

            
        </div>
</section>

<section class="relative w-full bg-white">
    <div class="absolute bottom-0 left-0 w-full bg-purple-700 h-1/2"></div>
    <div class="relative px-10 py-20 mx-auto max-w-7xl">
        <div class="relative flex flex-col items-center w-full h-full px-10 py-16 bg-purple-100 sm:px-12 md:px-16 lg:py-20 rounded-2xl">
            <div class="absolute inset-0 bg-cover" style={{backgroundImage:"url('https://uploads-ssl.webflow.com/5f303e34821294abdf7d62ec/5f303e34e2c77b2a0817092a_Pattern%20Shape.svg')"}}></div>
            <div class="relative flex flex-col items-center justify-between w-full h-full lg:flex-row">
                <h2 class="max-w-lg mb-5 text-2xl font-semibold text-center text-purple-900 md:leading-tight lg:mb-0 lg:text-left md:text-4xl sm:text-3xl">
                Enjoy more than 54000 TV Channels, Movies and TV shows! with Features of Catch Up & EPG
                </h2>
                <div class="flex flex-col h-auto transform translate-y-2">
                    <a  onClick={() => generalplan()} class="cursor-pointer inline-flex items-start h-auto px-8 py-4 font-medium text-center text-white rounded-lg bg-gradient-to-br from-yellow-500 via-red-500 to-pink-600">Get Access Now </a>
                </div>
            </div>
        </div>
    </div>
</section>

<section className='text-black bg-white pt-4 px-12'>
<div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 ">
                <img class="rounded-lg shadow-xl" src="https://res.cloudinary.com/luxiptv/image/upload/v1641150929/1633954095_oepypk.png" alt=""/>
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16 sm:order-last">
                <p class="mb-2 text-2xl font-semibold leading-none text-left md:text-4xl   uppercase">Streaming  never been so fast</p>
                <h3 class="mt-2 text-xl sm:text-left md:text-2xl">UK-Based Servers</h3>
                <p class="mt-5 text-lg  text md:text-left">
                our Servers are all based in UK, to give you the fastest stream times and consistently high quality of service.

. <strong className=' font-bold'>Simply download and connect</strong>.</p>

<div className='space-x-2 mt-4'>
            <button onClick={() => generalplan()}  class="inline-block h-12 px-8 text-white bg-green-700 rounded-full">Get Started</button>
            <p class=" inline-block text-base text-left  ">
            Full 30-day money-back guarantee                    </p>
            </div>  
            </div>
        </div>
</section>


<section className='bg-purple-700 text-white pt-4 px-12'>
<div class="flex flex-col  animated fadeIn sm:flex-row">
            <div class="flex items-center   sm:w-1/2 md:w-5/12 sm:order-last">
                <img class="rounded-lg shadow-xl" src="https://res.cloudinary.com/luxiptv/image/upload/v1641150949/1633954107_opm0gm.png" alt=""/>
            </div>
            <div class="flex flex-col justify-center mt-5  md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                <p class="mb-2 text-2xl font-semibold leading-none text-left md:text-4xl   uppercase">We treat our customers like family
</p>
                <h3 class="mt-2 text-xl sm:text-left md:text-2xl">you’ll talk directly with our in-house developers </h3>
                <p class="mt-5 text-lg  text md:text-left">Our industry-topping support team is always on hand to help. You won’t be talking to some VA in India either, you’ll talk directly with our in-house developers 

<strong className=' font-bold'> to get your problems solved quickly and easily</strong>.</p>
<div className='space-x-2 mt-4'>
            <button onClick={() => generalplan()}  class="inline-block h-12 px-8 text-white bg-green-700 rounded-full">Get Started</button>
            <p class=" inline-block text-base text-left  ">
            Full 30-day money-back guarantee                    </p>
            </div>  
            </div>
        </div>
</section>



<section class="flex items-center justify-center py-0 bg-white bg-gradient-to-br from-purple-600 via-indigo-500 to-purple-400 min-w-screen">
    <div class="relative flex flex-col items-center w-full max-w-6xl px-4 py-8 mx-auto text-center lg:text-left lg:block sm:px-6 md:pb-0 md:pt-12 lg:px-12 lg:py-12">
        <h2 class="my-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:my-0 xl:text-4xl sm:leading-tight">
        30-DAY MONEY BACK GUARANTEE
        </h2>
        <p class="mt-1 mb-10 text-sm font-medium text-indigo-200 uppercase xl:text-base xl:tracking-wider lg:mb-0">
        We offer a 30 Days Money Back Guarantee if you aren’t satisfied with our service
        </p>
        <div class="flex mb-8 lg:mt-6 lg:mb-0">
            <div class="inline-flex">
                <a onClick={() => generalplan()}  class="cursor-pointer inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-700 transition duration-150 ease-in-out bg-indigo-100 border border-transparent rounded-md hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300">
                    Sign Up Today
                </a>
            </div>
        </div>
        <div class="bottom-0 right-0 mb-0 mr-3 lg:absolute lg:-mb-12">
            <img src="https://res.cloudinary.com/luxiptv/image/upload/v1641150982/cta-1_leqexf.png" class="max-w-xs mb-4 opacity-75 md:max-w-2xl lg:max-w-lg xl:mb-0 xl:max-w-md"/>
        </div>
    </div>
</section>
<section className='bg-black text-white pt-4 px-12'>
<div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
      
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 w-full sm:pr-16">
                <p class="mb-2 text-2xl font-semibold leading-none text-center md:text-4xl   uppercase">Choose Channels & VoD from 63 locations...and we’re still growing!
</p>
                <h3 class="mt-2 text-xl sm:text-center md:text-2xl">With over 54 000 Channels and 80 000 VoD in 63 countries, easily connect no matter your location and enjoy unlimited access via our secure server.

</h3>
<div className='space-x-2 text-center mt-4'>
            <img style={{"height" : "25px","verticalAlign" : "text-bottom"}} src='https://privatevpn.com/_design/new/pvpn-trustpilot.png' className=' inline-block '  ></img>
            <img style={{"height" : "15px","verticalAlign" : "middle","margin" : "1px 15px"}} src='https://privatevpn.com/_design/new/pvpn-trustpilot-stars.png' className=' inline-block'  ></img>
            <p style={{"lineHeight" : "29px"}} class=" inline-block text-base text-left align-middle  ">
            <strong className='font-bold'>4.9</strong> out of 5                 </p>
            </div>
            
            <div className='space-x-2 mt-4 text-center mt-4'>
            <button onClick={() => generalplan()}  class="inline-block h-12 px-8 text-white bg-green-700 rounded-full">Get Started</button>
            <p class=" inline-block text-base text-left  ">
            Full 30-day money-back guarantee                    </p>
            </div>
            </div>

            
        </div>
</section>


<div className={showmodal ? "min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" : "hidden"} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1582&q=80)'}} id="modal-id">
  <div className="absolute bg-black opacity-80 inset-0 z-0" />
  <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
    {/*content*/}
    <div className>
      {/*body*/}
      <div className="text-center p-5 flex-auto justify-center">
      <Icon className="w-16 h-16 flex items-center text-red-500 mx-auto" icon="carbon:continue" />

        <h2 className="text-xl font-bold py-4 ">Enter Your Email To Continue</h2>
        <div class="mb-4 relative">
        <input value={email}
                              onChange={changemail}  placeholder='john@gmail.com' class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-2 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="email" type="text" autofocus/>
    </div>
      </div>
      {/*footer*/}
      <div className="p-3  mt-2 text-center space-x-4 md:block">
        <button onClick={() => toggleModal()}  className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
          Cancel
        </button>
        <button  onClick={() => redirect()}  className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">{steptxt}</button>
      </div>
    </div>
  </div>
</div>


<Footer />


      </div>
   );
};

export default Checkout2;