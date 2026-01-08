import React, { useState } from "react";
import PersonalInformarion from "./PersonalInformation/PersonalInformarion";
import EmployeeDetail from "./EmployeeDetail/EmployeeDetail";
import ItSystem from "./ItSystem/ItSystem";
import EmployeeCredentials from "./EmployeeCredentials/EmployeeCredentials";
import UploadDocument from "./UploadDocument/UploadDocument";
import { MdOutlineCancel } from "react-icons/md";
import { FormTitles } from "../../../Components/Constants/HrConstantsData/HrConstantData";
import CommonButton from "../../../Components/Common/CommonButton/CommonButton";
import * as Yup from "yup";
import { useFormik } from "formik";

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
  const validatationSchema = [
    Yup.object().shape({
      fullName: Yup.string().required("name is required"),
      gender: Yup.string().required("gender is required"),
      maritalstatus: Yup.string().required("Please select your marital status"),
      nationality: Yup.string().required("Please enter your nationality"),
    }),
    Yup.object().shape({
      jobTitle: Yup.string().required("name is required"),
      department: Yup.string().required("gender is required"),
      employeerole: Yup.string().required("Please select your marital status"),
      dateofJoining: Yup.string().required("Please enter your nationality"),
      employementType: Yup.string().required("Please enter your nationality"),
      workLocation: Yup.string().required("Please enter your nationality"),
      shiftTiming: Yup.string().required("Please enter your nationality"),
      ProbationPeriod: Yup.string().required("Please enter your nationality"),
      basePay: Yup.string().required("Please enter your nationality"),
      Allowances: Yup.string().required("Please enter your nationality"),
    }),
    Yup.object().shape({
      employeeEmail: Yup.string().required("name is required"),
      password: Yup.string().required("gender is required"),
    }),
  ];
  const CurrentStepperComponent = steps[currentStep];
  const CurrentValidationSchema = validatationSchema[currentStep];

  const formik = useFormik({
    initialValues: {
      profile: "",
      fullName: "",
      dateofbirth: "",
      gender: "",
      maritalstatus: "",
      nationality: "",
      address: "",
      emailAddress: "",
      phoneNumber: "",
      emergencyContactName: "",
      emergencyContactNumber: "",
      emergencyContactRelation: "",
      jobTitle: "",
      department: "",
      reportingManager: "",
      employeerole: "",
      dateofJoining: "",
      employementType: "",
      workLocation: "",
      shiftTiming: "",
      ProbationPeriod: "",
      additionalRole: "",
      basePay: "",
      Allowances: "",
      employeeEmail: "",
      password: "",
      checkInMethod: "",
      laptop: false,
      desktop: false,
      monitors: false,
      peripherals: false,
      emailAccountAccess: false,
      projectManagementTools: false,
      developmentTools: false,
      communicationTools: false,
      CNICFront: "",
      CNICBack: "",
      experienceLetter: "",
      lastEducation: "",
      paySlip: "",
      updatedResume: "",
    },
    validationSchema: CurrentValidationSchema,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
      setShowModal(false);
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          <div className="">
            <CurrentStepperComponent formik={formik} />
          </div>
          <div className="flex justify-center m-auto gap-5 mt-2">
            <CommonButton
              className={`${currentStep === 0 ? " hidden!" : "bg-gray-300 text-black! font-semibold cursor-pointer"}`}
              onClick={prevStep}
              text={"prev"}
            ></CommonButton>
            <CommonButton
              onClick={nextStep}
              type={"button"}
              text={"Next"}
              className={`${currentStep === steps.length - 1 ? "hidden" : "block cursor-pointer"}`}
            ></CommonButton>
            <CommonButton
              className={`${currentStep < steps.length - 1 ? "hidden" : "block cursor-pointer"}`}
              text={`submit`}
              type={"submit"}
            ></CommonButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
