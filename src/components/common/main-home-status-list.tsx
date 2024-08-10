import React from "react";
import Image from "next/image";

const MainHomeStatusList: React.FC<any> = ({ title, text, img }) => {
  return (
    <div>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col items-center gap-[6px]">
          <Image src="/icons/check.svg" alt="" />
          <Image src={img} alt="" />
        </div>
        <div className="flex flex-col gap-2 pb-4">
          <p
            className="text-[#000000] text-[16px] font-title font-semibold"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <h3
            className="text-[#000000] text-[16px] font-title font-normal leading-7"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    </div>
  );
};

export default MainHomeStatusList;
