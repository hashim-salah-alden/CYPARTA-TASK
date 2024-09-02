"use client";
import React from "react";
import Dropdown from "../dropdown-menu/Dropdown-Menu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { RiTaskLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";

const employeesLinks = [
  { title: "login", path: "/login", icon: <FaRegUser size={20} /> },
  { title: "profile", path: "/profile", icon: <ImProfile size={20} /> },
  { title: "attendance", path: "", icon: <BiTask size={20} /> },
  { title: "tasks", path: "", icon: <RiTaskLine size={20} /> },
];

const Sidebar = () => {
  return (
    <div className="w-[15%] flex justify-center items-center h-screen absolute">
      <div className="w-full h-[90%] absolute left-8 rounded-[32px] flex flex-col  items-center py-16 border-[1px] ">
        <div className="mb-16">
          <img src="cyparta.png" alt="" className="w-48" />
        </div>
        <nav className="mt-10 flex flex-col gap-8  w-full">
          <button className="hover:bg-rose-100 gap-2 flex p-4 capitalize font-bold text-base w-[80%] rounded-lg">
            <MdOutlineSpaceDashboard size={25} /> dashboard
          </button>
          <Dropdown
            triggerName=" employees"
            links={employeesLinks}
            triggerIcon={<FaPeopleCarry size={25} />}
          />
          <button className="hover:bg-rose-100 gap-2 flex  p-4 capitalize font-bold text-base w-[80%]">
            <RiMoneyDollarCircleLine size={25} /> payrol
          </button>
          <Dropdown triggerName="holidays" triggerIcon={<BiTask size={25} />} />
          <button className="hover:bg-rose-100 gap-2 flex  p-4 capitalize font-bold text-base w-[80%]">
            <IoWalletOutline size={25} /> advanced payment
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

/* side bar */

// position: absolute;
// width: 329px;
// height: 943px;
// left: 28px;
// top: 41px;
