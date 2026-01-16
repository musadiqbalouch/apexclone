import React, { useEffect, useState } from "react";
import ApexLogo from "../../../assets/HrSidebarimages/ApexLogo.png";
import { SideBarLinks } from "../../Constants/Constant";
import { bottomLinks } from "../../Constants/Constant";
import { NavLink, useLocation } from "react-router-dom";

const HrSidebar = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/hr/employees/list" ||
      location.pathname === "/hr/employees/department" ||
      location.pathname === "/hr/employee-face-verification"
    ) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  }, [location.pathname]);
  return (
    <div className="bg-black text-xs h[40%] my-5 w-full  py-5 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl text-white font-semibold">
      {/* Logo */}
      <div className="mb-5">
        <img className="object-cover mx-auto" src={ApexLogo} alt="Logo" />
      </div>

      <div className="flex flex-col gap-1 ">
        {SideBarLinks.map((link, index) => {
          if (link.nestedroutes) {
            return (
              <div key={index} className="mx-5">
                <div
                  onClick={handleDropDown}
                  className={`flex items-center gap-3 py-2 px-2 rounded-sm cursor-pointer ${
                    dropDown ? "bg-red" : "bg-black"
                  }`}
                >
                  <img className="h-4 object-cover" src={link.logo} alt="" />
                  <span className="text-xs">{link.title}</span>
                </div>

                {dropDown && (
                  <div className="ml-5 flex flex-col gap-2 mt-1">
                    {link.nestedroutes.map((route, idx) => (
                      <NavLink
                        key={idx}
                        to={route.path}
                        className={({ isActive }) =>
                          `text-xs px-2 py-1 rounded-sm ${
                            isActive ? "text-red" : "text-white"
                          }`
                        }
                      >
                        {route.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          return (
            <NavLink
              key={index}
              to={link.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 mx-5 py-3 px-2 rounded-sm ${
                  isActive ? "bg-red" : "bg-black"
                }`
              }
            >
              <img className="h-4 object-cover" src={link.logo} alt="" />
              <span className="text-xs">{link.title}</span>
            </NavLink>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 mt-10">
        {bottomLinks.map((link, index) => (
          <a key={index} className="flex items-center gap-3 mx-7">
            <img className="h-4 object-cover" src={link.logo} alt="" />
            <h2>{link.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HrSidebar;
