import React, { useEffect,useState } from 'react';
import { Inertia } from '@inertiajs/inertia'

const YsfNav = () => {

    const [link,setLink] = useState("/checkout")
    const [link2,setLink2] = useState("/")
    const [txt,setTxt] = useState("ORDER NOW")
    const [txt2,setTxt2] = useState("Login")

    useEffect(() => {

        (async () => {
    
          const customerid = localStorage.getItem('customerid');
          if(customerid){
            setLink("/")
            setLink2("/")
            setTxt("Dashboard")
            setTxt2("Logout")
        }
    
        })();
      }, );
      const txt2redirect = () => {
          Inertia.get(link2, {  }, { replace: false })

      }
      const txt1redirect = () => {
        Inertia.get(link, {  }, { replace: false })
    }

    const toggleNav2 = () => {
        if (toggleMenu){

            setToggleMenu(!toggleMenu)
        }
    }


    const [toggleMenu,setToggleMenu] = useState(false)

    
    return (
        <>
          
          <div className=" lg:mt-0 w-full pl-10 sm:pl-[120px] lg:pl-0">
      <ul className="flex flex-col lg:flex-row justify-between lg:items-center  lg:px-0  w-full max-w-full lg:max-w-[410px] h-full leading-10 lg:leading-normal border-b lg:border-b-0 border-gray-500 pb-10 lg:pb-0">
        <li><a href="/checkout" className="text-medium text-white opacity-60 lg:opacity-100">About us</a></li>
        <li><a href="/checkout" className="text-medium text-white opacity-60 lg:opacity-100">Setup</a></li>
        <li><a href="/checkout" className="text-medium text-white opacity-60 lg:opacity-100">Pricing</a></li>
      </ul>
    </div>
    <div  className="flex items-center flex-col lg:flex-row gap-4 ">
      <div className="lg:flex items-center flex-col lg:flex-row gap-4 w-full bg-[#122250] lg:bg-transparent hidden ">
        <button onClick={ () => txt2redirect() } className="w-[70px] h-[30px] bg-white text-sm text-black-10 rounded-sm uppercase font-bold">{txt2}</button>
        <button onClick={ () => txt1redirect() }  className="w-[110px] h-[30px] bg-primary text-sm text-white rounded-sm uppercase font-bold">{txt}</button>
      </div>
      <div className="flex flex-col w-full lg:flex-row gap-4 px-10 sm:pl-[120px] lg:pl-0 ">
      </div>
    </div>
    <div className="flex items-center flex-col lg:flex-row gap-4 w-full bg-[#122250] lg:bg-transparent lg:hidden mt-2 lg:my-auto px-10 ">
      <button onClick={ () => txt2redirect() } className="w-full lg:w-[70px] h-[30px] bg-white text-sm text-black-10 rounded-sm uppercase font-bold">{txt2}</button>
      <button onClick={ () => txt1redirect() }  className="w-full lg:w-[110px] h-[30px] bg-primary text-sm text-white rounded-sm uppercase font-bold">{txt}</button>
    </div>
            
        </>
    );
};

export default YsfNav;