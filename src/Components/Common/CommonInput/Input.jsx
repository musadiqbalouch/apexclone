import React, { useRef } from "react";

const Input = ({
  type,
  onChange,
  value,
  placeholder,
  label,
  className,
  name,
  option,
  ref,
}) => {
  if (type === "select") {
    return (
      <div className="flex flex-1 flex-col ">
        <label className="text-sm font-medium" htmlFor="">
          {label}
        </label>
        <select
          name={name}
          onChange={onChange}
          value={value}
          className={`${className} border w-full py-2 px-2 rounded-md placeholder:text-xs font-semibold  text-xs border-gray-200 `}
        >
          {option}
        </select>
      </div>
    );
  } else if (type === "textarea") {
    return (
      <div className="flex flex-1 flex-col">
        <label className="text-sm font-semibold" htmlFor="">
          {label}
        </label>
        <textarea></textarea>
      </div>
    );
  } else if (type === "checkbox") {
    return (
      <div className="w-full flex gap-2 ">
        <input onChange={onChange} name={name} value={value} type="checkbox" />
        <label className=" text-sm font-medium" htmlFor="">
          {label}
        </label>
      </div>
    );
  } else {
    return (
      <div className="flex flex-1 flex-col">
        <label className="text-sm font-medium" htmlFor="">
          {label}
        </label>
        <input
          type={type}
          className={`${className} border w-full py-1 px-2 rounded-md placeholder:text-xs font-semibold  border-gray-200`}
          onChange={onChange}
          name={name}
          value={value}
          placeholder={placeholder}
          ref={ref}
        />
      </div>
    );
  }
};

export default Input;
