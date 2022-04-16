import React, { useEffect,useState } from 'react';

export default function Header(props) {
   const [toggleMenu,setToggleMenu] = useState(false)
  const [link,setLink] = useState("/checkout")
  const [link2,setLink2] = useState("/login")
  const [txt,setTxt] = useState("See Pricing")
  const [txt2,setTxt2] = useState("Login")
  
   const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
       return (
        <div >  
<nav className="   bg-white-200">
  <div className="   max-w-6xl mx-auto px-4">
    <div className="   flex justify-between ">
           <div className="   flex space-x-4">
        <div>
          <a href="/" className="   flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
          <img className="  md:h-14 lg:h-12 w-9/12 h-9" src={"https://res.cloudinary.com/luxiptv/image/upload/v1644506861/75_3_c4djzs.png"}  />

              </a>
        </div>
         <div className="   hidden md:flex items-center space-x-1">
          <a href="/" className="   py-5 px-3 font-medium font-sans text-black hover:text-primary transition-colors">Home</a>

          <a href="#" className="   py-5 px-3 font-medium font-sans text-black hover:text-primary transition-colors">Contact Us</a>
          <a href="#" className="   py-5 px-3 font-medium font-sans text-black hover:text-primary transition-colors">Installation Tutorials</a>


        </div>
      </div>

      <div className="   hidden md:flex items-center space-x-1">
      
        <a href="#" className="   py-5 px-3 font-medium font-sans text-black hover:text-primary transition-colors">{txt2}</a>
        <a x-show="showShadow" href={link} className="   py-2 px-3 flex space-x-2 items-center cursor-pointer bg-purple-500 hover:bg-purple-600 text-white text-lg py-3 px-6 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 focus:outline-none transition-colors duration-200 leading-6 font-semibold">

<span>{txt}</span>
</a>
      </div>  <div className="   md:hidden flex items-center">
        <button onClick={ () => toggleNav() } className="   mobile-menu-button">
          <svg className="   w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>
  </div>

  <div className={toggleMenu ? 'mobile-menu  md:hidden': 'mobile-menu hidden md:hidden'} 
 >
 <a href="/" className="   block py-2 px-4 text-sm  font-medium font-sans text-black hover:text-primary transition-colors ">Home</a>
   
 <a href="#" className="   block py-2 px-4 text-sm  font-medium font-sans text-black hover:text-primary transition-colors">Contact Us</a>
 <a href="#" className="   block py-2 px-4 text-sm  font-medium font-sans text-black hover:text-primary transition-colors">Installation Tutorials</a>
    
    <a href="#" className="   block py-2 px-4 text-sm  font-medium font-sans text-black hover:text-primary transition-colors">{txt2}</a>
    <a x-show="showShadow" href={link} className="   block py-2 mx-5 mb-5 px-2 text-sm  font-medium font-sans  cursor-pointer bg-purple-500 hover:bg-purple-600 text-white text-center  border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-purple-600 focus:outline-none transition-colors duration-200 leading-6 ">
<span>{txt}</span>
</a>
  </div>
</nav>



           
        </div>
    );
}