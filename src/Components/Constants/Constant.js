import DashboardLogo from "../../assets/HrSidebarimages/DashboardLogo.png";
import EmployeeLogo from "../../assets/HrSidebarimages/EmployeeLogo.png";
import AttendanceLogo from "../../assets/HrSidebarimages/AttendanceLogo.png";
import LeaveManagementLogo from "../../assets/HrSidebarimages/LeaveManagementLogo.png";
import PayrollManagementLogo from "../../assets/HrSidebarimages/PayrollLogo.png";
import CommunicatationLogo from "../../assets/HrSidebarimages/CommunicatationLogo.png";
// sidebar data of hr
// path: "/hr/employees",

export const SideBarLinks = [
  {
    logo: DashboardLogo,
    title: "Dashboard",
    path: "/hr",
  },
  {
    logo: EmployeeLogo,
    title: "Employees",
    // path: "/hr/employees",
    nestedroutes: [
      { title: "Employee List", path: "hr/employees/list" },
      { title: "Departments", path: "hr/employees/department" },
      {
        title: "Employee Face Verification",
        path: "hr/employee-face-verification",
      },
    ],
  },
  {
    logo: AttendanceLogo,
    title: "Attendance",
    path: "/hr/attendance",
  },
  {
    logo: LeaveManagementLogo,
    title: "Leave Management",
    path: "/hr/leave-management",
  },
  {
    logo: DashboardLogo,
    title: "Brands",
    path: "/hr/brands",
  },
  {
    logo: EmployeeLogo,
    title: "Permissions",
    path: "/hr/permissions",
  },
  {
    logo: PayrollManagementLogo,
    title: "Payroll Management",
    path: "/hr/payroll-management",
  },
  {
    logo: CommunicatationLogo,
    title: "Communication",
    path: "/hr/communication",
  },
];

import LogoutLogo from "../../assets/HrSidebarimages/LogoutIcon.png";
import SeetingLogo from "../../assets/HrSidebarimages/SeetingIcon.png";
export const bottomLinks = [
  {
    logo: LogoutLogo,
    title: "Log out",
  },
  {
    logo: SeetingLogo,
    title: "Settings",
  },
];
