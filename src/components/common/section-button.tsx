import React from "react";

const SectionButton: React.FC<any> = ({ icon, text, isActive, onClick }) => {
  const iconClass = isActive
    ? "text-[#1830FF]"
    : "text-[#141619] group-hover:text-[#1830FF]";
  const IconComponent = React.cloneElement(icon, { className: iconClass });

  return (
    <button
      onClick={onClick}
      className={`group flex flex-row justify-start items-center p-4 rounded-2xl gap-4 transition duration-300 ${
        isActive ? " bg-[#F1F6FF]" : " hover:bg-[#F1F6FF]"
      }`}
    >
      {IconComponent}
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

export default SectionButton;
