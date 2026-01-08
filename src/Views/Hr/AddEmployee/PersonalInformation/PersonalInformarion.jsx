import React from "react";
import { TbPhoto } from "react-icons/tb";
import CommonButton from "../../../../Components/Common/CommonButton/CommonButton";
import Input from "../../../../Components/Common/CommonInput/Input";
import { gender } from "../../../../Components/Constants/HrConstantsData/HrConstantData";
import { MaritalStatus } from "../../../../Components/Constants/HrConstantsData/HrConstantData";

const PersonalInformarion = ({ formik }) => {
  return (
    <div className="w-full px-2 ">
      <div className="w-full  border-gray-200 flex items-center border  mt-2 rounded-md px-3 gap-3 py-1">
        <div className="bg-gray-300 w-fit  text-center p-5  rounded-3xl">
          <TbPhoto className="text-gray-600 h-7 w-7 text-center" />
        </div>
        <div className="w-full flex flex-col ">
          <label className="text-base font-semibold">
            Upload Profile Photo
          </label>
          <p className="text-gray-800 text-xs font-semibold py-1">
            Image Should be Below 5MB
          </p>
          <Input type={"file"} {...formik.getFieldProps("profile")} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3 mt-2 ">
          <div className="w-full">
            <Input
              label={"Full Name"}
              placeholder={"Enter Your Full name"}
              type={"text"}
              {...formik.getFieldProps("fullName")}
            />
            {formik.errors.fullName && formik.touched.fullName ? (
              <p>{formik.errors.fullName}</p>
            ) : null}
          </div>
          <div className="w-full">
            <Input
              label={"Date of Birth"}
              placeholder={"Enter Your Full name"}
              type={"date"}
              className={"placeholder:text-xs font-semibold  text-xs py-2"}
              {...formik.getFieldProps("dateofbirth")}
            />
          </div>
          <div className="w-full">
            <Input
              label={"Gender"}
              placeholder={"Enter Your Full name"}
              type={"select"}
              className={"placeholder:text-xs font-semibold  text-xs "}
              {...formik.getFieldProps("gender")}
              option={gender.map((gen, index) => (
                <option key={index} value="">
                  {gen.name}
                </option>
              ))}
            />
            {formik.errors.gender && formik.touched.gender ? (
              <p>{formik.errors.gender}</p>
            ) : null}
          </div>
        </div>
        <div className="flex  items-center justify-between gap-3">
          <div className="w-full">
            <Input
              label={"Marital Status"}
              type={"select"}
              className={"placeholder:text-xs font-semibold  text-xs "}
              {...formik.getFieldProps("maritalstatus")}
              option={MaritalStatus.map((married, index) => (
                <option key={index}>{married.status}</option>
              ))}
            />
            {formik.errors.maritalstatus && formik.touched.maritalstatus ? (
              <p>{formik.errors.maritalstatus}</p>
            ) : null}
          </div>
          <div className="w-full">
            <Input
              label={"Nationality"}
              type={"text"}
              placeholder={"Enter Your nationality"}
              {...formik.getFieldProps("nationality")}
            />
            {formik.errors.nationality && formik.touched.nationality ? (
              <p>{formik.errors.nationality}</p>
            ) : null}
          </div>
          <div className="w-full">
            <Input
              label={"Address"}
              type={"text"}
              placeholder={"Enter Your address"}
              {...formik.getFieldProps("address")}
            />
          </div>
        </div>
        <h1 className="font-bold">Contact Information</h1>
        <div className="flex w-f items-center justify-between gap-3">
          <div className="w-full">
            <Input
              label={"Email Address"}
              type={"text"}
              placeholder={"Enter your email"}
              {...formik.getFieldProps("emailAddress")}
            />
          </div>
          <div className="w-full">
            <Input
              label={"Phone Number"}
              type={"text"}
              placeholder={"Enter your phone number"}
              {...formik.getFieldProps("phoneNumber")}
            />
          </div>
        </div>
        <h1 className="font-bold">Emergency Contact</h1>
        <div className="flex w-full items-center justify-between gap3">
          <div className="w-full">
            <Input
              label={"Name"}
              type={"text"}
              placeholder={"Enter emergency contact name"}
              {...formik.getFieldProps("emergencyContactName")}
            />
          </div>
          <div className="w-full">
            <Input
              label={"Phone Number"}
              type={"text"}
              placeholder={"Enter emergency contact number"}
              {...formik.getFieldProps("emergencyContactNumber")}
            />
          </div>
          <div className="w-full">
            <Input
              label={"Relation"}
              type={"text"}
              placeholder={"Enter relation with emergency contact"}
              {...formik.getFieldProps("emergencyContactRelation")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformarion;
