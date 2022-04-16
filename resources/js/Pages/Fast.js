import Header from './Nav'
import { Icon } from '@iconify/react';
import React, { useEffect,useState } from 'react';


import axios from "axios";

import moment from 'moment';
function randnum(min, max) {
  return parseInt (Math.random() * (max - min) + min);
}
function Singleslick(props){
  
  const style = props.style;
  const names = ['JESSE O','JAMES L','MELBERG H','CANDACE D','STEPHAN H','MARKO P','AHMAD H','WAYNE R','MARK G','COLLIN C','FRANK A','JACK H']
  const countries = ['United Kingdom']
  const reviews = ['Reliable with a great diversity of channels and VODs, but i think most providers have this. What really impressed me was their support, I asked for a EPG source 5 min later reply with my source','Loads of channels and VOD. Responsive customer service to get you through the set up process. Overall a strong proposition. Happy to recommend','Absolutely exceptional customer service!!! Really fast and correct response, helpful and understanding reply','Great support, best I have had in years no matter what service. EPG and everything works just as it should and it is by far the best IPTV service I have tried','Best iptv Provider, which I can test the läßt month. Easy to pay with Bitcoin over anycoindirect. Fast delivery from 5 Minute. I becam a m3u list per email. Ive used it with my android handy and regular on my enigma2 box','Great customer support, great quality streaming service. Yeah IPTV also has a wide variety of available TV channels. They always respond quickly to emails and technical problems can mostly be resolved on the same day','Was very cautious with who was to be trusted with IPTV because I find it hard to find a good supplier because everybody will try tell you they are the best but I am just writing this off my own back with how amazing this service is running on my 3 devices','Was chatting to Sonia who set me up in 5 mins, all the sports, movies and 1000 s of movies! Absolute no brainer to buy this IPTV','After reading these reviews i signed up initially for the 1 month subscription for my firestick. The quality of the service could not have been better.','Great quality, very competitive with loads of channels and a top guy sorting things out / supporting you. Would recommend to anyone whose thinking of getting IPTV. Very professional looking home screens menus etc. 10 out of 10','Best service in the world brilliant picture would recommend to anyone requiring access too Sport, Movies, TV Series ETC...','Sonia talked me through the IPTV installation in time for me to watch much of a football match that had already been running for 35 minutes!! Unparalleled and very quick service, always respectful in answering my dumb questions… Sonia has saved me a small fortune. Go to no one else.']
  



 
  return(
    <div style={style} className="border-2 mt-2 mb-2 border-black relative mx-2 p-2 bg-gray-100">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-x-3">
                        <div className="flex -space-x-0.5 items-center">
                          <svg className="h-6 w-6 md:h-5 md:w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg className="h-6 w-6 md:h-5 md:w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg className="h-6 w-6 md:h-5 md:w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg className="h-6 w-6 md:h-5 md:w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg className="h-6 w-6 md:h-5 md:w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="flex gap-x-1.5">
                          <svg className="h-4 w-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          <span className="text-xs text-green-500">Verified customer</span>
                        </span>
                      </div>
                      <span className="flex gap-x-0.5 items-center">
                        <span>
                          <svg className="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </span>
                        <span className="text-xs"> { randnum(1,30) } days ago</span>
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <p className="text-sm text-gray-500">
                      {reviews[ randnum(0,reviews.length) ]}
                      </p>
                      <p className="flex gap-x-1.5 items-center text-xs text-gray-500">
                        <span className="flex gap-x-0.5 items-center">
                          <span>
                          <Icon icon="iconoir:settings-profiles" />

                          </span>
                          <span> {names[ randnum(0,names.length) ]} </span>
                        </span>
                        <span className="flex gap-x-0.5 items-center">
                          <span>
                          <Icon icon="twemoji:flag-for-flag-united-kingdom" />

                          </span>
                          <span>{countries[ randnum(0,countries.length) ]}</span>
                        </span>
                      </p>
                    </div>
                  </div>
  )
}

function Slick(){
  const [style, setStyle] = useState({transform : 'translateY(-0px)',transitionDelay : '9s'});
  const [hid, setHid] = useState({display: 'none'});
  

  return (
    <div>
 
 <Singleslick style={style} />
      <Singleslick style={style} />
      <Singleslick style={style} />
      <Singleslick style={style} />
  
    

                </div>
  )
}

export default function Home() {
  const myRef = React.createRef();
  
  const API_URL = "https://ecombunny.net/api/";
  const [ip, setIP] = useState('');
  const [note, setNote] = useState('');
  const [mylink, setMyLink] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setIP(res.data.IPv4)
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

  const getCurrentDate = () => {
    return moment().format("YYYY-MM-DD HH:mm:ss");
   }


let date= getCurrentDate();



const [email, setEmail] = useState("");
  const changemail = (e) => {
    setEmail(e.target.value)
    axios.post(API_URL+'add.php', {email : e.target.value,date : date , ip:ip,website : "fast-iptv.shop",activated : "no",note : note}).then(function(result) {
    } )  
  }

  useEffect(() => {
    setEmail(email)
  }, [email]);
  
  const [popup,setPopup] = useState(false)
  const togglepop = () => {
    setPopup(!popup)
  }

  const togglePrice = () => {
   
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
 }

 const month1 = () => {
  togglepop()
  setNote("Init Checkout to 1 Month")
  setMyLink('/1-month?email=')
}
const month3 = () => {
  togglepop()
  setNote("Init Checkout to 3 Months")
  setMyLink('/3-months?email=')
}
const month6 = () => {
  togglepop()
  setNote("Init Checkout to 6 Months")
  setMyLink('/6-months?email=')
}
const month12 = () => {
  togglepop()
  setNote("Init Checkout to 12 Months")
  setMyLink('/12-months?email=')
}

const redirectnow = () => {
 // Router.push(mylink+email)
}

  
  function togglechannels(){
    //Router.push('/countries')
  }
  

  return (

    <div className="font-press-start">
        <Header >
            </Header>
        
      <div class="hero-section ">
    <div class="relative max-w-screen-xl mx-auto px-8 md:px-14 grid md:grid-cols-2 items-center py-14 pt-20 md:pt-14">
      <div class="relative z-20 flex flex-col space-y-5 md:space-y-10 max-w-xl pr-5 -mt-5">
      <h1 className="font-press-start text-3xl  md:text-5xl lg:text-6xl font-bold leading-tight">The Best IPTV For Any Device, From Any Location.
</h1>
<p className="font-press-start text-xl pt-4 pb-8 text-gray-700">Subscribe to our Premium IPTV service today and access more than 14K international channels with over 74K VOD updated every week.</p>
        <div class="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5">
          <button onClick={ () => togglePrice() } class="bg-yellow-500   font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center text-xl font-press   py-3.5 px-12">
            See Pricing
          </button>
          <button onClick={ () => togglechannels() } class="bg-yellow-500   font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center text-xl font-press   py-3.5 px-12">
            Channels List
          </button>
        </div>
      </div>
      <div class="absolute inset-0 z-10 px-2 md:px-0 opacity-30 md:opacity-100 md:relative  items-center justify-center hidden lg:flex">
        <img src="https://res.cloudinary.com/luxiptv/image/upload/v1640530685/75_rwkoci.png" alt=""/>
      </div>
    </div>
  </div>


   {/* Start Features */}
   <div className=" font-press-start bg-gradient-to-r  from-yellow-100 via-white to-white flex flex-col md:flex-row items-center content-center py-12 lg:pt-16 lg:pb-32">
      {/* Start Feature Image */}
      <div className="feature-1 md:w-2/3 text-center mb-4 lg:mb-0 relative">
        <img   className="lazy mx-auto z-10 relative w-2/3 md:w-4/5 lg:w-2/3 loaded" alt="Mobile Device" data-ll-status="loaded" src="https://res.cloudinary.com/luxiptv/image/upload/v1640530802/image_puirou.png" />
        {/* Generated at https://www.landingfolio.com/tools/mockup-generator. Use coupon: FIRSTMONTHFREE to use it one month for free*/}
      </div>
      {/* End Feature Image */}
      {/* Start Feature Content */}
      <div className="w-full md:w-1/2  px-3 md:px-3">
        <h2 className="font-press-start text-xl md:text-2xl lg:text-3xl font-semibold  ">Compatible With <strong className="text-yellow-500"> All Devices </strong>
From Anywhere.</h2>
        <p className="font-press-start text-md lg:text-lg pt-4 pb-8 text-gray-700">
        Our IPTV streaming is compatible with all your devices, Smart TVs, Android Box and Phone, Apple Devices, Amazon Fire Stick, KODI, and MAG Box we literally support all kinds of devices.



        </p>
        <ul className="usps">
          <li  className="text-gray-900 py-1"><b><div className = "flex flex-wrap">
         

<Icon className="h-6 w-6 mr-2 " icon="clarity:success-standard-solid" color="#5dd0c6" width="24" height="24" />
              <strong className="text-green-500">14,966+ Live TV Channels.</strong>
           
            </div></b></li>
            <li  className="text-gray-900 py-1"><b><div className = "flex flex-wrap">
         

         <Icon className="h-6 w-6 mr-2 " icon="clarity:success-standard-solid" color="#5dd0c6" width="24" height="24" />
                       <strong className="text-green-500">74,823+ Movies & Series.</strong>
                    
                     </div></b></li>

                     
            <li  className="text-gray-900 py-1"><b><div className = "flex flex-wrap">
         

         <Icon className="h-6 w-6 mr-2 " icon="clarity:success-standard-solid" color="#5dd0c6" width="24" height="24" />
                       <strong className="text-green-500">Optional : Premium Adult Channels.</strong>
                    
                     </div></b></li>

      
    
        </ul>
        <br/>
        <div class="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5">
          <button onClick={ () => togglePrice() } class="bg-yellow-500   font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center text-xl font-press   py-3.5 px-12">
            See Pricing
          </button>
          <button  onClick={ () => togglechannels() } class="bg-yellow-500   font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center text-xl font-press   py-3.5 px-12">
            Channels List
          </button>
        </div> 

 </div>
      {/* End Feature Content */}
    </div>
    {/* End Feature */}


  <div class="mt-2 cards-section font-press-start">
    <div class="container mx-auto px-6 mb-8 md:mb-32">
    <h1 class=" text-5xl font-circular-std-black text-matte-black-dark text-center">Why <strong className ="text-yellow-500" > FAST IPTV SHOP</strong> is the best IPTV service ?
</h1>

<p class="max-w-xl mt-4 mx-auto text-center text-xl text-matte-black">
        With FAST IPTV SHOP you can watch Anything From Anywhere

        </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-6 gap-y-4 md:gap-y-14 mt-12 md:mt-20 md:mx-20 md:space-y-0 space-y-12">
        <div class="bg-white border-2 border-yellow-600 shadow-purchase-card rounded-2xl">
          <div class="flex justify-center">
            <div class="absolute w-16 h-16 bg-white rounded-full border-2 border-yellow-600 md:p-3 -mt-8 text-white font-bold text-xl flex justify-center items-center">
        
              <Icon class=" w-16 h-16"  icon="bi:tv" color="#f59e0b"  />

            </div>
          </div>
          <div class="px-6 md:px-12 pb-4">
            <h4 class="font-poppins mt-10 text-2xl font-medium text-center text-nile-blue">FULL 4K/HD/FHD Quality</h4>
            <p class="font-dm-sans text-center text-marble-blue mt-2">Most of our TV channels are available in HD quality and some of them are in 4K.</p>
          </div>
        </div>
        <div class="bg-white border-2 border-yellow-600 shadow-purchase-card rounded-2xl">
          <div class="flex justify-center">
            <div class="absolute w-16 h-16 bg-white rounded-full border-2 border-yellow-600 md:p-3 -mt-8 text-white font-bold text-xl flex justify-center items-center">
              <Icon class=" w-16 h-16"  icon="bx:bx-dollar" color="#f59e0b" />

            </div>
          </div>
          <div class="px-6 md:px-12 pb-4">
            <h4 class="font-poppins mt-10 text-2xl font-medium text-center text-nile-blue">5-Day Money-Back Guarantee
</h4>
            <p class="font-dm-sans text-center text-marble-blue mt-2">If you feel our services is not a good fit, we will grant you a full refund.</p>
          </div>
        </div>
        <div class="bg-white border-2 border-yellow-600 shadow-purchase-card rounded-2xl">
          <div class="flex justify-center ">
            <div class="absolute w-16 h-16 rounded-full border border-grey-06 md:p-3 bg-white -mt-8 text-white font-bold text-xl flex justify-center items-center">
            <Icon class=" w-16 h-16"  icon="carbon:wallet" color="#f59e0b" />
            </div>
          </div>
          <div class="px-6 md:px-12 pb-4">
            <h4 class="font-poppins mt-10 text-2xl font-medium text-center text-nile-blue">Safe, Secure Payment</h4>
            <p class="font-dm-sans text-center text-marble-blue mt-2">Secure Payments – No complicated billing processes required.</p>
          </div>
        </div>
        <div class="bg-white border-2 border-yellow-600 shadow-purchase-card rounded-2xl">
          <div class="flex justify-center">
            <div class="absolute w-16 h-16 bg-white rounded-full border-2 border-yellow-600 md:p-3 -mt-8 text-white font-bold text-xl flex justify-center items-center">
            <Icon class=" w-16 h-16"  icon="feather:send" color="#f59e0b" />
            </div>
          </div>
          <div class="px-6 md:px-12  pb-4">
            <h4 class="font-poppins mt-10 text-2xl font-medium text-center text-nile-blue">Fast Order Delivery</h4>
            <p class="font-dm-sans text-center text-marble-blue mt-2">We Deliver Your Premium IPTV subscription A Few hours After Payment Is Made.</p>
          </div>
        </div>
        <div class="bg-white border-2 border-yellow-600 shadow-purchase-card rounded-2xl">
          <div class="flex justify-center">
            <div class="absolute w-16 h-16 bg-white rounded-full border-2 border-yellow-600 md:p-3 -mt-8 text-white font-bold text-xl flex justify-center items-center">
            <Icon class=" w-16 h-16"  icon="carbon:connection-signal" color="#f59e0b" />
            </div>
          </div>
          <div class="px-6 md:px-12 pb-4">
            <h4 class="font-poppins mt-10 text-2xl font-medium text-center text-nile-blue">99% Uptime Service</h4>
            <p class="font-dm-sans text-center text-marble-blue mt-2">Our IPTV servers are hosted in a big data server, fully secured and encrypted, with no server downtime or buffering image.</p>
          </div>
        </div>
        <div class="bg-white border-2 border-yellow-600 shadow-purchase-card rounded-2xl">
          <div class="flex justify-center">
            <div class="absolute w-16 h-16 bg-white rounded-full border-2 border-yellow-600 md:p-3 -mt-8 text-white font-bold text-xl flex justify-center items-center">
            <Icon class=" w-16 h-16"  icon="grommet-icons:turbolinux" color="#f59e0b" />
            </div>
          </div>
          <div class="px-6 md:px-12 pb-4">
            <h4 class="font-poppins mt-10 text-2xl font-medium text-center text-nile-blue">Fast Zapping</h4>
            <p class="font-dm-sans text-center text-marble-blue mt-2">Our IPTV service has an incredible channel zapping time, roughly 0.5 seconds!</p>
          </div>
        </div>
      </div>
    </div>
  </div>






    

 {/* Start Features */}
    <div className=" font-press-start bg-gradient-to-r  from-yellow-100 via-white to-white flex flex-col md:flex-row items-center content-center py-12 lg:pt-16 lg:pb-32">
      {/* Start Feature Image */}
      <div className=" feature-1 md:w-2/3  text-center mb-4 lg:mb-0 relative">
        <img   className="lazy mx-auto z-10  relative  lg:w-2/3 loaded " alt="Mobile Device" data-ll-status="loaded" src= "https://res.cloudinary.com/luxiptv/image/upload/v1640530840/75_drsum3.png"/>
      </div>
      {/* End Feature Image */}
      {/* Start Feature Content */}
      <div className="w-full md:w-1/2  px-3 md:px-3">
        <h2 className="font-press-start mb-2 text-xl md:text-2xl lg:text-3xl font-semibold  ">Share the best moments
 <strong className="text-yellow-500"> with your family and loved ones, and enjoy your time.
 </strong>
</h2>
        <ul className="usps">
          <li  className="text-gray-900 py-1"><b><div className = "flex flex-wrap">
         

<Icon className="h-6 w-6 mr-2 " icon="clarity:success-standard-solid" color="#5dd0c6" width="24" height="24" />
              <strong className="text-green-500">Lastest movies and TV series.</strong>
           
            </div></b></li>
          <li  className="text-gray-900 py-1"><b><div className = "flex flex-wrap">
         

<Icon className="h-6 w-6 mr-2 " icon="clarity:success-standard-solid" color="#5dd0c6" width="24" height="24" />
              <strong className="text-green-500">Watch major competitions.</strong>
           
            </div></b></li>
          <li  className="text-gray-900 py-1"><b><div className = "flex flex-wrap">
         

<Icon className="h-6 w-6 mr-2 " icon="clarity:success-standard-solid" color="#5dd0c6" width="24" height="24" />
              <strong className="text-green-500">PPV channels with no extra fees.</strong>
           
            </div></b></li>
          <li  className="text-gray-900 py-1"><b><div className = "flex flex-wrap">
         

<Icon className="h-6 w-6 mr-2 " icon="clarity:success-standard-solid" color="#5dd0c6" width="24" height="24" />
              <strong className="text-green-500">FULL HD , UHD , 4K Channels.</strong>
           
            </div></b></li>
          <li  className="text-gray-900 py-1"><b><div className = "flex flex-wrap">
         

<Icon className="h-6 w-6 mr-2 " icon="clarity:success-standard-solid" color="#5dd0c6" width="24" height="24" />
              <strong className="text-green-500">100% Satisfaction or full refund.</strong>
           
            </div></b></li>

      
    
        </ul>
        <br/>
        <div class="flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:space-x-5">
          <button onClick={ () => togglePrice() } class="bg-yellow-500   font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center text-xl font-press   py-3.5 px-12">
            See Pricing
          </button>
          <button  onClick={ () => togglechannels() } class="bg-yellow-500   font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center text-xl font-press   py-3.5 px-12">
            Channels List
          </button>
        </div>

 </div>
      {/* End Feature Content */}
    </div>
    {/* End Feature */}
    
    <div className="py-8 bg-yellow-400 border-t border-b border-blue-200">
  <div className="container mx-auto">
  

    <section class="text-black  mt-3 max-w-3xl my-1 mx-auto px-4 font-bold "><div class="grid  gap-4">
    <h2 class="font-circular-std-bold text-white text-center mb-8 text-2xl md:text-5xl">Frequently Asked Questions</h2>
      
    <div class="space-y-4">
        <details class="bg-white rounded-md py-2 px-4"><summary class="font-semibold cursor-pointer">What does the package include?</summary><span class="pt-2  text-gray-500 inline-block">When you subscribe to our service, you get login credentials to IPTV server with instructions for how to setup it on your device via email.

.</span></details>
                         </div>
      <div class="space-y-4">
        <details class="bg-white rounded-md py-2 px-4"><summary class="font-semibold cursor-pointer">How to setup IPTV on my device?</summary><span class="pt-2  text-gray-500 inline-block">It is very easy to connect IPTV. Follow <u> <a href="/how-to-install-iptv-in-my-device">the tutorial page</a> </u> , chat with us or send an email, our agents will help you set it up on your device
.</span></details>
                         </div>

                         
      <div class="space-y-4">
        <details class="bg-white rounded-md py-2 px-4"><summary class="font-semibold cursor-pointer">What Devices You support?</summary><span class="pt-2  text-gray-500 inline-block">We support all kinds of devices such as Smart TVs, Firestick, MAG, Android Smart Phone, Android Boxes, Enigma, DreamBox, Vu+ (…), PC, VLC, Kodi/XBMC (…), Smart TV.
</span></details>
                         </div>
                         
      <div class="space-y-4">
        <details class="bg-white rounded-md py-2 px-4"><summary class="font-semibold cursor-pointer">How long will it take to receive my IPTV access?</summary><span class="pt-2  text-gray-500 inline-block">We aim to email you within 3min – 1 hour of purchase to arrange setup of your order. Please note during busy periods at evenings and weekends orders may take up to 2 hours to process.</span></details>
                         </div>
                         
      <div class="space-y-4">
        <details class="bg-white rounded-md py-2 px-4"><summary class="font-semibold cursor-pointer">What if i don't like your IPTV service?</summary><span class="pt-2  text-gray-500 inline-block">We offer a 7 Days Money Back Guarantee for Any Reason</span></details>
                         </div>

                         
      <div class="space-y-4">
        <details class="bg-white rounded-md py-2 px-4"><summary class="font-semibold cursor-pointer">What content do you supply?</summary><span class="pt-2  text-gray-500 inline-block">We offer a full range of UK, USA, European and WorldWide channels, movies and TV shows with Catch Up & EPG (Electronic Program Guide) features in 4K / Ultra HD / HD quality.</span></details>
                         </div>

                        
                        
                        </div></section>
                   
  </div>
</div>







   






<div className="testimonials py-8 lg:py-16 px-4">
  <div className="container mx-auto">
    {/* Start Title */}
    <div className="py-8">
      <div className="lg:w-4/6 text-center mx-auto">
        <h2 className="font-press-start text-2xl md:text-4xl font-bold">Over 7,000 customers trust FAST IPTV SHOP . See what they say.</h2>
      </div>
    </div>
    {/* End Title */}
    {/* Start Testmonials  */}
    
    <div className = "text-center  mt-4  h-full lg:w-8/12 w-full mx-auto" > 

<Slick />


</div>

    
    {/* End Testimonial  */}

   
  
  </div>
</div>




<div  ref={myRef} className="py-5 px-4 md:px-16 lg:px-0 ">
  <div className=" container mx-auto py-4">
    {/* Start Title */}
    <div className="pb-4 lg:pb-8">
      <div className="lg:w-4/5 mx-auto text-center">
        <h2 className="font-press-start text-3xl md:text-5xl font-bold">Fair, simple pricing for all.
</h2>
      </div>
    </div>
    {/* End Title */}
    {/* Start Pricing Block */}
    <div className=" w-full flex flex-col lg:flex-row fade-in fade-in-second mb-8" >
   
      {/* Start Pricing Option*/}
      <div onClick={ () => month1() } className="cursor-pointer  w-full lg:w-3/12 mt-8 bg-white   ">
        <div className="px-3 py-2 border-4 m-2  border-red-400 rounded text-center">
          <div>
            <h3 className="font-press-start  font-semibold   text-lg">1 Month Subscription
</h3>
            <div class="text-red-500">
            <h1 class="text-6xl text-blue-eyes font-bold inline">£10 </h1>
            <span class="font-dm-sans pl-1 pt-1 text-2xl text-marble-blue">/mo</span>
          </div>
     


          </div>

          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
11,071+ Live TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              16,577+ Movies & Series</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Premium Adult Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              99.9% Uptime</strong>
            </p>
          </div>

          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              AntiFreeze Technology</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              FHD,HD & SD TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Works on any device</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Free Updates</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              24/7 support</strong>
            </p>
          </div>
        

        
          <div className="my-4">
  <strong  className="bg-red-500 hover:bg-red-600   w-full text-base font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center">BUY NOW <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>
        </div>
      </div>
      {/* End Pricing Option*/}

    {/* Start Pricing Option*/}
    <div  onClick={ () => month3() } className="cursor-pointer   w-full lg:w-3/12 mt-8 bg-white   ">
        <div className="px-3 py-2 border-4 m-2  border-green-400 rounded text-center">
          <div>
            <h3 className="font-press-start  font-semibold   text-lg">3 Months Subscription

</h3>
            <div class="text-green-500">
            <h1 class="text-6xl text-blue-eyes font-bold inline">£23 </h1>
            <span class="font-dm-sans pl-1 pt-1 text-2xl text-marble-blue">/3mo</span>
          </div>
     


          </div>

          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
11,071+ Live TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              16,577+ Movies & Series</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Premium Adult Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              99.9% Uptime</strong>
            </p>
          </div>

          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              AntiFreeze Technology</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              FHD,HD & SD TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Works on any device</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Free Updates</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              24/7 support</strong>
            </p>
          </div>
        

        
          <div className="my-4">
  <strong  className="bg-green-500 hover:bg-green-600  w-full text-base font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center">BUY NOW <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>
        </div>
      </div>
      {/* End Pricing Option*/}

          {/* Start Pricing Option*/}
          <div>
         
        </div>
          <div onClick={ () => month12() } className="cursor-pointer w-full lg:w-3/12 mt-8 bg-blue-400    ">
      
        <div className="px-3 py-2  m-2   rounded text-center">
      
          <div>

       
            <h3 className="font-press-start text-white  font-semibold   text-lg">
        <span className="py-1 px-3 rounded-md text-white text-sm font-normal ml-1" style={{background: '#00cc99'}}>
                    
                    BEST DEAL
                            </span> <br/>   1 Year Subscription
</h3>

            <div class="text-white">
            <h1 class="text-6xl text-blue-eyes font-bold inline">£59 </h1>
            <span class="font-dm-sans pl-1 pt-1 text-2xl text-marble-blue">/yr</span>
          </div>
     


          </div>

          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
11,071+ Live TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              16,577+ Movies & Series</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Premium Adult Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              99.9% Uptime</strong>
            </p>
          </div>

          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              AntiFreeze Technology</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              FHD,HD & SD TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Works on any device</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Free Updates</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              24/7 support</strong>
            </p>
          </div>
        

        
          <div className="my-4">
  <strong  className="bg-white   w-full text-base font-semibold font-press-start  p-4 text-blue-400 hover:border-blue-500 hover:text-blue-800 inline-flex   rounded-full  justify-center items-center">BUY NOW <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>
        </div>
      </div>
      {/* End Pricing Option*/}

          {/* Start Pricing Option*/}
          <div onClick={ () => month6() } className="cursor-pointer w-full lg:w-3/12 mt-8 bg-white   ">
        <div className="px-3 py-2 border-4 m-2  border-yellow-400 rounded text-center">
          <div>
            <h3 className="font-press-start  font-semibold   text-lg">6 Months Subscription
</h3>
            <div class="text-yellow-500">
            <h1 class="text-6xl text-blue-eyes font-bold inline">£37 </h1>
            <span class="font-dm-sans pl-1 pt-1 text-2xl text-marble-blue">/6mo</span>
          </div>
     


          </div>

          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
11,071+ Live TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              16,577+ Movies & Series</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Premium Adult Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              99.9% Uptime</strong>
            </p>
          </div>

          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              AntiFreeze Technology</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              FHD,HD & SD TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Works on any device</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Free Updates</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              24/7 support</strong>
            </p>
          </div>
        

        
          <div className="my-4">
  <strong  className="bg-yellow-500   w-full text-base font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center">BUY NOW <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>
        </div>
      </div>
      {/* End Pricing Option*/}
        
          
    </div>
    {/* End Pricing Block */}
  </div>
</div>


<div className="bg-white py-16 border-t border-yellow-300 px-4 md:px-16 lg:px-0">
  <div className="container mx-auto py-4">
    {/* Start Image */}
    <div className=" py-4">
      <div className="lg:w-8/12 col-md-4 mx-auto text-center">
        <img className="lazy mx-auto w-100 w-full loaded" alt="Drawing Moonlanding" data-ll-status="loaded" src="https://res.cloudinary.com/luxiptv/image/upload/v1640530882/image_ptv0f9.png" />
      </div>
    </div>
    {/* End Image */}
    {/* Start Content */}
    <div className>
      <div className="lg:w-3/6 mx-auto text-center">
        <h2 className="font-press-start text-2xl md:text-4xl lg:text-4xl font-bold">Not Ready Yet ? Try our Service for 7 Days Full Pass with all Sports for only £4.99. </h2>
        <p className="font-press-start text-md md:text-xl lg:text-lg pt-4 pb-8 text-gray-800">
</p>
        <div className="flex justify-center items-center flex- mb-2">
          <a href="#" className="px-4 bg-yellow-500 w-6/12 lg:w-4/12 text-base font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center text-xl">GET 7 DAYS TRIAL</a>
        </div>
      </div>
    </div>
    {/* End Content */}
  </div>
</div>

<div className={ popup ? "fixed z-20 inset-0 overflow-y-auto ": "fixed z-20 inset-0 overflow-y-auto hidden" } aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
      <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
        <div>
          <div className="mt-3 text-center sm:mt-5">
            <h3 className="text-lg leading-6 font-medium mb-2 text-gray-900" id="modal-title">
            Get your IPTV subscription now !
            </h3>

            <div>
                              <div className=" rounded-md px-3   "><input type="email" 

                              value={email}
                              onChange={changemail}
                              name="email" id="email" className="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 border-grey-lighter rounded-lg h-10 px-4" placeholder="Please enter your email" /></div>
                           </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
              <button  onClick={ () => redirectnow() }  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-600 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:text-sm">
              <svg x-show="submitted" className="animate-spin text-white -ml-1 mr-2 h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style={{display: 'none'}}>
                <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <strong >GET MY SUBSCRIPTION</strong>
            </button>
            <button  onClick={ () => togglepop() } className="w-full mt-3 inline-flex justify-center rounded-md   border-2 border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-black  focus:outline-none focus:ring-2 focus:ring-offset-2  sm:text-sm">
              <svg x-show="submitted" className="animate-spin text-white -ml-1 mr-2 h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style={{display: 'none'}}>
                <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <strong >CANCEL</strong>
            </button>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>



   
    </div>
  )
}