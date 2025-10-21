import React from "react";
import Card from "./Card";
import { HiPlus, HiPlusCircle, HiStar } from "react-icons/hi";
import linesImg from "../assets/lines.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-4 px-4 md:px-6 lg:px-8 gap-6">
      <div className="flex flex-col md:flex-row items-center w-full max-w-[1434px] gap-4 md:gap-6">
        <h1 className="text-2xl font-bold italic flex items-center space-x-2 ml-2 md:ml-4">
          <HiStar className="w-6 h-6 text-yellow-400" />
          <span>Sonola</span>
        </h1>

        <div className="flex-1 flex justify-center w-full">
          <div className="relative w-full max-w-[720px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-2xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>
          </div>
        </div>

        <div className="flex-shrink-0">
          <button className="flex items-center space-x-1 bg-white border text-gray-600 hover:bg-gray-100 text-sm px-3 py-1 rounded-full">
            <HiStar className="w-4 h-4 text-yellow-400" />
            <HiStar className="w-4 h-4 text-yellow-400" />
            <HiStar className="w-4 h-4 text-yellow-400" />
            <span>Try</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[1160px] gap-8 mt-6 mb-10">
        <div
          className="flex items-stretch justify-between w-full max-w-[1160px] h-[320px] rounded-[24px]  bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${linesImg})`,
            backgroundBlendMode: "normal",
            backgroundColor: "#f3f4f6",
          }}
        >
          {/*  left overlay orcontent */}
          <div className="flex flex   px-8">
            <div className=" rounded-lg p-4 text-white  w-[300px]">
              <h2 className="font-poppins font-semibold text-4xl text-black   mb-2">
                Getting started in Sonola
              </h2>
              <p className="text-sm text-gray-600 w-[248px]">
                Create intriguing marketing contents with ease!{" "}
              </p>
              <br />
              <br />
              <br />
              <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#977BFD] to-[#7B5BFF] hover:from-[#8B6DFF] hover:to-[#6A4FFF] text-white text-sm px-4 py-2 rounded-full w-[248px] shadow-md transition-all duration-300">
  <HiPlusCircle className="w-4 h-4" />
  <span>Start Creating Now</span>
</button>
            </div>
          </div>

{/* Right content */}
<div className="flex-1 flex items-center justify-center px-0 relative">

  <div className="absolute bottom-[10px] left-6 w-[240px] h-[203px] rounded-[24px] overflow-hidden shadow-lg">
    <img
      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=60"
      alt="Ocean view"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="absolute top-[-20px] right-[-2px] w-[240px] h-[203px] rounded-[24px] overflow-hidden shadow-lg">
    <img
      src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=500&q=60"
      alt="Mountains"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="absolute bottom-[-50px] left-80 w-[240px] h-[203px] rounded-[24px] overflow-hidden shadow-lg">
    <img
      src="https://images.unsplash.com/photo-1619070849223-c02f450670ed?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
      alt="City Lights"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="absolute bottom-[-85px] right-[-10px] w-[240px] h-[203px] rounded-[24px] overflow-hidden shadow-lg">
    <img
      src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=60"
      alt="Nature path"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[203px] rounded-[24px] overflow-hidden shadow-lg">
    <img
      src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=60"
      alt="Sky clouds"
      className="w-full h-full object-cover"
    />
  </div>
</div>


        </div>

        {/* for you card section */}
    <div className="w-[1160px] h-[592px] border-2">
  <div className="flex justify-between rotate-0 opacity-100  border h-[34px] pl-[15px]">
      <h1 className="font-inter text-gray-400 font-light text-base">
        For You
      </h1>
  </div>

  <div className="w-[1160px] h-[240px] mt-2 border-2">

  </div>
   <div className="flex justify-between rotate-0 mt-2 opacity-100  border h-[34px] pl-[15px]">
      <h1 className="font-inter text-gray-400 font-light text-base">
        REcents
      </h1>
  </div>
  <div className="w-[1160px] h-[236px] mt-2 border-2">

  </div>
</div>

      </div>
    </div>
  );
};

export default Home;
