import React from "react";
import { TbPhoto } from "react-icons/tb";
import CommonButton from "../../../../Components/Common/CommonButton/CommonButton";
import Input from "../../../../Components/Common/CommonInput/Input";

const PersonalInformarion = () => {
  return (
    <div className="w-full px-2">
      <div className="w-full border-gray-200 flex items-center border h-20 mt-2 rounded-md px-3 gap-3">
        <div className="bg-gray-300 w-fit  text-center p-5 rounded-3xl">
          <TbPhoto className="text-gray-600 h-7 w-7 text-center" />
        </div>
        <div className="w-full">
          <label className="text-base font-semibold">
            Upload Profile Photo
          </label>
          <p className="text-gray-800 text-sm font-semibold">
            Image Should be Below 5MB
          </p>
          <CommonButton className={""} text={"Upload"} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3 mt-2 ">
          <Input
            label={"Full Name"}
            placeholder={"Enter Your Full name"}
            type={"text"}
          />
          <Input
            label={"Full Name"}
            placeholder={"Enter Your Full name"}
            type={"date"}
          />
          <Input
            label={"Full Name"}
            placeholder={"Enter Your Full name"}
            type={"select"}
          />
        </div>
        <div className="flex  items-center justify-between gap-3">
          <Input label={"Marital Status"} type={"select"} />
          <Input
            label={"Nationality"}
            type={"text"}
            placeholder={"Enter Your nationality"}
          />
          <Input
            label={"Address"}
            type={"text"}
            placeholder={"Enter Your address"}
          />
        </div>
        <h1>Contact Information</h1>
        <div className="flex  items-center justify-between gap-3">
          <Input
            label={"Email Address"}
            type={"text"}
            placeholder={"Enter your email"}
          />
          <Input
            label={"Phone Number"}
            type={"text"}
            placeholder={"Enter your phone number"}
          />
        </div>
        <h1>Emergency Contact</h1>
        <div className="flex  items-center justify-between gap-3">
          <Input
            label={"Name"}
            type={"text"}
            placeholder={"Enter emergency contact name"}
          />
          <Input
            label={"Phone Number"}
            type={"text"}
            placeholder={"Enter emergency contact number"}
          />
          <Input
            label={"Relation"}
            type={"text"}
            placeholder={"Enter relation with emergency contact"}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformarion;
