import React from "react";
import { GoDotFill } from "react-icons/go";

const AttendanceOverview = () => {
  return (
    <div className="shadow-md mt-2  justify-between px-7 py-4 rounded-md bgwhite w-full  flex flex-col gap-2 h-120">
      <div className="border-b border-gray-400 py-2">
        <h1 className="font-bold text-xl">Attendance Overview</h1>
      </div>
      <div className="w-full flex  flex-col">
        <div className="flex flex-col items-center justify-center h-50 w-full ">
          <h3 className="text-3xl font-bold">Total employees</h3>
          <h3 className="text-2xl font-bold">10</h3>
        </div>
        <div className="text-sm font-semibold">
          <h3 className="text-xl font-bold">Status</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <GoDotFill className="text-green-500" />
              Present
            </div>
            <div>0</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <GoDotFill className="text-red-500" /> late
            </div>
            <div>0</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <GoDotFill className="text-yellow-500" />
              Absent
            </div>
            <div>0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceOverview;
