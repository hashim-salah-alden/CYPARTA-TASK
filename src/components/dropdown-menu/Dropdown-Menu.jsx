import { useState } from "react";
/* istanbul ignore next */
import Link from "next/link";

const Dropdown = ({ triggerName, links, triggerIcon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className={`${
          isOpen ? "bg-rose-100 text-rose-600 rounded-tr-lg rounded-br-lg border-l-[3px] border-rose-600" : ""
        } flex  p-4 gap-1 capitalize font-bold w-[80%] text-base`}
      >
        {triggerIcon} {triggerName}
        <svg
          className="ml-2 -mr-1 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0l-4.25-4.25a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="flex flex-col items-center justify-center py-4">
          {links?.map((link) => {
            return (
              <li
                key={link.path}
                className="p-2 hover:bg-rose-100 hover:text-rose-600 capitalize mb-2 w-[80%] text-center rounded-[12px] font-bold text-sm"
              >
                <Link className="w-[100%] flex gap-2 " href={link.path}>
                  {link.icon}
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
