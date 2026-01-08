export const FormTitles = [
  "Personal Information",
  "Employment Details",
  "IT and System Access",
  "Employee Credentials",
  "Uploaded Documents",
];

import { TbPhoto } from "react-icons/tb";
import Input from "../../Common/CommonInput/Input";
import CommonButton from "../../Common/CommonButton/CommonButton";
export const Documents = [
  {
    logo: <TbPhoto className=" text-gray-600 h-7 w-7" />,
    title: "Upload CNIC Front",
    imageSize: "Image should be below 5MsB",
    btn: <CommonButton text={"Upload"} />,
    upload: <Input type={"file"} name={"CNICFront"} />,
  },
  {
    logo: <TbPhoto className=" text-gray-600 h-7 w-7 " />,
    title: "Upload CNIC Back",
    imageSize: "Image should be below 5MB",
    upload: <Input type={"file"} />,
  },
  {
    logo: <TbPhoto className=" text-gray-600 h-7 w-7 " />,
    title: "Upload Experience Letter",
    imageSize: "File should be below 5MB (.PDF,.DOC,.DOCX)",
    upload: <Input type={"file"} />,
  },
  {
    logo: <TbPhoto className=" text-gray-600 h-7 w-7 " />,
    title: "Upload Last Education",
    imageSize: "File should be below 5MB (.PDF,.DOC,.DOCX)",
    upload: <Input type={"file"} />,
  },
  {
    logo: <TbPhoto className=" text-gray-600 h-7 w-7 " />,
    title: "Upload Last 3 Month Payslips",
    imageSize: "File should be below 5MB (.PDF,.DOC,.DOCX)",
    upload: <Input type={"file"} />,
  },
  {
    logo: <TbPhoto className=" text-gray-600 h-7 w-7 " />,
    title: "Upload Updated Resume",
    imageSize: "File should be below 5MB (.PDF,.DOC,.DOCX)",
    upload: <Input type={"file"} />,
  },
];
export const gender = [
  { name: "Select gender" },
  { name: "male" },
  { name: "female" },
];
export const MaritalStatus = [
  { status: "Select Marital Status" },
  { status: "Single" },
  { status: "Married" },
];

// employeedetails component data
export const Department = [
  { status: "Select Department" },
  { status: "Human Resource department" },
  { status: "production" },
  { status: "test" },
];
export const ReportingManager = [
  { reporting: "Select Department" },
  { reporting: "musadiq@gmail.com" },
  { reporting: "adnan@gmail.com" },
  { reporting: "abdullah@gmail.com" },
  { reporting: "taha@gmail.com" },
];
export const roles = [
  { role: "Select role" },
  { role: "HR" },
  { role: "Employee" },
];
export const employeeType = [
  { role: "Select Employee Type" },
  { role: "Full-time" },
  { role: "Part-Time" },
];
export const workLocation = [
  { location: "Select WorkLocation" },
  { location: "Remote" },
  { location: "On-site" },
  { location: "hybrid" },
];
export const workTiming = [
  { Timing: "12:00 PM -9:00PM" },
  { Timing: "8:00 PM -5:00AM" },
  { Timing: "9:23 PM -10:24PM" },
];
export const AdditionalRole = [
  { role: "HR" },
  { role: "Employee" },
  { role: "Test Role" },
];

// employeecredentails component data
export const checkinMethod = [
  { checkinmethod: "Face" },
  { checkinmethod: "QR" },
  { checkinmethod: "Both" },
];
