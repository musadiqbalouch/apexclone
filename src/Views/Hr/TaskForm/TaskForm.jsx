import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useFormik } from "formik";
import Input from "../../../Components/Common/CommonInput/Input";
import CommonButton from "../../../Components/Common/CommonButton/CommonButton";
import { MdDelete } from "react-icons/md";

const TaskForm = ({ setCardModal, id, tasks }) => {
  // const TotalTask = JSON.parse(localStorage.getItem("Task")) || [];
  const copy = [...tasks];
  // console.log("🚀 ~ TaskForm ~ TotalTask:", TotalTask);
  const formik = useFormik({
    initialValues: {
      AboutTask: "",
      TaskDate: "",
      TaskDescrption: "",
    },
    onSubmit: (values) => {
      const taskFind = tasks.find((task) => task.taskId === id);
      const task = {
        parentId: id,
        childId: taskFind.totalTask.length + 1,
        about: values.AboutTask,
        date: values.TaskDate,
        Descrption: values.TaskDescrption,
      };
      taskFind.totalTask.push(task);
      localStorage.setItem("Task", JSON.stringify(copy));
      formik.resetForm();
      setCardModal(false);
    },
  });
  return (
    <div className="bg-gray-200 h-100 w-100 flex  flex-col m-auto p-2 rounded-md">
      <div className="self-end">
        <RxCross1
          onClick={() => setCardModal(false)}
          className="self-end text-red font-bold text-xl cursor-pointer"
        />
      </div>
      <div className="h-full shadow-md bg-gray-300 p-2 rounded-md">
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2 ">
          <h1>{id}</h1>
          <Input
            label={"About Yout Task"}
            placeholder={"About Task "}
            className={"border-black! border!"}
            {...formik.getFieldProps("AboutTask")}
          />
          <Input
            label={"Date"}
            placeholder={"Task Date"}
            type={"date"}
            className={"border-black! border!"}
            {...formik.getFieldProps("TaskDate")}
          />
          <Input
            label={"Description"}
            type={"textarea"}
            placeholder={"Enter Description"}
            className={"px-2 border rounded-md"}
            {...formik.getFieldProps("TaskDescrption")}
          />
          <CommonButton text={"Submit"} />
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
