import React from 'react';

const footer = () => {
    return (
        <div>
            <footer className="bg-gray-50 pt-16 pb-12 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20">
  <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
    <ul className="text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
      <li className="pr-5">
        <img className="  md:h-14 lg:h-12 w-9/12 h-9" src={"https://res.cloudinary.com/luxiptv/image/upload/v1644506861/75_3_c4djzs.png"}  />

        <p className="text-gray-600 mt-3">
        Luxury Hosting UK is a wordpress web hosting company owned by PRESETS PACKS LTD. It is one of the famous web hosts, hosting over 800 domains.

Luxury Hosting UK was among those studied in the analysis of web-based hosting services in collaborative online learning programs
        </p>
      </li>
      <li className="space-y-5 row-span-2">
        <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">Our programs</h2>
        <ul className="space-y-4 text-gray-500">
          <li>
            <a className="hover:text-gray-900 transition-colors duration-200" href="/#">
              <span className="hover:text-gray-900 transition-colors duration-200">Affiliates</span>
              <span className="bg-gray-700 py-0 px-1 rounded-full text-xs text-white">beta</span>
            </a>
          </li>
          <li><a className="hover:text-gray-900 transition-colors duration-200" href="/#">Resellers</a></li>
        </ul>
      </li>
      <li className="space-y-5 row-span-2">
        <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">Quick links</h2>
        <ul className="space-y-4 text-gray-500">
          <li><a className="hover:text-gray-900 transition-colors duration-200" href="/">Home</a></li>
          <li><a className="hover:text-gray-900 transition-colors duration-200" href="/#">Installation tutorials</a></li>
          <li><a className="hover:text-gray-900 transition-colors duration-200" href="/checkout">Checkout</a></li>
          <li><a className="hover:text-gray-900 transition-colors duration-200" href="/">Contact us</a></li>
        </ul>
      </li>
      <li className="space-y-5 row-span-2">
        <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">Legal</h2>
        <ul className="space-y-4 text-gray-500">
          <li><a className="hover:text-gray-900 transition-colors duration-200" href="/">Terms</a></li>
          <li><a className="hover:text-gray-900 transition-colors duration-200" href="/">Privacy</a></li>
          <li><a className="hover:text-gray-900 transition-colors duration-200" href="/">Copyrights</a></li>
        </ul>
      </li>
    </ul>
    <div className="text-sm text-center py-5">
      © 2012-2021 <a className="text-green-700" href="/">Luxury Hosting UK</a>, All Rights Reserved
    </div>
  </div>
</footer>

        </div>
    );
};

export default footer;