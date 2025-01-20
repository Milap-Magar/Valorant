import React from "react";

const GuiButton = () => {
  return (
    <div className="group relative">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
          className="w-5 hover:scale-110 duration-200 hover:stroke-blue-500"
        >
          {/* Outer Circle */}
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          ></circle>
          {/* Dot of 'i' */}
          <circle cx="12" cy="6" r="1.5" fill="black"></circle>
          {/* Line of 'i' */}
          <line
            x1="12"
            y1="10"
            x2="12"
            y2="18"
            stroke="currentColor"
            strokeLinecap="round"
          ></line>
        </svg>
      </button>
      <span
        className="absolute -top-10 left-[50%] -translate-x-[60%] 
  z-20 origin-left scale-0 px-1 rounded-lg border 
  border-gray-300 bg-white text-xs font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
      >
        See More
      </span>
    </div>
  );
};

export default GuiButton;
