import React from "react";
import { TbPhoto } from "react-icons/tb";
import CommonButton from "../../../../Components/Common/CommonButton/CommonButton";
// import { UploadDocument } from "../../../../Components/Constants/HrConstantsData/HrConstantData";
import { Documents } from "../../../../Components/Constants/HrConstantsData/HrConstantData";

const UploadDocument = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-5 mt-2">
      {Documents.map((document) => (
        <div className="w-full border-gray-200 flex items-center border h-20 mt-2 rounded-md px-3 gap-3">
          <div className="bg-gray-300 w-fit  text-center p-5 rounded-3xl">
            <TbPhoto className=" text-gray-600 h-7 w-7 text-center" />
          </div>
          <div className="w-full">
            <label className="text-base font-semibold">{document.title}</label>
            <p className="text-gray-800 text-sm font-semibold">
              {document.imageSize}
            </p>
            <CommonButton className={""} text={"Upload"} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UploadDocument;
