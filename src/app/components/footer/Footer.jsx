import React from "react";

import Link from "next/link";
import Linkedin from "@/app/components/svg/linkedin";
import Github from "@/app/components/svg/github";
import Logo from "@/app/components/svg/logo";

const Footer = () => {
  return (
    <>
      {/* line */}
      <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
      <div className="px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <Logo />
                <span className="uppercase">Otmane Omry</span>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF]">omry.otmane@gmail.com</span>
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>Fullstack web developer based in Morocco</p>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto md:mx-0">
            {/* title */}
            <h2 className=" text-white text-2xl font-medium mb-3">Media</h2>
            {/* media */}
            <div className="flex items-center gap-2 justify-center">
              <Link href="https://www.linkedin.com/in/otmaneomry/">
                <Linkedin/>
              </Link>
              <Link href="https://github.com/otmaneomry">
                <Github/>
              </Link>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © Copyright 2023. Made by <Link href="https://github.com/beharus/Youtube_portfolio"
                                          className="text-[#C778DD]">Behruz Eshquvatov</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
