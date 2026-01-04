import React from "react";

const Input = ({ type, onChange, value, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        className="text-lg w-full border-3 rounded-lg border-gray-600 text-[#24748F] py-3 px-2  placeholder:text-[#24748F] placeholder:opacity-100 "
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
