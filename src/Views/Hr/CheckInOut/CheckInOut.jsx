import React from "react";
import CommonButton from "../../../Components/Common/CommonButton/CommonButton";

const CheckInOut = () => {
  return (
    <div className="shadow-md mt-2 h-120 justify-between px-7 py-4 rounded-md bg-white w-full  flex flex-col gap-2">
      <div className="border-b border-gray-400 py-2">
        <h1 className="font-bold text-xl">Attendance Overview</h1>
      </div>
      <div className="w-full flex  flex-col">
        <div className="flex flex-col items-center justify-center h-50 w-full ">
          <h3 className="text-md fontbold">No check-in/check-out found</h3>
        </div>
      </div>
      <CommonButton text={"View All Attendance"} className={"w-full"} />
    </div>
  );
};

export default CheckInOut;
