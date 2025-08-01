
import { FaCouch, FaLightbulb, FaTags } from "react-icons/fa";
import { MdOutlineCategory, MdNewReleases } from "react-icons/md";
import { GiWoodPile } from "react-icons/gi";
import sofa from "../../assets/hand.png";

const MegaMenu4 = () => {
  return (
    <div className="relative w-[1000px] bg-white shadow-lg rounded-lg p-6 z-50 overflow-hidden">
      {/* Main grid: Left (menu) and Right (image) */}
      <div className="grid grid-cols-5 gap-6">
        {/* Menu Columns (4 cols) */}
        <div className="col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
          {/* Column 1 */}
          <div>
            <h4 className="font-bold flex items-center gap-1 mb-2 text-neutral-700">
              <FaCouch className="text-orange-500" /> FURNITURE
            </h4>
            <ul className="space-y-1 text-gray-600">
              <li>Dining Chairs</li>
              <li>Counter & Bar Stools</li>
              <li>Occasional Chairs</li>
              <li>Daybeds & Chaises</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold flex items-center gap-1 mb-2 text-neutral-700">
              <MdOutlineCategory className="text-orange-500" /> ACCESSORIES
            </h4>
            <ul className="space-y-1 text-gray-600">
              <li>Cabinets & Bookcases</li>
              <li>Screens</li>
              <li>Outdoor Furniture</li>
              <li>Floor Samples</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold flex items-center gap-1 mb-2 text-neutral-700">
              <FaLightbulb className="text-orange-500" /> LIGHTINGS
            </h4>
            <ul className="space-y-1 text-gray-600">
              <li>Benches & Ottomans</li>
              <li>Dining Tables</li>
              <li>Coffee & Cocktail Tables</li>
              <li>Consoles & Desks</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-bold flex items-center gap-1 mb-2 text-neutral-700">
              <GiWoodPile className="text-orange-500" /> TEXTURE LAB
            </h4>
            <ul className="space-y-1 text-gray-600">
              <li>Side Tables</li>
              <li>Beside Tables</li>
              <li>Sideboards & Drawers</li>
              <li>Lounge Chairs</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="font-bold flex items-center gap-1 mb-2 text-neutral-700">
              <MdNewReleases className="text-orange-500" /> WHAT’S NEW
            </h4>
            <ul className="space-y-1 text-gray-600">
              <li>Benches & Ottomans</li>
              <li>Cocktail Tables</li>
              <li>Dining Tables</li>
              <li>Consoles & Desks</li>
            </ul>
          </div>


             {/* Right image */}
        <div className="col-span-1 absolute -right-6 top-0">
          <img
            src={sofa}
            alt="Sofa"
            className="bottom-0 right-0 w-full h-[400px]"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu4;
