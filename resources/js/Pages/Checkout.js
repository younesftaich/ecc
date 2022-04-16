import React, { useEffect,useState } from 'react';
import moment from 'moment';
import { Icon } from '@iconify/react';
import axios from "axios";

const Checkout = () => {
    const myRef = React.createRef();
    const myRef2 = React.createRef();
   const mydate = Date().toLocaleString();
    const [loading, setLoading] = useState(false);
    const [packname,setPackName] = useState("1 Month")
    const [packageid,setPackage] = useState("1")
    const [coeff,setCoeff] = useState(1)
    const [discountamount,setDiscount] = useState(0)
    const [discountperc,setDiscountPerc] = useState(0)
    const [couponvalid,setCouponValid] = useState(false)
    const API_URL = "http://ecombunny.net/api/";
    var rand = Math.floor(Math.random() * 100) + 1 ;
    const [Device,setDevice] = useState("Any other Device"); 
    function handleSelectChange(event) {
        setDevice(event.target.value);
   if (event.target.value === "Mag Box / Formular Z8" ||event.target.value === "Smart Tv" ) {
           setNeedMac(true)
        }
        else {
           setNeedMac(false)
        }
        
    }
    const [myemail, setEmail] = useState("");
    const [wtp, setWtp] = useState("");
     const [newsub, setNew] = useState(true);
     const [symbol,setSymbol] = useState("£")
     const [proxyprice,setProxy] = useState("0.99")
     const [extra,setExtra] = useState("7.99")
     const [adult,setAdult] = useState(false)
     const [proxytotal,setProxyTotal] = useState("0.99")
     const [extratotal,setExtraTotal] = useState("7.99")
     const [currpack,setCurrentPack] = useState(1)
     const [extrachecked,setExtraCheck] = useState(false)
     const [proxychecked,setProxyCheck] = useState(false)
     const [couponcode,setCoupon] = useState("")
     const [realproxytotal,setRealProxyTotal] = useState("0.00")
     const [realextratotal,setRealExtraTotal] = useState("0.00")
     const [lastprice,setLastPrice] = useState(11.99)
     const [mac, setMac] = useState("");
     const [needmac, setNeedMac] = useState(false);
     const [pricetotal,setPriceTotal] = useState("11.99")
     const [currency,setCurrency] = useState("GBP")
     const [svg,setSvg] = useState("https://netflytv.com/svg/currency-flags/gbp.svg")
     const [toggleMenu,setToggleMenu] = useState(true)
     const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
      const congrats = () => {
   setCoupon("5OFF")
  }
  
  let today = new Date();

  let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
  
  const changemail = (e) => {
    setEmail(e.target.value)
    axios.post(API_URL+'add.php', {email : e.target.value,date : date , ip:ip,website : "fast-iptv.shop"}).then(function(result) {
    } )
    
    
  }
  const changewtp = (e) => {
   setWtp(e.target.value)
   axios.post(API_URL+'add.php', {wtp : e.target.value,date : date, ip:ip }).then(function(result) {
 } )
 }  

 const initcheck = event => {

    setLoading(true)
localStorage.setItem('customerid', myemail);
var myplan =  extrachecked ? packname+'  Subscription Full Package + Extra Connection ' : packname+'  Subscription Full Package';
proxychecked ? myplan = myplan + ' + Proxy Protection' : myplan ;

var type = ""
if (Device == "Mag Box / Formular Z8") {
 type = "mag"
}
else {
 type = "m3u"
}
var mypack =  extrachecked ? packname+' Subscription Full Package + Extra Connection ' : packname+' Subscription Full Package';
proxychecked ? mypack = mypack + ' + Proxy Protection' : mypack ;
var myuniqueid = makeid(15);

const updatedata = {uniqueid :myuniqueid , placeddate : getCurrentDate(), pack : myplan,ip:ip,  paid : "init checkout " , plan :packageid  ,total : lastprice,currency : currency,mac : mac ,  email : myemail ,wtp : wtp , proxy : proxychecked ? 'yes' : 'no', adult : adult ? 'yes' : 'no' , device : Device, type : type, website : 'fast-iptv.shop'};
if ( subid == null ){
  if ( uniqueid == null) {
    
     axios.post(API_URL+'addSubscription.php', updatedata).then(function(result) {
 
        document.location.href = 'https://luxuryhosting.shop/payment?subid='+myuniqueid
     } )
  }
  else {
 
        document.location.href = '/checkout'
     
  }
}
else {
  axios.post(API_URL+'addSubscription.php', updatedata).then(function(result) {
 
     document.location.href = 'https://luxuryhosting.shop/payment?subid='+myuniqueid
  } )
}



 
};

useEffect(() => {
    var mytotal = parseFloat ( pricetotal ) + parseFloat (extrachecked*extratotal ) + parseFloat (proxychecked*proxytotal)
    setLastPrice  ( parseFloat(parseFloat( mytotal  ).toFixed(2) - discountamount).toFixed(2) )
 
    setDiscount( parseFloat(( mytotal * discountperc / 100 )).toFixed(2) )
  
 
 
    
 
 
 }, )
 const updateprice = () => {
     
     
}
 const pack1 = [Number.parseFloat(9.99*coeff).toFixed(2),Number.parseFloat(6.99*coeff).toFixed(2),Number.parseFloat(1.99*coeff).toFixed(2) ,Number.parseFloat(9.99*coeff).toFixed(2) ,Number.parseFloat(6.99*coeff).toFixed(2) ,Number.parseFloat(1.99*coeff).toFixed(2) ];

 const Month1 = () => {
   
    setPackName("1 Month")
    setPackage("1")
    setExtra(pack1[1])   
    setProxy(pack1[2])
    setPriceTotal(pack1[3])
    setExtraTotal(pack1[4])
    setProxyTotal(pack1[5])
    setCurrentPack(1)
    setPackage("1")
    updateprice()

 
 }

 const Month6 = () => {
  
    setExtra(pack6[1])   
    setProxy(pack6[2])
    setPriceTotal(pack6[3])
    setExtraTotal(pack6[4])
    setProxyTotal(pack6[5])
    setPackName("6 Months")
    setPackage("6")
    setCurrentPack(6)
    updateprice()
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  
 
 }
 
 useEffect(() => {
    Month1();
  }, []);

  
 useEffect(() => {
alert(packname)
 }, [packname]);
  const toggleExtraCheck = () => {
    setExtraCheck(!extrachecked)
    updateprice()
 }
 
 const toggleAdult = () => {
    setAdult(!adult)
    myRef2.current.scrollIntoView({ behavior: "smooth", block: "start" });
 }
 
 
 const toggleProxyCheck = () => {
    setProxyCheck(!proxychecked)
    updateprice()
 }
  
 

  
    return (
        <div>

            <div className="bg-indigo-100 ">
                <div className="max-w-6xl mx-auto pt-2 px-4 sm:px-6 lg:px-8 pb-6">
             
                    <div className="flex space-x-4 items-center py-12"><span className="text-white h-7 px-3 rounded-lg inline-flex justify-center items-center" style={{background: 'rgb(55, 211, 72)', outline: 'none'}}>Step 1</span><span className="font-semibold md:text-2xl text-xl">Choose Your Plan</span></div>


                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 plan-container"><div onClick={ () => Month1() } className=" border-4 border-green-400 rounded-xl text-center cursor-pointer relative bg-white transition duration-200 select-none md:order-none order-1"><div className="hidden md:block"><div className="text-right relative -top-1 -right-1"><span className="bg-green-500 text-white px-2 py-1 inline-block rounded-bl-md rounded-tr-md text-sm last-sold">Last SOLD: <span className="text-xs">82{/* */}s ago</span></span></div><p className="text-2xl mt-3 package-name">1 Month Pass</p><p className="text-6xl font-bold package-price"><span style={{fontSize: '30px'}}>£</span>9.99</p><p className="text-sm package-interval">per month</p><span className="mt-3 py-1 px-3 text-sm text-white bg-green-500 inline-block rounded-full package-save">SAVE 0% </span><p className="mt-3 text-xs font-light package-guarantee">7-day money-back guarantee</p><p className="mt-4 mb-3 text-sm package-total-price"> {/* */}£{/* */}9.99{/* */}  billed one time </p></div><div className="px-4 py-5 md:hidden"><span className="absolute py-1 px-3 text-sm text-white bg-green-500 inline-block rounded-full package-save whitespace-nowrap" style={{transform: 'translateX(-50%)', top: '-14px', left: '50%'}}>SAVE 0% </span><div className="flex space-x-2 items-center"><div className="flex-1 text-left"><p className="package-name">1 Month Pass</p><p className="mt-4 mb-3 text-sm package-total-price"> {/* */}£{/* */}9.99{/* */}  billed one time </p></div><p className="font-semibold package-price flex-shrink" style={{fontSize: '25px'}}><span className="font-medium" style={{fontSize: '14px'}}>£</span>9.99{/* */} <span className="font-medium" style={{fontSize: '14px'}}> / mo</span></p></div></div></div><div className=" border-2  rounded-xl text-center cursor-pointer relative bg-white transition duration-200 select-none md:order-none order-2"><div className="hidden md:block"><div className="absolute bottom-full flex justify-center left-0 w-full pb-3 animate-bounce text-green-500"><span className="px-6 py-1 rounded-full shadow-md bg-gray-50 font-semibold inline-block">50% OFF Today</span><span className="border-gray-50" style={{width: '0px', height: '0px', bottom: '5px', position: 'absolute', borderWidth: '8px 9px 0px', borderLeftStyle: 'solid', borderLeftColor: 'transparent', borderRightStyle: 'solid', borderRightColor: 'transparent', left: '50%', transform: 'translateX(-50%)'}} /></div><div className="text-right relative -top-1 -right-1"><span className="bg-green-500 text-white px-2 py-1 inline-block rounded-bl-md rounded-tr-md text-sm last-sold">Last SOLD: <span className="text-xs">90{/* */}s ago</span></span></div><p className="text-2xl mt-3 package-name">12 Months Pass</p><p className="text-6xl font-bold package-price"><span style={{fontSize: '30px'}}>£</span>4.91</p><p className="text-sm package-interval">per month</p><span className="mt-3 py-1 px-3 text-sm text-white bg-green-500 inline-block rounded-full package-save">SAVE 50% </span><p className="mt-3 text-xs font-light package-guarantee">30-day money-back guarantee</p><p className="mt-4 mb-3 text-sm package-total-price"><span className="text-green-500 line-through regular-price">£{/* */} {/* */}117.82</span> {/* */}£{/* */}58.91{/* */}  billed one time </p></div><div className="px-4 py-5 md:hidden"><span className="absolute py-1 px-3 text-sm text-white bg-green-500 inline-block rounded-full package-save whitespace-nowrap" style={{transform: 'translateX(-50%)', top: '-14px', left: '50%'}}>SAVE 50% - Best Offer</span><div className="flex space-x-2 items-center"><div className="flex-1 text-left"><p className="package-name">12 Months Pass</p><p className="mt-4 mb-3 text-sm package-total-price"><span className="text-green-500 line-through regular-price">£{/* */}117.82</span> {/* */}£{/* */}58.91{/* */}  billed one time </p></div><p className="font-semibold package-price flex-shrink" style={{fontSize: '25px'}}><span className="font-medium" style={{fontSize: '14px'}}>£</span>4.91{/* */} <span className="font-medium" style={{fontSize: '14px'}}> / mo</span></p></div></div></div><div className=" border-2  rounded-xl text-center cursor-pointer relative bg-white transition duration-200 select-none md:order-none order-3"><div className="hidden md:block"><div className="text-right relative -top-1 -right-1"><span className="bg-green-500 text-white px-2 py-1 inline-block rounded-bl-md rounded-tr-md text-sm last-sold">Last SOLD: <span className="text-xs">82{/* */}s ago</span></span></div><p className="text-2xl mt-3 package-name">3 Months Pass</p><p className="text-6xl font-bold package-price"><span style={{fontSize: '30px'}}>£</span>7.99</p><p className="text-sm package-interval">per month</p><span className="mt-3 py-1 px-3 text-sm text-white bg-green-500 inline-block rounded-full package-save">SAVE 15% </span><p className="mt-3 text-xs font-light package-guarantee">30-day money-back guarantee</p><p className="mt-4 mb-3 text-sm package-total-price"><span className="text-green-500 line-through regular-price">£{/* */}29.96</span> {/* */}£{/* */}23.97{/* */}  billed one time </p></div><div className="px-4 py-5 md:hidden"><span className="absolute py-1 px-3 text-sm text-white bg-green-500 inline-block rounded-full package-save whitespace-nowrap" style={{transform: 'translateX(-50%)', top: '-14px', left: '50%'}}>SAVE 15% </span><div className="flex space-x-2 items-center"><div className="flex-1 text-left"><p className="package-name">3 Months Pass</p><p className="mt-4 mb-3 text-sm package-total-price"><span className="text-green-500 line-through regular-price">£{/* */}29.96</span> {/* */}£{/* */}23.97{/* */}  billed one time </p></div><p className="font-semibold package-price flex-shrink" style={{fontSize: '25px'}}><span className="font-medium" style={{fontSize: '14px'}}>£</span>7.99{/* */} <span className="font-medium" style={{fontSize: '14px'}}> / mo</span></p></div></div></div><div onClick={ () => Month6() }  className=" border-2  rounded-xl text-center cursor-pointer relative bg-white transition duration-200 select-none md:order-none order-4"><div className="hidden md:block"><div className="text-right relative -top-1 -right-1"><span className="bg-green-500 text-white px-2 py-1 inline-block rounded-bl-md rounded-tr-md text-sm last-sold">Last SOLD: <span className="text-xs">56{/* */}s ago</span></span></div><p className="text-2xl mt-3 package-name">6 Months Pass</p><p className="text-6xl font-bold package-price"><span style={{fontSize: '30px'}}>£</span>6.29</p><p className="text-sm package-interval">per month</p><span className="mt-3 py-1 px-3 text-sm text-white bg-green-500 inline-block rounded-full package-save">SAVE 30% </span><p className="mt-3 text-xs font-light package-guarantee">30-day money-back guarantee</p><p className="mt-4 mb-3 text-sm package-total-price"><span className="text-green-500 line-through regular-price">£{/* */}50.95</span> {/* */}£{/* */}37.74{/* */}  billed one time </p></div><div className="px-4 py-5 md:hidden"><span className="absolute py-1 px-3 text-sm text-white bg-green-500 inline-block rounded-full package-save whitespace-nowrap" style={{transform: 'translateX(-50%)', top: '-14px', left: '50%'}}>SAVE 30% </span><div className="flex space-x-2 items-center"><div className="flex-1 text-left"><p className="package-name">6 Months Pass</p><p className="mt-4 mb-3 text-sm package-total-price"><span className="text-green-500 line-through regular-price">£{/* */} {/* */}50.95</span> {/* */}£{/* */}37.74{/* */}  billed one time </p></div><p className="font-semibold package-price flex-shrink" style={{fontSize: '25px'}}><span className="font-medium" style={{fontSize: '14px'}}>£</span>6.29{/* */} <span className="font-medium" style={{fontSize: '14px'}}> / mo</span></p></div></div></div></div>



                    <div ref={myRef} id="optional-addons" className="flex space-x-4 items-center py-12 mt-6"><span className="text-white h-7 px-3 rounded-lg inline-flex justify-center items-center" style={{background: 'rgb(55, 211, 72)', outline: 'none'}}>Step 2</span><span className="font-semibold md:text-2xl text-xl">Optional Addons</span></div>


                    <div className="optional-addons space-y-4"><div className=" shadow-md sm:flex items-center sm:space-x-4 sm:space-y-0 space-y-2 bg-white py-4 px-6 rounded-xl max-w-2xl cursor-pointer"><div className="flex-1"><h2 className="uppercase"> EXTRA CONNECTION </h2><p className="text-gray-500 text-sm">Use your IPTV on multiple devices at the same time</p></div><div className="flex-shrink flex justify-center items-center space-x-3"><span className="text-sm">£{/* */} {/* */}6.99{/* */} / month</span><button type="button" className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" role="switch" aria-checked="false"><span className="sr-only">Use setting</span><span aria-hidden="true" className="pointer-events-none absolute bg-white w-full h-full rounded-md" /><span className="bg-gray-200 pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200" aria-hidden="true" /><span className="translate-x-0 pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200" aria-hidden="true" /></button></div></div><div className="shadow-md sm:flex items-center sm:space-x-4 sm:space-y-0 space-y-2 bg-white py-4 px-6 rounded-xl max-w-2xl cursor-pointer"><div className="flex-1"><h2 className="uppercase"> Proxy Protection <span className="bg-green-400 text-white rounded-full uppercase px-2 ml-1 ">recommended</span> </h2><p className="text-gray-500 text-sm">Built-in proxy to hide the traffic to your ISP and protect your privacy</p></div><div className="flex-shrink flex justify-center items-center space-x-3"><span className="text-sm">£{/* */} {/* */}1.99{/* */} / month</span><button type="button" className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" role="switch" aria-checked="false"><span className="sr-only">Use setting</span><span aria-hidden="true" className="pointer-events-none absolute bg-white w-full h-full rounded-md" /><span className="bg-gray-200 pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200" aria-hidden="true" /><span className="translate-x-0 pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200" aria-hidden="true" /></button></div></div><div className="shadow-md sm:flex items-center sm:space-x-4 sm:space-y-0 space-y-2 bg-white py-4 px-6 rounded-xl max-w-2xl cursor-pointer"><div className="flex-1"><h2 className="uppercase"> Adult channels / XXX Channels <span className="bg-green-400 rounded-full text-white px-2 ml-1 ">FREE</span> </h2><p className="text-gray-500 text-sm">Adult channels are channels that feature adult content, in the sense of pornographic</p></div><div className="flex-shrink flex justify-center items-center space-x-3"><span className="text-sm">£{/* */} 0.00 / month</span><button type="button" className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" role="switch" aria-checked="false"><span className="sr-only">Use setting</span><span aria-hidden="true" className="pointer-events-none absolute bg-white w-full h-full rounded-md" /><span className="bg-gray-200 pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200" aria-hidden="true" /><span className="translate-x-0 pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200" aria-hidden="true" /></button></div></div></div>
                    <div id="fill-details" className="flex space-x-4 items-center py-12 mt-6"><span className="text-white h-7 px-3 rounded-lg inline-flex justify-center items-center" style={{background: 'rgb(55, 211, 72)', outline: 'none'}}>Step 3</span><span className="font-semibold md:text-2xl text-xl">Fill Your Details</span></div>
<div className="fill-details grid grid-cols-3 gap-10"><div className="shadow-md col-span-3 order-2 md:col-span-2 md:order-1 items-center bg-white p-4 md:p-8 rounded-xl"><div className="space-y-7"><div className=" space-y-3"><div><div className=" rounded-md px-3 "><label htmlFor="email" className="block font-medium text-gray-900">Email <span className="text-green-600">*</span></label><input type="email" name="email" id="email" className="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 border-grey-lighter rounded-lg h-10 px-4" placeholder="Please enter your email" defaultValue /></div></div><div><div className=" rounded-md px-3 "><label htmlFor="wtp" className="block font-medium text-gray-900">Whatsapp Number <span className="text-green-600">Optional</span></label><input type="tel" defaultValue name="phone" id="phone" className="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 border-grey-lighter rounded-lg h-10 px-4" placeholder="Example : +44 795216015" /></div></div><div className=" rounded-md px-3 "><label htmlFor="subscription_type" className="block font-medium text-gray-900"> Device type</label><select id="subscription_type" name="subscription_type" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md "><option value="Any">Any Other Device</option><option value="Mag Box / Formular Z8">Mag Box / Formular Z8</option></select><div className="hidden mb-2 mt-2"><label htmlFor="mac" className="block font-medium text-sm text-gray-700 mb-1">Mac Address</label><input type="text" defaultValue placeholder="00:1A:79:XX:XX:XX" className="appearance-none block w-full bg-grey-lighter text-grey-darker border-2 border-grey-lighter rounded-lg h-10 px-4" name="mac" style={{outline: 'none'}} /></div></div></div><div className="space-y-2"><div className="flex bg-indigo-50 rounded-md py-3 px-5"><span className="flex-1"> {packname} {/* */} Pass - All Channels &amp; Vod</span><span>£{/* */} {/* */}9.99{/* */} </span></div><div className="space-x-4 "><div className="inline-block hidden flex bg-indigo-50 rounded-md py-3 px-5"><span className="inline-block flex-1">+ 1 Extra Connection for {/* */}1 Month<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="cursor-pointer inline-block ml-1 h-6 w-6 iconify iconify--ant-design" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" style={{color: 'rgb(255, 0, 0)'}}><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" fill="currentColor" /><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448s448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor" /></svg></span><span>£{/* */} {/* */}6.99</span></div></div><div className="space-x-4 "><div className="hidden flex bg-indigo-50 rounded-md py-3 px-5"><span className="inline-block flex-1">+ Proxy Protection for {/* */}1 Month<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="cursor-pointer inline-block ml-1 h-6 w-6 iconify iconify--ant-design" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" style={{color: 'rgb(255, 0, 0)'}}><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4l-66.1-.3c-4.4 0-8 3.5-8 8c0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4l66 .3c4.4 0 8-3.5 8-8c0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" fill="currentColor" /><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448s448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z" fill="currentColor" /></svg></span><span>£{/* */} {/* */}1.99{/* */} </span></div></div><div className="space-x-4 "><div className="hidden flex bg-indigo-50 rounded-md py-3 px-5"><span className="inline-block flex-1"> <strong> {/* */} </strong> Coupon {/* */}0{/* */}% Discount   <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="inline-block ml-1 h-6 w-6 iconify iconify--twemoji" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36" style={{color: 'rgb(255, 0, 0)'}}><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18" /><path fill="#664500" d="M18 21.849c-2.966 0-4.935-.346-7.369-.819c-.557-.106-1.638 0-1.638 1.638c0 3.275 3.763 7.369 9.007 7.369s9.007-4.094 9.007-7.369c0-1.638-1.082-1.745-1.638-1.638c-2.434.473-4.402.819-7.369.819" /><path fill="#DD2E44" d="M16.65 3.281a4.666 4.666 0 0 0-8.884.254a4.666 4.666 0 0 0-4.225-.58A4.67 4.67 0 0 0 .692 8.911c.122.344.284.663.472.958c1.951 3.582 7.588 6.1 11.001 6.131c2.637-2.167 5.446-7.665 4.718-11.677a4.712 4.712 0 0 0-.233-1.042zm2.7 0a4.67 4.67 0 0 1 5.956-2.85a4.67 4.67 0 0 1 2.929 3.104a4.666 4.666 0 0 1 4.225-.58a4.671 4.671 0 0 1 2.85 5.956a4.72 4.72 0 0 1-.473.958c-1.951 3.582-7.588 6.1-11.002 6.131c-2.637-2.167-5.445-7.665-4.717-11.677c.037-.348.112-.698.232-1.042z" /></svg></span><span>- {/* */}£{/* */} {/* */}0.00{/* */} </span></div></div><div className="flex bg-indigo-50 rounded-md py-3 px-5"><span className="flex-1" /><span className="mr-7">Total</span><span className="mr-7" /><span>£{/* */} {/* */}9.99</span></div></div><div><button style={{background: 'rgb(55, 211, 72)', outline: 'none'}} className="mx-auto flex justify-between w-full cursor-pointer text-white py-3 px-6 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:outline-none transition-colors duration-200 mt-6"><span /><span>CONTINUE</span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button><p className="justify-center flex items-center text-gray-500 mt-3"><span className="pr-3"><svg width={24} height={22}><defs><clipPath id="clip_0"><rect y="0.47216797" width={24} height="20.673714" clipRule="evenodd" /></clipPath></defs><g clipPath="url(#clip_0)"><path className="money" fill="#1f2937" stroke="none" transform="translate(8.92798 3.99927)" d="M3.71166 0.0417213C3.74124 0.0139949 3.78086 -0.00100222 3.82174 5.20528e-05L5.27214 5.20528e-05C5.31215 -0.000598213 5.35071 0.0147816 5.37893 0.0426492C5.40716 0.0705168 5.42261 0.10847 5.42174 0.147766L5.42174 1.26819C5.87769 1.30678 6.32789 1.39479 6.76414 1.53062C7.43214 1.74041 7.87934 2.04134 8.21294 2.25112C9.51854 3.06905 8.42174 4.86755 6.98094 4.05119C6.67934 3.88148 6.34334 3.72905 5.95534 3.60098C5.79214 3.54755 5.61374 3.50434 5.42174 3.46977L5.42174 5.87641C6.14654 6.05398 6.74494 6.25355 7.20574 6.45784C7.85694 6.74777 8.29294 7.05027 8.52254 7.34962C8.78244 7.67904 8.96198 8.06261 9.04734 8.47084C9.12333 8.85741 9.10094 9.28484 9.04734 9.73977C9.00894 10.0666 8.87694 10.3856 8.69694 10.6968C8.52094 11.0016 8.28414 11.2774 7.95534 11.532C7.63214 11.7826 7.21694 11.9861 6.70574 12.1378C6.28699 12.2562 5.85653 12.3302 5.42174 12.3586L5.42174 13.4719C5.42239 13.5111 5.40686 13.549 5.37869 13.5768C5.35051 13.6046 5.31208 13.6201 5.27214 13.6196L3.82174 13.6196C3.73694 13.6196 3.66414 13.5552 3.66414 13.4719L3.66414 12.3177C3.28894 12.2698 2.89454 12.1983 2.48094 12.0969C1.94814 11.9673 1.39454 11.7221 0.780136 11.4503C-0.718264 10.7863 0.0977359 8.36555 1.90574 9.37991C2.30974 9.60619 2.69214 9.80027 3.06414 9.92834C3.26063 9.99434 3.46099 10.0487 3.66414 10.091L3.66414 7.65291C2.56814 7.41091 1.49454 7.07541 0.747336 6.08148C0.596936 5.88191 0.516136 5.66191 0.447336 5.45134C0.374536 5.23212 0.327336 5.01998 0.313736 4.81255C0.298939 4.60526 0.301615 4.39712 0.321736 4.19027C0.343336 3.99855 0.396936 3.83434 0.447336 3.68348C0.560047 3.32987 0.74731 3.00352 0.996936 2.72569C1.26014 2.43498 1.57134 2.17412 1.94734 1.96434C2.4818 1.66925 3.06167 1.46172 3.66414 1.34991L3.66414 0.147766C3.66497 0.107614 3.68208 0.0694476 3.71166 0.0417213ZM3.66334 3.54362L3.66334 3.54468C3.55385 3.58122 3.44806 3.62769 3.34734 3.68348C3.20574 3.76441 3.09134 3.84848 2.99774 3.96162C2.93534 4.03627 2.85054 4.15412 2.81374 4.26412C2.74974 4.46134 2.73534 4.68448 2.83054 4.86991C2.91614 5.03727 3.05774 5.16141 3.23134 5.26277C3.36845 5.33985 3.5132 5.40304 3.66334 5.45134L3.66334 3.54468L3.66414 3.54441L3.66334 3.54362ZM5.42174 8.05362C5.61374 8.10784 5.80014 8.16362 5.98014 8.23434C6.30094 8.35927 6.69694 8.63191 6.78894 8.92105C6.86414 9.16069 6.85054 9.43727 6.70574 9.63369C6.38734 10.0643 5.99534 10.1601 5.52174 10.2143C5.49054 10.2183 5.45374 10.2198 5.42174 10.2222L5.42174 8.05362Z" fillRule="evenodd" /></g><defs><clipPath id="clip_1"><rect y="0.47216797" width={24} height="20.673714" clipRule="evenodd" /></clipPath></defs><g clipPath="url(#clip_1)"><path fill="#1f2937" fillOpacity="0.49803922" stroke="none" transform="translate(0 0.472168)" d="M13.4752 0C7.672 0 2.9496 4.6365 2.9496 10.3369C2.9688 10.4579 2.9784 10.5883 2.9832 10.7297L1.032 8.82279L0 9.83714L3.7672 13.5371L7.5336 9.83714L6.508 8.82279L4.6 10.6873L4.6 10.0171C4.768 5.33893 8.6696 1.62014 13.4752 1.62014C18.3872 1.62014 22.3496 5.51179 22.3496 10.3369C22.3534 12.6497 21.4197 14.8689 19.7546 16.5044C18.0895 18.1399 15.8301 19.0571 13.4752 19.0536L13.4752 20.6737C19.28 20.6737 24 16.0364 24 10.3369C24 4.6365 19.2792 0 13.4752 0Z" /></g><defs><clipPath id="clip_2"><rect x={-740} y={-508} width={1440} height={4191} clipRule="evenodd" /></clipPath></defs><g clipPath="url(#clip_2)"><path fill="#1f2937" fillOpacity="0.49803922" stroke="none" transform="translate(0.522461 15.6223)" d="M0.1344 1.31686C0.1664 1.09921 0.228 0.908286 0.3208 0.743286C0.494044 0.426304 0.787521 0.189166 1.1376 0.0832857C1.316 0.0282857 1.5072 0 1.712 0C1.9248 0 2.1184 0.0306429 2.2896 0.0895714C2.4616 0.149286 2.608 0.231786 2.7296 0.337857C2.97439 0.547849 3.11253 0.853113 3.1072 1.17229C3.1072 1.31686 3.0912 1.44414 3.0576 1.55414C3.00268 1.76027 2.86884 1.9376 2.684 2.04914C2.58687 2.10816 2.48294 2.15563 2.3744 2.19057C2.652 2.277 2.8584 2.40743 2.9952 2.58343C3.1312 2.75943 3.2008 2.98021 3.2008 3.24657C3.2008 3.47286 3.1576 3.67321 3.0728 3.84686C2.99069 4.01571 2.87255 4.16524 2.7264 4.28529C2.5824 4.40314 2.4136 4.4935 2.2224 4.55321C2.0265 4.61519 1.82181 4.64622 1.616 4.64514C1.384 4.64514 1.1808 4.61843 1.008 4.56657C0.678023 4.47021 0.399157 4.25155 0.2304 3.95686C0.134867 3.79373 0.0576157 3.62091 0 3.44143L0.3488 3.3C0.429278 3.2635 0.519481 3.25304 0.6064 3.27014C0.6864 3.28743 0.7448 3.32986 0.7816 3.39743C0.8192 3.4705 0.8616 3.54357 0.9072 3.61429C0.9528 3.685 1.008 3.74864 1.072 3.80443C1.21972 3.93077 1.41062 3.99757 1.6064 3.99143C1.7416 3.99143 1.8584 3.97021 1.9584 3.927C2.05278 3.88808 2.13821 3.8309 2.2096 3.75886C2.33833 3.62826 2.41009 3.45348 2.4096 3.27171C2.4096 3.1625 2.3984 3.0635 2.3744 2.97471C2.3512 2.88534 2.29965 2.80554 2.2272 2.74686C2.13256 2.67468 2.02268 2.6242 1.9056 2.59914C1.72133 2.55875 1.53275 2.54054 1.344 2.54493L1.344 1.99257C1.5384 1.99021 1.6992 1.97293 1.8272 1.93914C1.9552 1.90536 2.0568 1.85821 2.1328 1.79929C2.20532 1.74373 2.26026 1.66907 2.2912 1.584C2.32223 1.49503 2.33738 1.40146 2.336 1.30743C2.336 1.09293 2.2752 0.931072 2.1536 0.820286C2.032 0.708714 1.8696 0.653714 1.6672 0.653714C1.57918 0.652673 1.4916 0.665947 1.408 0.693C1.25688 0.742143 1.12643 0.838784 1.0368 0.968C0.993704 1.03165 0.961292 1.10169 0.9408 1.17543C0.9048 1.27129 0.8568 1.33571 0.7984 1.36636C0.74 1.39779 0.6576 1.40564 0.5504 1.38914L0.1344 1.31686ZM6.9232 3.355Q7.0528 2.91657 7.0528 2.32257C7.0528 1.925 7.0096 1.57929 6.9232 1.28857C6.8376 0.997071 6.7176 0.755857 6.5656 0.565714C6.412 0.374786 6.232 0.232571 6.024 0.139857C5.816 0.0471429 5.5912 0 5.3504 0C5.1088 0 4.8864 0.0463571 4.68 0.139857C4.4736 0.232571 4.296 0.374786 4.144 0.565714C3.97933 0.781968 3.85873 1.02741 3.7888 1.28857C3.7032 1.58007 3.6608 1.92421 3.6608 2.32257C3.65456 2.67088 3.69764 3.01834 3.7888 3.355C3.85876 3.61663 3.97936 3.86258 4.144 4.07943C4.28492 4.26191 4.46886 4.40805 4.68 4.50529C4.8864 4.598 5.1088 4.64514 5.3504 4.64514C5.592 4.64514 5.816 4.598 6.024 4.50529C6.23678 4.40819 6.42257 4.2621 6.5656 4.07943C6.73069 3.86252 6.85206 3.61664 6.9232 3.355ZM6.2376 2.32336C6.2376 1.99336 6.212 1.7215 6.1632 1.50621C6.12732 1.32458 6.0608 1.15011 5.9664 0.99C5.89929 0.876297 5.80121 0.783237 5.6832 0.721286C5.47562 0.617449 5.22998 0.617449 5.0224 0.721286C4.90523 0.783265 4.8082 0.876388 4.7424 0.99C4.64885 1.14991 4.58341 1.32416 4.5488 1.50543C4.5008 1.7215 4.4768 1.99336 4.4768 2.32257C4.4768 2.651 4.5008 2.92364 4.5488 3.13971C4.5968 3.355 4.6616 3.52707 4.7424 3.65514C4.8082 3.76875 4.90523 3.86188 5.0224 3.92386C5.22998 4.02769 5.47562 4.02769 5.6832 3.92386C5.80121 3.86191 5.89929 3.76885 5.9664 3.65514C6.06079 3.49531 6.1273 3.32109 6.1632 3.13971C6.212 2.92364 6.2368 2.651 6.2368 2.32257L6.2376 2.32336Z" fillRule="evenodd" /></g></svg></span><span>You're 100% backed by our 30-day money-back guarantee.</span></p></div><section className="text-gray-700"><div className="grid lg:grid-cols-2 gap-4"><div className="space-y-4"><details className="bg-gray-100 rounded-md py-2 px-4"><summary className="font-semibold cursor-pointer">What is EXTRA CONNECTION Option?</summary><span className="pt-2 text-sm text-gray-500 inline-block">1 subscription can be used on multiple devices but you can watch only on 1 device at the same time. If you want to use the same subscription on 2 devices at the same you'll need to check this option .</span></details><details className="bg-gray-100 rounded-md py-2 px-4"><summary className="font-semibold cursor-pointer">How can I install IPTV on my device?</summary><span className="pt-2 text-sm text-gray-500 inline-block">Check the installation tutorials <a className="underline text-green-500" href="/blog/how-to-install-iptv-in-my-device">here</a>, if there is any issue, feel free to contact us via whatsapp or telegram</span></details></div><div className="space-y-4"><details className="bg-gray-100 rounded-md py-2 px-4"><summary className="font-semibold cursor-pointer">What is PROXY PROTECTION Option?</summary><span className="pt-2 text-sm text-gray-500 inline-block">IPTV is illegal in some countries , By checking this option , we hide your IP &amp; geolocation from your Internet Provider by issuing a virtual location.</span></details></div></div></section></div></div><div className="col-span-3 order-2 md:col-span-1 md:order-2 items-center space-y-5">   <div className="shadow-md bg-white py-4 px-6 rounded-xl cursor-pointer md:block"><h2 className="text-xl font-semibold mb-2">Your Plan Includes:</h2><ul className="pl-3 leading-8"><li>Access to over 12,913 TV Channels</li><li>Thousands of Movies &amp; Series</li><li>Easy Setup on All your Devices</li><li>Instant Delivery</li><li>Free Customer Support</li><li>Money-Back Guarantee</li></ul></div></div></div>


                </div>
            </div>

        </div>
    );
};

export default Checkout;