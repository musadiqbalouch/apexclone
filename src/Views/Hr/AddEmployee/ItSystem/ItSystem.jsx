import React from "react";
import Input from "../../../../Components/Common/CommonInput/Input";

const ItSystem = () => {
  return (
    <div className="flex flex-col gap-5 mt-5 font-normal text-base">
      <div>
        <h1>Assignment Equipment</h1>
        <div className="grid grid-cols-2 items-center ">
          <Input type={"checkbox"} label={"Laptop"} />
          <Input type={"checkbox"} label={"Desktop"} />
          <Input type={"checkbox"} label={"Monitors"} />
          <Input type={"checkbox"} label={"Other Peripherals"} />
        </div>
      </div>
      <div>
        <h1>Software and Tools Access</h1>
        <div className="grid grid-cols-2 items-center ">
          <Input type={"checkbox"} label={"Email Account"} />
          <Input
            type={"checkbox"}
            label={"Project Management Tools (Jira, Trello"}
          />
          <Input
            type={"checkbox"}
            label={"Development Tools (GitHub, VS Code)"}
          />
          <Input
            type={"checkbox"}
            label={"Communication Tools (Slack, Teams)"}
          />
        </div>
      </div>
    </div>
  );
};

export default ItSystem;
