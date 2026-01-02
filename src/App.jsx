import React from "react";
import { useAuthContext } from "./Context/AuthContext";
import { Route, Routes } from "react-router-dom";
import Login from "./Layout/AuthLayout/Login";
import EmployeeLayout from "./Layout/EmployeeLayout/EmployeeLayout";
import HrLayout from "./Layout/HrLayout/HrLayout";
const App = () => {
  const { isAuthenticated, user } = useAuthContext();
  // console.log("🚀 ~ App ~ user:", user.role);
  console.log("🚀 ~ App ~ isAuthenticated:", isAuthenticated);
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={!isAuthenticated ? <Login /> : <EmployeeLayout />}
        />
        <Route
          path="/*"
          element={
            isAuthenticated && user.role === "HR" ? (
              <HrLayout />
            ) : (
              <EmployeeLayout />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
