import React from "react";
import { GoDotFill } from "react-icons/go";
import CommonButton from "../../../Components/Common/CommonButton/CommonButton";

const EmployeeStatus = () => {
  const totalEmployee = 13;
  const fullTime = 9;
  const partTime = 4;

  const fullTimeper = (fullTime / totalEmployee) * 100;

  const partTimeper = (partTime / totalEmployee) * 100;

  return (
    <div className="shadow-md mt-2 w-full  justify-between px-3 py-4 rounded-md   flex flex-col gap-2">
      <div className="border-b border-gray-400 py-2">
        <h1 className="font-bold text-xl">Employee Status</h1>
      </div>
      <div className="w-full flex items-center justify-between text-base font-semibold">
        <h3>Total Employee</h3>
        <h3>{totalEmployee}</h3>
      </div>
      <div className="flex py-8">
        <div
          style={{ width: fullTimeper + "%" }}
          className="bg-yellow-500 h-6"
        ></div>
        <div
          style={{ width: partTimeper + "%" }}
          className="bg-blue-500 h-6"
        ></div>
      </div>
      <div className="border border-gray-400 flex my-4 ">
        <div className="flex w-[50%] flex-col border py-2 border-gray-400  justify-between">
          <div className="   font-semibold">
            <span className="flex  items-center text-sm ">
              <GoDotFill className="text-yellow-500" />
              Full time ({fullTimeper.toFixed(2)})
            </span>
          </div>
          <div>
            <h2 className="px-2 text-xl font-bold">{fullTime}</h2>
          </div>
        </div>
        <div className="flex w-[50%] border border-gray-400 flex-col justify-between py-2">
          <div className="text-sm font-semibold">
            <span className="flex items-center">
              <GoDotFill className="text-blue-500" />
              Part time ({partTimeper.toFixed(2)})
            </span>
          </div>
          <div>
            <h2 className="px-5 text-xl font-bold">{partTime}</h2>
          </div>
        </div>
      </div>
      <CommonButton
        text={"View All Employee"}
        className={"w-full! text-sm py-1!"}
      />
    </div>
  );
};

export default EmployeeStatus;
