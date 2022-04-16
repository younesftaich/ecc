
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Head } from '@inertiajs/inertia-react'

import queryString, { stringify } from 'query-string'
import Nav from './YsfNav'
import React, { useEffect,useState } from 'react';
import axios from "axios";


function Account(props) {
   


    const parsed = queryString.parse(location.search);
    const id = parsed.uniqueid;

    const [channels , setChannels] = useState([])
    const [fruits , setFruits] = useState([])
    const [loading , setLoading] = useState(true)
    const [subid , setId] = useState(1)


    useEffect(() => {
        if ( id != null){
            (async () => {
                let checkresult =  axios.get('/api/subunique/'+id).then(response => response.data);   
                checkresult.then(function(result) {
                    setId(result.id)
                    setChannels(result.channels)
                    let temp1 = result.channels.toString().replace('[', '');
                    let temp2 = temp1.replace(']', '');
                    const myArray = temp2.split(",");
             
                    setLoading(false)
                })
                    })  ();
        }
        
      
       
      }, [id]);


      const savechannels = () => {
        axios.post("/api/createjob",{
          "subid" : subid,
          "type" : "edit",
          "channels" : JSON.stringify(fruits),
          
        }).then(function(){
          alert("Channels Edited Successfully")
        })
      }
      const handlechange = (e) => {
     //   console.log(e.target.defaultValue)
        if (e.target.checked){
          fruits.push(e.target.defaultValue);
        }
        else {
          var index = fruits.indexOf(e.target.defaultValue);
if (index !== -1) {
  fruits.splice(index, 1);
}
        }
        
       
      }
      function contains(a, obj) {
        var i = a.length;
        while (i--) {
           if (a[i] == obj) {
               return true;
           }
        }
        return false;
    }

    
      const isChecked = (e) => {
      if (!loading){
        let temp1 = channels.toString().replace('[', '');
        let temp2 = temp1.replace(']', '');
        const myArray = temp2.split(",");


   
        if ( contains(myArray,e) ){
        //  fruits.push(e);
         return false
        }
        else {
         return false
        }
      }

       
      }

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
  <div className="md:px-9 px-8 max-w-4xl mx-auto py-5" >
    <h1 className="text-center mb-3 text-2xl">Update your Channels & Vod List </h1>
    <div className="text-center mb-3 space-x-4">
    <button onClick={() => savechannels()}  className="cursor-pointer bg-purple-600 border border-purple-200 bg-gray hover:bg-purple-800 text-white py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2  focus:ring-purple-600 focus:outline-none transition-colors duration-200">Update My List</button>
    </div>
    <div className="text-center mb-3 space-x-4">
      <a href="/account" className="cursor-pointer border border-gray-200 bg-gray hover:bg-gray-100 text-black py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 focus:outline-none transition-colors duration-200">Back to My Subscriptions</a>
    </div>
    <h1 className="text-xl mb-5">Bouquet Lives:</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input   type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(10)}   defaultValue={10} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" defaultChecked={isChecked(10)} />
          <span className="text-gray-900 font-medium">AFGHANISTAN</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(26)} defaultValue={26} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none"  />
          <span className="text-gray-900 font-medium">AFRICA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(22)} defaultValue={22} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none"  />
          <span className="text-gray-900 font-medium">ALBANIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1)} defaultValue={1} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none"  />
          <span className="text-gray-900 font-medium">ARABIC | FTA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(2)} defaultValue={2} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none"  />
          <span className="text-gray-900 font-medium">ARABIC | PAID</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(29)} defaultValue={29} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">ARMENIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1051)} defaultValue={1051} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none"  />
          <span className="text-gray-900 font-medium">AUSTRALIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(37)} defaultValue={37} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none"  />
          <span className="text-gray-900 font-medium">AUSTRIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1037)} defaultValue={1037} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">AZERBAIJAN</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(21)} defaultValue={21} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">BELGIUM</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(9)} defaultValue={9} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">BULGARIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(16)} defaultValue={16} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none"  />
          <span className="text-gray-900 font-medium">CANADA ENGLISH</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1062)} defaultValue={1062} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">CANADIAN FRENCH</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1098)} defaultValue={1098} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">CAREBBEAN</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1052)} defaultValue={1052} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">CHINA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(35)} defaultValue={35} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">CZECH</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1022)} defaultValue={1022} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">DENMARK</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1105)} defaultValue={1105} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">ESTONIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(25)} defaultValue={25} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">EXYU</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1024)} defaultValue={1024} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">FINLAND</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1092)} defaultValue={1092} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">FORMULA 1</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1070)} defaultValue={1070} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">FRANCE</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1046)} defaultValue={1046} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">GEORGIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(18)} defaultValue={18} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">GERMANY</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(27)} defaultValue={27} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">GREECE</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1099)} defaultValue={1099} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">HONG KONG</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1087)} defaultValue={1087} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">HORSE RACING</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1008)} defaultValue={1008} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">HUNGARIAN</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(19)} defaultValue={19} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">INDIAN/PAKISTAN (EU)</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(14)} defaultValue={14} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">INDIAN/PAKISTAN ASIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1057)} defaultValue={1057} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">INDONESIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(31)} defaultValue={31} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">IRAN</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1004)} defaultValue={1004} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">ISRAEL</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1047)} defaultValue={1047} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">ITALIAN</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1055)} defaultValue={1055} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">JAPAN</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1053)} defaultValue={1053} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">KOREA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(8)} defaultValue={8} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">KURDISH</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(30)} defaultValue={30} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">LATIN</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1106)} defaultValue={1106} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">LATVIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1107)} defaultValue={1107} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">LITHUANIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1058)}   defaultValue={1058} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">MALAYSIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1076)}   defaultValue={1076} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">MALTA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(3)}   defaultValue={3} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">NEDERLAND</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1078)}   defaultValue={1078} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">NEPAL</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1108)}   defaultValue={1108} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">NORDIC (EXCLUSIVE)</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1021)}   defaultValue={1021} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">NORWAY</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1059)}   defaultValue={1059} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">PHILIPPINE</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(12)}   defaultValue={12} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">POLONIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(20)}   defaultValue={20} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">PORTUGAL</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1031)}   defaultValue={1031} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">RADIO</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(24)}   defaultValue={24} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">ROMANIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(38)}   defaultValue={38} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">RUSSIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1020)}   defaultValue={1020} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">SOMALIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(17)}   defaultValue={17} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">SPAIN</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1100)}   defaultValue={1100} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">SURINAM</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1023)}   defaultValue={1023} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">SWEDEN</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(28)}   defaultValue={28} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">SWITZERLAND</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1054)}   defaultValue={1054} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">TAIWAN</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1060)}   defaultValue={1060} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">THAILAND</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(11)}   defaultValue={11} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">TURKISH</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(39)}   defaultValue={39} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none"  />
          <span className="text-gray-900 font-medium">UKRAIN</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(5)}   defaultValue={5} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">UNITED-KINGDOM</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1061)}   defaultValue={1061} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">UNITED-STATES</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" onChange={handlechange} name="lives[]"  defaultChecked={isChecked(1056)}   defaultValue={1056} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none"  />
          <span className="text-gray-900 font-medium">VIETNAM</span>
        </label>
      </div>
    </div>
    <h1 className="text-xl mt-16 mb-5">Bouquet VODs:</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1091)}   defaultValue={1091} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">ALBANIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1013)}   defaultValue={1013} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">ARABIC</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1017)}   defaultValue={1017} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">BOLLYWOOD</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1083)}   defaultValue={1083} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">BULGARY</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1077)}   defaultValue={1077} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">CZECH REPUBLIC</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1018)}   defaultValue={1018} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">ENGLISH</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1079)}   defaultValue={1079} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">EXYU</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1015)}   defaultValue={1015} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">FRANCE</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1012)}   defaultValue={1012} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">GERMANY</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1065)}   defaultValue={1065} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">GREECE</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1095)}   defaultValue={1095} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">IRAN</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1064)}   defaultValue={1064} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">ITALY</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1084)}   defaultValue={1084} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">MALTA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1014)}   defaultValue={1014} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">NEDERLAND</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1068)}   defaultValue={1068} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">POLAND</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1073)}   defaultValue={1073} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">PORTUGAL-BRAZIL</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1093)}   defaultValue={1093} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">RUSSIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1080)}   defaultValue={1080} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">SCANDINAVIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1027)}   defaultValue={1027} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">SOMALIA</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1063)}   defaultValue={1063} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">SPAIN</span>
        </label>
      </div>
      <div className="bg-white rounded-xl shadow-md">
        <label className="flex items-center space-x-3 p-4">
          <input type="checkbox" name="vods[]" onChange={handlechange}  defaultChecked={isChecked(1016)}   defaultValue={1016} className="form-tick appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-600 checked:border-transparent focus:outline-none" />
          <span className="text-gray-900 font-medium">TURKISH</span>
        </label>
      </div>
    </div>
    <div className="text-center mt-6 space-x-4">
  
      <button  onClick={() => savechannels()} className="cursor-pointer bg-purple-600 border border-purple-200 bg-gray hover:bg-purple-800 text-white py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2  focus:ring-purple-600 focus:outline-none transition-colors duration-200">Update My List</button>
    </div>
    <div className="text-center mt-6 space-x-4">
  
      <a href="/account" className="cursor-pointer border border-gray-200 bg-gray hover:bg-gray-100 text-black py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 focus:outline-none transition-colors duration-200">Back to My Subscriptions</a>
    </div>
  </div>
</main>

<footer className=" w-full bottom-0 bg-[#0e2566] py-[14px] text-center flex justify-center gap-1 flex-wrap px-5">
    <p className="text-lg text-white font-light"> FAST IPTV SHOP TV | All Rights Reserved 2010 - 2022 | </p>
  </footer>
        </div>
    );
}

export default Account;