import React from "react";
import Input from "../../../../Components/Common/CommonInput/Input";

const EmployeeDetail = () => {
  return (
    <div className="flex flex-col mt-3">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <Input
            label={"Job Title"}
            type={"text"}
            placeholder={"Enter job title"}
          />
          <Input label={"Department"} type={"select"} />
          <Input label={"Reporting Manager"} type={"select"} />
        </div>
        <div className="flex items-center gap-3">
          <Input label={"Employee Role"} type={"select"} />
          <Input label={"Date of Joining"} type={"date"} />
          <Input label={"Employement Type"} type={"select"} />
        </div>
        <div className="flex items-center gap-3">
          <Input label={"Work Location"} type={"select"} />
          <Input label={"Work Location"} type={"select"} />
          <Input label={"Probation Period (in month)"} type={"text"} />
        </div>
        <div className="w-76 ">
          <Input label={"Employee Additional Role"} type={"select"} />
        </div>
      </div>
      <div>
        <div className="font-semibold">
          <h2>Compensation and Benefits</h2>
          <h2>Salary Details</h2>
        </div>
        <div className="flex  items-center gap-3">
          <Input
            label={"Base Pay"}
            type={"text"}
            placeholder={"Enter Base Pay "}
          />
          <Input
            label={"Allowances"}
            type={"text"}
            placeholder={"Enter allowance amount"}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
