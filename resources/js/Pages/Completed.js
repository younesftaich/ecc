import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { PayPalButton } from "react-paypal-button-v2";

import { Head } from '@inertiajs/inertia-react'
import axios from 'axios';
import queryString from 'query-string'
const Checkout2 = () => {
    const parsed = queryString.parse(location.search);
    const order = parsed.order;
    const [orderid,setorder] = useState("")
    const [packageprice,setprice] = useState("")
    const [email,setemail] = useState("Grina2iris@outlook.com")
    

    
    
   return (
    <div className="font-Poppins font-semibold min-h-screen bg-indigo-100">
   <Head>
<title>Order Completed </title>
</Head>
 <div className=" bg-indigo-100 justify-center  mx-auto pt-8 px-4 sm:px-6 lg:px-8 pb-6">
            <div class='flex items-center justify-center'>
     <Icon className="justify-center" icon="bi:check-circle-fill" color="#4ef530" width="150" height="150" />
</div>
            <div class='flex items-center justify-center'>
            <h1 className="justify-center mt-2 text-2xl"> 
      Your order has been placed successfully </h1>
      
</div>

<div class='flex items-center justify-center'>
            <h2 className="justify-center mt-2 text-lg font-thin"> 
      The activation process takes a few minutes / hours , you'll receive an email once done .  </h2>
      
</div>



       
       

   </div>






</div>
   );
};

export default Checkout2;