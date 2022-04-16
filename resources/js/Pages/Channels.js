import queryString from 'query-string'
import Header from './Nav'

import Footer from './Footer'
import React, { useEffect,useState } from 'react';
import axios from "axios";

function Channel(props) {
  const name = props.name;
  const logo = props.logo;

  return(
    
    <div   className={name.includes("----") ? "hidden px-4 font-press-start" : "px-4 font-press-start" } >
    <a className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden"  >
    <img className="flex-shrink inline-block h-12" src={logo} />
    <div className="flex-1">
      <p className="text-lg font-bold" style={{lineHeight: 1}}> {name} </p>
    </div>
  </a>
  </div>
  )
}

function countries(props) {
  const myRef2 = React.createRef();
  const parsed = queryString.parse(location.search);
  const country = parsed.country;


  const [channels,setChannels] = useState([])
  const [zaz,setZaz] = useState([])
  const [popup,setPopup] = useState(false)
  const [currentpage,setPage] = useState(1)
  
  const togglepop = () => {
    setPopup(!popup)
  }

  const nextpage = () => {
    setPage(currentpage+1)
    myRef2.current.scrollIntoView({ behavior: "smooth", block: "start" });

  }

  
  const prevpage = () => {
    setPage(currentpage-1)
    if(currentpage <1){
      setPage(1)
    }
    myRef2.current.scrollIntoView({ behavior: "smooth", block: "start" });

  }

  useEffect(() => {
    
    axios.get('https://ecombunny.net/api/getjson.php?country='+country+'&page='+currentpage).then(response =>  
    setChannels(response.data) ) }, [country,currentpage]);



    useEffect(() => {
      if ( channels.length >2){
       
        setZaz(channels)
      }
     }, [channels]);

     useEffect(() => {
     }, [zaz]);

     useEffect(() => {
    
      if (channels == []){
        (async () => {
          let checkresult =  axios.get('https://ecombunny.net/api/getjson.php?country='+country).then(response => response.data);   
          checkresult.then(function(result) {
            if ( result.length > 2){
              setChannels(result)
            }
              

            

          })
      })
      ();
      }
    }, [channels]);

    return (
      
        <div>
   
            <Header />
       
         <main>
  <div ref={myRef2} className="nf-container py-8 px-4">
    <form className="mb-4 max-w-2xl mx-auto" x-data="{submitted: false}"  action="https://netflytv.com/stream-list-channels">
      <input type="hidden" name="country" defaultValue="fb46e539-a2d3-4b95-87de-0ec76121288b" />
      <div className="rounded-md bg-blue-50 p-4 w-full mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-blue-800">
              New channels are added each week
            </p>
          </div>
        </div>
        <div className="flex mt-2">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-blue-800">
              Click on any channel to get a subscription
            </p>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 justify-end mt-4 md:mt-0">
       
       <a href="/countries" type="button" className="bg-purple-500 cursor-pointer w-full items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-white text-center text-bold uppercase  hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
         Choose another country
       </a>
     </div>
    </form>
    <div onClick={ () => togglepop() }  className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

    { zaz.map(header => 
   
    <Channel  name={header['name']} logo={header['logo']} />
              

            ) }
    
    

    
    </div>
    <div class="flex flex-col items-center my-12">
    <div class="flex text-purple-700">
        <div onClick={ () => prevpage() } class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-purple-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left w-6 h-6">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
        <div class="flex h-12 font-medium rounded-full bg-purple-200">
          
            <div class="w-12 h-12  flex justify-center items-center  leading-5 transition duration-150 ease-in rounded-full bg-purple-600 text-white"> {currentpage}  </div>
        </div>
        <div onClick={ () => nextpage() } class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-purple-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right w-6 h-6">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </div>
    </div>
</div>

  
  </div>
  <div className={ popup ? "fixed z-20 inset-0 overflow-y-auto ": "fixed z-20 inset-0 overflow-y-auto hidden" } aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div  className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
      <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
        <div>
          <div className="mt-3 text-center sm:mt-5">
            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
            Get a subscription now.
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
              <button  type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:text-sm">
              <svg x-show="submitted" className="animate-spin text-white -ml-1 mr-2 h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style={{display: 'none'}}>
                <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <a href="/checkout">Get 1 Year Subscription</a>
            </button>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <span  className="sm:col-start-2">
            <button  type="submit" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:text-sm">
              <svg x-show="submitted" className="animate-spin text-white -ml-1 mr-2 h-5 w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" style={{display: 'none'}}>
                <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <a href="/checkout">Get 1 Month Subscription</a>
            </button>
          </span>
          <button onClick={ () => togglepop() } className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:col-start-1 sm:text-sm" >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</main>

<Footer />
        </div>
    );
}

export default countries;