import React from "react";

const Input = ({ type, onChange, value, placeholder }) => {
  return (
    <>
      <input
        type={type}
        className=" border"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
