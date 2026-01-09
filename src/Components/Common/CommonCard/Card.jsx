import React from "react";
import CommonButton from "../CommonButton/CommonButton";

const Card = ({ logo, number, heading1, heading2, className }) => {
  return (
    <div className="shadow-md mt-2  justify-between px-7 py-4 rounded-md bg-white w-60  flex flex-col gap-2">
      <span>{logo}</span>
      <p className="font-bold">{number}</p>
      <div className="flex flex-col gap-2 py-2">
        <h1 className={className}>{heading1}</h1>
        <h2 className="text-sm">{heading2}</h2>
        <CommonButton text={"View All"} />
      </div>
    </div>
  );
};

export default Card;
