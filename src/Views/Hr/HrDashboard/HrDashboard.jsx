import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { FaRegSquarePlus } from "react-icons/fa6";
import Modal from "../../../Components/Common/Modal/Modal";
import AddEmployee from "../AddEmployee/AddEmployee";

const HrDashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModdal = () => {
    setShowModal(true);
  };
  return (
    <div className="flex flex-col w-full px-3 mauto  ">
      <h1>Hr Dashboard</h1>
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
  );
};

export default HrDashboard;
