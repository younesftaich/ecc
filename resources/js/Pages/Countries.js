import React from 'react';
import Header from './Nav'
import Footer from './Footer'
function channels(props) {
    return (
      
        <div className="px-4">
       
          
          <Header/>
           <main>
  <div className="font-press-start nf-container py-8">
    <div className="rounded-md bg-blue-50 p-4 max-w-lg mx-auto mb-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-blue-800">
            Info &amp; Guideline
          </h3>
          <div className="mt-2 text-sm text-blue-700">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                After the payment , you can add / remove countries depending on what you want
              </li>
              <li>
                Click on the country whose channels and vods you want to see
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      
    <a href="/channels?country=FOR ADULTS" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-12" src="http://logo.cdn-ott.net//4KOTTLOGO//ADULT.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>FOR ADULTS</p>
        </div>
      </a>
      
      <a href="/channels?country=[F1] FORMULA 1" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-14" src="http://logo.cdn-ott.net//4KOTTLOGO//FORMULA4K.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>[F1] FORMULA 1</p>
        </div>
      </a>
      
      <a href="/channels?country=HORSE RACING" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-14" src="http://logo.cdn-ott.net//4KOTTLOGO//HORSERACING//HORSERACING.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>HORSE RACING</p>
        </div>
      </a>

      <a href="/channels?country=UNITED KINGDOM" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="al" countryname="Albania">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net/logo/FLAGS/flag_united_kingdom.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>UNITED KINGDOM</p>
        </div>
      </a>
      <a href="/channels?country=IRELAND" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="dz" countryname="Algeria">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net/logo/FLAGS/flag_ireland.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>IRELAND</p>
        </div>
      </a>
      <a href="/channels?country=USA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="bh" countryname="Bahrain">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net/logo/FLAGS/flag_usa.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold uppercase" style={{lineHeight: 1}}>United States</p>
        </div>
      </a>
      <a href="/channels?country=CANADA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="bd" countryname="Bangladesh">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_canada.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>CANADA</p>
        </div>
      </a>
      <a href="/channels?country=AUSTRALIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="be" countryname="Belgium">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_australia.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>AUSTRALIA</p>
        </div>
      </a>
      <a href="/channels?country=INDIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_india.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>INDIA</p>
        </div>
      </a>
      <a href="/channels?country=PAKISTAN" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_pakistan.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>PAKISTAN</p>
        </div>
      </a>
      <a href="/channels?country=PREMIUM ARABIC" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-14" src="http://logo.cdn-ott.net//4KOTTLOGO//flag//BEINENTERTAINMENT.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>PREMIUM ARABIC</p>
        </div>
      </a>
      <a href="/channels?country=GERMANY" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_germany.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>GERMANY</p>
        </div>
      </a>
      <a href="/channels?country=NETHERLANDS" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_netherlands.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>NETHERLANDS</p>
        </div>
      </a>
      <a href="/channels?country=BELGIUM " className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_belgium.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>BELGIUM </p>
        </div>
      </a>
      <a href="/channels?country=SPAIN" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_spain.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>SPAIN</p>
        </div>
      </a>
      <a href="/channels?country=PORTUGAL" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_portugal.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>PORTUGAL</p>
        </div>
      </a>
      <a href="/channels?country=SWITZERLAND" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_switzerland.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>SWITZERLAND</p>
        </div>
      </a>
      <a href="/channels?country=GREECE" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_greece.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>GREECE</p>
        </div>
      </a>
      <a href="/channels?country=TURKEY" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_turkey.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>TURKEY</p>
        </div>
      </a>
      <a href="/channels?country=AUSTRIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_austria.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>AUSTRIA</p>
        </div>
      </a>
      <a href="/channels?country=FRANCE" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_france.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>FRANCE</p>
        </div>
      </a>
      <a href="/channels?country=ITALIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_italy.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>ITALIA</p>
        </div>
      </a>
      <a href="/channels?country=SWEDEN" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_sweden.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>SWEDEN</p>
        </div>
      </a>
      <a href="/channels?country=DENMARK" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_denmark.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>DENMARK</p>
        </div>
      </a>
      <a href="/channels?country=FINLAND" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS/flag_finland.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>FINLAND</p>
        </div>
      </a>
      <a href="/channels?country=NORWAY" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_norway.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>NORWAY</p>
        </div>
      </a>
      <a href="/channels?country=HUNGARIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_hungary.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>HUNGARIA</p>
        </div>
      </a>
      <a href="/channels?country=CZECH REPUBLIC" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_czech_republic.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>CZECH REPUBLIC</p>
        </div>
      </a>
      <a href="/channels?country=EXYU" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_serbia.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold uppercase" style={{lineHeight: 1}}>EX YU ( SLOVENIA - MACDONIA - Croatia - SERBIA )</p>
        </div>
      </a>
      <a href="/channels?country=ROMANIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_romania.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>ROMANIA</p>
        </div>
      </a>
      <a href="/channels?country=ALBANIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_albania.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>ALBANIA</p>
        </div>
      </a>
      <a href="/channels?country=POLAND" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_poland.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>POLAND</p>
        </div>
      </a>
      <a href="/channels?country=BULGARIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_bulgaria.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>BULGARIA</p>
        </div>
      </a>
      <a href="/channels?country=ISRAEL" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_israel.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>ISRAEL</p>
        </div>
      </a>
      
      <a href="/channels?country=GEORGIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_georgia.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>GEORGIA</p>
        </div>
      </a>
      <a href="/channels?country=RUSSIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_russia.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>RUSSIA</p>
        </div>
      </a>
      <a href="/channels?country=MOROCCO" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_morocco.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>MOROCCO</p>
        </div>
      </a>
      <a href="/channels?country=ALGERIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_algeria.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>ALGERIA</p>
        </div>
      </a>
      <a href="/channels?country=TUNISIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_tunisia.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>TUNISIA</p>
        </div>
      </a>
      <a href="/channels?country=SAUDI ARABIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_saudi_arabia.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>SAUDI ARABIA</p>
        </div>
      </a>
      <a href="/channels?country=EGYPT" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_egypt.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>EGYPT</p>
        </div>
      </a>
      <a href="/channels?country=LEBANON" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_lebanon.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>LEBANON</p>
        </div>
      </a>
      <a href="/channels?country=UAE" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_united_arab_emirates.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>UAE</p>
        </div>
      </a>
      <a href="/channels?country=BAHRAIN" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_bahrain.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>BAHRAIN</p>
        </div>
      </a>
      <a href="/channels?country=JORDAN" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_jordan.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>JORDAN</p>
        </div>
      </a>
      <a href="/channels?country=LIBYA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_libya.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>LIBYA</p>
        </div>
      </a>
      <a href="/channels?country=IRAQ" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_iraq.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>IRAQ</p>
        </div>
      </a>
      <a href="/channels?country=PALESTINE" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-12" src="http://logo.cdn-ott.net//4KOTTLOGO//flag//PALESTINE.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>PALESTINE</p>
        </div>
      </a>
      <a href="/channels?country=SYRIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_syria.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>SYRIA</p>
        </div>
      </a>
      <a href="/channels?country=KUWAIT" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_kuwait.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>KUWAIT</p>
        </div>
      </a>
      <a href="/channels?country=YEMEN" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_yemen.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>YEMEN</p>
        </div>
      </a>
      <a href="/channels?country=OMAN" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_oman.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>OMAN</p>
        </div>
      </a>
      <a href="/channels?country=QATAR" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_qatar.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>QATAR</p>
        </div>
      </a>
      <a href="/channels?country=MAURITANIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_mauritania.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>MAURITANIA</p>
        </div>
      </a>
      <a href="/channels?country=SUDAN" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_sudan.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>SUDAN</p>
        </div>
      </a>
      <a href="/channels?country=KURDISH" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_kurdistan.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>KURDISH</p>
        </div>
      </a>
      <a href="/channels?country=AFGHANISTAN" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_afghanistan.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>AFGHANISTAN</p>
        </div>
      </a>
      <a href="/channels?country=[ASIA] ENGLISH" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-12" src="http://logo.cdn-ott.net//4KOTTLOGO//flag//ASIAENGLISH.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>[ASIA] ENGLISH</p>
        </div>
      </a>
      <a href="/channels?country=[ASIA] SPORTS" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-12" src="http://logo.cdn-ott.net//4KOTTLOGO//flag//ASIASPORTS.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>[ASIA] SPORTS</p>
        </div>
      </a>
      <a href="/channels?country=HAITI" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_haiti.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>HAITI</p>
        </div>
      </a>
      <a href="/channels?country=AFRICA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-12" src="http://logo.cdn-ott.net//4KOTTLOGO//flag//AFRICAGENERAL.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>AFRICA</p>
        </div>
      </a>
      <a href="/channels?country=SOUTH AFRICA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-12" src="http://logo.cdn-ott.net//4KOTTLOGO//flag//SOUTHAFRICA.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>SOUTH AFRICA</p>
        </div>
      </a>
      <a href="/channels?country=ARMENIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_armenia.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>ARMENIA</p>
        </div>
      </a>
      
      <a href="/channels?country=ARGENTINA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_argentina.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>ARGENTINA</p>
        </div>
      </a>
      <a href="/channels?country=BRAZIL" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_brazil.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>BRAZIL</p>
        </div>
      </a>
      <a href="/channels?country=LATINO" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-12" src="http://logo.cdn-ott.net//4KOTTLOGO//flag//LATIN.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>LATINO</p>
        </div>
      </a>
      <a href="/channels?country=KOREA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-12" src="http://logo.cdn-ott.net//4KOTTLOGO//korea//ARIRANGKORE.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>KOREA</p>
        </div>
      </a>
      <a href="/channels?country=[SU] SURINAM" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-12" src="http://logo.cdn-ott.net//4KOTTLOGO//FLIX//FLIX.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>[SU] SURINAM</p>
        </div>
      </a>
      <a href="/channels?country=HONG KONG" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-12" src="http://logo.cdn-ott.net//4KOTTLOGO//flag//HONGK.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>HONG KONG</p>
        </div>
      </a>
      <a href="/channels?country=CARIBBEAN" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-12" src="http://logo.cdn-ott.net//4KOTTLOGO//ussport//CARABIEN//OCTV.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>CARIBBEAN</p>
        </div>
      </a>
      <a href="/channels?country=[ASIA] NEPAL" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_nepal.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>[ASIA] NEPAL</p>
        </div>
      </a>
      <a href="/channels?country=MALTA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_malta.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>MALTA</p>
        </div>
      </a>
      <a href="/channels?country=THAILAND" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_thailand.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>THAILAND</p>
        </div>
      </a>
      <a href="/channels?country=PHILIPPINE" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_philippines.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>PHILIPPINE</p>
        </div>
      </a>
      <a href="/channels?country=MALAYSIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_malaysia.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>MALAYSIA</p>
        </div>
      </a>
      <a href="/channels?country=INDONESIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_indonesia.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>INDONESIA</p>
        </div>
      </a>
      <a href="/channels?country=VIETNAM" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_vietnam.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>VIETNAM</p>
        </div>
      </a>
      <a href="/channels?country=JAPAN" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_japan.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>JAPAN</p>
        </div>
      </a>
      <a href="/channels?country=TAIWAN" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_taiwan.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>TAIWAN</p>
        </div>
      </a>
      <a href="/channels?country=CHINA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_china.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>CHINA</p>
        </div>
      </a>
      <a href="/channels?country=AZERBAIJAN" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_azerbaijan.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>AZERBAIJAN</p>
        </div>
      </a>
      <a href="/channels?country=SOMALIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_somalia.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>SOMALIA</p>
        </div>
      </a>
      <a href="/channels?country=UKRAINE" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_ukraine.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>UKRAINE</p>
        </div>
      </a>
      <a href="/channels?country=IRAN" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_iran.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>IRAN</p>
        </div>
      </a>
      <a href="/channels?country=PANAMA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_panama.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>PANAMA</p>
        </div>
      </a>
      <a href="/channels?country=MEXICO" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_mexico.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>MEXICO</p>
        </div>
      </a>
      <a href="/channels?country=ECUADOR" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_ecuador.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>ECUADOR</p>
        </div>
      </a>
      <a href="/channels?country=PERU" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_peru.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>PERU</p>
        </div>
      </a>
      <a href="/channels?country=VENEZUELA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_venezuela.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>VENEZUELA</p>
        </div>
      </a>
      <a href="/channels?country=DOMINICAN REPUBLIC" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_dominica.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>DOMINICAN REPUBLIC</p>
        </div>
      </a>
      <a href="/channels?country=CUBA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_cuba.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>CUBA</p>
        </div>
      </a>
      <a href="/channels?country=CHILE" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_chile.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>CHILE</p>
        </div>
      </a>
      <a href="/channels?country=COLOMBIA" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_colombia.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>COLOMBIA</p>
        </div>
      </a>
      <a href="/channels?country=URUGUAY" className="flex items-center space-x-5 border rounded-lg border-gray-200 cursor-pointer transition-colors duration-500 hover:bg-gray-100 overflow-hidden" code="ba" countryname="Bosnia and Herzegovina">
        <img className="flex-shrink inline-block h-full" src="http://logo.cdn-ott.net//logo//FLAGS//flag_uruguay.png" />
        <div className="flex-1 ">
          <p className="text-lg font-bold" style={{lineHeight: 1}}>URUGUAY</p>
        </div>
      </a>
    </div>
  </div>
</main>

<Footer />
        </div>
    );
}

export default channels;