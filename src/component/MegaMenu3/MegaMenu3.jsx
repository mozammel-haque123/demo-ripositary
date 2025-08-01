

import headphone from "../../assets/yearphone.png";
import camera from "../../assets/wristband.png";
import adapter from "../../assets/travelusb.png";
import smartwatch from "../../assets/ipcamera.png";

const MegaMenu3 = () => {
  const data = [
    {
      title: "ELECTRONICS",
      img: headphone,
      items: [
        "Easy to Customise",
        "Simple and intuitive",
        "Highly customisable",
        "Coding skills",
        "Easy to Customise",
      ],
    },
    {
      title: "SECURITY TOOLS",
      img: camera,
      items: [
        "Benches & Ottomans",
        "Dining Tables",
        "Coffee & Cocktail Tables",
        "Consoles & Desks",
        "Cocktail Tables",
      ],
    },
    {
      title: "BRAND GADGET",
      img: adapter,
      items: [
        "Side Tables",
        "Beside Tables",
        "Sideboards & Drawers",
        "Lounge Chairs",
        "Consoles & Desks",
      ],
    },
    {
      title: "SMARTWATCH",
      img: smartwatch,
      items: [
        "Dining Chairs",
        "Counter & Bar Stools",
        "Occasional Chairs",
        "Daybeds & Chaises",
        "Benches & Ottomans",
      ],
    },
  ];

  return (
    <div className="relative w-[1000px] bg-white shadow-lg rounded-lg p-6 z-50 overflow-hidden">
<div className="flex justify-between">
    <div>
         <div className="h-24">
        <img
          src={headphone}
          alt="Electronics"
          className="h-full object-contain"
        />
      </div>

      {/* Title */}
      <h4 className="font-bold text-neutral-800 mb-2 uppercase text-sm my-10">
        ELECTRONICS
      </h4>

      {/* List Items */}
      <ul className="space-y-1 text-gray-600 text-sm">
        <li>Easy to Customise</li>
        <li>Simple and intuitive</li>
        <li>Highly customisable</li>
        <li>Coding skills</li>
        <li>Easy to Customise</li>
      </ul>
    </div>
     <div className="border border-gray-200"></div>
    <div>
         <div className=" h-24">
        <img
          src={camera}
          alt="Electronics"
          className="h-full object-contain"
        />
      </div>

      {/* Title */}
      <h4 className="font-bold text-neutral-800 mb-2 uppercase text-sm my-10">
        ELECTRONICS
      </h4>

      {/* List Items */}
      <ul className="space-y-1 text-gray-600 text-sm">
        <li>Easy to Customise</li>
        <li>Simple and intuitive</li>
        <li>Highly customisable</li>
        <li>Coding skills</li>
        <li>Easy to Customise</li>
      </ul>
    </div>
     <div className="border border-gray-200"></div>
    <div>
         <div className="h-24">
        <img
          src={adapter}
          alt="Electronics"
          className="h-full object-contain"
        />
      </div>

      {/* Title */}
      <h4 className="font-bold text-neutral-800 mb-2 uppercase text-sm my-10">
        ELECTRONICS
      </h4>

      {/* List Items */}
      <ul className="space-y-1 text-gray-600 text-sm">
        <li>Easy to Customise</li>
        <li>Simple and intuitive</li>
        <li>Highly customisable</li>
        <li>Coding skills</li>
        <li>Easy to Customise</li>
      </ul>
    </div>
     <div className="border border-gray-200"></div>
    <div>
         <div className=" h-24">
        <img
          src={smartwatch}
          alt="Electronics"
          className="h-full object-contain"
        />
      </div>

      {/* Title */}
      <h4 className="font-bold text-neutral-800 mb-2 uppercase text-sm my-10">
        ELECTRONICS
      </h4>

      {/* List Items */}
      <ul className="space-y-1 text-gray-600 text-sm">
        <li>Easy to Customise</li>
        <li>Simple and intuitive</li>
        <li>Highly customisable</li>
        <li>Coding skills</li>
        <li>Easy to Customise</li>
      </ul>
    </div>
</div>
    </div>
  );
};

export default MegaMenu3;
