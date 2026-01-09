import React from "react";
import Input from "../../../../Components/Common/CommonInput/Input";
import { checkinMethod } from "../../../../Components/Constants/HrConstantsData/HrConstantData";

const EmployeeCredentials = ({ formik }) => {
  return (
    <div className="flex flex-col gap-5 mt-3">
      <div>
        <Input
          label={"Email"}
          type={"email"}
          {...formik.getFieldProps("employeeEmail")}
          placeholder={"Enter employee email"}
        />
        {formik.errors.employeeEmail && formik.touched.employeeEmail ? (
          <p className="text-xs font-semibold text-red">
            {formik.errors.employeeEmail}
          </p>
        ) : null}
      </div>
      <div>
        <Input
          label={"Password"}
          type={"password"}
          placeholder={"Enter Password"}
          {...formik.getFieldProps("password")}
        />
        {formik.errors.password && formik.touched.password ? (
          <p className="text-xs font-semibold text-red">
            {formik.errors.password}
          </p>
        ) : null}
      </div>
      <div>
        <Input
          label={"Checkin Method"}
          type={"select"}
          {...formik.getFieldProps("checkInMethod")}
          option={checkinMethod.map((checkin) => (
            <option>{checkin.checkinmethod}</option>
          ))}
        />
      </div>
    </div>
  );
};

export default EmployeeCredentials;
