import React from "react";
import { useAuthContext } from "./Context/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Layout/AuthLayout/Login";
import EmployeeLayout from "./Layout/EmployeeLayout/EmployeeLayout";
import HrLayout from "./Layout/HrLayout/HrLayout";
import RoleBased from "./RolebasedAuth/RoleBased";
const App = () => {
  const { isAuthenticated, user } = useAuthContext();
  console.log("🚀 ~ App ~ isAuthenticated:", isAuthenticated);

  return (
    <div className="w-full">
      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to={"/"} />}
        />
        <Route
          path="/"
          element={isAuthenticated ? <RoleBased /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/hr/*"
          element={
            isAuthenticated && user?.role === "HR" ? (
              <HrLayout />
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/Employee/*"
          element={
            isAuthenticated && user?.role === "Employee" ? (
              <EmployeeLayout />
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
