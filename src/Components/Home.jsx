import React from "react";
import Card from "./Card";
import {
  HiClock,
  HiDotsHorizontal,
  HiPlus,
  HiPlusCircle,
  HiSparkles,
  HiStar,
} from "react-icons/hi";
import linesImg from "../assets/lines.png";
import webIMg from "../assets/web.jpg";

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-4 px-4 md:px-6 lg:px-8 gap-6">
      <div className="flex flex-col md:flex-row items-center w-full max-w-[1434px] gap-4 md:gap-6">
        <h1 className="text-2xl font-bold italic flex items-center  space-x-2 ml-2 md:ml-4">
          <HiStar className="w-6 h-6 text-yellow-400" />
          <span>Sonola</span>
        </h1>

        <div className="flex-1 flex justify-center w-full">
          <div className="relative w-full ml-4 max-w-[720px]">
            <input
              type="text"
              placeholder="Search projects and experiences..."
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
            <HiSparkles className="w-6 h-4 text-yellow-400 animate-pulse" />
            <span>Try</span>
          </button>
        </div>
        
      </div>

      <div className="flex flex-col w-full max-w-[1350px]  gap-8 mt-1 mb-10 shadow-lg p-0">
        {/* Banner  */}
        <div
          className="flex flex-col lg:flex-row shadow:2xl items-stretch justify-between w-full max-w-[1260px] h-auto lg:h-[320px] rounded-[24px] bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `url(${linesImg})`,
            backgroundBlendMode: "normal",
            backgroundColor: "#f3f4f6",
          }}
        >
          {/* Left site content */}
          <div className="flex flex-col px-8 py-6 lg:py-0">
            <div className="rounded-lg p-4 text-white w-full max-w-[300px]">
              <h2 className="font-poppins font-semibold text-3xl lg:text-4xl text-black mb-2">
                Getting started in Sonola
              </h2>
              <p className="text-sm text-gray-600 w-full lg:w-[248px]">
                Create intriguing marketing contents with ease!
              </p>

              <button className="mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-[#977BFD] to-[#7B5BFF] hover:from-[#8B6DFF] hover:to-[#6A4FFF] text-white text-sm px-4 py-2 rounded-full w-full max-w-[248px] shadow-md transition-all duration-300">
                <HiPlusCircle className="w-4 h-4" />
                <span>Start Creating Now</span>
              </button>
            </div>
          </div>

          {/* Rightsite content  */}
<div className="hidden lg:flex flex-1 items-center justify-center px-0 relative">
  <div className="absolute bottom-[-25px] left-10 w-[240px] h-[240px] rounded-[24px] overflow-hidden shadow-lg">
    <img
      src="https://plus.unsplash.com/premium_photo-1684179641331-e89c6320b6a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
      alt="Ocean view"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="absolute top-[-20px] right-[-2px] w-[260px] h-[203px] rounded-[24px] overflow-hidden shadow-lg">
    <img
      src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFya2V0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
      alt="Mountains"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="absolute bottom-[-60px] left-75 w-[280px] h-[203px] rounded-[24px] overflow-hidden shadow-lg">
    <img
      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
      alt="City Lights"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="absolute bottom-[-80px] right-[-15px] w-[240px] h-[203px] rounded-[24px] overflow-hidden shadow-lg">
    <img
      src="https://images.unsplash.com/flagged/photo-1556514767-5c270b96a005?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500"
      alt="Nature path"
      className="w-full h-full object-cover"
    />
  </div>

  <div className="absolute left-106 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[203px] rounded-[24px] overflow-hidden shadow-lg">
    <img
      src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHxtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
      alt="Sky clouds"
      className="w-full h-full object-cover"
    />
  </div>
</div>

        </div>

        {/* for you card section */}
        <div className="w-full max-w-[1200px] sm:m-2  mx-auto p-8">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center space-x-2">
              <HiStar className="w-4 h-4 text-gray-400" />
              <h1 className="font-inter text-gray-400 font-light text-base">
                For You
              </h1>
            </div>
            <button className="font-inter text-sm text-gray-500 border border-gray-100 rounded-md px-3 py-1 hover:bg-gray-100 transition">
              View Template →
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {[
              {
                title: "Web Pages",
                description: "Good products deserve good websites.",
                img: "https://images.unsplash.com/photo-1559854036-2409f22a918a?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
              },
              {
                title: "Presentation",
                description: "Easily edit our animated templates.",
                img: "https://designshack.net/wp-content/uploads/pitchdeck-powerpoint-presentation-template-851-1.jpg",
              },
              {
                title: "Social Media",
                description: "Everything you need for socials.",
                img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
              },
              {
                title: "Sales Pitch",
                description: "Good products deserve good websites.",
                img: "https://s3-alpha.figma.com/hub/file/2147894453579453921/bc56a3ac-9c4c-4425-b5a6-09d54735e87a-cover.png",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-100  ml-2  shadow-md rounded-lg overflow-hidden relative hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-2 flex flex-col">
                  <h4 className="text-gray-800 font-semibold">{card.title}</h4>
                  <p className="text-gray-500 text-sm">{card.description}</p>
                </div>
                <span className="absolute bottom-2 right-3 text-gray-500 font-bold text-lg">
                  &rarr;
                </span>
              </div>
            ))}
          </div>

          {/* Recent Section */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <HiClock className="w-4 h-4 text-gray-400" />
              <h1 className="font-inter text-gray-400 font-light text-base">
                Recent
              </h1>
            </div>
            <button className="font-inter text-sm text-gray-500 border border-gray-100 rounded-md px-3 py-1 hover:bg-gray-100 transition">
              See in Projects →
            </button>
          </div>

          {/* Recent Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Web Pages",
                date: "Mark May 14 2025",
                img: "https://images.unsplash.com/photo-1648134859177-66e35b61e106?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
              },
              {
                title: "60 Second Cut",
                date: "Mark May 14 2025",
                img: "https://images.unsplash.com/photo-1623414036027-db90ec9aa802?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
              },
              {
                title: "Document",
                date: "Mark May 14 2025",
                img: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
              },
              {
                title: "Web Pages",
                date: "Mark May 14 2025",
                img: webIMg,
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-100 shadow-md rounded-lg overflow-hidden relative hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-2 flex flex-col flex-1">
                  <h4 className="text-gray-800 font-semibold">{card.title}</h4>
                  <span className="text-sm text-gray-500 mt-2">
                    {card.date}
                  </span>
                </div>
                <button className="absolute bottom-4 right-3 text-gray-500 hover:text-gray-700">
                  <HiDotsHorizontal className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
