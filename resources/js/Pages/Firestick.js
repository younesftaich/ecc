import React from 'react';
import Nav from './Nav'
import Foot from './Footer'

const how = () => {
    return (
        <div>
            <Nav />
            <main>
  <section className="pt-8 pt-md-11 pb-8 pb-md-14">
    <div className="px-12">
      <div className="row align-items-center">
        <div className="col-12 col-md">
          <h1 className="text-4xl lg:text-6xl mb-1 mt-5 font-semibold">
            How to install iptv on firestick firetv
          </h1>
          <a href="/installation" className="text-blue-500 text-sm pb-3 flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <span>Return to back</span>
          </a>
        </div>
      </div>
      <hr className="my-6 my-md-8" />
      <div className="grid gap-4 grid-cols-12">
        <div className="col-span-12 md:col-span-8 mb-md-0 mb-5 leading-8">
          <div className="rounded-md bg-blue-50 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Our service is compatible with any application, and this is the recommendation applications
                </h3>
              </div>
            </div>
          </div>
          <h3 className="mb-3 text-lg font-semibold">
            IPTV Smarters PRO Application
          </h3>
          <p className="text-gray-800">
            You can download the APK of IPTV smarters pro via direct link by Downloader app in Fire TV, follow these steps:
          </p>
          <p className="text-gray-800">
            1- Install Downloader on your Amazon Fire TV.
          </p>
          <p className="text-gray-800">
            2- Select the nav tabs from the home screen by pressing up, and scroll right to reach Settings. From this menu, select Device. Next, pick Developer Options and you should see a sub-menu that includes the entry ‘Apps from Unknown Sources’. Select it, making sure it reads ON underneath.
          </p>
          <p className="text-gray-800">
            3- go back to the Downloader app. On the app’s initial page you’ll see a white box into which you can type a URL. Select it and type in: <br /> <span className="text-blue-500">firesticktricks.com/smarter</span><br /> Then install it.
          </p>
          <img className="my-3 rounded-md" src="https://thenetflytv.com/images/how-to-install-iptv/firestick-fire-tv-application-iptv.png" alt="Firestick Fire Tv Application Iptv" />
          <p className="text-gray-800">
            4- Open IPTV Smarters PRO and click Login with Xtream Codes API
          </p>
          <img className="my-3 rounded-md" src="https://res.cloudinary.com/luxiptv/image/upload/v1644951377/smarters-iptv-pro-application-interface_1_puaryt.jpg" alt="IPTV Smarters PRO Application Interface" />
          <p className="text-gray-800">
            5- Enter Xtream connection details <br />
            For the first field Choose a name for your list (it can be any name ), Then enter your username, password and URL we provided to you and click ADD USER
          </p>
          <img className="my-3 rounded-md" src="https://res.cloudinary.com/luxiptv/image/upload/v1644951424/smarters-pro-user-login_1_rtcban.jpg" alt="IPTV Smarters PRO Application LOGIN" />
          <p className="text-gray-800">
            6- It will start downloading channels and VOD about 10 seconds then you will be logged in and you will see this page
          </p>
          <img className="my-3 rounded-md" src="https://res.cloudinary.com/luxiptv/image/upload/v1644951453/smarters-pro-application-running_1_qcfu0g.jpg" alt="IPTV Smarters PRO Application Running" />
        </div>
        <div className="col-span-12 md:col-span-4" id="contact-us">
          <div className="rounded-md p-5" style={{borderWidth: '1px'}}>
            <h4>
              Need an IPTV Subscription ? <a href="/checkout" className="text-blue-500 underline">Order Now</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>


            <Foot />
        </div>
    );
};

export default how;