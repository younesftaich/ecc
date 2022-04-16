
import {CopyToClipboard} from 'react-copy-to-clipboard';
import React, { useEffect, useState } from 'react';
import Foot from './Footer'
import { Inertia } from '@inertiajs/inertia'
import Nav from './YsfNav'

import { Head } from '@inertiajs/inertia-react'
import axios from 'axios';


import queryString from 'query-string'




function ListItem(props) {
  const id = props.id;

  const pack = props.pack;
  const activated = props.activated;
  const activationdate = props.activationdate;
  const expirationdate = props.expirationdate;
  var active = false;
  var pending = false;
  var expired = false;
  var statustxt ="";
  var statuscolor ="";
  if ( activated === "yes"){
    expired = true;
      statustxt = "Expired"
      statuscolor = '#c0392b'
 

  }
  else {
    pending = true;
    statustxt = "Pending Activation"
    statuscolor = '#8B8000'
  }

  
  return (
    // Wrong! There is no need to specify the key here:
    <div className="font-press-start px-4  grid gap-4">
            <div className="rounded-md border py-4 px-6 flex flex-col sm:flex-row items-center">
              <div  className="flex-1 cursor-pointer">
                <h4 className="font-semibold text-xl">
                  <span>{pack}</span>
                  <span className="py-1 px-3 rounded-md text-white text-sm font-normal ml-1" status="{&quot;id&quot;:&quot;0bdf3d1a-c771-4a26-884a-a166f09ed16a&quot;,&quot;name&quot;:&quot;subscription_status_expired&quot;,&quot;label&quot;:&quot;Expired&quot;,&quot;color&quot;:&quot;#c0392b&quot;,&quot;type&quot;:1,&quot;is_active&quot;:true,&quot;created_at&quot;:&quot;2021-07-02T13:51:30.000000Z&quot;,&quot;updated_at&quot;:&quot;2021-07-02T13:51:30.000000Z&quot;}" style={{background: statuscolor}}>
                    
                    {statustxt}
                  </span>
                </h4>
                <div>
                  <span className=''>SN-{id}</span>
                  . <span className="text-sm ">Expires at {expirationdate}</span>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 flex-shrink flex space-x-2">
                <a href={"/extend?uniqueid="+uniqueid} className="rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:text-sm">Extend</a>
              </div>
            </div>
          </div>
  );
}


function Account(props) {
   

    const [subscriptions, setSubs] = useState([]);
    const [status, setStatus] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [host, setHost] = useState("");
    const [user, setUser] = useState("");
    const [portal, setPortal] = useState("");
    const [macadd, setMacadd] = useState("");
    const [pass, setPass] = useState("");
    const [epg, setEpg] = useState("");
    const [m3ulink, setM3u] = useState("");
    const [userCopytxt, setUserCopyTxt] = useState("Copy");
    const [passCopytxt, setPassCopyTxt] = useState("Copy");
    const [hostCopytxt, setHostCopyTxt] = useState("Copy");
    const [m3uCopytxt, setM3uCopyTxt] = useState("Copy");
    const [epgCopytxt, setEpgCopyTxt] = useState("Copy");
    const [currentCopy, setCurrentCopy] = useState(null);
    
    const [portalCopytxt, setPortalCopyTxt] = useState("Copy");
    const [statustxt, setStatusTxt] = useState("");
    const [type, setType] = useState("");
    const [statuscolor, setStausColor] = useState("");
    const [emailexist, setExist] = useState(false);
    const API_URL = "https://ecombunny.net/api/";
    const [isLoading, setLoading] = useState(true);

    const parsed = queryString.parse(location.search);
    const id = parsed.uniqueid;




    useEffect(() => {
        if ( id != null){
            (async () => {
                let checkresult =  axios.get('/api/subunique/'+id).then(response => response.data);   
                checkresult.then(function(result) {
                    console.log(result)
                   setSubs(result)
                   loadingsala(result)
                   console.log(result['id']) })
                   setLoading(false)  })  ();
        }
        
      
       
      }, [id]);


      function loadingsala (data){
         console.log(data.type)
          var expirationdate = data['expirationdate']
          var activated = data.active
        if (data.paid == "yes"){
          setPaid (true)
        }
          setType(data.type)
          setPortal("http://line.uhd-ott.io/c")
          setMacadd(data.mac)
          setHost("http://line.uhd-ott.io")
          setPass(data.password)
          setUser(data.username)
          setEpg("http://line.uhd-ott.io/xmltv.php?username="+data.username+"&password="+data.password)
          setM3u("http://line.uhd-ott.io/get.php?username="+data.username+"&password="+data.password+"&type=m3u_plus&output=mpegts")

          
          if ( activated === "yes"){
            setStatusTxt("Expired")
               setStausColor("#c0392b")
        
          }
          else {
           
              setStatusTxt("Pending Activation")
              setStausColor("#8B8000")
          } 

      }

      function parsem3u(m3u){
          

          const url = m3u.split('/');
          var temp = url[3];
          var host = "http://"+url[2]
          var temp2 = temp.split('&')
          var temp3 = temp2[0];
          var temp4 = temp2[1];
          var temp5 = temp3.split('=')
          var pass = temp5[1]
          var temp6 = temp4.split('=')
          var user = temp6[1]
          var epg = host+"/xmltv.php?password="+pass+"&username="+user
          setHost(host)
          setPass(user)
          setUser(pass)
          setEpg(epg)
          setM3u(m3u)
          

      }

      const [isPaid , setPaid] = useState(false)
    
     

      const [toggleMenu,setToggleMenu] = useState(false)
        const toggleNav = () => {
            setToggleMenu(!toggleMenu)
        }
        
        const toggleNav2 = () => {
            if (toggleMenu){
        
                setToggleMenu(!toggleMenu)
            }
        }


 

    return (
         <div onClick={() => toggleNav2()} class="text-white bg-body bg-no-repeat bg-contain w-full h-full overflow-hidden">
        <Head>
<title>View Subscription - FAST IPTV SHOP</title>
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
        <div className="md:px-9 px-8 max-w-4xl mx-auto py-8">
        
        <h2 className="flex-1 uppercase text-xl sm:text-2xl  ">Start Date: {subscriptions['startdate']} </h2>
          <div className="flex items-center mb-10">
         
            <h2 className="flex-1 uppercase text-xl sm:text-2xl  ">Expiration Date: {subscriptions['expiredate']} </h2>
            <div className="flex-shrink">
              <a href="account" className="text-sm md:text-lg cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-3 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-600 focus:outline-none transition-colors duration-200">
                Back to list
              </a>
            </div>
          </div>
          <div className={isPaid ? " grid mb-5 rounded-md overflow-hidden grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-x-0 divide-green-600" : "hidden"}>
            <a href={"/extend?uniqueid="+subscriptions['uniqueid']}  className="md:text-lg cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-3 text-center duration-500 transition-colors" style={{outline: 'none'}}>Extend</a>
            <a href={"editchannels?uniqueid="+subscriptions['uniqueid']}  className="md:text-lg cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-3 text-center duration-500 transition-colors" style={{outline: 'none'}}>Edit Channels List</a>
            <a href="account" className="md:text-lg cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-3 text-center duration-500 transition-colors" style={{outline: 'none'}}>Back to list</a>
            
          </div>
          <div className={!isPaid ? "grid mb-5 rounded-md overflow-hidden grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-x-0 divide-green-600" : "hidden"}>
            <a href={"/extend?uniqueid="+subscriptions['uniqueid']}  className="md:text-lg cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-3 text-center duration-500 transition-colors" style={{outline: 'none'}}>WAITING FOR PAYMENT
</a>
            <a href={"/extend?uniqueid="+subscriptions['uniqueid']} className="md:text-lg cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-3 text-center duration-500 transition-colors" style={{outline: 'none'}}>PAY THIS INVOICE
</a>
            
          </div>
       
          <div className={isPaid ? "grid mb-5 rounded-md overflow-hidden grid-cols-2 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-x-0 divide-green-600" : "hidden"}>
            <a href="#" className="border-r-2 border-black md:text-lg cursor-pointer bg-white  text-black px-4 py-3 text-center duration-500 transition-colors" style={{outline: 'none'}}>STATUS
</a>
            <a href="#" className="md:text-lg cursor-pointer bg-white  text-black px-4 py-3 text-center duration-500 transition-colors" style={{outline: 'none'}}>{subscriptions['status']}
</a>
            
          </div>
       
        
          <div className = {  subscriptions['status'] != "Active" || type != "mag" ? "hidden" : ""}>
          <h2 className="mb-2 mt-5 text-lg ">Mag Portal Details: </h2>
          <div className="border border-gray-200 px-4 py-5 sm:px-6 rounded-md">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3">

            <CopyToClipboard text={macadd}
          onCopy={() => setCurrentCopy("macadd")}>
                <div className="sm:col-span-1">
                <dt className="text-sm font-medium ">Mac Address</dt>
                <dd className="mt-1 text-sm  truncate overflow-hidden">
                  <a data-clipboard-target="#m3u-username" className="mr-2 text-sm cursor-pointer bg-green-500 hover:bg-green-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-600 focus:outline-none transition-colors duration-200 clipboard">{currentCopy === "macadd" ? "Copied Sucessfully"  : userCopytxt}</a>
                  <span id="m3u-username">{macadd}</span>
                </dd>
              </div>
        </CopyToClipboard>

        <CopyToClipboard text={portal}
          onCopy={() => setCurrentCopy("portal")}>
              <div>
                <dt className="text-sm font-medium ">Portal Url :</dt>
                <dd className="mt-1 text-sm  truncate overflow-hidden">
                  <a data-clipboard-target="#dns_line" className="mr-2 text-sm cursor-pointer bg-green-500 hover:bg-green-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-600 focus:outline-none transition-colors duration-200 clipboard">{currentCopy === "portal" ? "Copied Sucessfully"  : hostCopytxt}</a>
                  <span id="dns_line">{portal}</span>
                </dd>
              </div>

              </CopyToClipboard>

            </dl>
          </div>

          </div>




            <div className = {subscriptions['status'] != "Active" || type != "m3u" ? "hidden" : ""}>
          <h2 className="mb-2 mt-5 text-lg ">Xtream Codes Login: <span className="bg-green-400 rounded-md text-white text-xs px-2">Recommended</span></h2>
          <div className="border border-gray-200 px-4 py-5 sm:px-6 rounded-md">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3">

            <CopyToClipboard text={user}
          onCopy={() => setCurrentCopy("user")}>
                <div className="sm:col-span-1">
                <dt className="text-sm font-medium ">Username</dt>
                <dd className="mt-1 text-sm  truncate overflow-hidden">
                  <a data-clipboard-target="#m3u-username" className="mr-2 text-sm cursor-pointer bg-green-500 hover:bg-green-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-600 focus:outline-none transition-colors duration-200 clipboard">{currentCopy === "user" ? "Copied Sucessfully"  : userCopytxt}</a>
                  <span id="m3u-username">{user}</span>
                </dd>
              </div>
        </CopyToClipboard>

        <CopyToClipboard text={pass}
          onCopy={() => setCurrentCopy("pass")}>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium ">Password</dt>
                <dd className="mt-1 text-sm  truncate overflow-hidden">
                  <a data-clipboard-target="#m3u-password" className="mr-2 text-sm cursor-pointer bg-green-500 hover:bg-green-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-600 focus:outline-none transition-colors duration-200 clipboard">{currentCopy === "pass" ? "Copied Sucessfully"  : passCopytxt}</a>
                  <span id="m3u-password">{pass}</span>
                </dd>
              </div>

              
        </CopyToClipboard>
        <CopyToClipboard text={host}
          onCopy={() => setCurrentCopy("host")}>
              <div>
                <dt className="text-sm font-medium ">URL / Host / Server:</dt>
                <dd className="mt-1 text-sm  truncate overflow-hidden">
                  <a data-clipboard-target="#dns_line" className="mr-2 text-sm cursor-pointer bg-green-500 hover:bg-green-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-600 focus:outline-none transition-colors duration-200 clipboard">{currentCopy === "host" ? "Copied Sucessfully"  : hostCopytxt}</a>
                  <span id="dns_line">{host}</span>
                </dd>
              </div>

              </CopyToClipboard>

            </dl>
          </div>
          <h2 className="mb-2 mt-5 text-lg ">M3U File URL: <span className="bg-green-500 rounded-md text-white text-xs px-2">Not recommended</span></h2>
          <div className="border border-gray-200 px-4 py-5 sm:px-6 rounded-md">
            <dl className="space-y-3">
          
        <CopyToClipboard text={m3ulink}
          onCopy={() => setCurrentCopy("m3u")}>
             
              <div>
                <dt className="text-sm font-medium ">m3u file url</dt>
                <dd className="mt-1 text-sm  truncate overflow-hidden">
                  <a data-clipboard-text={m3ulink} className="md:inline hidden mr-1 text-sm cursor-pointer bg-green-500 hover:bg-green-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-600 focus:outline-none transition-colors duration-200 clipboard">
                  {currentCopy === "m3u" ? "Copied Sucessfully"  : m3uCopytxt}
                  </a>
                  <a data-clipboard-text={m3ulink} className="md:hidden mr-1 text-sm cursor-pointer bg-green-500 hover:bg-green-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-600 focus:outline-none transition-colors duration-200 clipboard">
                  {currentCopy === "m3u" ? "Copied Sucessfully"  : m3uCopytxt}  
                  </a>
                  <span id="m3u-url">{m3ulink}</span>
                </dd>
              </div>
              </CopyToClipboard>


              <CopyToClipboard text={epg}
          onCopy={() => setCurrentCopy("epg")}>
              <div>
                <dt className="text-sm font-medium ">EPG url</dt>
                <dd className="mt-1 text-sm  truncate overflow-hidden">
                  <a data-clipboard-text={epg} className="md:inline hidden mr-1 text-sm cursor-pointer bg-green-500 hover:bg-green-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-600 focus:outline-none transition-colors duration-200 clipboard">
                  {currentCopy === "epg" ? "Copied Sucessfully"  : epgCopytxt}

                  </a>
                  <a data-clipboard-text={epg} className="md:hidden mr-1 text-sm cursor-pointer bg-green-500 hover:bg-green-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-600 focus:outline-none transition-colors duration-200 clipboard">
                  {currentCopy === "epg" ? "Copied Sucessfully"  : epgCopytxt}
                 
                  </a>
                  <span id="epg-url">{epg}</span>
                </dd>
              </div>

              </CopyToClipboard>
              <div>
                <dt className="text-sm font-medium ">Why not recommended ?</dt>
                <div className="mt-1 text-sm ">
                  <dd>
                    If you are trying to use m3u file, it may not work because m3u file is too big (100.22 MB) so it is better to use Xtream codes login.<br />
                    <span className="bg-green-500 rounded-md text-white text-xs px-2">Solution:</span> You can reduce the file size by removing some channels and VODs that you don't need by edit the channels list from <a className="underline text-primary" href={"editchannels?uniqueid="+subscriptions['uniqueid']} >here</a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          </div>





          <div className="border border-gray-200 px-4 py-5 sm:px-6 rounded-md">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium ">Subscription number</dt>
                <dd className="mt-1 text-sm ">#SN-{subscriptions['id4k']}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium ">Payment method</dt>
                <dd className="mt-1 text-sm ">PayPal / Credit Card</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium ">Expires at</dt>
                <dd className="mt-1 text-sm ">{subscriptions['expiredate']}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium ">Status</dt>
                <dd className="mt-1 text-sm ">{subscriptions['status']}</dd>
              </div>
         
            </dl>
          </div>



          <h2 className="mb-2 mt-5 text-lg ">FAQ:</h2>
          <section className="text-gray-700">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="space-y-4">
                <details className="bg-gray-100 rounded-md py-2 px-4">
                  <summary className="font-semibold cursor-pointer">
                    Can i use my subscription on multiple devices?
                  </summary>
                  <span className="pt-2 text-sm  inline-block">
                    1 subscription can be used on multiple devices but you can watch only on 1 device at the same time.
                  </span>
                </details>
                <details className="bg-gray-100 rounded-md py-2 px-4">
                  <summary className="font-semibold cursor-pointer">
                    How can I install IPTV on my device?
                  </summary>
                  <span className="pt-2 text-sm  inline-block">
                    Check the installation tutorials <a className="underline text-green-500" href="#">here</a>, if there is any issue, feel free to contact us via whatsapp or telegram
                  </span>
                </details>
              </div>
              <div className="space-y-4">
                <details className="bg-gray-100 rounded-md py-2 px-4">
                  <summary className="font-semibold cursor-pointer">
                    Can I use a VPN? Or use my subscription in multiple countries?
                  </summary>
                  <span className="pt-2 text-sm  inline-block">
                    1 subscription can be used in one country, so if you change your country, you must contact us via whatsapp or telegram to update your subscription country.
                  </span>
                </details>
              </div>
            </div>
          </section>
          
       
        </div>
      </main>
      
<footer className=" w-full bottom-0 bg-[#0e2566] py-[14px] text-center flex justify-center gap-1 flex-wrap px-5">
    <p className="text-lg text-white font-light"> FAST IPTV SHOP TV | All Rights Reserved 2010 - 2022 | </p>
  </footer>
        </div>
    );
}

export default Account;