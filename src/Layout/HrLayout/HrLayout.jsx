import React from "react";
import { Route, Routes } from "react-router-dom";
import HR from "../../Views/Hr";

const HrLayout = () => {
  return (
    <div>
      <Routes>
        <Route path="hr" element={<HR />} />
      </Routes>
    </div>
  );
};

export default HrLayout;
