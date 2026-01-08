import React from "react";
import Input from "../../../../Components/Common/CommonInput/Input";
import { Department } from "../../../../Components/Constants/HrConstantsData/HrConstantData";
import { ReportingManager } from "../../../../Components/Constants/HrConstantsData/HrConstantData";
import { roles } from "../../../../Components/Constants/HrConstantsData/HrConstantData";
import { employeeType } from "../../../../Components/Constants/HrConstantsData/HrConstantData";
import { workLocation } from "../../../../Components/Constants/HrConstantsData/HrConstantData";
import { workTiming } from "../../../../Components/Constants/HrConstantsData/HrConstantData";
import { AdditionalRole } from "../../../../Components/Constants/HrConstantsData/HrConstantData";

const EmployeeDetail = ({ formik }) => {
  return (
    <div className="flex w-full flex-col mt-3">
      <div className="flex flex-col gap-5 w-full ">
        <div className="flex items-center gap-3">
          <div className="w-full">
            <Input
              label={"Job Title"}
              type={"text"}
              placeholder={"Enter job title"}
              {...formik.getFieldProps("jobTitle")}
            />
            {formik.errors.jobTitle && formik.touched.jobTitle ? (
              <p>{formik.errors.jobTitle}</p>
            ) : null}
          </div>
          <div className="w-full">
            <Input
              label={"Department"}
              type={"select"}
              {...formik.getFieldProps("department")}
              option={Department.map((depart) => (
                <option>{depart.status}</option>
              ))}
            />
            {formik.errors.department && formik.touched.department ? (
              <p>{formik.errors.department}</p>
            ) : null}
          </div>
          <div className="w-full">
            <Input
              label={"Reporting Manager"}
              type={"select"}
              {...formik.getFieldProps("reportingManager")}
              option={ReportingManager.map((manager) => (
                <option>{manager.reporting}</option>
              ))}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-full">
            <Input
              label={"Employee Role"}
              type={"select"}
              {...formik.getFieldProps("employeerole")}
              option={roles.map((role) => (
                <option>{role.role}</option>
              ))}
            />
            {formik.errors.employeerole && formik.touched.employeerole ? (
              <p>{formik.errors.employeerole}</p>
            ) : null}
          </div>
          <div className="w-full">
            <Input
              label={"Date of Joining"}
              type={"date"}
              {...formik.getFieldProps("dateofJoining")}
              className={"placeholder:text-xs font-semibold  text-xs py-2"}
            />
            {formik.errors.dateofJoining && formik.touched.dateofJoining ? (
              <p>{formik.errors.dateofJoining}</p>
            ) : null}
          </div>
          <div className="w-full">
            <Input
              label={"Employement Type"}
              type={"select"}
              {...formik.getFieldProps("employementType")}
              option={employeeType.map((type) => (
                <option>{type.role}</option>
              ))}
            />
            {formik.errors.employementType && formik.touched.employementType ? (
              <p>{formik.errors.employementType}</p>
            ) : null}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-full">
            <Input
              label={"Work Location"}
              type={"select"}
              {...formik.getFieldProps("workLocation")}
              option={workLocation.map((work) => (
                <option>{work.location}</option>
              ))}
            />
            {formik.errors.workLocation && formik.touched.workLocation ? (
              <p>{formik.errors.workLocation}</p>
            ) : null}
          </div>
          <div className="w-full">
            <Input
              label={"Shift Timing"}
              type={"select"}
              {...formik.getFieldProps("shiftTiming")}
              option={workTiming.map((work) => (
                <option>{work.Timing}</option>
              ))}
            />
            {formik.errors.shiftTiming && formik.touched.shiftTiming ? (
              <p>{formik.errors.shiftTiming}</p>
            ) : null}
          </div>
          <div className="w-full">
            <Input
              label={"Probation Period (in month)"}
              {...formik.getFieldProps("ProbationPeriod")}
              type={"text"}
            />
            {formik.errors.ProbationPeriod && formik.touched.ProbationPeriod ? (
              <p>{formik.errors.ProbationPeriod}</p>
            ) : null}
          </div>
        </div>
        <div className="w-76 ">
          <Input
            label={"Employee Additional Role"}
            type={"select"}
            {...formik.getFieldProps("additionalRole")}
            option={AdditionalRole.map((additional) => (
              <option>{additional.role}</option>
            ))}
          />
        </div>
      </div>
      <div>
        <div className="font-semibold">
          <h2>Compensation and Benefits</h2>
          <h2 className="font-medium">Salary Details</h2>
        </div>
        <div className="flex  items-center gap-3">
          <div className="w-full">
            <Input
              label={"Base Pay"}
              type={"text"}
              placeholder={"Enter Base Pay "}
              {...formik.getFieldProps("basePay")}
            />
          </div>
          <div className="w-full">
            <Input
              label={"Allowances"}
              type={"text"}
              placeholder={"Enter allowance amount"}
              {...formik.getFieldProps("Allowances")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
