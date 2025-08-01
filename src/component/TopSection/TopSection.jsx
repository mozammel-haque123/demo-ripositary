import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { MdPolicy } from "react-icons/md";
import { TbBus } from "react-icons/tb";

const TopSection = () => {
  return (
    <div className="bg-gray-100 py-2 hidden md:block">
      <div className="w-11/12 mx-auto md:flex sm:hidden justify-between items-center space-y-2 sm:space-y-0">
        
        {/* Left group */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 sm:gap-x-8">
          
          <div className="flex items-center gap-2">
            <TbBus className="text-xl sm:text-2xl" />
            <p className="text-sm sm:text-base">Free Delivery</p>
          </div>

          <span className="text-gray-400 hidden sm:block">|</span>

          <div className="flex items-center gap-2">
            <MdPolicy className="text-xl sm:text-2xl" />
            <p className="text-sm sm:text-base">Returns Policy</p>
          </div>

          <span className="text-gray-400 hidden sm:block">|</span>

          <div className="flex items-center gap-4">
            <p className="text-sm sm:text-base">Follow Us</p>
            <div className="flex gap-10 text-lg sm:text-xl">
              <FaFacebook />
              <FaTwitter />
              <FaThreads />
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Right button */}
        <button className="font-bold text-sm sm:text-base">
          Login
        </button>
      </div>
    </div>
  );
};

export default TopSection;
