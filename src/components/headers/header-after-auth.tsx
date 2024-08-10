import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LogoutButton from "../buttons/signout-button";

const HeaderAfterAuth = () => {
  const route = useRouter();

  const handleRouteToUserProfile = () => {
    route.push("/pages/user-profile");
  };

  return (
    <div className="w-full bg-[#FFF] shadow-[0_1px_0px_0px_rgba(0,0,0,0.10)]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Image src="/images/text-logo.svg" alt="Logo" />
        <div className="flex justify-center items-center">
          <button onClick={handleRouteToUserProfile}>
            <Image src="/icons/profile.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderAfterAuth;
