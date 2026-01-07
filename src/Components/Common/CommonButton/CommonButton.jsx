import React from "react";

const CommonButton = ({ onClick, type, disabled, className, text }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`${className}  bg-black opacity-85 text-white px-4 py-1 rounded-md`}
      >
        {text}
      </button>
    </div>
  );
};

export default CommonButton;
