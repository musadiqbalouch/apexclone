import React from "react";
import { TbPhoto } from "react-icons/tb";
import Input from "../../../../../Components/Common/CommonInput/Input";

const CnicComponent = ({ handleFileChange }) => {
  return (
    <div className="flex gap-2 items-center justify-center">
      <div className="items-center gap-5 mt-2">
        <div className="w-full border-gray-200 flex items-center border py-3 mt-2 rounded-md px-3 gap-3">
          <div className="bg-gray-300 w-fit  text-center p-5 rounded-3xl">
            <span>
              <TbPhoto className=" text-gray-600 h-7 w-7" />
            </span>
          </div>
          <div className="w-full">
            <label className="text-sm font-semibold">Upload CNIC Front</label>
            <p className="text-gray-800 text-xs font-semibold">
              Image should be below 5MsB
            </p>
            <Input
              type={"file"}
              id={"CNICFront"}
              name={"CNICFront"}
              onChange={(e) => handleFileChange(e, "CNICFront")}
            />
          </div>
        </div>
      </div>
      <div className=" items-center gap-5 mt-2">
        <div className="w-full border-gray-200 flex items-center border py-3 mt-2 rounded-md px-3 gap-3">
          <div className="bg-gray-300 w-fit  text-center p-5 rounded-3xl">
            <span>
              <TbPhoto className=" text-gray-600 h-7 w-7" />
            </span>
          </div>
          <div className="w-full">
            <label className="text-sm font-semibold">Upload CNIC Back</label>
            <p className="text-gray-800 text-xs font-semibold">
              Image should be below 5MB
            </p>
            <Input
              type={"file"}
              id={"CNICBack"}
              name={"CNICBack"}
              onChange={(e) => handleFileChange(e, "CNICBack")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CnicComponent;
