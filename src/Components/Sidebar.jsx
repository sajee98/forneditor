import { HiDotsCircleHorizontal, HiHome, HiOutlineFolder, HiTemplate, HiUpload } from "react-icons/hi";
import React from "react";

const Sidebar = () => {
  return (
<div className="bg-gray-100 text-gray-900  h-screen top-0 px-4 fixed border-r border-gray-300 flex flex-col items-center w-[max] md:w-24">
      <ul className="flex flex-col mt-5 text-xl w-max">
        <li className="flex flex-col items-center py-3 px-2 hover:cursor-pointer hover:rounded hover:bg-blue-600 hover:text-white">
          <HiHome className="text-xl" />
          <span className="text-sm mt-1">Home</span>
        </li>
        <li className="flex flex-col items-center py-3 px-2 hover:cursor-pointer hover:rounded hover:bg-blue-600 hover:text-white">
          <HiOutlineFolder className="text-xl" />
          <span className="text-sm mt-1">Projects</span>
        </li>
        <li className="flex flex-col items-center py-3 px-2 hover:cursor-pointer hover:rounded hover:bg-blue-600 hover:text-white">
          <HiTemplate className="text-xl" />
          <span className="text-sm mt-1">Templates</span>
        </li>
        <li className="flex flex-col items-center py-3 px-2 hover:cursor-pointer hover:rounded hover:bg-blue-600 hover:text-white">
          <HiUpload className="text-xl" />
          <span className="text-sm mt-1">Uploads</span>
        </li>
        <li className="flex flex-col items-center py-3 px-2 hover:cursor-pointer hover:rounded hover:bg-blue-600 hover:text-white">
          <HiDotsCircleHorizontal className="text-xl" />
          <span className="text-sm mt-1">More</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
