import { IoPersonOutline } from "react-icons/io5";
import { TiShoppingBag } from "react-icons/ti";
import { TiDocument } from "react-icons/ti";
import { SiOpenaccess } from "react-icons/si";

export const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="flex space-x-4 border-b">
      <button
        className={`py-2 px-4 ${
          activeTab === "personal"
            ? "border-b-2 border-red-500 text-red-500"
            : ""
          
        } flex items-center justify-center gap-1 font-bold`}
        onClick={() => setActiveTab("personal")}
      >
      <IoPersonOutline size={20}/> Personal Information
      </button>
      {/* Add other tabs here */}
      <button
        className={`py-2 px-4 ${
          activeTab === "professinal"
            ? "border-b-2 border-red-500 text-red-500"
            : ""
        } flex items-center justify-center gap-1 font-bold`}
        onClick={() => setActiveTab("professinal")}
      >
      <TiShoppingBag size={20}/> Professinal Information
      </button>
      <button
        className={`py-2 px-4 ${
          activeTab === "documents"
            ? "border-b-2 border-red-500 text-red-500"
            : ""
        } flex items-center justify-center gap-1 font-bold`}
        onClick={() => setActiveTab("documents")}
      >
      <TiDocument size={20}/>  Documents
      </button>
      <button
        className={`py-2 px-4 ${
          activeTab === "accountAccess"
            ? "border-b-2 border-red-500 text-red-500"
            : ""
        } flex items-center justify-center gap-1 font-bold`}
        onClick={() => setActiveTab("accountAccess")}
      >
      <SiOpenaccess size={20}/>  Account Access
      </button>
    </nav>
  );
};
