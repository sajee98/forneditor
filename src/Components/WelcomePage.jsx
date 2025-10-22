import Slogo from "../assets/Slogo.jpg";
const WelcomePage = () => {
  return (
    <div className="max-w-[1180px] w-full md:h-[580px] h-auto rounded-[24px] opacity-100 flex flex-col md:flex-row overflow-hidden mx-auto mt-8 p-4 md:p-8">
      <div className="w-full md:w-1/2 md:min-h-[540px] p-6 md:p-10 bg-white flex flex-col justify-between
                      md:rounded-tl-[24px] md:rounded-bl-[24px] shadow-2xl relative">
        <div>
          <h2 className="font-poppins font-semibold text-2xl md:text-3xl lg:text-4xl text-black mb-2">
            Welcome to Sonola
          </h2>

          <p className="text-sm md:text-base text-gray-600 max-w-md">
            With Sonola, making stand-out marketing content is as easy as a few
            clicks. Lets get started!
          </p>
        </div>

        <div className="pt-4 mt-6 mb-10 md:mt-0">
          <div className="pt-4">
            <p className="font-poppins text-gray-700 text-sm md:text-sm">
              “63% of marketers say creating engaging content consistently is their
              biggest challenge.”
            </p>
            <span className="text-gray-500 text-xs">
              — Content Marketing Institute, 2022
            </span>
          </div>
        </div>

        <button
          className="absolute bottom-6 right-6 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition duration-300"
        >
          Get Started
        </button>
      </div>


      <div className="w-full md:w-1/2 md:min-h-[540px] bg-gray-200 md:rounded-tr-[24px] md:rounded-br-[24px] overflow-hidden shadow-2xl">
        <img
          src={Slogo}
          alt="Welcome illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default WelcomePage;
