import React from "react";
import HrSidebar from "../../Components/HrComp/HrSidebar/HrSidebar";
import Header from "../../Components/Common/CommanHeader/Header";

const HrLayout = () => {
  return (
    <div className="w-full flex ">
      <div className="w-[17%] ">
        <HrSidebar />
      </div>
      <div className="w-full">
        <Header />
      </div>
    </div>
  );
};

export default HrLayout;
