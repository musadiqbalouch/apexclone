import React from "react";
import HrSidebar from "../../Components/HrComp/HrSidebar/HrSidebar";
import Header from "../../Components/Common/CommanHeader/Header";
import { Route, Routes } from "react-router-dom";
import HrDashboard from "../../Views/Hr/HrDashboard/HrDashboard";

const HrLayout = () => {
  return (
    <div className="w-full flex gap-5 pl-2 ">
      <div className="w-[20%] ">
        <HrSidebar />
      </div>
      <div className="flex-1">
        <div>
          <Header />
        </div>
        <div>
          <Routes>
            <Route path="/dashboard" element={<HrDashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default HrLayout;
