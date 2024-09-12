// "use client";
// import React, { useState } from "react";
// import {
//   CalendarIcon,
//   DealsIcon,
//   HomeIcon,
// } from "@/utils/icons-with-hover/icons";
// import HeaderAfterAuth from "@/components/headers/header-after-auth";
// import SectionButton from "@/components/common/section-button";
// import MainHome from "@/components/main-pages/main-home";
// import Queue from "@/components/main-pages/queue";
// import Deals from "@/components/main-pages/deals";

// const Home: React.FC = () => {
//   const [activeButton, setActiveButton] = useState<string>("deals");

//   const handleButtonClick = (buttonName: string) => {
//     setActiveButton(buttonName);
//   };

//   return (
//     <div className="flex w-[100%] flex-col items-center ">
//       <HeaderAfterAuth />
//       <div className="flex py-6 px-0 justify-center items-start gap-10 ">
//         <div className="flex flex-col min-w-[295px]">
//           <SectionButton
//             icon={<HomeIcon />}
//             text="Home"
//             isActive={activeButton === "main-home"}
//             onClick={() => handleButtonClick("main-home")}
//           />
//           <SectionButton
//             icon={<CalendarIcon />}
//             text="Очередь"
//             isActive={activeButton === "queue"}
//             onClick={() => handleButtonClick("queue")}
//           />
//           <SectionButton
//             icon={<DealsIcon />}
//             text="Проверка статуса соискателя"
//             isActive={activeButton === "deals"}
//             onClick={() => handleButtonClick("deals")}
//           />
//         </div>
//         <div className="flex-1">
//           {activeButton === "main-home" && <MainHome />}
//           {activeButton === "queue" && <Queue />}
//           {activeButton === "deals" && <Deals />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import HeaderAfterAuth from "@/components/headers/header-after-auth";

const Main = () => {
  return (
    <div>
      <HeaderAfterAuth />
    </div>
  );
};

export default Main;
