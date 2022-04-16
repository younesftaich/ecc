import React, { useEffect, useState } from 'react';
import Foot from './Footer'
import { Inertia } from '@inertiajs/inertia'
import Nav from './YsfNav'

import { Head } from '@inertiajs/inertia-react'
import axios from 'axios';

const Sub = props => {
  const [packagename, setPackageName] = useState("");
  const [id, setId] = useState("");
  const [status, setStatus] = useState("");
  const [isactive, setactive] = useState(false);
  const [unique, setUnique] = useState("");
  const [username, setUsername] = useState("");
  const [type, setType] = useState("m3u");
  const [mac, setMac] = useState("");
  const [hide, setHide] = useState(0);
  const [showextend, setShowExtend] = useState(true);
  const [color, setColor] = useState("py-1 px-3 rounded-md text-white text-sm font-normal ml-1");

  useEffect(() => {
        
    if (props.sub ){
      (async () => {
     
        setPackageName(props.sub.packagename)
        setId(props.sub.id4k)
        setHide(props.sub.hide)
        setStatus(props.sub.status)
        if (props.sub.status === "Active"){
            setColor("py-1 px-3 rounded-md text-white text-sm font-normal ml-1 bg-green-600")
            setactive(true)
        }
        else if (props.sub.status === "Waiting Payment"){
            setColor("py-1 px-3 rounded-md text-white text-sm font-normal ml-1 bg-orange-600")
        }
        else if (props.sub.status === "Expired"){
            setColor("py-1 px-3 rounded-md text-white text-sm font-normal ml-1 bg-red-600")
            setactive(true)
        }
        else if (props.sub.status === "Paid , Waiting Activation"){
            setColor("py-1 px-3 rounded-md text-white text-sm font-normal ml-1 bg-green-600")

        }
        if ( props.sub.type  === "m3u"){
          setType("m3u")
          setUsername(props.sub.username)
        }
        else if ( props.sub.type  === "mag"){
          setType("mag")
          setMac(props.sub.mac)
        }
        setUnique(props.sub.uniqueid)
    })
    ();
    }
  }, [props.sub]);
    return (
        <div className= {hide ? "hidden" : "rounded-md border py-4 px-6 flex flex-col sm:flex-row items-center"} >
        <a href={"/viewsub?uniqueid="+unique} className="flex-1 cursor-pointer">
          <h4 className="font-semibold text-xl">
            <span> {packagename} </span>
            <span className={color}
             style={{background: color}}> {status} </span>
          </h4>
     
      <div className={isactive ? "" : "hidden"}>
      <div>
            <span> 
              { type === "m3u" ? ('Username : '+username) : ('Mac : '+mac)}
               </span>
          </div>
          <div>
            <span> Expires at : {props.sub.expiredate} </span>
          </div>
      </div>
        </a>
        <div className="mt-4 sm:mt-0 flex-shrink flex space-x-2">
          <a href={"/viewsub?uniqueid="+unique} className="rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:text-sm">View</a>
        </div>
        <div className={showextend ? " mt-4 ml-4 sm:mt-0 flex-shrink flex space-x-2" : "hidden"} >
          <a href={"/extend?uniqueid="+unique} className="rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:text-sm">Extend</a>
        </div>
      </div>
    )
}
const how = () => {
    useEffect(() => {

        (async () => {
    
          const customerid = localStorage.getItem('customerid');
          if(customerid){
        //  console.log(customerid)
          setCustomer (localStorage.getItem('customerid') )
        }
        else  {
         // Inertia.get('/login', {  }, { replace: true })

        }
    
        })();
      }, );
 
    
        const [subscriptions, setSubs] = useState([]);
        const [customerid, setCustomer] = useState("");
        const [toggleMenu,setToggleMenu] = useState(false)
        const toggleNav = () => {
            setToggleMenu(!toggleMenu)
        }
        
        const toggleNav2 = () => {
            if (toggleMenu){
        
                setToggleMenu(!toggleMenu)
            }
        }
    
         const getsub = () => {
          let checkresult =  axios.post('/api/mysubs/',{"email":customerid}).then(response => response.data);   
          checkresult.then(function(result) {
          //   console.log(result)
             setSubs(result)
    
          })
        }
    
    
        useEffect(() => {
        
            if (subscriptions == []){
              (async () => {
                let checkresult =  axios.post('/api/mysubs/',{"email":customerid}).then(response => response.data);   
                checkresult.then(function(result) {
                   
                   setSubs(result)
                //   console.log(result)
    
                })
            })
            ();
            }
          }, [subscriptions]);
    
          useEffect(() => {
        
            if (customerid != ""){
              (async () => {
                let checkresult =  axios.post('/api/mysubs/',{"email":customerid}).then(response => response.data);   
                checkresult.then(function(result) {
                   
                   setSubs(result)
                   console.log(result)
    
                })
            })
            ();
            }
            else {
                (async () => {
                    let checkresult =  axios.post('/api/mysubs',{"email":customerid}).then(response => response.data);   
                    checkresult.then(function(result) {
                       
                       setSubs(result)
                       console.log(result)
        
                    })
                })
                ();
            }
          }, [customerid]);
    
    return (
        <div onClick={() => toggleNav2()} class=" bg-body bg-no-repeat bg-contain w-full h-full overflow-hidden">
        <Head>
<title>Dashboard - FAST IPTV SHOP</title>
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
     
            <main>
  <div className="md:px-9 text-white px-8 max-w-4xl mx-auto pt-8 pb-20">
    <div className="flex">
      <h2 className="md:text-4xl text-3xl font-semibold mb-5 flex-1">My Subscriptions </h2>
      <div className="flex-shrink">
        <a href="/account" className="cursor-pointer bg-green-400 hover:bg-green-400 text-white p-2 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-600 focus:outline-none transition-colors duration-200 flex">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
        </a>
      </div>
    </div>
    <div className="grid gap-4">
    

        {  subscriptions.map(sub => {
          let mycolor = ""
          let extend = true
          if (sub.status === "Active"){
            mycolor = "py-1 px-3 rounded-md text-white text-sm font-normal ml-1 bg-green-500"
        }
        else if (sub.status === "Waiting Payment"){
          extend = false
          mycolor = "py-1 px-3 rounded-md text-white text-sm font-normal ml-1 bg-yellow-500"
        }
        else if (sub.status === "Expired"){
          mycolor = "py-1 px-3 rounded-md text-white text-sm font-normal ml-1 bg-red-500"

        }
        else if (sub.status === "Paid , Waiting Activation"){
          mycolor = "py-1 px-3 rounded-md text-white text-sm font-normal ml-1 bg-green-500"

        }
          return(
            <div className= { "rounded-md border py-4 px-6 flex flex-col sm:flex-row items-center"} >
            <a href={"/viewsub?uniqueid="+sub.uniqueid} className="flex-1 cursor-pointer">
              <h4 className="font-semibold text-xl">
                <span> {sub.packagename} </span>
                <span className={mycolor}
                > {sub.status} </span>
              </h4>
         
              <div>
                <span> 
                  { sub.type === "m3u" ? ('Username : '+sub.username) : ('Mac : '+sub.mac)}
                   </span>
              </div>
              <div>
                <span> Expires at : {sub.expiredate} </span>
              </div>
            </a>
       <div className='grid grid-cols-2'>
       <div className="mt-4 sm:mt-0 flex-shrink flex space-x-2">
              <a href={"/viewsub?uniqueid="+sub.uniqueid} className="rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-green-600 text-base font-medium text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:text-sm">View</a>
            </div>
            <div className={extend ? " mt-4 ml-4 sm:mt-0 flex-shrink flex space-x-2" : "hidden"} >
              <a href={"/extend?uniqueid="+sub.uniqueid} className="rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-green-600 text-base font-medium text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:text-sm">Extend</a>
            </div>

           </div>
          </div>
           )
        }
       
             
             
                 )  }
     
     
    
    </div>


  </div>
</main>


<footer className="fixed w-full bottom-0 bg-[#0e2566] py-[14px] text-center flex justify-center gap-1 flex-wrap px-5">
    <p className="text-lg text-white font-light"> FAST IPTV SHOP TV | All Rights Reserved 2010 - 2022 | </p>
  </footer>
        </div>
    );
};

export default how;