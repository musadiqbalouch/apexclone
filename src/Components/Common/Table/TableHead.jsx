import React from "react";

const TableHead = ({ children }) => {
  return (
    <thead>
      <tr className="text-sm font-normal bg-[#F0F0F0] hs8 w-full ">
        {children}
      </tr>
    </thead>
  );
};

export default TableHead;
