import React from "react";
import { useNavigate } from "react-router-dom";
import "./DeepRootComparison.css"; 

const DeepRootComparison: React.FC = () => {
  const navigate = useNavigate();

  const handleEorClick = () => {
    navigate("/eor");
  };

  const handleRorClick = () => {
    navigate("/ror");
  };

  // Base button style (can be customized further with Tailwind)
  const actionButtonStyle =
    "text-sm text-center flex items-center justify-center rounded-full h-[34px] px-4 border-2";
  const navButtonStyle =
    "w-full sm:w-[215px] h-[51px] rounded-full flex items-center justify-between px-5 text-sm font-bold transition-opacity hover:opacity-80";

  return (
    // Main container - full width, dark background, relative positioning context
    <div className="w-full min-h-screen bg-[#1E1E1E] text-white relative overflow-x-hidden pt-4 pb-10 md:pb-20">
      {/* --- Animated Scrolling Header --- */}
      <div className="scrolling-container">
        {/* Increased repetition for smoother loop on wide screens */}
        <div className="scrolling-text-wrapper">
          <span className="scrolling-header">no hidden costs !   </span>
          <span className="scrolling-header">no hidden costs !   </span>
          <span className="scrolling-header">no hidden costs !   </span>
          <span className="scrolling-header">no hidden costs !   </span>
        </div>
      </div>
      {/* --- END Header --- */}

      {/* Content container - centered, max-width, responsive padding */}
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-8 md:mt-12">
        {/* Grid layout for EOR/ROR sections: 1 column on small, 2 columns on medium+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-gray-200 text-gray-900"> {/* Outer container with shared background */}

          {/* EOR Section */}
          <div className="p-6 sm:p-8 lg:p-10 flex flex-col"> {/* Added flex-col */}
             {/* Title - Responsive font size */}
            <div className="mb-6 md:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal font-['Open_Sans'] leading-normal tracking-tighter mb-1">Deeproot's-</h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal font-['Open_Sans'] leading-normal tracking-tighter">EOR</h2>
            </div>

            {/* EOR Action Buttons - Wrap on smaller screens */}
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              <button
                className={`${actionButtonStyle} bg-gray-200 border-black`}
              >
                Onboard
              </button>
              <button
                className={`${actionButtonStyle} bg-gray-200 border-black`}
              >
                Manage Payroll
              </button>
            </div>

            {/* EOR Description - Responsive text size */}
            <div className="mb-8 text-sm sm:text-base">
              <p className="mb-1">Already selected the contractor!</p>
              <p>Compliantly onboard them & manage their payroll across U.S.</p>
            </div>

            {/* EOR Navigation Button - Takes full width on small screens */}
             {/* Pushed to bottom using mt-auto */}
            <button
              className={`${navButtonStyle} bg-gray-200 text-gray-900 border-2 border-black mt-auto`} // Added mt-auto
              onClick={handleEorClick}
              aria-label="Learn More about EOR"
            >
              <span>Visit EOR</span>
              <span className="text-xl font-bold">→</span>
            </button>
          </div> {/* End EOR Section */}

          {/* ROR Section - Gradient background, white text */}
          <div
             className="text-white p-6 sm:p-8 lg:p-10 rounded-t-none rounded-b-3xl md:rounded-l-none md:rounded-r-3xl flex flex-col" // Adjust rounding based on stacking, add flex-col
             style={{ // Keep gradient here
               background: "linear-gradient(180deg, #B218FD 0%, #660E7F 100%)",
             }}
          >
             {/* Title - Responsive font size */}
            <div className="mb-6 md:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal font-['Open_Sans'] leading-normal tracking-tighter mb-1">Deeproot's-</h2>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal font-['Open_Sans'] leading-normal tracking-tighter">ROR</h2>
            </div>

            {/* ROR Action Buttons - Wrap on smaller screens */}
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              <div className={`${actionButtonStyle} border-none bg-[#A216E3]`}>Hire</div>
              <div className={`${actionButtonStyle} border-none bg-[#A216E3]`}>Onboard</div>
              <div className={`${actionButtonStyle} border-none bg-[#A216E3]`}>Manage Payroll</div>
            </div>

            {/* ROR Description - Responsive text size */}
            <div className="mb-8 text-sm sm:text-base">
              <p className="mb-1">Looking for contractors?</p>
              <p>Find the right talent with us & Compliantly onboard & manage their payroll across U.S.</p>
            </div>

            {/* ROR Navigation Button - Takes full width on small screens */}
            {/* Pushed to bottom using mt-auto */}
            <button
              className={`${navButtonStyle} bg-[#A216E3] text-white border-none mt-auto`} // Added mt-auto
              onClick={handleRorClick}
              aria-label="Learn More about ROR"
            >
              <span>Visit ROR</span>
              <span className="text-xl font-bold">→</span>
            </button>
          </div> {/* End ROR Section */}

        </div> {/* End Grid Container */}
      </div> {/* End Content container */}
    </div> // End Main Container
  );
};

export default DeepRootComparison;