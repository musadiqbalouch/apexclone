import React, { useRef } from "react";
import { Documents } from "../../../../Components/Constants/HrConstantsData/HrConstantData";
import Input from "../../../../Components/Common/CommonInput/Input";
import CnicComponent from "./Details/CnicComponent";
import Experince from "./Details/Experince";
import ResumePayslip from "./Details/Resume&Payslip";

const UploadDocument = ({ formik }) => {
  return (
    <div className="w-full">
      <CnicComponent formik={formik} />
      <Experince formik={formik} />
      <ResumePayslip formik={formik} />
    </div>
  );
};

export default UploadDocument;
