import React from "react";
import Input from "../../../../Components/Common/CommonInput/Input";

const EmployeeCredentials = () => {
  return (
    <div className="flex flex-col gap-5 mt-3">
      <Input
        label={"Email"}
        type={"email"}
        placeholder={"Enter employee email"}
      />
      <Input
        label={"Password"}
        type={"password"}
        placeholder={"Enter Password"}
      />
      <Input label={"Checkin Method"} type={"select"} />
    </div>
  );
};

export default EmployeeCredentials;
