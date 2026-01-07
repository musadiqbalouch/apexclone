import React from "react";

const Input = ({
  type,
  onChange,
  value,
  placeholder,
  label,
  className,
  text,
}) => {
  if (type === "select") {
    return (
      <div className="flex flex-1 flex-col">
        <label className="text-sm font-semibold" htmlFor="">
          {label}
        </label>
        <select
          className={`${className} placeholder:text-sm border w-full py-1 px-2 rounded-md`}
        >
          <option value="">Select Gender</option>
          <option value="">option 1</option>
          <option value="">option 1</option>
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
        <input type="checkbox" />
        <label htmlFor="">{label}</label>
      </div>
    );
  } else {
    return (
      <div className="flex flex-1 flex-col">
        <label className="text-sm font-semibold" htmlFor="">
          {label}
        </label>
        <input
          type={type}
          className={`${className} placeholder:text-sm border w-full py-1 px-2 rounded-md`}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      <label className="text-sm font-semibold" htmlFor="">
        {label}
      </label>
    </div>
  );
};

export default Input;
