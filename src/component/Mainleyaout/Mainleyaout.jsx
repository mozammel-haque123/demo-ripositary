import { Outlet } from "react-router-dom";
import Fashioncard from "../Fashioncard/Fashioncard";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar2/Navbar2";
import Slaider from "../Slaider/Slaider";
import TopSection from "../TopSection/TopSection";

const Mainleyaout = () => {
  return (
    <div>
      <TopSection></TopSection>

      <div className="container mx-auto">
        <Navbar></Navbar>
        <HeaderSearch></HeaderSearch>
        <Slaider></Slaider>
        <Fashioncard></Fashioncard>
        <Outlet></Outlet>
        <Navbar2></Navbar2>
      </div>
    </div>
  );
};

export default Mainleyaout;
