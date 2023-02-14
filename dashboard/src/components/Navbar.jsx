import React, { useCallback, useEffect } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Login from './Login'

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="border-b-2 border-gray-color">
      <nav className= "bg-teal-500  border-gray-200 px-2 sm:px-4 py-2.5 rounded mx-auto px-4 container-fluid">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          {/* <a className="flex items-center">
            <image src= '' logo= 'logo' classes={"w-20 h-20"}/>
          </a> */}
          <div className="flex items-center flex-shrink-0 text-white mr-6">
    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
  </div>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`justify-self-center pb-3 mt-8 w-full md:block md:w-auto md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            
            <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <a href="/">Home</a>
              <a href="/Login">Login</a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;


// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div>
//       <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  // <div className="flex items-center flex-shrink-0 text-white mr-6">
  //   <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
  //   <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
  // </div>
//   <div className="block lg:hidden">
//     <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
//       <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
//     </button>
//   </div>
//   <div className="w-full text-end block flex-grow lg:items-center lg:w-auto">
//     {/* <div className="text-sm lg:flex-grow">
    
//       <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
//         Examples
//       </a>
//       <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
//         Blog
//       </a>
//     </div> */}
//     <div>
//       <Link className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" component={NavLink} to='/'>Home</Link>
//     </div>
//     <div>
//       <Link className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" component={NavLink} to='/login'>Login</Link>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }

// export default Navbar