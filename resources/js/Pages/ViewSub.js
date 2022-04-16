
import {CopyToClipboard} from 'react-copy-to-clipboard';

import queryString from 'query-string'
import Header from './Nav'
import Footer from './Footer'
import React, { useEffect,useState } from 'react';
import axios from "axios";




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
                  <span className='text-gray-900'>SN-{id}</span>
                  . <span className="text-sm text-gray-500">Expires at {expirationdate}</span>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 flex-shrink flex space-x-2">
                <a href={"/extend?uniqueid="+uniqueid} className="rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:text-sm">Extend</a>
                <a href="https://netflytv.com/subscription/06a27a69-be61-4734-80b4-9021d158ffc0/show" className="rounded-md border border-gray-300 shadow-sm px-4 py-1 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:mt-0 sm:text-sm">View</a>
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
    
     


 

    return (
        <div>
        
          <Header />
           
           
          <main>
        <div className="md:px-9 px-8 max-w-4xl mx-auto py-8">
        <h2 className="flex-1 uppercase text-xl sm:text-3xl md:text-4xl text-gray-600">SN-{subscriptions['id4k']} </h2>
        
        <h2 className="flex-1 uppercase text-xl sm:text-2xl  text-gray-600">Start Date: {subscriptions['startdate']} </h2>
          <div className="flex items-center mb-10">
         
            <h2 className="flex-1 uppercase text-xl sm:text-2xl  text-gray-600">Expiration Date: {subscriptions['expiredate']} </h2>
            <div className="flex-shrink">
              <a href="account" className="text-sm md:text-lg cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 focus:outline-none transition-colors duration-200">
                Back to list
              </a>
            </div>
          </div>
          <div className={isPaid ? " grid mb-5 rounded-md overflow-hidden grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-x-0 divide-purple-600" : "hidden"}>
            <a href={"/extend?uniqueid="+subscriptions['uniqueid']}  className="md:text-lg cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 text-center duration-500 transition-colors" style={{outline: 'none'}}>Extend</a>
            <a href={"editchannels?uniqueid="+subscriptions['uniqueid']}  className="md:text-lg cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 text-center duration-500 transition-colors" style={{outline: 'none'}}>Edit Channels List</a>
            <a href="account" className="md:text-lg cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 text-center duration-500 transition-colors" style={{outline: 'none'}}>Back to list</a>
            
          </div>
          <div className={!isPaid ? "grid mb-5 rounded-md overflow-hidden grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-x-0 divide-purple-600" : "hidden"}>
            <a href={"/extend?uniqueid="+subscriptions['uniqueid']}  className="md:text-lg cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 text-center duration-500 transition-colors" style={{outline: 'none'}}>WAITING FOR PAYMENT
</a>
            <a href={"/extend?uniqueid="+subscriptions['uniqueid']} className="md:text-lg cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 text-center duration-500 transition-colors" style={{outline: 'none'}}>PAY THIS INVOICE
</a>
            
          </div>
       
          <div className={isPaid ? "grid mb-5 rounded-md overflow-hidden grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-x-0 divide-green-600" : "hidden"}>
            <a href="#" className="md:text-lg cursor-pointer bg-green-500 hover:bg-green-600 text-white px-4 py-3 text-center duration-500 transition-colors" style={{outline: 'none'}}>STATUS
</a>
            <a href="#" className="md:text-lg cursor-pointer bg-green-600 hover:bg-green-700 text-white px-4 py-3 text-center duration-500 transition-colors" style={{outline: 'none'}}>{subscriptions['status']}
</a>
            
          </div>
       
        
          <div className = {  subscriptions['status'] != "Active" || type != "mag" ? "hidden" : ""}>
          <h2 className="mb-2 mt-5 text-lg text-gray-600">Mag Portal Details: </h2>
          <div className="border border-gray-200 px-4 py-5 sm:px-6 rounded-md">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3">

            <CopyToClipboard text={macadd}
          onCopy={() => setCurrentCopy("macadd")}>
                <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Mac Address</dt>
                <dd className="mt-1 text-sm text-gray-900 truncate overflow-hidden">
                  <a data-clipboard-target="#m3u-username" className="mr-2 text-sm cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 focus:outline-none transition-colors duration-200 clipboard">{currentCopy === "macadd" ? "Copied Sucessfully"  : userCopytxt}</a>
                  <span id="m3u-username">{macadd}</span>
                </dd>
              </div>
        </CopyToClipboard>

        <CopyToClipboard text={portal}
          onCopy={() => setCurrentCopy("portal")}>
              <div>
                <dt className="text-sm font-medium text-gray-500">Portal Url :</dt>
                <dd className="mt-1 text-sm text-gray-900 truncate overflow-hidden">
                  <a data-clipboard-target="#dns_line" className="mr-2 text-sm cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 focus:outline-none transition-colors duration-200 clipboard">{currentCopy === "portal" ? "Copied Sucessfully"  : hostCopytxt}</a>
                  <span id="dns_line">{portal}</span>
                </dd>
              </div>

              </CopyToClipboard>

            </dl>
          </div>

          </div>




            <div className = {subscriptions['status'] != "Active" || type != "m3u" ? "hidden" : ""}>
          <h2 className="mb-2 mt-5 text-lg text-gray-600">Xtream Codes Login: <span className="bg-purple-400 rounded-md text-white text-xs px-2">Recommended</span></h2>
          <div className="border border-gray-200 px-4 py-5 sm:px-6 rounded-md">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 md:grid-cols-3">

            <CopyToClipboard text={user}
          onCopy={() => setCurrentCopy("user")}>
                <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Username</dt>
                <dd className="mt-1 text-sm text-gray-900 truncate overflow-hidden">
                  <a data-clipboard-target="#m3u-username" className="mr-2 text-sm cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 focus:outline-none transition-colors duration-200 clipboard">{currentCopy === "user" ? "Copied Sucessfully"  : userCopytxt}</a>
                  <span id="m3u-username">{user}</span>
                </dd>
              </div>
        </CopyToClipboard>

        <CopyToClipboard text={pass}
          onCopy={() => setCurrentCopy("pass")}>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Password</dt>
                <dd className="mt-1 text-sm text-gray-900 truncate overflow-hidden">
                  <a data-clipboard-target="#m3u-password" className="mr-2 text-sm cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 focus:outline-none transition-colors duration-200 clipboard">{currentCopy === "pass" ? "Copied Sucessfully"  : passCopytxt}</a>
                  <span id="m3u-password">{pass}</span>
                </dd>
              </div>

              
        </CopyToClipboard>
        <CopyToClipboard text={host}
          onCopy={() => setCurrentCopy("host")}>
              <div>
                <dt className="text-sm font-medium text-gray-500">URL / Host / Server:</dt>
                <dd className="mt-1 text-sm text-gray-900 truncate overflow-hidden">
                  <a data-clipboard-target="#dns_line" className="mr-2 text-sm cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 focus:outline-none transition-colors duration-200 clipboard">{currentCopy === "host" ? "Copied Sucessfully"  : hostCopytxt}</a>
                  <span id="dns_line">{host}</span>
                </dd>
              </div>

              </CopyToClipboard>

            </dl>
          </div>
          <h2 className="mb-2 mt-5 text-lg text-gray-600">M3U File URL: <span className="bg-purple-500 rounded-md text-white text-xs px-2">Not recommended</span></h2>
          <div className="border border-gray-200 px-4 py-5 sm:px-6 rounded-md">
            <dl className="space-y-3">
          
        <CopyToClipboard text={m3ulink}
          onCopy={() => setCurrentCopy("m3u")}>
             
              <div>
                <dt className="text-sm font-medium text-gray-500">m3u file url</dt>
                <dd className="mt-1 text-sm text-gray-900 truncate overflow-hidden">
                  <a data-clipboard-text={m3ulink} className="md:inline hidden mr-1 text-sm cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 focus:outline-none transition-colors duration-200 clipboard">
                  {currentCopy === "m3u" ? "Copied Sucessfully"  : m3uCopytxt}
                  </a>
                  <a data-clipboard-text={m3ulink} className="md:hidden mr-1 text-sm cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 focus:outline-none transition-colors duration-200 clipboard">
                  {currentCopy === "m3u" ? "Copied Sucessfully"  : m3uCopytxt}  
                  </a>
                  <span id="m3u-url">{m3ulink}</span>
                </dd>
              </div>
              </CopyToClipboard>


              <CopyToClipboard text={epg}
          onCopy={() => setCurrentCopy("epg")}>
              <div>
                <dt className="text-sm font-medium text-gray-500">EPG url</dt>
                <dd className="mt-1 text-sm text-gray-900 truncate overflow-hidden">
                  <a data-clipboard-text={epg} className="md:inline hidden mr-1 text-sm cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 focus:outline-none transition-colors duration-200 clipboard">
                  {currentCopy === "epg" ? "Copied Sucessfully"  : epgCopytxt}

                  </a>
                  <a data-clipboard-text={epg} className="md:hidden mr-1 text-sm cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-1 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 focus:outline-none transition-colors duration-200 clipboard">
                  {currentCopy === "epg" ? "Copied Sucessfully"  : epgCopytxt}
                 
                  </a>
                  <span id="epg-url">{epg}</span>
                </dd>
              </div>

              </CopyToClipboard>
              <div>
                <dt className="text-sm font-medium text-gray-500">Why not recommended ?</dt>
                <div className="mt-1 text-sm text-gray-900">
                  <dd>
                    If you are trying to use m3u file, it may not work because m3u file is too big (100.22 MB) so it is better to use Xtream codes login.<br />
                    <span className="bg-purple-500 rounded-md text-white text-xs px-2">Solution:</span> You can reduce the file size by removing some channels and VODs that you don't need by contacting us from <a className="underline text-primary" href="https://api.whatsapp.com/send/?phone=212651160756&text&app_absent=0">here</a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
          </div>





          <div className="border border-gray-200 px-4 py-5 sm:px-6 rounded-md">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Subscription number</dt>
                <dd className="mt-1 text-sm text-gray-900">#SN-{subscriptions['id4k']}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Payment method</dt>
                <dd className="mt-1 text-sm text-gray-900">PayPal / Credit Card</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Expires at</dt>
                <dd className="mt-1 text-sm text-gray-900">{subscriptions['expiredate']}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1 text-sm text-gray-900">{subscriptions['status']}</dd>
              </div>
         
            </dl>
          </div>



          <h2 className="mb-2 mt-5 text-lg text-gray-600">FAQ:</h2>
          <section className="text-gray-700">
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="space-y-4">
                <details className="bg-gray-100 rounded-md py-2 px-4">
                  <summary className="font-semibold cursor-pointer">
                    Can i use my subscription on multiple devices?
                  </summary>
                  <span className="pt-2 text-sm text-gray-500 inline-block">
                    1 subscription can be used on multiple devices but you can watch only on 1 device at the same time.
                  </span>
                </details>
                <details className="bg-gray-100 rounded-md py-2 px-4">
                  <summary className="font-semibold cursor-pointer">
                    How can I install IPTV on my device?
                  </summary>
                  <span className="pt-2 text-sm text-gray-500 inline-block">
                    Check the installation tutorials <a className="underline text-purple-500" href="/how-to-install-iptv-in-my-device">here</a>, if there is any issue, feel free to contact us via whatsapp or telegram
                  </span>
                </details>
              </div>
              <div className="space-y-4">
                <details className="bg-gray-100 rounded-md py-2 px-4">
                  <summary className="font-semibold cursor-pointer">
                    Can I use a VPN? Or use my subscription in multiple countries?
                  </summary>
                  <span className="pt-2 text-sm text-gray-500 inline-block">
                    1 subscription can be used in one country, so if you change your country, you must contact us via whatsapp or telegram to update your subscription country.
                  </span>
                </details>
              </div>
            </div>
          </section>
          
       
        </div>
      </main>
    <Footer />
        </div>
    );
}

export default Account;