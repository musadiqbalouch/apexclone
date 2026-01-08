import React from "react";
import Input from "../../../../Components/Common/CommonInput/Input";

const ItSystem = ({ formik }) => {
  return (
    <div className="flex flex-col gap-5 mt-5 font-normal text-base">
      <div>
        <h1 className="font-medium my-2">Assignment Equipment</h1>
        <div className="grid grid-cols-2 gap-4 items-center ">
          <Input
            type={"checkbox"}
            {...formik.getFieldProps("laptop")}
            label={"Laptop"}
          />
          <Input
            type={"checkbox"}
            {...formik.getFieldProps("desktop")}
            label={"Desktop"}
          />
          <Input
            type={"checkbox"}
            label={"Monitors"}
            {...formik.getFieldProps("monitors")}
          />
          <Input
            type={"checkbox"}
            label={"Other Peripherals"}
            {...formik.getFieldProps("peripherals")}
          />
        </div>
      </div>
      <div>
        <h1 className="font-medium my-2">Software and Tools Access</h1>
        <div className="grid grid-cols-2 items-center gap-4 ">
          <Input
            type={"checkbox"}
            label={"Email Account"}
            {...formik.getFieldProps("emailAccountAccess")}
          />
          <Input
            type={"checkbox"}
            label={"Project Management Tools (Jira, Trello"}
            {...formik.getFieldProps("projectManagementTools")}
          />
          <Input
            type={"checkbox"}
            label={"Development Tools (GitHub, VS Code)"}
            {...formik.getFieldProps("developmentTools")}
          />
          <Input
            type={"checkbox"}
            label={"Communication Tools (Slack, Teams)"}
            {...formik.getFieldProps("communicationTools")}
          />
        </div>
      </div>
    </div>
  );
};

export default ItSystem;
