import React from "react";
import Input from "../../../../../Components/Common/CommonInput/Input";
import { TbPhoto } from "react-icons/tb";

const ResumePayslip = ({ formik }) => {
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
            <label className="text-sm font-semibold">
              Upload Experience Letter
            </label>
            <p className="text-gray-800 text-xs font-semibold">
              File should be below 5MB (.PDF,.DOC,.DOCX)
            </p>
            <Input type={"file"} {...formik.getFieldProps("paySlip")} />
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
            <label className="text-sm font-semibold">
              Upload Last Education
            </label>
            <p className="text-gray-800 text-xs font-semibold">
              File should be below 5MB (.PDF,.DOC,.DOCX)
            </p>
            <Input type={"file"} {...formik.getFieldProps("updatedResume")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePayslip;
