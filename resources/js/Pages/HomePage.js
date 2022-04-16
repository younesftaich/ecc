import React from 'react';
import Nav from './Nav'
import Foot from './Footer'

const home = () => {
    return (

<div>


<Nav />
       <main className="font-press">
  <div className="space-y-4  md:space-y-6 overflow-hidden">
    <div className="py-8 px-12 sm:pb-14 md:pb-16 lg:pb-20">
      <div className="grid grid-cols-2 px-12 items-center">
        <div className="col-span-2 lg:col-span-1 max-w-3">
          <h1 className="text-7xl leading-none font-extrabold tracking-tight text-gray-900 mb-6 sm:mb-10 select-none">
            <p className="md:text-8xl">Stable</p>
            <p>IPTV</p>
            <p className="text-green-700">provider</p>
          </h1>
          <p className="mb-4 leading-9">Today, we are revolutionizing the way you access the television. With +88,921 channels &amp; vods, you'll be watching IPTV in a radically new, intelligent, and intuitive way.</p>
          <a href="/checkout" className="mr-2 mt-2 flex-none bg-green-600 hover:bg-green-700 text-white text-lg leading-6 font-semibold py-4 px-6 border border-transparent rounded-xl focus:outline-none transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-600" type="submit">See pricing</a>
          <a href="/checkout" className="mr-2 mt-2 flex-none bg-gray-800 hover:bg-gray-900 text-white text-lg leading-6 font-semibold py-4 px-6 border border-transparent rounded-xl focus:outline-none transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black" type="submit">Channels</a>
          <div className="text-sm block pt-3 pl-1 text-gray-600 font-light flex space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={24} height={22}>
              <defs>
                <clipPath id="clip_0">
                  <rect y="0.47216797" width={24} height="20.673714" clipRule="evenodd" />
                </clipPath>
              </defs>
              <g clipPath="url(#clip_0)">
                <path className="money" fill="#1f2937" stroke="none" transform="translate(8.92798 3.99927)" d="M3.71166 0.0417213C3.74124 0.0139949 3.78086 -0.00100222 3.82174 5.20528e-05L5.27214 5.20528e-05C5.31215 -0.000598213 5.35071 0.0147816 5.37893 0.0426492C5.40716 0.0705168 5.42261 0.10847 5.42174 0.147766L5.42174 1.26819C5.87769 1.30678 6.32789 1.39479 6.76414 1.53062C7.43214 1.74041 7.87934 2.04134 8.21294 2.25112C9.51854 3.06905 8.42174 4.86755 6.98094 4.05119C6.67934 3.88148 6.34334 3.72905 5.95534 3.60098C5.79214 3.54755 5.61374 3.50434 5.42174 3.46977L5.42174 5.87641C6.14654 6.05398 6.74494 6.25355 7.20574 6.45784C7.85694 6.74777 8.29294 7.05027 8.52254 7.34962C8.78244 7.67904 8.96198 8.06261 9.04734 8.47084C9.12333 8.85741 9.10094 9.28484 9.04734 9.73977C9.00894 10.0666 8.87694 10.3856 8.69694 10.6968C8.52094 11.0016 8.28414 11.2774 7.95534 11.532C7.63214 11.7826 7.21694 11.9861 6.70574 12.1378C6.28699 12.2562 5.85653 12.3302 5.42174 12.3586L5.42174 13.4719C5.42239 13.5111 5.40686 13.549 5.37869 13.5768C5.35051 13.6046 5.31208 13.6201 5.27214 13.6196L3.82174 13.6196C3.73694 13.6196 3.66414 13.5552 3.66414 13.4719L3.66414 12.3177C3.28894 12.2698 2.89454 12.1983 2.48094 12.0969C1.94814 11.9673 1.39454 11.7221 0.780136 11.4503C-0.718264 10.7863 0.0977359 8.36555 1.90574 9.37991C2.30974 9.60619 2.69214 9.80027 3.06414 9.92834C3.26063 9.99434 3.46099 10.0487 3.66414 10.091L3.66414 7.65291C2.56814 7.41091 1.49454 7.07541 0.747336 6.08148C0.596936 5.88191 0.516136 5.66191 0.447336 5.45134C0.374536 5.23212 0.327336 5.01998 0.313736 4.81255C0.298939 4.60526 0.301615 4.39712 0.321736 4.19027C0.343336 3.99855 0.396936 3.83434 0.447336 3.68348C0.560047 3.32987 0.74731 3.00352 0.996936 2.72569C1.26014 2.43498 1.57134 2.17412 1.94734 1.96434C2.4818 1.66925 3.06167 1.46172 3.66414 1.34991L3.66414 0.147766C3.66497 0.107614 3.68208 0.0694476 3.71166 0.0417213ZM3.66334 3.54362L3.66334 3.54468C3.55385 3.58122 3.44806 3.62769 3.34734 3.68348C3.20574 3.76441 3.09134 3.84848 2.99774 3.96162C2.93534 4.03627 2.85054 4.15412 2.81374 4.26412C2.74974 4.46134 2.73534 4.68448 2.83054 4.86991C2.91614 5.03727 3.05774 5.16141 3.23134 5.26277C3.36845 5.33985 3.5132 5.40304 3.66334 5.45134L3.66334 3.54468L3.66414 3.54441L3.66334 3.54362ZM5.42174 8.05362C5.61374 8.10784 5.80014 8.16362 5.98014 8.23434C6.30094 8.35927 6.69694 8.63191 6.78894 8.92105C6.86414 9.16069 6.85054 9.43727 6.70574 9.63369C6.38734 10.0643 5.99534 10.1601 5.52174 10.2143C5.49054 10.2183 5.45374 10.2198 5.42174 10.2222L5.42174 8.05362Z" fillRule="evenodd" />
              </g>
              <defs>
                <clipPath id="clip_1">
                  <rect y="0.47216797" width={24} height="20.673714" clipRule="evenodd" />
                </clipPath>
              </defs>
              <g clipPath="url(#clip_1)">
                <path fill="#1f2937" fillOpacity="0.49803922" stroke="none" transform="translate(0 0.472168)" d="M13.4752 0C7.672 0 2.9496 4.6365 2.9496 10.3369C2.9688 10.4579 2.9784 10.5883 2.9832 10.7297L1.032 8.82279L0 9.83714L3.7672 13.5371L7.5336 9.83714L6.508 8.82279L4.6 10.6873L4.6 10.0171C4.768 5.33893 8.6696 1.62014 13.4752 1.62014C18.3872 1.62014 22.3496 5.51179 22.3496 10.3369C22.3534 12.6497 21.4197 14.8689 19.7546 16.5044C18.0895 18.1399 15.8301 19.0571 13.4752 19.0536L13.4752 20.6737C19.28 20.6737 24 16.0364 24 10.3369C24 4.6365 19.2792 0 13.4752 0Z" />
              </g>
              <defs>
                <clipPath id="clip_2">
                  <rect x={-740} y={-508} width={1440} height={4191} clipRule="evenodd" />
                </clipPath>
              </defs>
              <g clipPath="url(#clip_2)">
                <path fill="#1f2937" fillOpacity="0.49803922" stroke="none" transform="translate(0.522461 15.6223)" d="M0.1344 1.31686C0.1664 1.09921 0.228 0.908286 0.3208 0.743286C0.494044 0.426304 0.787521 0.189166 1.1376 0.0832857C1.316 0.0282857 1.5072 0 1.712 0C1.9248 0 2.1184 0.0306429 2.2896 0.0895714C2.4616 0.149286 2.608 0.231786 2.7296 0.337857C2.97439 0.547849 3.11253 0.853113 3.1072 1.17229C3.1072 1.31686 3.0912 1.44414 3.0576 1.55414C3.00268 1.76027 2.86884 1.9376 2.684 2.04914C2.58687 2.10816 2.48294 2.15563 2.3744 2.19057C2.652 2.277 2.8584 2.40743 2.9952 2.58343C3.1312 2.75943 3.2008 2.98021 3.2008 3.24657C3.2008 3.47286 3.1576 3.67321 3.0728 3.84686C2.99069 4.01571 2.87255 4.16524 2.7264 4.28529C2.5824 4.40314 2.4136 4.4935 2.2224 4.55321C2.0265 4.61519 1.82181 4.64622 1.616 4.64514C1.384 4.64514 1.1808 4.61843 1.008 4.56657C0.678023 4.47021 0.399157 4.25155 0.2304 3.95686C0.134867 3.79373 0.0576157 3.62091 0 3.44143L0.3488 3.3C0.429278 3.2635 0.519481 3.25304 0.6064 3.27014C0.6864 3.28743 0.7448 3.32986 0.7816 3.39743C0.8192 3.4705 0.8616 3.54357 0.9072 3.61429C0.9528 3.685 1.008 3.74864 1.072 3.80443C1.21972 3.93077 1.41062 3.99757 1.6064 3.99143C1.7416 3.99143 1.8584 3.97021 1.9584 3.927C2.05278 3.88808 2.13821 3.8309 2.2096 3.75886C2.33833 3.62826 2.41009 3.45348 2.4096 3.27171C2.4096 3.1625 2.3984 3.0635 2.3744 2.97471C2.3512 2.88534 2.29965 2.80554 2.2272 2.74686C2.13256 2.67468 2.02268 2.6242 1.9056 2.59914C1.72133 2.55875 1.53275 2.54054 1.344 2.54493L1.344 1.99257C1.5384 1.99021 1.6992 1.97293 1.8272 1.93914C1.9552 1.90536 2.0568 1.85821 2.1328 1.79929C2.20532 1.74373 2.26026 1.66907 2.2912 1.584C2.32223 1.49503 2.33738 1.40146 2.336 1.30743C2.336 1.09293 2.2752 0.931072 2.1536 0.820286C2.032 0.708714 1.8696 0.653714 1.6672 0.653714C1.57918 0.652673 1.4916 0.665947 1.408 0.693C1.25688 0.742143 1.12643 0.838784 1.0368 0.968C0.993704 1.03165 0.961292 1.10169 0.9408 1.17543C0.9048 1.27129 0.8568 1.33571 0.7984 1.36636C0.74 1.39779 0.6576 1.40564 0.5504 1.38914L0.1344 1.31686ZM6.9232 3.355Q7.0528 2.91657 7.0528 2.32257C7.0528 1.925 7.0096 1.57929 6.9232 1.28857C6.8376 0.997071 6.7176 0.755857 6.5656 0.565714C6.412 0.374786 6.232 0.232571 6.024 0.139857C5.816 0.0471429 5.5912 0 5.3504 0C5.1088 0 4.8864 0.0463571 4.68 0.139857C4.4736 0.232571 4.296 0.374786 4.144 0.565714C3.97933 0.781968 3.85873 1.02741 3.7888 1.28857C3.7032 1.58007 3.6608 1.92421 3.6608 2.32257C3.65456 2.67088 3.69764 3.01834 3.7888 3.355C3.85876 3.61663 3.97936 3.86258 4.144 4.07943C4.28492 4.26191 4.46886 4.40805 4.68 4.50529C4.8864 4.598 5.1088 4.64514 5.3504 4.64514C5.592 4.64514 5.816 4.598 6.024 4.50529C6.23678 4.40819 6.42257 4.2621 6.5656 4.07943C6.73069 3.86252 6.85206 3.61664 6.9232 3.355ZM6.2376 2.32336C6.2376 1.99336 6.212 1.7215 6.1632 1.50621C6.12732 1.32458 6.0608 1.15011 5.9664 0.99C5.89929 0.876297 5.80121 0.783237 5.6832 0.721286C5.47562 0.617449 5.22998 0.617449 5.0224 0.721286C4.90523 0.783265 4.8082 0.876388 4.7424 0.99C4.64885 1.14991 4.58341 1.32416 4.5488 1.50543C4.5008 1.7215 4.4768 1.99336 4.4768 2.32257C4.4768 2.651 4.5008 2.92364 4.5488 3.13971C4.5968 3.355 4.6616 3.52707 4.7424 3.65514C4.8082 3.76875 4.90523 3.86188 5.0224 3.92386C5.22998 4.02769 5.47562 4.02769 5.6832 3.92386C5.80121 3.86191 5.89929 3.76885 5.9664 3.65514C6.06079 3.49531 6.1273 3.32109 6.1632 3.13971C6.212 2.92364 6.2368 2.651 6.2368 2.32257L6.2376 2.32336Z" fillRule="evenodd" />
              </g>
            </svg>
            <span>30-Day Money-Back Guarantee</span>
          </div>
        </div>
        <div className="col-span-1 px-0 lg:block hidden">
          <img src = "https://res.cloudinary.com/luxiptv/image/upload/v1639697753/Capture_d_%C3%A9cran_2021-12-17_073458_vxc6xx.png" />
        </div>
      </div>
      <div className="px-12 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 sm:pt-14 md:pt-16 lg:pt-20">
        <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
          <dt>
            <div className="absolute bg-green-700 rounded-md p-3">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <p className="ml-16 text-sm font-medium text-gray-500 truncate">Total Channels</p>
          </dt>
          <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">
              12,913
            </p>
            <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a href="/checkout" className="font-medium text-indigo-600 hover:text-indigo-500">Order Now<span className="sr-only"> Total Subscribers stats</span></a>
              </div>
            </div>
          </dd>
        </div>
        <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
          <dt>
            <div className="absolute bg-green-700 rounded-md p-3">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
            </div>
            <p className="ml-16 text-sm font-medium text-gray-500 truncate">Total Movies</p>
          </dt>
          <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">
              64,793
            </p>
            <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a href="/checkout" className="font-medium text-indigo-600 hover:text-indigo-500">Order Now<span className="sr-only"> Total Subscribers stats</span></a>
              </div>
            </div>
          </dd>
        </div>
        <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
          <dt>
            <div className="absolute bg-green-700 rounded-md p-3">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
                <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              </svg>
            </div>
            <p className="ml-16 text-sm font-medium text-gray-500 truncate">Total Series</p>
          </dt>
          <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">
              11,215
            </p>
            <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a href="/checkout" className="font-medium text-indigo-600 hover:text-indigo-500">Order Now<span className="sr-only"> Total Subscribers stats</span></a>
              </div>
            </div>
          </dd>
        </div>
      </div>
      <div className="px-12 text-center pt-8 sm:pt-14 md:pt-16 lg:pt-20">
        <h3 className="text-3xl md:text-4xl font-semibold mb-2">Watch Live TV &amp; VOD with an Unique Experience</h3>
        <p className="text-sm md:text-base text-gray-500 block mb-8 md:mb-12">An easy access and super simple IPTV service for all your devices.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 justify-center items-center">
          <div className="group relative border-b-2 border-gray-200 hover:border-gray-400 pb-5 transition duration-300">
            <img alt="features" className="mx-auto mb-4" src="https://thenetflytv.com/svg/features/hd.svg" />
            <span className="block text-center">Full HD Quality</span>
            <p className="group-hover:block md:group-hover:opacity-100 hidden opacity-0 absolute bg-green-700 p-3 text-white rounded-md text-sm" style={{top: 'calc(100% + 15px)', borderWidth: '1px !important'}}>Our IPTV channels are available in HD, FHD and some of them are even in 4K, we offer the highest quality in the market.</p>
          </div>
          <div className="group relative border-b-2 border-gray-200 hover:border-gray-400 pb-5 transition duration-300">
            <img alt="features" className="mx-auto mb-4" src="https://thenetflytv.com/svg/features/anti-buffer.svg" />
            <span className="block text-center">Anti-Buffer™ 2.0</span>
            <p className="group-hover:block md:group-hover:opacity-100 hidden opacity-0 absolute bg-green-700 p-3 text-white rounded-md text-sm" style={{top: 'calc(100% + 15px)', borderWidth: '1px !important'}}>Our exclusive feature that allows you to reduce the buffering to up to 9 time so you can get the best iptv experience ever.</p>
          </div>
          <div className="group relative border-b-2 border-gray-200 hover:border-gray-400 pb-5 transition duration-300">
            <img alt="features" className="mx-auto mb-4" src="https://thenetflytv.com/svg/features/privacy-protection.svg" />
            <span className="block text-center">Privacy Protection</span>
            <p className="group-hover:block md:group-hover:opacity-100 hidden opacity-0 absolute bg-green-700 p-3 text-white rounded-md text-sm" style={{top: 'calc(100% + 15px)', borderWidth: '1px !important'}}>We take our customers privacy very seriously, we do not store any of your personnal informations including connections log and IP.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-50 py-8 px-6   sm:py-14 md:py-16 lg:py-20">
      <div className="px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
          <div className="space-y-5">
            <h3 className="text-4xl font-semibold mb-8">PPV channels with no extra fees</h3>
            <div className="flex space-x-4">
              <div className="flex-shrink pt-1">
                <div className="bg-green-700 rounded-md p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h5 className="text-xl font-medium">EPG in Most Channels</h5>
                <p className="text-gray-600">Our EPG is enabled on most of the channels so you can get an intuitive and rich watching experience. We update your TV Channels daily and you'll have all the info you need for the next seven days!</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex-shrink pt-1">
                <div className="bg-green-700 rounded-md p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
              </div>
              <div>
                <h5 className="text-xl font-medium">Channels by Category</h5>
                <p className="text-gray-600">Organization is a must in IPTV, so we did make sure to user it on all our TV channels, you can now get country, A-Z</p>
              </div>
            </div>
            <a className="btn-green-700 inline-block ml-0 bg-green-600 text-white sm:ml-14 mt-5  py-3 px-6 border border-gray-300 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white  text-lg leading-6 font-semibold focus:ring-green-600 focus:outline-none" href="/checkout">Get started</a>          <a className="mr-2 mt-2 flex-none bg-gray-800 hover:bg-gray-900 text-white text-lg leading-6 font-semibold py-4 px-6 border border-transparent rounded-xl focus:outline-none transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black " href="/checkout">Channels list</a>
          </div>
          <div className="md:pl-12 pt-6 md:pt-0">
            <img src = "https://res.cloudinary.com/luxiptv/image/upload/v1639697900/Capture_d_%C3%A9cran_2021-12-17_073458_ceyhsb.png" />
               </div>
        </div>
      </div>
    </div>

    <div className="px-12 py-14 px-6 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
        <div className="space-y-5 md:order-2">
          <h3 className="text-4xl font-semibold mb-8">Lastest movies and TV series.</h3>
          <div className="flex space-x-4">
            <div className="flex-shrink pt-1">
              <div className="bg-green-700 rounded-md p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h5 className="text-xl font-medium">Thousands of Movies</h5>
              <p className="text-gray-600">Our Service currently carries one of the largest multi country library of movies, We are constantly adding new ones to improve your streaming experience.</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-shrink pt-1">
              <div className="bg-green-700 rounded-md p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div>
              <h5 className="text-xl font-medium">Tons of TV Shows</h5>
              <p className="text-gray-600">We’ve made the impossible possible, with a full library of thousands of Movies &amp; Series (tv shows) you will be able to Watch trailers, read reviews and get shows seasons details, get the latest information on upcoming movie releases. Choosing the right movie has never been so easy.</p>
            </div>
          </div>
          <a className="btn-green-700 inline-block ml-0 bg-green-600 text-white sm:ml-14 mt-5  py-3 px-6 border border-gray-300 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white  text-lg leading-6 font-semibold focus:ring-green-600 focus:outline-none" href="/checkout">Get started</a>          <a className="mr-2 mt-2 flex-none bg-gray-800 hover:bg-gray-900 text-white text-lg leading-6 font-semibold py-4 px-6 border border-transparent rounded-xl focus:outline-none transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-black " href="/checkout">Channels list</a>
        </div>
        <div className="pt-5 md:pr-16 md:order-1">
          <img src = "https://res.cloudinary.com/luxiptv/image/upload/v1639698055/Capture_d_%C3%A9cran_2021-12-17_074042_g2b4qm.png" />
        </div>
      </div>
    </div>

    <div className="bg-gray-50 py-14 md:py-16 lg:py-20 bg-hideout-type-2" style={{border: '3px solid #ecf0fa'}}>
      <div className="md:px-9 px-0 max-w-7xl mx-auto px-12">
        <h3 className="text-4xl font-semibold text-center mb-10">How Does it <span className="text-green-700 font-semibold">Work</span> ?</h3>
        <div className="grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-3">
          <div className="flex">
            <div className="text-center">
              <img className="mx-auto mb-6" src="https://thenetflytv.com/svg/interface.svg" alt="Interface" />
              <h4 className="font-semibold mb-2">Sign up</h4>
              <p className="text-gray-700 text-sm lg:px-16 px-10">Start by registering your account with us to get an instant access to our iptv channels</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:hidden mx-auto mt-8" fill="none" viewBox="0 0 24 24" stroke="#355dbe">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 md:block hidden" fill="none" viewBox="0 0 24 24" stroke="#355dbe" style={{marginTop: '35px'}}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="flex">
            <div className="text-center">
              <img className="mx-auto mb-6" src="https://thenetflytv.com/svg/app_download.svg" alt="Interface" />
              <h4 className="font-semibold mb-2">Download</h4>
              <p className="text-gray-700 text-sm lg:px-16 px-10">Download the right application for your device in our apps page or your device store</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:hidden mx-auto mt-8" fill="none" viewBox="0 0 24 24" stroke="#355dbe">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 md:block hidden" fill="none" viewBox="0 0 24 24" stroke="#355dbe" style={{marginTop: '35px'}}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="flex">
            <div className="text-center">
              <img className="mx-auto mb-6" src="https://thenetflytv.com/svg/live_tv.svg" alt="Interface" />
              <h4 className="font-semibold mb-2">Enjoy</h4>
              <p className="text-gray-700 text-sm lg:px-16 px-10">With only your username and password you can start watching your favorite tv channels in seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="md:px-9 px-6 max-w-7xl mx-auto px-12 py-14 md:py-16 lg:py-20">
      <div className="pb-6">
        <div className="mt-4 space-x-1 flex justify-center mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" style={{width: '30px', height: '30px'}} viewBox="0 0 20 20" fill="#ffba00">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" style={{width: '30px', height: '30px'}} viewBox="0 0 20 20" fill="#ffba00">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" style={{width: '30px', height: '30px'}} viewBox="0 0 20 20" fill="#ffba00">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" style={{width: '30px', height: '30px'}} viewBox="0 0 20 20" fill="#ffba00">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" style={{width: '30px', height: '30px'}} viewBox="0 0 20 20" fill="#ffba00">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <h3 className="text-4xl font-semibold text-center mb-5">A Five-Star IPTV Experience</h3>
        <p className="text-gray-400 text-center mt-3 max-w-2xl mx-auto">See why people love our fast, simple and easy-to-use IPTV service for all devices. Based on thousand reviews. Check out some of the reviews here.</p>
      </div>
      <div className="swiper-container reviews-swiper swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events" style={{padding: '20px 10px'}}>
        <div className="flex space-x-6 justify-start items-center swiper-wrapper" style={{cursor: 'grab', transform: 'translate3d(0px, 0px, 0px)'}}>

     
          <div style={{width: '300px'}} className="shadow-md p-6 rounded-md select-none swiper-slide swiper-slide-active">
            <div className="flex space-x-4">
              <img className="flex-shrink inline-block h-12 w-12 rounded-full" src="https://fastiptv.live/assets/images/buyer.jpg" alt="Buyer profile" />
              <div>
                <p className="font-medium">Gurpreet Singh</p>
                <span className="text-gray-400 text-sm">Customer</span>
              </div>
            </div>
            <p className="mt-4">Using the service for a year and like it. Whenever any problem appears the customer care works properly.</p>
            <div className="mt-4 space-x-1 flex">
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <div style={{width: '300px'}} className="hidden shadow-md p-6 rounded-md select-none swiper-slide swiper-slide-next">
            <div className="flex space-x-4">
              <img className="flex-shrink inline-block h-12 w-12 rounded-full" src="https://fastiptv.live/assets/images/buyer.jpg" alt="Buyer profile" />
              <div>
                <p className="font-medium">Emma Yolonda</p>
                <span className="text-gray-400 text-sm">Customer</span>
              </div>
            </div>
            <p className="mt-4">Hello, Thank you for your availability and speed. I can only say good about your IPTV.</p>
            <div className="mt-4 space-x-1 flex">
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <div style={{width: '300px'}} className="hidden shadow-md p-6 rounded-md select-none swiper-slide">
            <div className="flex space-x-4">
              <img className="flex-shrink inline-block h-12 w-12 rounded-full" src="https://fastiptv.live/assets/images/buyer.jpg" alt="Buyer profile" />
              <div>
                <p className="font-medium">Carlos Manuel</p>
                <span className="text-gray-400 text-sm">Reseller</span>
              </div>
            </div>
            <p className="mt-4">Excellent customer service marks these folks out from the crowd. Highly recommend them.</p>
            <div className="mt-4 space-x-1 flex">
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <div style={{width: '300px'}} className=" hidden shadow-md p-6 rounded-md select-none swiper-slide">
            <div className="flex space-x-4">
              <img className="flex-shrink inline-block h-12 w-12 rounded-full" src="https://fastiptv.live/assets/images/buyer.jpg" alt="Buyer profile" />
              <div>
                <p className="font-medium">Kevin Timlin</p>
                <span className="text-gray-400 text-sm">Customer</span>
              </div>
            </div>
            <p className="mt-4">Great service and great customer service. I recommend this service to others!</p>
            <div className="mt-4 space-x-1 flex">
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <div style={{width: '300px'}} className="hidden lg:block shadow-md p-6 rounded-md select-none swiper-slide">
            <div className="flex space-x-4">
              <img className="flex-shrink inline-block h-12 w-12 rounded-full" src="https://fastiptv.live/assets/images/buyer.jpg" alt="Buyer profile" />
              <div>
                <p className="font-medium">Kelley Timlin</p>
                <span className="text-gray-400 text-sm">Customer</span>
              </div>
            </div>
            <p className="mt-4">Great quality and quickfire customer services. It comes with many options and at a good price.</p>
            <div className="mt-4 space-x-1 flex">
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <div style={{width: '300px'}} className="hidden lg:block shadow-md p-6 rounded-md select-none swiper-slide">
            <div className="flex space-x-4">
              <img className="flex-shrink inline-block h-12 w-12 rounded-full" src="https://fastiptv.live/assets/images/buyer.jpg" alt="Buyer profile" />
              <div>
                <p className="font-medium">Eddie Kevin</p>
                <span className="text-gray-400 text-sm">Customer</span>
              </div>
            </div>
            <p className="mt-4">I have had a good experience with Our Service and renewed even when we were down for a brief period.</p>
            <div className="mt-4 space-x-1 flex">
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <div style={{width: '300px'}} className="hidden md:block  shadow-md p-6 rounded-md select-none swiper-slide">
            <div className="flex space-x-4">
              <img className="flex-shrink inline-block h-12 w-12 rounded-full" src="https://fastiptv.live/assets/images/buyer.jpg" alt="Buyer profile" />
              <div>
                <p className="font-medium">Osazee Rapper</p>
                <span className="text-gray-400 text-sm">Customer</span>
              </div>
            </div>
            <p className="mt-4">This is the best IPTV service, that I would recommend anyone to use. Staff are so friendly, Channels are working so great too.</p>
            <div className="mt-4 space-x-1 flex">
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} viewBox="0 0 20 20" fill="#ffba00">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

        </div>
      </div>
      <a href="/checkout" className="mx-auto flex justify-between max-w-md cursor-pointer bg-green-500 hover:bg-green-700 text-white py-3 px-6 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-green-500 focus:outline-none transition-colors duration-200 mt-6">
        <span />
        <span>Get My Instant Access Now</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
      <div className="text-sm block pt-3 pl-4 text-gray-600 font-light flex space-x-2 items-center justify-center">
        
        <span>30-Day Money-Back Guarantee</span>
      </div>
    </div>
    <div className="hidden bg-gray-50 py-14 md:py-16 lg:py-20" x-data="{state: null}">
      <div className="mx-auto max-w-6xl">
        <div className="p-2 bg-gray-50 rounded">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-4 text-sm">
              <div className="text-3xl">Frequently asked <span className="font-medium">Questions</span></div>
              <div className="my-2">Wondering how our service works ?</div>
              <div className="text-xs text-gray-600">Dive into our FAQ for more details</div>
            </div>
            <div className="md:w-2/3">
              <div className="p-4">
                <div className="mb-2">
                  <div className="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                    <div className="flex-auto">How can I install IPTV on my device?</div>
                    <div className="px-2 mt-1 rounded-md">
                      <div>
                        <svg x-show="state === 'how-can-i-install-iptv-on-my-device'" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up w-5 h-5" style={{display: 'none'}}>
                          <polyline points="18 15 12 9 6 15" />
                        </svg>
                        <svg x-show="state !== 'how-can-i-install-iptv-on-my-device'" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down w-5 h-5">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div  className="py-2 text-justify text-left text-gray-700 mb-5 bg-white px-5" >Check the installation tutorials <a className="underline text-green-700" href="https://thenetflytv.com/blog">here</a>, if there is any issue, feel free to contact us <a className="underline text-green-700" href="https://thenetflytv.com/">here</a>.</div>
                </div>
                
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="py-14 px-4 md:py-16 lg:py-20">
      <div className="px-12">
        <h3 className="text-4xl font-semibold text-center mb-3">Why we are the best IPTV service</h3>
        <p className="text-gray-400 text-center mt-3">With Our Service you can watch Anything From Anywhere</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-3">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><title>FULL 4K/HD/FHD Quality</title><desc>Most of our TV channels are available in HD quality and some of them are in 4K</desc><g id="Stockholm-icons-/-Devices-/-TV#2" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect id="bound" x={0} y={0} width={24} height={24} /><path d="M3,5 L21,5 C21.5522847,5 22,5.44771525 22,6 L22,17 C22,17.5522847 21.5522847,18 21,18 L3,18 C2.44771525,18 2,17.5522847 2,17 L2,6 C2,5.44771525 2.44771525,5 3,5 Z M9.632,10.066 L11.032,10.066 L11.032,9.044 L7.035,9.044 L7.035,10.066 L8.435,10.066 L8.435,14 L9.632,14 L9.632,10.066 Z M14.935,14 L16.846,9.044 L15.523,9.044 L14.382,12.558 L14.354,12.558 L13.206,9.044 L11.862,9.044 L13.738,14 L14.935,14 Z" id="Combined-Shape" fill="#2563eb" /><rect id="Rectangle" fill="#2563eb" opacity="0.3" x={3} y={19} width={18} height={1} rx="0.5" /></g></svg>
            </div>
            <div className="col-span-9">
              <h5 className="text-2xl text-gray-800">Full 4k/HD/FHD Quality</h5>
              <p className="text-gray-400">Most of our tv channels are available in HD quality and some of them are in 4k.</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-3">
              <svg className="img-fluid" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><title>Fast Order Delivery</title><desc>We Deliver Your Premium IPTV subscription A Few hours After Payment Is Made</desc><g id="Stockholm-icons-/-Communication-/-Sending" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect id="bound" x={0} y={0} width={24} height={24} /><path d="M8,13.1668961 L20.4470385,11.9999863 L8,10.8330764 L8,5.77181995 C8,5.70108058 8.01501031,5.63114635 8.04403925,5.56663761 C8.15735832,5.31481744 8.45336217,5.20254012 8.70518234,5.31585919 L22.545552,11.5440255 C22.6569791,11.5941677 22.7461882,11.6833768 22.7963304,11.794804 C22.9096495,12.0466241 22.7973722,12.342628 22.545552,12.455947 L8.70518234,18.6841134 C8.64067359,18.7131423 8.57073936,18.7281526 8.5,18.7281526 C8.22385763,18.7281526 8,18.504295 8,18.2281526 L8,13.1668961 Z" id="Combined-Shape" fill="#2563eb" /><path d="M4,16 L5,16 C5.55228475,16 6,16.4477153 6,17 C6,17.5522847 5.55228475,18 5,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4477153 3.44771525,16 4,16 Z M1,11 L5,11 C5.55228475,11 6,11.4477153 6,12 C6,12.5522847 5.55228475,13 5,13 L1,13 C0.44771525,13 6.76353751e-17,12.5522847 0,12 C-6.76353751e-17,11.4477153 0.44771525,11 1,11 Z M4,6 L5,6 C5.55228475,6 6,6.44771525 6,7 C6,7.55228475 5.55228475,8 5,8 L4,8 C3.44771525,8 3,7.55228475 3,7 C3,6.44771525 3.44771525,6 4,6 Z" id="Combined-Shape" fill="#2563eb" opacity="0.3" /></g></svg>
            </div>
            <div className="col-span-9">
              <h5 className="text-2xl text-gray-800">Fast Order Delivery</h5>
              <p className="text-gray-400">We Deliver Your Premium IPTV subscription A Few hours After Payment Is Made.</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-3">
              <svg className="img-fluid" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><title>Safe, Secure Payment</title><desc>Secure Payments – No complicated billing processes required.</desc><g id="Stockholm-icons-/-Shopping-/-Wallet" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect id="bound" x={0} y={0} width={24} height={24} /><circle id="Oval-47" fill="#2563eb" opacity="0.3" cx="20.5" cy="12.5" r="1.5" /><rect id="Rectangle-162" fill="#2563eb" opacity="0.3" transform="translate(12.000000, 6.500000) rotate(-15.000000) translate(-12.000000, -6.500000) " x={3} y={3} width={18} height={7} rx={1} /><path d="M22,9.33681558 C21.5453723,9.12084552 21.0367986,9 20.5,9 C18.5670034,9 17,10.5670034 17,12.5 C17,14.4329966 18.5670034,16 20.5,16 C21.0367986,16 21.5453723,15.8791545 22,15.6631844 L22,18 C22,19.1045695 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.1045695 2,18 L2,6 C2,4.8954305 2.8954305,4 4,4 L20,4 C21.1045695,4 22,4.8954305 22,6 L22,9.33681558 Z" id="Combined-Shape" fill="#2563eb" /></g></svg>
            </div>
            <div className="col-span-9">
              <h5 className="text-2xl text-gray-800">Safe, Secure Payment</h5>
              <p className="text-gray-400">Secure Payments – No complicated billing processes required.</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-3">
              <svg className="img-fluid" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><title>30-Day Money-Back Guarantee</title><desc>If you feel our services is not a good fit, we will grant you a full refund.</desc><g id="Stockholm-icons-/-Shopping-/-Dollar" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"><rect id="bound" x={0} y={0} width={24} height={24} /><rect id="Rectangle" fill="#2563eb" opacity="0.3" x="11.5" y={2} width={2} height={4} rx={1} /><rect id="Rectangle-Copy-3" fill="#2563eb" opacity="0.3" x="11.5" y={16} width={2} height={5} rx={1} /><path d="M15.493,8.044 C15.2143319,7.68933156 14.8501689,7.40750104 14.4005,7.1985 C13.9508311,6.98949895 13.5170021,6.885 13.099,6.885 C12.8836656,6.885 12.6651678,6.90399981 12.4435,6.942 C12.2218322,6.98000019 12.0223342,7.05283279 11.845,7.1605 C11.6676658,7.2681672 11.5188339,7.40749914 11.3985,7.5785 C11.2781661,7.74950085 11.218,7.96799867 11.218,8.234 C11.218,8.46200114 11.2654995,8.65199924 11.3605,8.804 C11.4555005,8.95600076 11.5948324,9.08899943 11.7785,9.203 C11.9621676,9.31700057 12.1806654,9.42149952 12.434,9.5165 C12.6873346,9.61150047 12.9723317,9.70966616 13.289,9.811 C13.7450023,9.96300076 14.2199975,10.1308324 14.714,10.3145 C15.2080025,10.4981676 15.6576646,10.7419985 16.063,11.046 C16.4683354,11.3500015 16.8039987,11.7268311 17.07,12.1765 C17.3360013,12.6261689 17.469,13.1866633 17.469,13.858 C17.469,14.6306705 17.3265014,15.2988305 17.0415,15.8625 C16.7564986,16.4261695 16.3733357,16.8916648 15.892,17.259 C15.4106643,17.6263352 14.8596698,17.8986658 14.239,18.076 C13.6183302,18.2533342 12.97867,18.342 12.32,18.342 C11.3573285,18.342 10.4263378,18.1741683 9.527,17.8385 C8.62766217,17.5028317 7.88033631,17.0246698 7.285,16.404 L9.413,14.238 C9.74233498,14.6433354 10.176164,14.9821653 10.7145,15.2545 C11.252836,15.5268347 11.7879973,15.663 12.32,15.663 C12.5606679,15.663 12.7949989,15.6376669 13.023,15.587 C13.2510011,15.5363331 13.4504991,15.4540006 13.6215,15.34 C13.7925009,15.2259994 13.9286662,15.0740009 14.03,14.884 C14.1313338,14.693999 14.182,14.4660013 14.182,14.2 C14.182,13.9466654 14.1186673,13.7313342 13.992,13.554 C13.8653327,13.3766658 13.6848345,13.2151674 13.4505,13.0695 C13.2161655,12.9238326 12.9248351,12.7908339 12.5765,12.6705 C12.2281649,12.5501661 11.8323355,12.420334 11.389,12.281 C10.9583312,12.141666 10.5371687,11.9770009 10.1255,11.787 C9.71383127,11.596999 9.34650161,11.3531682 9.0235,11.0555 C8.70049838,10.7578318 8.44083431,10.3968355 8.2445,9.9725 C8.04816568,9.54816454 7.95,9.03200304 7.95,8.424 C7.95,7.67666293 8.10199848,7.03700266 8.406,6.505 C8.71000152,5.97299734 9.10899753,5.53600171 9.603,5.194 C10.0970025,4.85199829 10.6543302,4.60183412 11.275,4.4435 C11.8956698,4.28516587 12.5226635,4.206 13.156,4.206 C13.9160038,4.206 14.6918294,4.34533194 15.4835,4.624 C16.2751706,4.90266806 16.9686637,5.31433061 17.564,5.859 L15.493,8.044 Z" id="Combined-Shape" fill="#2563eb" /></g></svg>
            </div>
            <div className="col-span-9">
              <h5 className="text-2xl text-gray-800">30-Day Money-Back Guarantee</h5>
              <p className="text-gray-400">If you feel our services is not a good fit, we will grant you a full refund.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>

    


    
    </div>
    </main>

    <Foot />
        </div>
    );
};

export default home;