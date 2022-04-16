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
            How to install iptv on mag box
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
          <h3 className="mb-3">
            MAG BOX
          </h3>
          <p className="text-gray-800">
            Connect MAG DEVICE to TV and the Internet. Then do as follows
          </p>
          <p className="text-gray-800">
            1- Go to Settings—&gt; System Settings —&gt; Servers—&gt;Portals
          </p>
          <p className="text-gray-800">
            2- Set Portal 1: IPTV
          </p>
          <p className="text-gray-800">
            3- Set Portal 1 URL ( see your <a className="underline text-blue-500" href="https://thenetflytv.com/dashboard">subscription details</a> ), <a className="text-blue-500 underline" href="https://thenetflytv.com/contact-us">Order Now</a> if you don't find it
          </p>
          <p className="text-gray-800">
            4- Set Portal 2 Name leave this empty add this only If you order the second subscription
          </p>
          <p className="text-gray-800">
            5- Set Portal 2 URL leave this empty add this only If you order the second subscription
          </p>
          <p className="text-gray-800">
            6- Save everything
          </p>
          <p className="text-gray-800">
            7- Reboot device
          </p>
          <p className="text-gray-800">
            After the box is restarted, wait until the TV screen shows the channels.
          </p>
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