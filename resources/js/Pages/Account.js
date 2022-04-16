import React, { useEffect, useState } from 'react';
import Nav from './Nav'
import Foot from './Footer'
import { Inertia } from '@inertiajs/inertia'

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
          <a href={"/viewsub?uniqueid="+unique} className="rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:text-sm">View</a>
        </div>
        <div className={showextend ? " mt-4 ml-4 sm:mt-0 flex-shrink flex space-x-2" : "hidden"} >
          <a href={"/extend?uniqueid="+unique} className="rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:text-sm">Extend</a>
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
          Inertia.get('/login', {  }, { replace: true })

        }
    
        })();
      }, );
 
    
        const [subscriptions, setSubs] = useState([]);
        const [customerid, setCustomer] = useState("");
     
    
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
          }, [customerid]);
    
    return (
        <div>
            <Nav />
     
            <main>
  <div className="md:px-9 px-8 max-w-4xl mx-auto pt-8 pb-20">
    <div className="flex">
      <h2 className="md:text-4xl text-3xl font-semibold mb-5 flex-1">My IPTV Subscriptions </h2>
      <div className="flex-shrink">
        <a href="/account" className="cursor-pointer bg-purple-800 hover:bg-purple-800 text-white p-2 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 focus:outline-none transition-colors duration-200 flex">
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
            <div className="mt-4 sm:mt-0 flex-shrink flex space-x-2">
              <a href={"/viewsub?uniqueid="+sub.uniqueid} className="rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:text-sm">View</a>
            </div>
            <div className={extend ? " mt-4 ml-4 sm:mt-0 flex-shrink flex space-x-2" : "hidden"} >
              <a href={"/extend?uniqueid="+sub.uniqueid} className="rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:text-sm">Extend</a>
            </div>
          </div>
           )
        }
       
             
             
                 )  }
     
     
    
    </div>


  </div>
</main>



            <Foot />
        </div>
    );
};

export default how;