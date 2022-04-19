import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { PayPalButton } from "react-paypal-button-v2";
import { Head } from '@inertiajs/inertia-react'
import CoinbaseCommerceButton from 'react-coinbase-commerce';


import axios from 'axios';
import queryString from 'query-string'
import { gettoken } from './utils';
const Checkout2 = () => {

    
       
  
    const parsed = queryString.parse(location.search);
    const subid = parsed.subid;
    const [packname,setPackName] = useState("")
    const [paypalready,setpaypalready] = useState(false)
    const [realtoken,settoken] = useState(null)
    const [coinbasetoken,setCoinBase] = useState("")
    const [mycurrency,setCurrency] = useState("")
    const [lastprice,setLastPrice] = useState(11.99)
    const [lastprice2,setLastPrice2] = useState(11.99)
    //const realtoken = gettoken()
    useEffect(() => {
        if ( subid != null){
           
            (async () => {
          
                let checkresult =  axios.get('/api/subunique/'+subid).then(response => response.data);   
                checkresult.then(function(result) {
                    
                    settoken(result.paypaltoken)
                
                    setCoinBase(result.coinbase)
                    setCurrency(result.currency)

                    // if (result.currency == "GBP"){
                    //   //  console.log("GBP")
                    // }
                    // else if (result.currency == "USD"){
                    //   //  console.log("USD")

                    //   window.location.href = '/usd/payment?subid='+subid;


                    // }
                    // else if (result.currency == "EUR"){
                    //   //  console.log("EUR")
                    //   window.location.href = '/eur/payment?subid='+subid;

                    // }
                    setPackName(result.packagename)
                    setLastPrice(result.packageprice)
                    setLastPrice2(result.total)

    
                    })
                     })  ();
        }   
      }, [subid]);
      
    useEffect(() => {
        if ( realtoken != null && mycurrency != ""){
            setpaypalready(true)
        }
        
      }, [realtoken,mycurrency]);
    
   return (
    <div className="font-Poppins font-semibold min-h-screen bg-indigo-100">
  <Head>
<title>Checkout </title>
</Head>
    <div className=" bg-indigo-100   mx-auto pt-8 px-4 sm:px-6 lg:px-8 pb-6">





        <div id="fill-details" className="flex space-x-4 items-center py-2">
            <span className="font-bold md:text-2xl text-center text-xl">Complete Your Order :</span>

        </div>

        <div id="fill-details" className="items-center py-2">
            <p className="  text-left text-base ">You'll receive your details via Email after the payment . </p>
      


        </div>

        
      

        <div className="fill-details gap-10">
            <div className="shadow-md items-center bg-white p-4 md:p-8 rounded-xl">
                <div className="space-y-7 lg:w-8/12 sm:w-full mx-auto">

                <div className="space-y-2">
                   <div className="flex bg-indigo-50 rounded-md py-3 px-5"><span className="flex-1">{packname}</span></div>
                   <div class="space-x-4 ">

         
            </div>

            <div className="flex bg-indigo-50 rounded-md py-3 px-5"><span className="flex-1"></span><span className="mr-7">Total</span><span className="mr-7" ></span><span>{lastprice}</span></div>


            </div>


            <div className='text-left w-full md:w-10/12 '>

<CoinbaseCommerceButton 


onChargeSuccess={() => {

    console.log("ok")
    
    let checkresult =  axios.get('/api/paidsub/'+subid).then(response => response.data);   
    checkresult.then(function(result) {
     
        window.location.href = "/completed";

    })

    

  
      

}}

styled={true} className="text-center" checkoutId={coinbasetoken}/>


</div>

{ paypalready ? (
                <PayPalButton
       amount = {lastprice2}
      shippingPreference="NO_SHIPPING"
       currency={mycurrency}
       options={{
        currency: mycurrency,
         clientId: realtoken
       }}
       
       style={{
        shape: "pill",
        label :"pay"
      }}
       
 


onSuccess={(details, data) => {
    
    let checkresult =  axios.get('/api/paidsub/'+subid).then(response => response.data);   
    checkresult.then(function(result) {
     
        window.location.href = "/completed";

    })

    

  
      

}}
/>
) : ( <h1>Loading ...</h1>)}
                  

<div>
                    
                        <p className="justify-center flex items-center text-gray-500  mt-3">
                            <span className="pr-3">
                                <svg width="24" height="22">
                                    <defs>
                                        <clipPath id="clip_0">
                                            <rect y="0.47216797" width="24" height="20.673714" clip-rule="evenodd"></rect>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_0)">
                                        <path className="money" fill="#1f2937" stroke="none" transform="translate(8.92798 3.99927)" d="M3.71166 0.0417213C3.74124 0.0139949 3.78086 -0.00100222 3.82174 5.20528e-05L5.27214 5.20528e-05C5.31215 -0.000598213 5.35071 0.0147816 5.37893 0.0426492C5.40716 0.0705168 5.42261 0.10847 5.42174 0.147766L5.42174 1.26819C5.87769 1.30678 6.32789 1.39479 6.76414 1.53062C7.43214 1.74041 7.87934 2.04134 8.21294 2.25112C9.51854 3.06905 8.42174 4.86755 6.98094 4.05119C6.67934 3.88148 6.34334 3.72905 5.95534 3.60098C5.79214 3.54755 5.61374 3.50434 5.42174 3.46977L5.42174 5.87641C6.14654 6.05398 6.74494 6.25355 7.20574 6.45784C7.85694 6.74777 8.29294 7.05027 8.52254 7.34962C8.78244 7.67904 8.96198 8.06261 9.04734 8.47084C9.12333 8.85741 9.10094 9.28484 9.04734 9.73977C9.00894 10.0666 8.87694 10.3856 8.69694 10.6968C8.52094 11.0016 8.28414 11.2774 7.95534 11.532C7.63214 11.7826 7.21694 11.9861 6.70574 12.1378C6.28699 12.2562 5.85653 12.3302 5.42174 12.3586L5.42174 13.4719C5.42239 13.5111 5.40686 13.549 5.37869 13.5768C5.35051 13.6046 5.31208 13.6201 5.27214 13.6196L3.82174 13.6196C3.73694 13.6196 3.66414 13.5552 3.66414 13.4719L3.66414 12.3177C3.28894 12.2698 2.89454 12.1983 2.48094 12.0969C1.94814 11.9673 1.39454 11.7221 0.780136 11.4503C-0.718264 10.7863 0.0977359 8.36555 1.90574 9.37991C2.30974 9.60619 2.69214 9.80027 3.06414 9.92834C3.26063 9.99434 3.46099 10.0487 3.66414 10.091L3.66414 7.65291C2.56814 7.41091 1.49454 7.07541 0.747336 6.08148C0.596936 5.88191 0.516136 5.66191 0.447336 5.45134C0.374536 5.23212 0.327336 5.01998 0.313736 4.81255C0.298939 4.60526 0.301615 4.39712 0.321736 4.19027C0.343336 3.99855 0.396936 3.83434 0.447336 3.68348C0.560047 3.32987 0.74731 3.00352 0.996936 2.72569C1.26014 2.43498 1.57134 2.17412 1.94734 1.96434C2.4818 1.66925 3.06167 1.46172 3.66414 1.34991L3.66414 0.147766C3.66497 0.107614 3.68208 0.0694476 3.71166 0.0417213ZM3.66334 3.54362L3.66334 3.54468C3.55385 3.58122 3.44806 3.62769 3.34734 3.68348C3.20574 3.76441 3.09134 3.84848 2.99774 3.96162C2.93534 4.03627 2.85054 4.15412 2.81374 4.26412C2.74974 4.46134 2.73534 4.68448 2.83054 4.86991C2.91614 5.03727 3.05774 5.16141 3.23134 5.26277C3.36845 5.33985 3.5132 5.40304 3.66334 5.45134L3.66334 3.54468L3.66414 3.54441L3.66334 3.54362ZM5.42174 8.05362C5.61374 8.10784 5.80014 8.16362 5.98014 8.23434C6.30094 8.35927 6.69694 8.63191 6.78894 8.92105C6.86414 9.16069 6.85054 9.43727 6.70574 9.63369C6.38734 10.0643 5.99534 10.1601 5.52174 10.2143C5.49054 10.2183 5.45374 10.2198 5.42174 10.2222L5.42174 8.05362Z" fill-rule="evenodd"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip_1">
                                            <rect y="0.47216797" width="24" height="20.673714" clip-rule="evenodd"></rect>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_1)">
                                        <path fill="#1f2937" fill-opacity="0.49803922" stroke="none" transform="translate(0 0.472168)" d="M13.4752 0C7.672 0 2.9496 4.6365 2.9496 10.3369C2.9688 10.4579 2.9784 10.5883 2.9832 10.7297L1.032 8.82279L0 9.83714L3.7672 13.5371L7.5336 9.83714L6.508 8.82279L4.6 10.6873L4.6 10.0171C4.768 5.33893 8.6696 1.62014 13.4752 1.62014C18.3872 1.62014 22.3496 5.51179 22.3496 10.3369C22.3534 12.6497 21.4197 14.8689 19.7546 16.5044C18.0895 18.1399 15.8301 19.0571 13.4752 19.0536L13.4752 20.6737C19.28 20.6737 24 16.0364 24 10.3369C24 4.6365 19.2792 0 13.4752 0Z"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip_2">
                                            <rect x="-740" y="-508" width="1440" height="4191" clip-rule="evenodd"></rect>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_2)">
                                        <path fill="#1f2937" fill-opacity="0.49803922" stroke="none" transform="translate(0.522461 15.6223)" d="M0.1344 1.31686C0.1664 1.09921 0.228 0.908286 0.3208 0.743286C0.494044 0.426304 0.787521 0.189166 1.1376 0.0832857C1.316 0.0282857 1.5072 0 1.712 0C1.9248 0 2.1184 0.0306429 2.2896 0.0895714C2.4616 0.149286 2.608 0.231786 2.7296 0.337857C2.97439 0.547849 3.11253 0.853113 3.1072 1.17229C3.1072 1.31686 3.0912 1.44414 3.0576 1.55414C3.00268 1.76027 2.86884 1.9376 2.684 2.04914C2.58687 2.10816 2.48294 2.15563 2.3744 2.19057C2.652 2.277 2.8584 2.40743 2.9952 2.58343C3.1312 2.75943 3.2008 2.98021 3.2008 3.24657C3.2008 3.47286 3.1576 3.67321 3.0728 3.84686C2.99069 4.01571 2.87255 4.16524 2.7264 4.28529C2.5824 4.40314 2.4136 4.4935 2.2224 4.55321C2.0265 4.61519 1.82181 4.64622 1.616 4.64514C1.384 4.64514 1.1808 4.61843 1.008 4.56657C0.678023 4.47021 0.399157 4.25155 0.2304 3.95686C0.134867 3.79373 0.0576157 3.62091 0 3.44143L0.3488 3.3C0.429278 3.2635 0.519481 3.25304 0.6064 3.27014C0.6864 3.28743 0.7448 3.32986 0.7816 3.39743C0.8192 3.4705 0.8616 3.54357 0.9072 3.61429C0.9528 3.685 1.008 3.74864 1.072 3.80443C1.21972 3.93077 1.41062 3.99757 1.6064 3.99143C1.7416 3.99143 1.8584 3.97021 1.9584 3.927C2.05278 3.88808 2.13821 3.8309 2.2096 3.75886C2.33833 3.62826 2.41009 3.45348 2.4096 3.27171C2.4096 3.1625 2.3984 3.0635 2.3744 2.97471C2.3512 2.88534 2.29965 2.80554 2.2272 2.74686C2.13256 2.67468 2.02268 2.6242 1.9056 2.59914C1.72133 2.55875 1.53275 2.54054 1.344 2.54493L1.344 1.99257C1.5384 1.99021 1.6992 1.97293 1.8272 1.93914C1.9552 1.90536 2.0568 1.85821 2.1328 1.79929C2.20532 1.74373 2.26026 1.66907 2.2912 1.584C2.32223 1.49503 2.33738 1.40146 2.336 1.30743C2.336 1.09293 2.2752 0.931072 2.1536 0.820286C2.032 0.708714 1.8696 0.653714 1.6672 0.653714C1.57918 0.652673 1.4916 0.665947 1.408 0.693C1.25688 0.742143 1.12643 0.838784 1.0368 0.968C0.993704 1.03165 0.961292 1.10169 0.9408 1.17543C0.9048 1.27129 0.8568 1.33571 0.7984 1.36636C0.74 1.39779 0.6576 1.40564 0.5504 1.38914L0.1344 1.31686ZM6.9232 3.355Q7.0528 2.91657 7.0528 2.32257C7.0528 1.925 7.0096 1.57929 6.9232 1.28857C6.8376 0.997071 6.7176 0.755857 6.5656 0.565714C6.412 0.374786 6.232 0.232571 6.024 0.139857C5.816 0.0471429 5.5912 0 5.3504 0C5.1088 0 4.8864 0.0463571 4.68 0.139857C4.4736 0.232571 4.296 0.374786 4.144 0.565714C3.97933 0.781968 3.85873 1.02741 3.7888 1.28857C3.7032 1.58007 3.6608 1.92421 3.6608 2.32257C3.65456 2.67088 3.69764 3.01834 3.7888 3.355C3.85876 3.61663 3.97936 3.86258 4.144 4.07943C4.28492 4.26191 4.46886 4.40805 4.68 4.50529C4.8864 4.598 5.1088 4.64514 5.3504 4.64514C5.592 4.64514 5.816 4.598 6.024 4.50529C6.23678 4.40819 6.42257 4.2621 6.5656 4.07943C6.73069 3.86252 6.85206 3.61664 6.9232 3.355ZM6.2376 2.32336C6.2376 1.99336 6.212 1.7215 6.1632 1.50621C6.12732 1.32458 6.0608 1.15011 5.9664 0.99C5.89929 0.876297 5.80121 0.783237 5.6832 0.721286C5.47562 0.617449 5.22998 0.617449 5.0224 0.721286C4.90523 0.783265 4.8082 0.876388 4.7424 0.99C4.64885 1.14991 4.58341 1.32416 4.5488 1.50543C4.5008 1.7215 4.4768 1.99336 4.4768 2.32257C4.4768 2.651 4.5008 2.92364 4.5488 3.13971C4.5968 3.355 4.6616 3.52707 4.7424 3.65514C4.8082 3.76875 4.90523 3.86188 5.0224 3.92386C5.22998 4.02769 5.47562 4.02769 5.6832 3.92386C5.80121 3.86191 5.89929 3.76885 5.9664 3.65514C6.06079 3.49531 6.1273 3.32109 6.1632 3.13971C6.212 2.92364 6.2368 2.651 6.2368 2.32257L6.2376 2.32336Z" fill-rule="evenodd"></path>
                                    </g>
                                </svg>
                            </span>


                            <span>You're 100% backed by our 30-day money-back guarantee.</span>
                        </p>
                    </div>
                </div>
            </div>




        
        </div>
    </div>





</div>
   );
};

export default Checkout2;