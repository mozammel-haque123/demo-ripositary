import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine, RiMenuLine, RiCloseLine } from "react-icons/ri";
import { GiSelfLove } from "react-icons/gi";
import { MdOutlineShoppingBag } from "react-icons/md";
import navlogo from '../../assets/navlog.png';
import Hover1 from '../Hover1/Hover1';
import Hover2 from '../Hover2/Hover2';
import news from '../../assets/removebg.png';
import hot from '../../assets/hotyellow.png'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openHome, setOpenHome] = useState(false);
  const [openPages, setOpenPages] = useState(false);
  const [openProducts, setProducts] = useState(false);
  const [openShop, setShop] = useState(false);
  const [openBlogs, setBlogs] = useState(false);
  const [openGallery, setGallery] = useState(false);

  // Delay timer refs
  const homeTimer = useRef(null);
  const pagesTimer = useRef(null);
  const productsTimer = useRef(null);
  const blogsTimer = useRef(null);
  const galleryTimer = useRef(null);

  // Handlers for desktop hover
  const handleEnter = (timerRef, setter) => {
    clearTimeout(timerRef.current);
    setter(true);
  };
  const handleLeave = (timerRef, setter) => {
    timerRef.current = setTimeout(() => setter(false), 100);
  };

  return (
    <nav className="bg-white mb-6 mt-8">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={navlogo} alt="Logo" className="h-8 w-40" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Home */}
            <div
              onMouseEnter={() => handleEnter(homeTimer, setOpenHome)}
              onMouseLeave={() => handleLeave(homeTimer, setOpenHome)}
              className="relative"
            >
              <NavLink className="flex items-center font-bold hover:text-blue-600">
                Home <RiArrowDropDownLine className="ml-1 text-2xl" />
              </NavLink>
              {openHome && (
                <div className="absolute top-9 left-1/2 -translate-x-1/4 mt-2 bg-white p-4 rounded shadow-lg z-20">
                  <Hover1 />
                </div>
              )}
            </div>

            {/* Pages and nested Products */}
            <div
              onMouseEnter={() => handleEnter(pagesTimer, setOpenPages)}
              onMouseLeave={() => handleLeave(pagesTimer, setOpenPages)}
              className="relative"
            >
              <NavLink className="flex items-center font-semibold hover:text-blue-600">
                Pages <RiArrowDropDownLine className="ml-1 text-2xl" />
              </NavLink>
              {openPages && (
                <div className="absolute top-full mt-2 bg-white p-4 rounded shadow-lg z-20 w-48">
                  <ul className="space-y-2">
                    <li className="hover:text-blue-600">About Us</li>
                    <li className="hover:text-blue-600">Contact</li>
                    <li className="hover:text-blue-600">FAQ</li>
                    <li className="hover:text-blue-600">Terms & Conditions</li>
                    {/* Nested Products */}
                    <li className="pt-2 border-t border-gray-200">
                      <div
                        onMouseEnter={() => handleEnter(productsTimer, setProducts)}
                        onMouseLeave={() => handleLeave(productsTimer, setProducts)}
                        className="relative"
                      >
                        <div className="flex items-center cursor-pointer hover:text-blue-600">
                          Products <RiArrowDropDownLine className="ml-1 text-xl" />
                        </div>
                        {openProducts && (
                          <div className="absolute left-full top-0 ml-2 bg-white p-4 rounded shadow-lg w-40">
                            <ul className="space-y-2">
                              <li className="hover:text-blue-600">Category 1</li>
                              <li className="hover:text-blue-600">Category 2</li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Shop */}
            <div
              onMouseEnter={() => handleEnter(productsTimer, setShop)}
              onMouseLeave={() => handleLeave(productsTimer, setShop)}
              className="relative"
            >
              <NavLink className="flex items-center font-semibold hover:text-blue-600">
                Shop <RiArrowDropDownLine className="ml-1 text-2xl" />
              </NavLink>
              {openShop && (
                <div className="absolute top-full mt-2 bg-white p-4 rounded shadow-lg z-20 w-40">
                  <ul className="space-y-2">
                    <li className="hover:text-blue-600">Shop</li>
                    <li className="hover:text-blue-600">Product Details</li>
                  </ul>
                </div>
              )}
             <img className="w-15 absolute -top-10 hidden md:block" src={news} alt="news" />

            </div>

            {/* Blogs */}
            <div
              onMouseEnter={() => handleEnter(blogsTimer, setBlogs)}
              onMouseLeave={() => handleLeave(blogsTimer, setBlogs)}
              className="relative"
            >
              <NavLink className="flex items-center font-semibold hover:text-blue-600">
                Blogs <RiArrowDropDownLine className="ml-1 text-2xl" />
              </NavLink>
              {openBlogs && (
                <div className="absolute top-full mt-2 bg-white p-4 rounded shadow-lg z-20 w-40">
                  <ul className="space-y-2">
                    <li className="hover:text-blue-600">Blog</li>
                    <li className="hover:text-blue-600">Single Blog</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Gallery */}
              <div
              onMouseEnter={() => handleEnter(galleryTimer, setGallery)}
              onMouseLeave={() => handleLeave(galleryTimer, setGallery)}
              className="relative"
            >
              <NavLink className="flex items-center font-semibold hover:text-blue-600">
                Gallery <RiArrowDropDownLine className="ml-1 text-2xl" />
              </NavLink>
              {openGallery && (
                <div className="absolute top-full mt-2 lg:-left-[800px] md:-left-[550px] md:transform-none  lg:right-0 p-4 rounded shadow-lg z-20">
                  <Hover2 />
                </div>
              )}

               <img className="w-15 absolute -top-10 hidden md:block" src={hot} alt="news" />
            </div>

            {/* Donate / Icons */}
               <button className="w-full text-left py-2 flex items-center justify-between font-semibold hover:text-blue-600">Donate <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0        
  "
/> </button>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <GiSelfLove className="text-4xl" />
              <span className="absolute -top-1 -right-2 bg-gray-200 rounded-full w-4 h-4 text-xs text-center">0</span>
            </div>
            <div className="relative">
              <MdOutlineShoppingBag className="text-4xl" />
              <span className="absolute -top-1 -right-2 bg-amber-300 rounded-full w-4 h-4 text-xs text-white text-center">0</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 focus:outline-none mr-20">
              {mobileOpen ? <RiCloseLine className="text-2xl" /> : <RiMenuLine className="text-2xl" />}
            </button>

           
             <div className="flex items-center space-x-4 pt-2">
              <div className="relative">
                <GiSelfLove className="text-2xl" />
                <span className="absolute -top-1 -right-2 bg-gray-200 rounded-full w-4 h-4 text-xs text-center">0</span>
              </div>
              <div className="relative">
                <MdOutlineShoppingBag className="text-2xl" />
                <span className="absolute -top-1 -right-2 bg-amber-300 rounded-full w-4 h-4 text-xs text-white text-center">0</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <button
              onClick={() => setOpenHome(!openHome)}
              className="w-full text-left py-2 flex items-center justify-between font-semibold hover:text-blue-600"
            >
              Home <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0        
  "
/>
            </button>
            {openHome && <Hover1 />}

            <button
              onClick={() => setOpenPages(!openPages)}
              className="w-full text-left py-2 flex items-center justify-between font-semibold hover:text-blue-600"
            >
              Pages <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0        
  "
/>
            </button>
            {openPages && (
              <ul className="pl-4 space-y-1">
                <li className="py-1 hover:text-blue-600">About Us</li>
                <li className="py-1 hover:text-blue-600">Contact</li>
                <li className="py-1 hover:text-blue-600">FAQ</li>
                <li className="py-1 hover:text-blue-600">Terms & Conditions</li>
                <li>
                  <button
                    onClick={() => setProducts(!openProducts)}
                    className="flex items-center justify-between w-full py-1"
                  >
                    Products <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0        
  hover:text-blue-600"
/>
                  </button>
                  {openProducts && (
                    <ul className="pl-4 space-y-1">
                      <li className="hover:text-blue-600">Category 1</li>
                      <li className="hover:text-blue-600">Category 2</li>
                    </ul>
                  )}
                </li>
              </ul>
            )}

            <button
              onClick={() => setShop(!openShop)}
              className="w-full text-left py-2 flex items-center justify-between font-semibold hover:text-blue-600"
            >
              Shop <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0        
  "
/>
            </button>
            {openShop && (
              <ul className="pl-4 space-y-1">
                <li className="hover:text-blue-600">Shop</li>
                <li className="hover:text-blue-600">Product Details</li>
              </ul>
            )}

            <button
              onClick={() => setBlogs(!openBlogs)}
              className="w-full text-left py-2 flex items-center justify-between font-semibold hover:text-blue-600"
            >
              Blogs <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0        
  "
/>
            </button>
            {openBlogs && (
              <ul className="pl-4 space-y-1">
                <li className="hover:text-blue-600">Blog</li>
                <li className="hover:text-blue-600">Single Blog</li>
              </ul>
            )}

            <button
              onClick={() => setGallery(!openGallery)}
              className="w-full text-left py-2 flex items-center justify-between font-semibold hover:text-blue-600"
            >
              Gallery <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0        
  "
/>
            </button>
            {openGallery && <Hover2 />}

            <button className="w-full text-left py-2 flex items-center justify-between font-semibold hover:text-blue-600">Donate <RiArrowDropDownLine className="text-2xl border-1 rounded-full sm:border sm:border-gray-300 md:border-0        
  "
/> </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;






// // 

// import { RiArrowDropDownLine } from "react-icons/ri";
// import { NavLink } from "react-router-dom";
// import navlogo from '../../assets/navlog.png'
// import { GiSelfLove } from "react-icons/gi";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { useRef, useState } from "react";
// import Hover1 from "../Hover1/Hover1";
// import Hover2 from "../Hover2/Hover2";

// const Navbar = () => {
//     const [openHome, setOpenHome] = useState(false)
//     const [openPages, setOpenPages] = useState(false)
//     const [openProducts, setProducts] = useState(false)
//     const [openShop, setShop] = useState(false)
//     const [openBlogs, setBlogs] = useState(false)
//     const [openGallery, setGallery] = useState(false)

//   // Delay handler using useRef
//   const homeTimer = useRef(null);
//   const pagesTimer = useRef(null);
//   const ProductsTimer = useRef(null);
//   const BlogsTimer = useRef(null);
//   const GalleryTimer = useRef(null);

//   const handleHomeEnter = () => {
//     clearTimeout(homeTimer.current);
//     setOpenHome(true);
//   };

//   const handleHomeLeave = () => {
//     homeTimer.current = setTimeout(() => {
//       setOpenHome(false);
//     }, 100); // 1০০ মিলিসেকেন্ড দেরি
//   };

//   const handlePagesEnter = () => {
//     clearTimeout(pagesTimer.current);
//     setOpenPages(true);
//   };

//   const handlePagesLeave = () => {
//     pagesTimer.current = setTimeout(() => {
//       setOpenPages(false);
//     }, 100);
//   };

//   const handleProductsEnter = () => {
//     clearTimeout(ProductsTimer.current);
//     setProducts(true);
//   };

//   const handleProductsLeave = () => {
//     ProductsTimer.current = setTimeout(() => {
//       setProducts(false);
//     }, 100);
//   };
  
//   const handleShopEnter = () => {
//     clearTimeout(ProductsTimer.current);
//     setShop(true);
//   };

//   const handleShopLeave = () => {
//     ProductsTimer.current = setTimeout(() => {
//       setShop(false);
//     }, 100);
//   };

//   const handleBlogsEnter = () => {
//     clearTimeout(BlogsTimer.current);
//     setBlogs(true);
//   };

//   const handleBlogsLeave = () => {
//     BlogsTimer.current = setTimeout(() => {
//       setBlogs(false);
//     }, 100);
//   };

//   const handleGalleryEnter = () => {
//     clearTimeout(GalleryTimer.current);
//     setGallery(true);
//   };

//   const handleGalleryLeave = () => {
//     GalleryTimer.current = setTimeout(() => {
//       setGallery(false);
//     }, 100);
//   };



//     return (
//  <div className="my-6">
     
//     <div className="flex justify-between items-center">
//      <div>
//     <img src={navlogo} alt="" />
//     </div>
//     <div className="flex gap-5">
//     {/* Home satar */}
// <div
//    onMouseEnter={handleHomeEnter}
//  onMouseLeave={handleHomeLeave}

//   className="relative"
// >
//   <NavLink className="btn hover:text-blue-600 font-bold flex items-center gap-1">
//     Home <RiArrowDropDownLine className="text-3xl" />
//   </NavLink>

//   <div
//     className={`absolute top-9 left-1/2 -translate-x-1/4 mt-2 bg-white p-4 rounded shadow z-50 ${
//       openHome ? "block" : "hidden"
//     }`}
//   >
//     <Hover1 />
//   </div>
// </div>
//    {/* Home end */}

//    {/* Pages satar */}
// <div
//  onMouseEnter={handlePagesEnter}
//  onMouseLeave={handlePagesLeave}
//   className="relative"
// >
//  <NavLink  className={'btn hover:text-blue-600 font-bold'}>Pages <RiArrowDropDownLine className="text-3xl" /> </NavLink> 

//   <div
//     className={`absolute top-9 left-1/2 -translate-x-1/4 mt-2 bg-white p-4 rounded shadow z-50 ${
//       openPages ? "block" : "hidden"
//     }`}
//   >
//    <ul className="w-[180px] flex flex-col gap-4">
//    <li className={' hover:text-blue-600 font-bold'}>About Us</li>
//    <li className={' hover:text-blue-600 font-bold'}>contact</li>
//    <li className={' hover:text-blue-600 font-bold'}>FAQ</li>
//    <li className={' hover:text-blue-600 font-bold'}>Teems and Conditions</li>

//    <li><div
//    onMouseEnter={handleProductsEnter}
//  onMouseLeave={handleProductsLeave}

//   className="relative"
// >
//   <NavLink className="hover:text-blue-600 font-bold flex items-center gap-1">
//     Products <RiArrowDropDownLine className="text-3xl" />
//   </NavLink>

//   <div
//     className={`absolute top-0 left-1/5 translate-x-40 mt-2 bg-white p-4 rounded shadow z-50 ${
//       openProducts ? "block" : "hidden"
//     }`}
//   >
//     <ul className="w-[180px] flex flex-col gap-4">
//       <li className={' hover:text-blue-600 font-bold'}>Products category</li>
//       <li className={' hover:text-blue-600 font-bold'}>Products category v2</li>
//     </ul>
//   </div>
// </div></li>


//    </ul>
//   </div>
// </div>
//  {/* Pages end */}


//    {/* Shop satar */}
// <div
//    onMouseEnter={handleShopEnter}
//  onMouseLeave={handleShopLeave}

//   className="relative"
// >
//  <NavLink  className={'btn hover:text-blue-600 font-bold'}>Shop <RiArrowDropDownLine className="text-3xl" /> </NavLink> 

//   <div
//     className={`absolute top-9 left-1/2 -translate-x-1/4 mt-2 bg-white p-4 rounded shadow z-50 ${
//       openShop ? "block" : "hidden"
//     }`}
//   >
// <ul className="w-[180px] flex flex-col gap-4">
// <li className={' hover:text-blue-600 font-bold'}>Shop</li>
// <li className={' hover:text-blue-600 font-bold'}>Product Details</li>
// </ul>
//   </div>
// </div>

//     {/* Shop end */}

//     {/* Blogs start */}
// <div
//    onMouseEnter={handleBlogsEnter}
//  onMouseLeave={handleBlogsLeave}

//   className="relative"
// >
// <NavLink className={'btn hover:text-blue-600 font-bold'}>Blogs <RiArrowDropDownLine className="text-3xl" /> </NavLink> 

//   <div
//     className={`absolute top-9 left-1/2 -translate-x-1/4 mt-2 bg-white p-4 rounded shadow z-50 ${
//       openBlogs ? "block" : "hidden"
//     }`}
//   >
// <ul className="w-[180px] flex flex-col gap-4">
// <li className={' hover:text-blue-600 font-bold'}>Blog</li>
// <li className={' hover:text-blue-600 font-bold'}>Blogs Sigle</li>
// </ul>
//   </div>
// </div>
//    {/* Blogs end */}

 
//     {/* Gallery satar */}
// <div
//    onMouseEnter={handleGalleryEnter}
//  onMouseLeave={handleGalleryLeave}

//   className="relative"
// >
// <NavLink className={'btn hover:text-blue-600 font-bold'}>Gallery <RiArrowDropDownLine className="text-3xl" /> </NavLink>

//   <div
//     className={`absolute top-9 -left-[800px] mt-2  p-4 rounded shadow z-50 ${
//       openGallery ? "block" : "hidden"
//     }`}
//   >
//    <Hover2></Hover2>
//   </div>
// </div>
//    {/* Gallery end */}


//  <NavLink  className={'btn hover:text-blue-600 font-bold'}>Doakn <RiArrowDropDownLine className="text-3xl" /> </NavLink> 
//     </div>
    
//     <div className="flex gap-4">
//      <div className="relative">
//     <GiSelfLove className="text-4xl" />
//     <p className="absolute top-0 left-6 rounded-full w-4 text-center bg-gray-200">0</p>
//      </div>
//      <div className="relative">
//      <MdOutlineShoppingBag className="text-4xl" />
//      <p className="absolute top-0 left-6 rounded-full w-4 bg-amber-300 text-center text-white">0</p>
//      </div>
//     </div>

//     </div>
//    </div>
//     );
// };

// export default Navbar;
// // 