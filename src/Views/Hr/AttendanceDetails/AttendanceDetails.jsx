import React from "react";
import TableHead from "../../../Components/Common/Table/TableHead";
import { LeaveComponentHeader } from "../../../Components/Constants/HrConstantsData/HrConstantData";
import TableBody from "../../../Components/Common/Table/TableBody";
import { LeaveComponentBody } from "../../../Components/Constants/HrConstantsData/HrConstantData";

const AttendanceDetails = () => {
  return (
    <div className="flex flex-col w-full mt-5  shadow-md p-5">
      <table className="w-full m">
        <TableHead>
          {LeaveComponentHeader.map((header, index) => (
            <th className="text-sm font-semibold  h-10 " key={index}>
              {header}
            </th>
          ))}
        </TableHead>
        <TableBody>
          {LeaveComponentBody.map((body, id) => (
            <tr
              key={id}
              className="text-sm  text-center h-15 border-b border-gray-400 "
            >
              <td>{body.id}</td>
              <td>{body.name}</td>
              <td>{body.type}</td>
              <td>{body.status}</td>
              <td>{body.startDate}</td>
              <td>{body.endDate}</td>
              <td>{body.btn}</td>
            </tr>
          ))}
        </TableBody>
      </table>
    </div>
  );
};

export default AttendanceDetails;
