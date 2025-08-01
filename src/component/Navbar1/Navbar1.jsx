
import { NavLink, Outlet, useLoaderData } from "react-router-dom";

const Navbar1 = () => {
  const buttons = useLoaderData(); // loads navbarbutton1.json

  return (
    <div className="my-10 px-4 mt-20">

    <div className="flex justify-between items-center border-b border-gray-200 mb-2">
    <div>
     <p className="text-2xl font-medium"> Top Categories This Week</p>
     </div>

    <div className="flex flex-wrap gap-4 mb-6">
        {buttons.map((btn) => (
          <NavLink
            key={btn.id}
            to={`data/${btn.id}`}
            className={({ isActive }) =>
              "font-bold" + (isActive ? " text-yellow-400 font-bold" : "text-[20px] font-bold text-gray-400")
            }
          >
            {btn.label}
          </NavLink>
        ))}
      </div> 
    </div>

 

      <Outlet />
    </div>
  );
};

export default Navbar1;
