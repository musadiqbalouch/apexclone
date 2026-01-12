import React from "react";
import HrSidebar from "../../Components/HrComp/HrSidebar/HrSidebar";
import Header from "../../Components/Common/CommanHeader/Header";
import { Route, Routes } from "react-router-dom";
import HrDashboard from "../../Views/Hr/HrDashboard/HrDashboard";
import EmployeeList from "../../Views/Hr/EmployeeList/EmployeeList";

const HrLayout = () => {
  return (
    <div className="w-full flex gap-5 pl-2 ">
      <div className="w-[20%]  ">
        <HrSidebar />
      </div>
      <div className="flex-1">
        <div className=" ">
          <Header />
        </div>
        <div>
          <Routes>
            <Route index element={<HrDashboard />} />
            <Route path="/hr/employees/list" element={<EmployeeList />} />
            <Route path="/hr/employees/department" />
            <Route path="/hr/employee-face-verification" />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default HrLayout;
