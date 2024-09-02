import React from "react";
import { RiAlarmWarningLine } from "react-icons/ri";

const Header = ({ image }) => {
  return (
    <header className="flex justify-end items-center gap-8 p-4">
      <div className="p-2 bg-slate-100 rounded-lg">
        <RiAlarmWarningLine size={25} />
      </div>
      <img className="rounded-full w-12 h-12" src={image} alt="avatar" />
    </header>
  );
};

export default Header;
