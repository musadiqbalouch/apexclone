import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DonutData } from "../../../Components/Constants/HrConstantsData/HrConstantData";
import { BsFillPeopleFill } from "react-icons/bs";
import CommonButton from "../../../Components/Common/CommonButton/CommonButton";

ChartJS.register(ArcElement, Tooltip, Legend);

const Char = () => {
  return (
    <div className="shadow-md mt-2  justify-between px-3 py-4 rounded-md  w-full  flex flex-col gap-2">
      <div className="border-b border-gray-400 flex items-center justify-between py-3 ">
        <div className="flex items-center">
          <div className="flex flex-col">
            <h2 className="flex items-center gap-2 text-base font-semibold">
              <span>
                <BsFillPeopleFill className="h-5 w-5 " />
              </span>
              Department
            </h2>
            <h2 className="text-gray-500 font-semibold text-sm">
              3 Departments • 13 employees
            </h2>
          </div>
        </div>
        <div>
          <CommonButton text={"View All"} />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="h-50">
          <Doughnut
            // style={{ height: "170px", width: "200px" }}
            data={{
              labels: DonutData.map((data) => data.label),
              datasets: [
                {
                  label: "employee",
                  data: DonutData.map((data) => data.value),
                  backgroundColor: ["rgb(255, 107, 107)", "rgb(78, 205, 196)"],
                  borderRadius: ["5", "5"],
                },
              ],
            }}
          ></Doughnut>
        </div>
      </div>
      <div className="flex items-center gap-5">
        {DonutData.map((data) => (
          <div className="flex  items-center">
            <span>{data.dot}</span>
            <h3 className="text-sm font-semibold">
              {data.label} <span>({data.value})</span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Char;
