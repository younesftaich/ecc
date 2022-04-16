import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia'
import queryString from 'query-string'
import { PayPalButton } from "react-paypal-button-v2";

const Checkout2 = () => {
  const myapi = process.env.MIX_IPTV
  const finallink = process.env.MIX_CHECKOUT
   const parsed = queryString.parse(location.search);
   const myemail = parsed.email;
   const coupon = parsed.coupon;

   const checkout = parsed.checkout;
   const myplan = parsed.plan;
   const myRef2 = React.createRef();
   const [myemaillink,setEmaillink] = useState("")
   const [checkoutlink,setCheckoutLink] = useState("")
   const [myplanlink,setMyPlanLink] = useState("")
   const [clock,setClock] = useState(false)
   const [lastprice,setLastPrice] = useState(11.99)
   const realtoken = "AYIFpRAUleqqAm9t7rBsCnhK6rTsYw8bMsXl9unIZYsufTKt7qZKMgL1JuJU8ebbNxo2Ger6VR1-ZF75"

   useEffect(() => {
    let emailnk = ""
    let mycoupon = ""
    let plnlink = "1"
      if (myemail){
        emailnk = myemail
    }

      if (myplan){
        plnlink = myplan
      }

      if (coupon){
        mycoupon = coupon
      }

      if (typeof window !== 'undefined') {
        window.location.href = finallink+"?ott&email="+emailnk+"&plan="+plnlink+"&coupon="+mycoupon;
   }


     }, [myplan,myemail]);

     
   return (
      <div className='bg-gray-100 min-h-screen'>

         
      
     

      </div>
   );
};

export default Checkout2;