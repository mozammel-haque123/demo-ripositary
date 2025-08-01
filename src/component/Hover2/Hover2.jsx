import {
  FaCamera,
  FaGamepad,
  FaLaptop,
  FaMobileAlt,
  FaHeadphones,
} from "react-icons/fa";
import pre from '../../assets/removebg-preview.png';

const Hover2 = () => (
  <div
    className="
      bg-gray-900 text-white rounded-xl overflow-hidden
      w-[90vw] max-w-[1250px]
      h-auto md:h-[350px]
      p-6 sm:p-8
    "
  >
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* Column 1 */}
      <div className="px-2">
        <h3 className="text-lg font-bold mb-2">Theme Elements</h3>
        <p className="text-sm mb-4 text-gray-400">Pages every site needs.</p>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-2"><FaCamera /> Camera</li>
          <li className="flex items-center gap-2"><FaHeadphones /> Headphone</li>
          <li className="flex items-center gap-2"><FaGamepad /> Gamepad</li>
          <li className="flex items-center gap-2"><FaLaptop /> Laptop</li>
          <li className="flex items-center gap-2"><FaMobileAlt /> Mobile</li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="px-2">
        <h3 className="text-lg font-bold mb-2">Shop Pages</h3>
        <p className="text-sm mb-4 text-gray-400">Essential e-commerce layouts.</p>
        <ul className="space-y-2 text-sm">
          <li>Shop</li>
          <li>Product Details</li>
          <li>Wishlist</li>
          <li>Category</li>
          <li>Blog</li>
          <li>Blog Single</li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="px-2">
        <h3 className="text-lg font-bold mb-2">Info Pages</h3>
        <p className="text-sm mb-4 text-gray-400">Standard info pages.</p>
        <ul className="space-y-2 text-sm">
          <li>Category V2</li>
          <li>Contact</li>
          <li>Terms & Conditions</li>
          <li>FAQ</li>
          <li>About Us</li>
          <li>WooCommerce Placeholder</li>
        </ul>
      </div>

      {/* Column 4 */}
      <div className="px-2 flex flex-col relative">
        <h3 className="text-lg font-bold mb-2">Feature Spotlight</h3>
        <p className="text-sm mb-4 text-gray-400 leading-relaxed">
          The Apple Watch’s speaker & mic let you call friends from your wrist—
          splash-resistant keeps you connected everywhere.
        </p>
        <img
          src={pre}
          alt="Feature Preview"
          className="w-full h-auto mt-auto rounded-lg shadow-lg absolute top-45 left-8"
        />
      </div>
    </div>
  </div>
);

export default Hover2;
