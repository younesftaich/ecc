import React, { useEffect,useState } from 'react';
import { Head } from '@inertiajs/inertia-react'
import axios from 'axios';
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

    const [email, setEmail] = useState("")
    const [emailreset, setEmailReset] = useState("")
    const [showmodal, setShowModal] = useState(false);
    const toggleModal = () => {
   
        setShowModal(!showmodal)
    
     }
     const checkout = () => {
   
        Inertia.get('/checkout', {  }, { replace: true })

     }
      
   const redirect = () => {
     console.log(emailreset)
     axios.get('/api/resetpass/'+emailreset).then(function(result) {
       if ( result.status == 200){
        alert("A verification email was sent , please check your spam / promotion folder .")
  
       }
       else {
         alert ( "Error , please contact live chat")
       }
     })
  
  }
    const [pass, setPass] = useState("")
    const changemail = (e) => {
       setEmail(e.target.value)
    }
    const changemailreset = (e) => {
       setEmailReset(e.target.value)
    }
    const changepass = (e) => {
       setPass(e.target.value)
    }
    const login = () => {
        let logininfo = {
          "email" : email,
          "password" : pass
        }
        axios.post('/api/checklogin', logininfo).then(function(result) {
          if (result.data == 1 ){
            localStorage.setItem('customerid', email);
            Inertia.get('/account', {  }, { replace: true })
    
    
    
          }
          else if (result.data == 2 ){
            alert("wrong pass")
    
          }
          else if (result.data == 0 ){
            alert("account doesn't exist please register")
    
          }
          
       } )
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
  <title>Login - FAST IPTV SHOP</title>
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



   <section className="py-[26px]   px-5 lg:px-14 bg-white rounded-lg max-w-[1050px] w-full mx-auto mt-12 mb-12  box-shadow">

   <h1 class="heading-primary  mb-8">Login to your account
</h1>

   <div className="relative">
              <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Email Address</label>
              <input value={email}
                              onChange={changemail} name='email' type="text" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="janedoe@email.com" />
            </div>
   <div className="relative mb-4 ">
              <label className="absolute px-2 ml-2 -mt-3 font-medium  text-gray-600 bg-white">Password</label>
              <input value={pass}
                              onChange={changepass}   type="password" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Password" />
            </div>
            
 

            <button onClick={() => login()}  className="bg-green-600  w-full px-4 py-4 text-white text-xl uppercase mb-4 mx-auto">  Login 
      </button>
   <button onClick={() => toggleModal()}  className="bg-green-600  w-full px-4 py-4 text-white text-xl uppercase mb-4 mx-auto">  Reset Password 
      </button>
   <button   onClick={() => checkout()} className="bg-green-600  w-full px-4 py-4 text-white text-xl uppercase mb-4 mx-auto">  Sign Up 
      </button>
</section>
<div>
 
<div className={showmodal ? "min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" : "hidden"} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1623600989906-6aae5aa131d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1582&q=80)'}} id="modal-id">
  <div className="absolute bg-black opacity-80 inset-0 z-0" />
  <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
    {/*content*/}
    <div className>
      {/*body*/}
      <div className="text-center p-5 flex-auto justify-center">
      <Icon className="w-16 h-16 flex items-center text-green-500 mx-auto" icon="carbon:continue" />

        <h2 className="text-xl font-bold py-4 ">Enter Your Email To Reset Your Password</h2>
        <div class="mb-4 relative">
        <input value={emailreset}
                              onChange={changemailreset}  placeholder='john@gmail.com' class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-2 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="email" type="text" autofocus/>
    </div>
      </div>
      {/*footer*/}
      <div className="p-3  mt-2 text-center space-x-4 md:block">
        <button onClick={() => toggleModal()}  className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
          Cancel
        </button>
        <button  onClick={() => redirect()}  className="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600">Reset Password</button>
      </div>
    </div>
  </div>
</div>
<div className="p-3  mt-2 text-center space-x-4 md:block">
        <button onClick={() => toggleModal()}  className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
          Cancel
        </button>
        <button  onClick={() => redirect()}  className="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600">Reset Password</button>
      </div>
  {/* footer */}
  <footer className="fixed w-full bottom-0 bg-[#0e2566] py-[14px] text-center flex justify-center gap-1 flex-wrap px-5">
    <p className="text-lg text-white font-light"> FAST IPTV SHOP TV | All Rights Reserved 2010 - 2022 | </p>
  </footer>
</div>


            
        </div>
    );
};

export default YsfHome;