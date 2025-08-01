import React, { useRef, useState } from "react";
import { MdMenu, MdKeyboardArrowUp, MdKeyboardArrowDown, MdSearch } from "react-icons/md";
import { RiArrowDropUpLine } from "react-icons/ri";
import MegaMenu1 from "../MegaMenu1/MegaMenu1";
import MegaMenu2 from "../MegaMenu2/MegaMenu2";
import MegaMenu3 from "../MegaMenu3/MegaMenu3";
import MegaMenu4 from "../MegaMenu4/MegaMenu4";

const HeaderSearch = () => {
  const [catOpen, setCatOpen] = useState(false);
  const [selOpen, setSelOpen] = useState(false);
const [electronics, setElectronics] = useState(false);
const [MensFashion, setMensFashion] = useState(false);
const [WomensFashion, setWomensFashion] = useState(false);
const [OfficeSecurity, setOfficeSecurity] = useState(false);


const electronicsTimer = useRef(null);
const MensFashionTimer = useRef(null);
const WomensFashionTimer = useRef(null);
const OfficeSecurityTimer = useRef(null);

  // Handlers for desktop hover
  const handleEnter = (timerRef, setter) => {
    clearTimeout(timerRef.current);
    setter(true);
  };
  const handleLeave = (timerRef, setter) => {
    timerRef.current = setTimeout(() => setter(false), 100);
  };

  return (
 <div className="hidden md:flex items-center gap-4 md:flex-wrap">
      {/* Categories Sidebar Toggle */}
      <div className="relative">
        <button
          onClick={() => setCatOpen(!catOpen)}
          className="flex justify-between items-center bg-yellow-400 text-white px-4 py-2 rounded-lg w-90 h-16"
        >
            <div className="flex gap-6 items-center">   
         <MdMenu className="mr-2  text-3xl" />
          All Categories</div>
      
          <MdKeyboardArrowUp  className={`ml-2 transform text-4xl  ${catOpen ? "rotate-180" : ""}`} />
        </button>
        {catOpen && (
          <ul className="absolute mt-2 bg-white shadow-lg rounded-lg 30 w-90 z-15">
       <li className="flex justify-between items-center px-6"  
       onMouseEnter={() => handleEnter(electronicsTimer, setElectronics)}
       onMouseLeave={() => handleLeave(electronicsTimer, setElectronics)} > <span className={`${electronics && 'text-blue-600'}`}>Electronics</span> <RiArrowDropUpLine className={`text-6xl ${electronics ? 'text-blue-600 rotate-80 transform transition-transform duration-1000 ease-in-out' : '-rotate-0 transform transition-transform duration-1000 ease-in-out'}`}/>
       {electronics && (
         <div className="absolute top-1 left-90 mt-2">
       <MegaMenu1></MegaMenu1>
    </div>
       ) 
       }
        </li>

       <div className="border border-gray-200"></div>
          <li className="flex justify-between items-center px-6 hover:text-blue-500"  
       onMouseEnter={() => handleEnter(MensFashionTimer, setMensFashion)}
       onMouseLeave={() => handleLeave(MensFashionTimer, setMensFashion)} > <span className={`${MensFashion && 'text-blue-600'}`}>Men’s Fashion</span> <RiArrowDropUpLine className={`text-6xl ${MensFashion ? 'text-blue-600 rotate-80 transform transition-transform duration-1000 ease-in-out' : '-rotate-0 transform transition-transform duration-1000 ease-in-out'}`}/>
       {MensFashion && (
         <div className="absolute top-15 left-90">
      <MegaMenu2 />
    </div>
       ) 
       }
        </li>


       <div className="border border-gray-200"></div>
             <li className="flex justify-between items-center px-6 hover:text-blue-500"  
       onMouseEnter={() => handleEnter(WomensFashionTimer, setWomensFashion)}
       onMouseLeave={() => handleLeave(WomensFashionTimer, setWomensFashion)} > <span className={`${WomensFashion && 'text-blue-600'}`}>Women’s Fashion</span> <RiArrowDropUpLine className={`text-6xl ${WomensFashion ? 'text-blue-600 rotate-80 transform transition-transform duration-1000 ease-in-out' : '-rotate-0 transform transition-transform duration-1000 ease-in-out'}`}/>
       {WomensFashion && (
         <div className="absolute top-29 left-90 mt-2">
      <MegaMenu3 />
    </div>
       ) 
       }
        </li>


       <div className="border border-gray-200"></div>
                  <li className="flex justify-between items-center px-6"  
       onMouseEnter={() => handleEnter(OfficeSecurityTimer, setOfficeSecurity)}
       onMouseLeave={() => handleLeave(OfficeSecurityTimer, setOfficeSecurity)}><span className={`${OfficeSecurity && 'text-blue-600'}`}>Office & Security </span> <RiArrowDropUpLine className={`text-6xl ${OfficeSecurity ? 'text-blue-600 rotate-80 transform transition-transform duration-1000 ease-in-out' : '-rotate-0 transform transition-transform duration-1000 ease-in-out'}`}/>
       {OfficeSecurity && (
         <div className="absolute top-44 left-90 mt-2">
          <MegaMenu4/>
    </div>
       ) 
       }
        </li>

       <div className="border border-gray-200"></div>
       <li className="h-14 flex items-center p-6 hover:text-blue-500">Camera</li>   
       <div className="border border-gray-200"></div>
       <li className="h-14 flex items-center p-6 hover:text-blue-500">Drone</li>
       <div className="border border-gray-200"></div>
       <li className="h-14 flex items-center p-6 hover:text-blue-500">Gamepad</li>
       <div className="border border-gray-200"></div>
       <li className="h-14 flex items-center p-6 hover:text-blue-500">Mobile</li>
       <div className="border border-gray-200"></div>
       <li className="h-14 flex items-center p-6 hover:text-blue-500">Speaker</li>
       <div className="border border-gray-200 "></div>
       <li className="h-14 flex items-center p-6 hover:text-blue-500">All Categories</li>
          </ul>
        )}
      </div>

      {/* Search Bar */}
      <div className="flex border border-gray-300 rounded-lg ">
        <input
          type="text"
          placeholder="Find your product"
          className="px-4 rounded-lg w-full lg:w-[500px] md:w-[300px] h-16"
        />

        {/* Category Select */}
        <div className="relative">
          <button
            onClick={() => setSelOpen(!selOpen)}
            className="flex justify-between items-center my-4 bg-white w-60 border-l border-gray-300 px-4"
          >
            <div>All Categories</div>
            <MdKeyboardArrowDown className="ml-2 text-3xl" />
          </button>
          {selOpen && (
            <ul className="absolute right-0 mt-2 shadow-lg rounded-lg w-48 z-15 bg-blue-600 text-white font-bold">
            <li className="hover:bg-amber-400 px-2">All Categories</li>
            <li className="hover:bg-amber-400 px-2">Portable</li>
            <li className="hover:bg-amber-400 px-2">Watch</li>
            <li className="hover:bg-amber-400 px-2">Speaker</li>
            <li className="hover:bg-amber-400 px-2">Projector</li>   
            <li className="hover:bg-amber-400 px-2">Mobile</li>
            <li className="hover:bg-amber-400 px-2">Light</li>
            <li className="hover:bg-amber-400 px-2">Laptop</li>
            <li className="hover:bg-amber-400 px-2">Headphone</li>
            <li className="hover:bg-amber-400 px-2">Google Glass</li>
            <li className="hover:bg-amber-400 px-2">Gamepad</li>
            <li className="hover:bg-amber-400 px-2">Drone</li>
            <li className="hover:bg-amber-400 px-2">Camera</li>
            <li className="hover:bg-amber-400 px-2">3d Glass</li>
            <li className="hover:bg-amber-400 px-2">Uncategorized</li>
            </ul>
          )}
        </div>

        {/* Search Button */}
 <button className="relative overflow-hidden px-6 py-2 bg-yellow-400 text-white group flex items-center justify-center">
  <span className="relative z-10">
    <MdSearch size={24} />
  </span>
  <span
    className="
      absolute inset-0 
      bg-green-500 
      transform translate-x-full origin-right 
      group-hover:translate-x-0 
      transition-transform duration-300
      rounded-tl-full
    "
  />
</button>

      </div>

      {/* Promo Button */}
<button className="relative overflow-hidden btn btn-outline btn-info whitespace-normal py-8 px-19 group transition-all duration-500 ease-in-out">
  {/* Gradient Circle Overlay from top-right */}
  <span className="absolute top-0 right-0 w-0 h-full bg-info rounded-full transition-all duration-800 ease-in-out group-hover:w-full"></span>

  {/* Button Text */}
  <span className="relative z-10 font-bold text-info group-hover:text-white">
    BLACK FRIDAY
  </span>
  <br />
  <span className="relative z-10 text-sm text-info group-hover:text-white">
    Get 45% Off!
  </span>
</button>



    </div>
  );
};

export default HeaderSearch;


