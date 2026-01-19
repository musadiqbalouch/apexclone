import React from "react";
import Input from "../../../Components/Common/CommonInput/Input";
import CommonButton from "../../../Components/Common/CommonButton/CommonButton";
import { RxCross1 } from "react-icons/rx";
import { useFormik } from "formik";

const AddTask = ({ setShowModal, tasks }) => {
  const formik = useFormik({
    initialValues: {
      TaskTitle: "",
      TotalTask: [],
    },
    onSubmit: (values) => {
      const task = {
        taskId: tasks.length + 1,
        task: values.TaskTitle,
        totalTask: values.TotalTask,
      };
      tasks.push(task);
      localStorage.setItem("Task", JSON.stringify(tasks));
      formik.resetForm();
      setShowModal(false);
    },
  });
  return (
    <div className="bg-white h-60 p-5 rounded-md flex flex-col items-center gap-2">
      <RxCross1
        onClick={() => setShowModal(false)}
        className="self-end text-red font-bold text-xl cursor-pointer"
      />
      <h1 className="text-xl font-semibold ">Add Your Task</h1>
      <form onSubmit={formik.handleSubmit}>
        <Input
          placeholder={"Task Name"}
          name={"TaskName"}
          {...formik.getFieldProps("TaskTitle")}
        />
        <CommonButton text={"Add"} type={"submit"} />
      </form>
    </div>
  );
};

export default AddTask;
