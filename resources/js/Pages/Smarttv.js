import React from 'react';
import Nav from './Nav'
import Foot from './Footer'

const how = () => {
    return (
        <div>
            <Nav />
            <main>
  <section className="pt-8 pt-md-11 pb-8 pb-md-14">
    <div className=" px-12">
      <div className="row align-items-center">
        <div className="col-12 col-md">
          <h1 className="text-4xl lg:text-6xl mb-1 mt-5 font-semibold">
            How to install iptv on smart tv
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
            IBO Player Application
          </h3>
          <p className="mb-2 text-gray-800">1 – Go to the Samsung or LG Smart TV app store screen and search for "IBO Player" application If the app is not displayed on the main screen you may have to search for it in ‘All Apps’ or ‘Updates’. If you still can't find it please Order Now.</p>
          <p className="mb-2 text-gray-800">2 – Launch the "IBO Player" app and make a note of the ‘Device ID’ and ‘Device Key’ which is displayed on the screen.</p>
          <img className="my-3 rounded-md" src="https://thenetflytv.com/images/how-to-install-iptv/welcome-ibo-player.jpg" alt="IBO Player Details" />
          <p className="mb-2 text-gray-800">3 – Navigate to <a className="text-blue-500 underline" href="https://iboiptv.com/device/login" target="_blank">https://iboiptv.com/device/login</a> and Enter Device ID and Device key you noted in step 1, Then click on Login.</p>
          <img className="my-3 rounded-md" src="https://thenetflytv.com/images/how-to-install-iptv/ibo-player-manage-playlist.png" alt="IBO Player Login Interface" />
          <p className="mb-2 text-gray-800">4 – Click (add XC Playlist) button and Fill your Xtream connection details (check your email for this details). <br /> Enter Username , Password and Host (Server URL of xtream connection). Click on Save</p>
          <img className="my-3 rounded-md" src="https://thenetflytv.com/images/how-to-install-iptv/ibo-player-panel.png" alt="IBO Player Login Interface" />
          <p className="mb-2 text-gray-800">5 – Then back to IBO Player application and choose Refresh to reload Playlists , Then the playlist name must appears</p>
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