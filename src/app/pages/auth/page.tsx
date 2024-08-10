import React from "react";
import Image from "next/image";
import GoogleAuthButton from "@/components/buttons/google-auth-button";

const GoogleAuth = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex justify-between min-w-[360px] max-w-[445px] px-0 pt-10 pb-20 flex-col items-center flex-[1_0_0] self-stretch">
        <Image src="/images/euro-hunter-logo.svg" alt="EuroHunter logo" />
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-[#000] text-center font-title text-[32px] font-bold leading-[125%] tracking-[0.32px]">
            Welcome to our platform!
          </h1>
          <p className="text-[#7B818C] text-center font-title text-[16px] font-normal leading-[175%]">
            Authorization and registration are completed via <br />
            Google Mail.
          </p>
          <GoogleAuthButton />
        </div>
        <div className="flex flex-row gap-1 leading-[168%]">
          <a
            className="text-[#1830FF] font-title text-[14px] font-normal"
            href="#"
          >
            Terms of use
          </a>
          <span className="text-[#A5ABB8] ">|</span>
          <a
            className="text-[#1830FF] font-title text-[14px] font-normal"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoogleAuth;
