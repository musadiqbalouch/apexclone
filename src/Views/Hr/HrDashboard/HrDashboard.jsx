import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FaRegSquarePlus } from "react-icons/fa6";
import Modal from "../../../Components/Common/Modal/Modal";
import AddEmployee from "../AddEmployee/AddEmployee";
import Card from "../../../Components/Common/CommonCard/Card";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { BiSolidNotepad } from "react-icons/bi";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import AttendanceOverview from "../AttendanceOverview/AttendanceOverview";
import CheckInOut from "../CheckInOut/CheckInOut";

const HrDashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModdal = () => {
    setShowModal(true);
  };
  return (
    <div className="flex flex-col w-full px-3 mauto  ">
      <div>
        <h1 className="font-bold text-xl">Hr Dashboard</h1>
        <div className="w-full  shadow-md mt-2 flex  items-center justify-between px-2 py-4 rounded-md bg-white">
          <div>
            <FaUser className="h-6 w-8" />
          </div>
          <div
            onClick={toggleModdal}
            className="flex items-center bgblack bg-[#212224]/90 text-white text-sm px-3   py-2 rounded-md"
          >
            <FaRegSquarePlus className="h-6 w-8" />
            Add New Employee
          </div>
        </div>
        {showModal && (
          <Modal>
            <AddEmployee setShowModal={setShowModal} />
          </Modal>
        )}
      </div>
      <div className="flex items-center justify-between">
        <Card
          number={"12"}
          logo={
            <BsFillPeopleFill className="text-white h-10 w-10 p-2 rounded-md bg-red  " />
          }
          heading1={"Employees Overview:"}
          heading2={"Total Employees"}
          className={"text-red font-bold leading-5 "}
        />
        <Card
          number={"0/10"}
          logo={
            <BsCalendar3 className="text-white h-10 w-10 p-2 rounded-md bg-blue-500 " />
          }
          heading1={"Attendance Overview:"}
          heading2={"Today’s Attendance"}
          className={"text-blue-500 font-bold leading-5 "}
        />
        <Card
          number={"1"}
          logo={
            <FaCircleDollarToSlot className="text-white h-10 w-10 p-2 rounded-md bg-green-500 " />
          }
          heading1={"Payroll Overview:"}
          heading2={"Employees Payroll Generated"}
          className={"text-green-500 font-bold leading-5 "}
        />
        <Card
          number={"0"}
          logo={
            <BiSolidNotepad className="text-white h-10 w-10 p-2 rounded-md bg-yellow-500 " />
          }
          heading1={"Pending Leave Requests:"}
          heading2={"Leave Requests Pending"}
          className={"text-yellow-500 font-bold leading-5 "}
        />
      </div>
      <div className="flex w-full items-center  gap-2 ">
        <AttendanceOverview />
        <CheckInOut />
      </div>
    </div>
  );
};

export default HrDashboard;
