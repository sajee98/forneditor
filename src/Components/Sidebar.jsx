import React, { useState } from "react";
import {
  HiHome,
  HiOutlineFolder,
  HiTemplate,
  HiUpload,
  HiDotsCircleHorizontal,
  HiSpeakerphone,
  HiChartBar,
  HiNewspaper,
  HiCog,
  HiQuestionMarkCircle,
} from "react-icons/hi";

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-gray-100 text-gray-900 h-screen fixed top-0 px-2 border-r border-gray-300 flex flex-col justify-between items-center w-20">
      <ul className="flex flex-col mt-4 space-y-3 items-center text-center">
        <li className="flex flex-col items-center text-gray-700 hover:text-white hover:bg-blue-600 p-2 rounded-lg cursor-pointer transition w-14">
          <HiHome className="text-xl" />
          <span className="text-[11px] mt-1 font-medium">Home</span>
        </li>

        <li className="flex flex-col items-center text-gray-700 hover:text-white hover:bg-blue-600 p-2 rounded-lg cursor-pointer transition w-14">
          <HiOutlineFolder className="text-xl" />
          <span className="text-[11px] mt-1 font-medium">Projects</span>
        </li>

        <li className="flex flex-col items-center text-gray-700 hover:text-white hover:bg-blue-600 p-2 rounded-lg cursor-pointer transition w-14">
          <HiTemplate className="text-xl" />
          <span className="text-[11px] mt-1 font-medium">Templates</span>
        </li>

        <li className="flex flex-col items-center text-gray-700 hover:text-white hover:bg-blue-600 p-2 rounded-lg cursor-pointer transition w-14">
          <HiUpload className="text-xl" />
          <span className="text-[11px] mt-1 font-medium">Uploads</span>
        </li>

        <li
          className="flex flex-col items-center text-gray-700 hover:text-white hover:bg-blue-600 p-2 rounded-lg cursor-pointer transition w-14"
          onClick={() => setShowMore(!showMore)}
        >
          <HiDotsCircleHorizontal className="text-xl" />
          <span className="text-[11px] mt-1 font-medium">More</span>
        </li>

        {showMore && (
          <>


            <li className="flex flex-col items-center text-gray-700 hover:text-white hover:bg-blue-600 p-2 rounded-lg cursor-pointer transition w-14">
              <HiChartBar className="text-xl" />
              <span className="text-[11px] mt-1 font-medium">Analytics</span>
            </li>

            <li className="flex flex-col items-center text-gray-700 hover:text-white hover:bg-blue-600 p-2 rounded-lg cursor-pointer transition w-14">
              <HiNewspaper className="text-xl" />
              <span className="text-[11px] mt-1 font-medium">Ads</span>
            </li>
          </>
        )}
      </ul>

      {/* ---------- BOTTOM SECTION ---------- */}
      <ul className="flex flex-col items-center space-y-3 mb-4 text-center">
        <li className="flex flex-col items-center text-gray-700 hover:text-white hover:bg-blue-600 p-2 rounded-lg cursor-pointer transition w-14">
          <HiCog className="text-xl" />
        </li>
        <li className="flex flex-col items-center text-gray-700 hover:text-white hover:bg-blue-600 p-2 rounded-lg cursor-pointer transition w-14">
          <HiQuestionMarkCircle className="text-xl" />
        </li>
        <li className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
            alt="User"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
