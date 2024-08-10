import React from "react";

const DealsSectionButton: React.FC<any> = ({ text, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`group border border-color-#F3F4F6 flex flex-row justify-start items-center p-3 rounded-2xl gap-4 transition duration-300 ${
        isActive ? " bg-[#F1F6FF]" : " hover:bg-[#F1F6FF]"
      }`}
    >
      <span
        className={`font-title text-[14px] font-semibold transition duration-300 ${
          isActive
            ? "text-[#1830FF]"
            : "text-[#141619] group-hover:text-[#1830FF]"
        }`}
      >
        {text}
      </span>
    </button>
  );
};

export default DealsSectionButton;
