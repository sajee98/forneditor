import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  HiHome,
  HiOutlineFolder,
  HiTemplate,
  HiUpload,
  HiDotsCircleHorizontal,
  HiChartBar,
  HiNewspaper,
  HiCog,
  HiQuestionMarkCircle,
} from "react-icons/hi";
import { ThemeContext } from "../Context/ThemeContextProvider";

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const menuItemClass =
    "flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 p-2 rounded-lg cursor-pointer transition w-14";

  return (
    <div className="bg-gray-100 text-gray-900 h-screen fixed top-0 px-2 border-r border-gray-300 dark:border-gray-600 flex flex-col justify-between items-center w-20 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      <ul className="flex flex-col mt-4 space-y-3 items-center text-center">
        <li>
          <button
            onClick={toggleTheme}
            className="flex flex-col items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white hover:bg-blue-600 p-2 rounded-lg cursor-pointer transition w-14"
            title="Toggle Theme"
          >
            {theme === "light" ? (
              <FaMoon className="text-2xl border rounded-2xl p-1 text-gray-600 dark:text-gray-300" />
            ) : (
              <FaSun className="text-2xl border rounded-2xl p-1 text-yellow-400" />
            )}
          </button>
        </li>

        <li className={menuItemClass}>
          <Link to="/Home" className="flex flex-col items-center">
            <HiHome className="text-xl" />
            <span className="text-[11px] mt-1 font-medium">Home</span>
          </Link>
        </li>

        <Link to="/" className="flex flex-col items-center">
          <li className={menuItemClass}>
            <HiOutlineFolder className="text-xl" />
            <span className="text-[11px] mt-1 font-medium">Projects</span>
          </li>
        </Link>

        <li className={menuItemClass}>
          <HiTemplate className="text-xl" />
          <span className="text-[11px] mt-1 font-medium">Templates</span>
        </li>

        <li className={menuItemClass}>
          <HiUpload className="text-xl" />
          <span className="text-[11px] mt-1 font-medium">Uploads</span>
        </li>

        <li
          onClick={() => setShowMore(!showMore)}
          className={menuItemClass}
          title="Show More"
        >
          <HiDotsCircleHorizontal className="text-xl" />
          <span className="text-[11px] mt-1 font-medium">More</span>
        </li>

        {showMore && (
          <>
            <li className={menuItemClass}>
              <HiChartBar className="text-xl" />
              <span className="text-[11px] mt-1 font-medium">Analytics</span>
            </li>

            <li className={menuItemClass}>
              <HiNewspaper className="text-xl" />
              <span className="text-[11px] mt-1 font-medium">Ads</span>
            </li>
          </>
        )}
      </ul>

      <ul className="flex flex-col items-center space-y-3 mb-4 text-center">
        <li className={menuItemClass}>
          <HiCog className="text-xl" />
        </li>

        <li className={menuItemClass}>
          <HiQuestionMarkCircle className="text-xl" />
        </li>

        <li className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500"
            alt="User"
            className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600"
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
