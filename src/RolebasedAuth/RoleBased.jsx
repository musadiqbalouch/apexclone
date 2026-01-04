import React from "react";
import { useAuthContext } from "../Context/AuthContext";
import HrLayout from "../Layout/HrLayout/HrLayout";
import EmployeeLayout from "../Layout/EmployeeLayout/EmployeeLayout";
import { Navigate } from "react-router-dom";

const RoleBased = () => {
  const { user } = useAuthContext();
  if (user?.role === "HR") {
    return <Navigate to={"/hr"} replace />;
  } else if (user?.role === "Employee") {
    return <Navigate to={"/employee"} replace />;
  } else {
    return <Navigate to={"/login"} replace />;
  }
};

export default RoleBased;
