import React from "react";
import ApexLogo from "../../../assets/HrSidebarimages/ApexLogo.png";
import { SideBarLinks } from "../../Constants/Constant";
import { bottomLinks } from "../../Constants/Constant";
import { NavLink } from "react-router-dom";

const HrSidebar = () => {
  return (
    <div
      className="bg-black w-full  mx2 my-4 py-5 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl  
   text-white font-semibold "
    >
      <div className="flex flex-col   w-full gap-3">
        <div className="flex self-center">
          <img className=" h-12  object-cover " src={ApexLogo} alt="" />
        </div>
        <div className=" bg-amber400 flex flex-col gap-3">
          {SideBarLinks.map((link, index) => (
            <NavLink
              to={link.path}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? " flex  items-start gap-3 mx-5  bg-red  py-3  px-2 rounded-sm "
                  : " flex  items-start gap-3 mx-5  bgred  py-3  px-2 rounded-sm "
              }
            >
              <img className="h-4 object-cover" src={link.logo} alt="" />
              <h2 className=" text-xs">{link.title}</h2>
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col  gap-3 mt-10">
          {bottomLinks.map((link, index) => (
            <a className="flex items-center gap-3 mx-7" key={index}>
              <img className="h-4  object-cover" src={link.logo} alt="" />
              <h2 className="">{link.title}</h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HrSidebar;
