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
  console.log(currentStep);
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
  const PersonalInformarionSchema = Yup.object().shape({
    fullName: Yup.string().required("Please enter your full name"),
    gender: Yup.string().required("Please select your gender"),
    maritalstatus: Yup.string().required("Please select your marital status"),
    nationality: Yup.string().required("Please enter your nationality"),
  });
  const EmployeeDetailSchema = Yup.object().shape({
    jobTitle: Yup.string().required("Please enter job title"),
    department: Yup.string().required("Please enter department"),
    employeerole: Yup.string().required("Please enter role"),
    dateofJoining: Yup.string().required("Please enter a valid date"),
    employementType: Yup.string().required("Please select employment type"),
    workLocation: Yup.string().required("Please enter work location"),
    shiftTiming: Yup.string().required("Please select shift timing"),
    ProbationPeriod: Yup.string().required("Please enter a valid number"),
    basePay: Yup.string().required("Please enter a valid number"),
    Allowances: Yup.string().required("Please enter a valid number"),
  });
  const EmployeeCredentialsSchema = Yup.object().shape({
    employeeEmail: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const CurrentStepperComponent = steps[currentStep];

  const CurrentValidationSchema = () => {
    if (currentStep === 0) {
      return PersonalInformarionSchema;
    } else if (currentStep === 1) {
      return EmployeeDetailSchema;
    } else {
      return EmployeeCredentialsSchema;
    }
  };

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
              className={`${
                currentStep === 0
                  ? " hidden!"
                  : "bg-gray-300 text-black! font-semibold cursor-pointer"
              }`}
              onClick={prevStep}
              text={"prev"}
            ></CommonButton>
            <CommonButton
              onClick={nextStep}
              type={"button"}
              text={"Next"}
              className={`${
                currentStep === steps.length - 1
                  ? "hidden"
                  : "block cursor-pointer"
              }`}
            ></CommonButton>
            <CommonButton
              className={`${
                currentStep < steps.length - 1
                  ? "hidden"
                  : "block cursor-pointer"
              }`}
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
