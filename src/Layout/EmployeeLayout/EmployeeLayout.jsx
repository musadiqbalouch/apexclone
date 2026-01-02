import React from "react";
import { Route, Routes } from "react-router-dom";
import Employee from "../../Views/Employee";

const EmployeeLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="employe" element={<Employee />} />
      </Routes>
    </div>
  );
};

export default EmployeeLayout;
