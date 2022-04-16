
import {CopyToClipboard} from 'react-copy-to-clipboard';
import React, { useEffect, useState } from 'react';
import Foot from './Footer'
import { Inertia } from '@inertiajs/inertia'
import Nav from './YsfNav'

import { Head } from '@inertiajs/inertia-react'
import axios from 'axios';


import queryString from 'query-string'

function Country (props){
    const name = props.name;
    const logo = props.logo;
    const id = props.id;
    return (
        <a key={id} href="/checkout" class="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:text-black hover:bg-gray-100 overflow-hidden" ><img class="flex-shrink inline-block h-12" src={logo}  /><div class="flex-1 "><p class="text-lg font-bold" >{name } </p></div></a>
    )
}


function Account(props) {

    const parsed = queryString.parse(location.search);
    const country = parsed.country;
    const page = parsed.page;
    const [loading,setLoading] = useState(true)


    const [toggleMenu,setToggleMenu] = useState(false)
    const [total,setTotal] = useState(0)
    const [pages,setPages] = useState(0)
    const [pagesno,setTotalPages] = useState(0)
    const [currentpage,setCurrentPage] = useState(1)
  const [countries,setCountries] = useState([])
  const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    const incr = () => {
          
        if (currentpage > pagesno - 1){
            setCurrentPage(pagesno - 1)
        }
        else {
            setCurrentPage(currentpage+1)

        }
      }
    
      const dcr = () => {
          
        if (currentpage <= 1){
            setCurrentPage(1)
        }
        else {
            setCurrentPage(currentpage-1)

        }
      }
    
    const toggleNav2 = () => {
        if (toggleMenu){
    
            setToggleMenu(!toggleMenu)
        }
    }

    
    useEffect(() => {
       
       if (total != 0 ){
           setPages(total)
           let totalpages = parseInt(total/16 + 1)
           setTotalPages(totalpages)
       }
   
    
  
   
  }, [total]);


    useEffect(() => {
       
            (async () => {
                let checkresult =  axios.get('/api/channelsbycountry/'+country+'/'+currentpage).then(response => response.data);   
                checkresult.then(function(result) {
                  setTotal(result.total)
                    setCountries(result.channels)
                    setLoading(false)
                   })
                     })  ();
       
        
      
       
      }, [currentpage]);

 

    return (
         <div onClick={() => toggleNav2()} class="text-white bg-body bg-no-repeat bg-contain w-full h-full overflow-hidden">
        <Head>
<title>Tv Channels List - FAST IPTV SHOP</title>
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

<div className="rounded-md bg-blue-50 p-4 max-w-lg mx-auto mb-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-blue-800">
            Info &amp; Guideline
          </h3>
          <div className="mt-2 text-sm text-blue-700">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                After the payment , you can add / remove countries depending on what you want
              </li>
              <li>
                Click on the country whose channels and vods you want to see
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <h1 className='text-center font-bold text-2xl'>      {country} Channels List</h1>
    <h1 className='text-center font-bold text-2xl'>      <a href="/countries" type="button" class="bg-white w-8/12 cursor-pointer  text-center items-center px-3 py-2 border border-gray-300 text-2xl text-2xl leading-4 font-thin rounded-md text-black  text-bold uppercase  ">Choose another country</a></h1>
   
    <h1 className={loading ? 'text-center' : 'hidden'}>Loading....</h1>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-4">

    {
  Object.values(countries).map((country, index) => {
    return (
        
    <Country name = {country.channel}  logo = {country.logo}  />
    );
})
}
 

      </div>
      <div class="container flex justify-center mx-auto">
    <ul class="flex">
        <li><button onClick={() => dcr()}
                class="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100">Prev</button>
        </li>
        
        <li><button
                class="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100">
                    
                    {currentpage}
                
                </button>
        </li>
    
        <li><button onClick={() => incr()} class="h-10 px-5 text-gray-600 bg-white border border-gray-600 hover:bg-gray-100">Next</button>
        </li>
    </ul>
</div>

      
      
        </div>
    );
}

export default Account;