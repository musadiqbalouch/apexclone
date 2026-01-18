import React, { useState } from "react";
import CommonButton from "../../../Components/Common/CommonButton/CommonButton";
import Modal from "../../../Components/Common/Modal/Modal";
import AddTask from "../AddTaskForm/AddTask";
import TaskForm from "../TaskForm/TaskForm";
import { GoDotFill } from "react-icons/go";
import { MdDateRange } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const EmployeeList = () => {
  const [showModal, setShowModal] = useState(false);
  const [cardModal, setCardModal] = useState(false);
  const [id, setId] = useState(null);

  const handleModal = () => {
    setShowModal(true);
  };
  const TotalTask = JSON.parse(localStorage.getItem("Task")) || [];

  const addTask = (task) => {
    console.log(task);
    setId(task.taskId, "id");
    setCardModal(true);
  };
 const deleteTask = (subtask) => {
  // const [task,setTask]=useState(null)
  const TotalTask = JSON.parse(localStorage.getItem("Task")) || [];
  // setTask(TotalTask)
  // console.log(task)
  const parentTask = TotalTask.find(parent => parent.taskId === subtask.parentId);

  if (parentTask) {
    const childIndex = parentTask.totalTask.find(child => child.childId === subtask.childId);

    if (childIndex !== -1) {
      parentTask.totalTask.splice(childIndex, 1);

  
      localStorage.setItem("Task", JSON.stringify(TotalTask));
    }
  }
};

  return (
    <div className="w-full">
      <div>
        <div className="flex w-full items-center justify-between px-10 font-sans font-semibold border-b py-2">
          <h1 className="">Task Management </h1>
          <CommonButton onClick={handleModal} text={"Add Task"} />
        </div>
        {showModal && (
          <Modal>
            <AddTask setShowModal={setShowModal} />
          </Modal>
        )}
      </div>
      <div className="flex gap-2 items-center flex-wrap mt-2">
        {TotalTask.map((task, id) => (
          <div
            key={id.taskId}
            className="bg-[#F0F0F0] w-60 rounded-md  flex flex-col  justify-between p-2 gap-2"
          >
            <h1 className="px-2 py-1 text-base rounded-md font-semibold flex items-center w-full gap-1">
              <span className="text-[#FFBB00]">
                <GoDotFill />
              </span>
              {task.task}
            </h1>
            <CommonButton
              onClick={() => addTask(task)}
              text={"Add Task"}
              className={
                "w-full! bg-white text-gray-500! border border-gray-400 text-sm"
              }
            />
            <div className="flex flex-col gap-2 h-full w-full px-2">
              {task.totalTask.map((subtask) => (
                <div className="bg-white shadow-md w-full rounded-md p-2 ">
                  <div className="flex items-center justify-between">
                    <h1 className="font-semibold">{subtask.about}</h1>
                    <MdDelete
                      onClick={() => deleteTask(subtask)}
                      className="text-xl text-red cursor-pointer"
                    />
                  </div>
                  <h1 className="flex items-center gap-1">
                    <span>
                      <MdDateRange />
                    </span>
                    Due Date {subtask.date}
                  </h1>
                  <h1>{subtask.Descrption}</h1>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {cardModal && (
        <Modal>
          <TaskForm setCardModal={setCardModal} id={id} />
        </Modal>
      )}
    </div>
  );
};

export default EmployeeList;
