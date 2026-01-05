import React, { useEffect, useState } from "react";
import CommonIcon from "../CommonIcon/CommonIcon";
import TimeIcon from "../../../assets/HeaderImage/timeIcon.png";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  //   console.log(currentDateTime);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  const date = currentDateTime.toLocaleDateString();
  // //   console.log("🚀 ~ Header ~ date:", date);
  const time = currentDateTime.toLocaleTimeString();
  //   //   console.log("🚀 ~ Header ~ time:", time);
  const year = currentDateTime.getFullYear();

  return (
    <div className="w-full h-15  pr-10 flex items-center justify-end gap-5">
      <div className="flex items-center gap-2  border-r px-3 h-10 font-semibold ">
        <img className="h-5" src={TimeIcon} alt="" />
        <h1>{time}</h1>
        <h1>{date}</h1>
      </div>
      <div className="flex gap-5">
        <CommonIcon
          className={"bg-purple-200 w-fit px-3 py-2 rounded-md"}
          icon={<MdOutlineEmail className="w-5 h-5" />}
        />
        <CommonIcon
          className={"bg-yellow-200 w-fit px-3 py-2 rounded-md"}
          icon={<IoMdNotificationsOutline className="w-5 h-5" />}
        />
      </div>
    </div>
  );
};

export default Header;
