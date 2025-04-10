import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeepRootComparison.css"; // Make sure this CSS file is updated

const DeepRootComparison: React.FC = () => {
  // --- Keep your existing state and navigation hooks ---
  const [eorActive, setEorActive] = useState(true); // Example state, might not be used directly in this view
  const [rorActive, setRorActive] = useState(false); // Example state
  const navigate = useNavigate();

  // --- Keep your existing style objects ---
  const titleStyle: React.CSSProperties = {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 400,
    fontSize: "40px",
    lineHeight: "150%",
    letterSpacing: "-2.2%", // Consider using 'em' like -0.022em
  };

  const actionButtonStyle: React.CSSProperties = {
    width: "142px",
    height: "34px",
    borderRadius: "31px",
    border: "2px solid #D9D9D9", // Default border for styling reference
  };

  // --- MODIFIED Styles for the Navigation Buttons ---
  // Style for the EOR navigation button container
  const navButtonEorStyle: React.CSSProperties = {
    width: "215px", // Keep original size or adjust as needed
    height: "51px",
    borderRadius: "31px",
    border: "2px solid #000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Space between text and arrow
    paddingLeft: "20px",
    paddingRight: "20px",
    // Background color is applied via className="bg-gray-200"
    // Text color is applied via className="text-gray-900"
  };

  // Style for the ROR navigation button itself (applying gradient)
  const navButtonRorStyle: React.CSSProperties = {
    width: "213px", // Keep original size or adjust as needed
    height: "51px",
    borderRadius: "31px",
    border: "none", // No border needed with gradient bg
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Space between text and arrow
    paddingLeft: "20px",
    paddingRight: "20px",
    background: "#A216E3", // Fallback or base color for the gradient ROR button
    color: "white", // Text color for ROR button
    position: "absolute", // Position the button
    bottom: "20px",
    left: "20px",
    cursor: "pointer", // Ensure pointer cursor
  };
  // --- END MODIFIED Styles ---

  const handleEorClick = () => {
    navigate("/eor");
  };

  const handleRorClick = () => {
    navigate("/ror");
  };

  return (
    <div
      className="p-6 rounded-3xl text-white relative"
      style={{
        width: "1401px",
        height: "752px",
        marginTop: "0px",
        marginLeft: "19px",
        borderRadius: "30px",
        background: "#1E1E1E",
        overflow: "hidden",
      }}
    >
      {/* --- Animated Scrolling Header (Keep as is) --- */}
      <div className="scrolling-container">
        <div className="scrolling-text-wrapper">
          <span className="scrolling-header">no hidden costs !   </span>
          <span className="scrolling-header">no hidden costs !   </span>
          {/* Repeat if needed */}
        </div>
      </div>
      {/* --- END Header --- */}

      <div
        className="absolute rounded-3xl bg-gray-200 text-gray-900" // Base background for the container
        style={{
          width: "1281px",
          height: "476px",
          top: "180px",
          left: "70px",
          borderRadius: "30px",
        }}
      >
        {/* EOR Section */}
        <div className="p-6 absolute left-0 top-0 w-1/2 h-full">
          <div className="mb-10">
            <h2 className="mb-2" style={titleStyle}>Deeproot's-</h2>
            <h2 style={titleStyle}>EOR</h2>
          </div>

          {/* EOR Action Buttons (Keep as is) */}
          <div className="flex gap-2 mb-8">
            <button
              className="text-sm text-center flex items-center justify-center bg-gray-200"
              style={{ ...actionButtonStyle, border: "2px solid #000000" }}
            >
              Onboard
            </button>
            <button
              className="text-sm text-center flex items-center justify-center bg-gray-200"
              style={{ ...actionButtonStyle, border: "2px solid #000000" }}
            >
              Manage Payroll
            </button>
          </div>

          {/* EOR Description (Keep as is) */}
          <div className="mb-8">
            <p className="mb-1">Already selected the contractor!</p>
            <p>Compliantly onboard them & manage their payroll across U.S.</p>
          </div>

          {/* --- MODIFIED EOR Navigation Button --- */}
          <button
            className="absolute" // Position the clickable area
            style={{
              bottom: "20px",
              left: "20px",
              border: "none",
              padding: "0",
              cursor: "pointer",
              background: "transparent", // Button itself is transparent
            }}
            onClick={handleEorClick}
            aria-label="Learn More about EOR" // Accessibility
          >
            {/* This div provides the visual style */}
            <div
              style={navButtonEorStyle}
              className="bg-gray-200 text-gray-900 transition-opacity hover:opacity-80" // Add hover effect
            >
              <span className="font-bold text-sm">Visit EOR</span> {/* Updated Text */}
              <span className="text-xl font-bold">→</span> {/* Arrow Icon */}
            </div>
          </button>
          {/* --- END MODIFIED Button --- */}

        </div> {/* End EOR Section */}

        {/* ROR Section */}
        <div
          className="text-white p-6 rounded-3xl absolute" // Keep text white for content
          style={{
            width: "659px",
            height: "463px",
            borderRadius: "38px",
            right: "6px",
            top: "6px",
            background: "linear-gradient(180deg, #B218FD 0%, #660E7F 100%)",
          }}
        >
          <div className="mb-10">
            <h2 className="mb-2" style={titleStyle}>Deeproot's-</h2>
            <h2 style={titleStyle}>ROR</h2>
          </div>

          {/* ROR Action Buttons (Keep as is) */}
          <div className="flex gap-2 mb-8">
             <div className="text-sm text-center flex items-center justify-center py-1 px-4 rounded-full" style={{ background: "#A216E3", minWidth: "100px", height: "34px" }}>Hire</div>
             <div className="text-sm text-center flex items-center justify-center py-1 px-4 rounded-full" style={{ background: "#A216E3", minWidth: "100px", height: "34px" }}>Onboard</div>
            <div className="text-sm text-center flex items-center justify-center py-1 px-4 rounded-full" style={{ background: "#A216E3", minWidth: "100px", height: "34px" }}>Manage Payroll</div>
          </div>

          {/* ROR Description (Keep as is) */}
          <div className="mb-8">
            <p className="mb-1">Looking for contractors?</p>
            <p>Find the right talent with us & Compliantly onboard & manage their payroll across U.S.</p>
          </div>

          {/* --- MODIFIED ROR Navigation Button --- */}
           <button // Use a button element directly
            style={navButtonRorStyle} // Apply the defined style object
            className="transition-opacity hover:opacity-80" // Add hover effect
            onClick={handleRorClick}
            aria-label="Learn More about ROR" // Accessibility
           >
              <span className="font-bold text-sm">Visit ROR</span> {/* Updated Text */}
              <span className="text-xl font-bold">→</span> {/* Arrow Icon */}
          </button>
          {/* --- END MODIFIED Button --- */}

        </div> {/* End ROR Section */}

      </div> {/* End Inner Container */}
    </div> // End Main Container
  );
};

export default DeepRootComparison;