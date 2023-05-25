

import Link from "next/link";
import React from "react";
import man from "public/assets/images/man-about-otmane.png";

const About = () => {
  return (
    <>
      <div id="about" className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
        <div className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            Otmane Omry is a <span className="text-[#C778DD]">Fullstack Web Developer</span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
            Co-founder of <Link href="https://zabaqist.com" className="text-[#C778DD]">Zabaqist.com</Link>
          </p>
          <Link href="mailto:omry.otmane@gmail.com" className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
            Contact me!!
          </Link>
        </div>
        <div className="mx-auto">
          <div className="">
            <img src={man.src} alt="otmane omry profile image" />
          </div>
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#C778DD]"></div>
            <div className="">
              Currently working on <Link href={'https://zabaqist.com/'} className="text-[#C778DD]">Zabaqist.com</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
