

import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <>
      <div id="about" className=" pt-20 flex items-center justify-between flex-wrap">
        <div className=" mx-auto">
          <h1 className="font-semibold text-[32px] text-white mb-3">
            Otmane Omry is a <span className="text-[#C778DD]">Fullstack Web Developer</span>
          </h1>

          <Link href="mailto:omry.otmane@gmail.com" className="text-white font-medium py-2 px-4 border duration-200 border-[#C778DD] hover:bg-[#C778DD33]">
            Contact me!!
          </Link>
        </div>

      </div>
    </>
  );
};

export default About;
