import React, { useState } from "react";
import PersonalInformarion from "./PersonalInformation/PersonalInformarion";
import EmployeeDetail from "./EmployeeDetail/EmployeeDetail";
import ItSystem from "./ItSystem/ItSystem";
import EmployeeCredentials from "./EmployeeCredentials/EmployeeCredentials";
import UploadDocument from "./UploadDocument/UploadDocument";
import { MdOutlineCancel } from "react-icons/md";
import { FormTitles } from "../../../Components/Constants/HrConstantsData/HrConstantData";
import CommonButton from "../../../Components/Common/CommonButton/CommonButton";

const AddEmployee = ({ setShowModal }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    PersonalInformarion,
    EmployeeDetail,
    ItSystem,
    EmployeeCredentials,
    UploadDocument,
  ];
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const CurrentStepperComponent = steps[currentStep];

  return (
    <div className="bg-white h-145 w-245 rounded-md px-4">
      <div className="w-full flex items-center justify-between  pt-4">
        <h2 className="text-gray-800 font-bold text-lg ">Add New Employee</h2>
        <MdOutlineCancel
          className="h-7 w-7"
          onClick={() => setShowModal(false)}
        />
      </div>
      <hr className="border mt-2 border-gray-400" />
      <div className="border border-gray-400 rounded-md mt-2 p-2">
        <div className="flex items-center justify-around">
          {FormTitles.map((title, index) => (
            <h2 className="text-gray-800 font-semibold text-sm" key={index}>
              {title}
            </h2>
          ))}
        </div>
        <div>
          <CurrentStepperComponent />
        </div>
        <div className="flex justify-center m-auto gap-5 mt-2">
          <CommonButton
            className={"bg-gray-300 text-black! font-semibold"}
            onClick={prevStep}
            text={"Close"}
          ></CommonButton>
          <CommonButton onClick={nextStep} text={"Next"}></CommonButton>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
