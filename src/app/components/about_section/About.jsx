
import Link from "next/link";
import React from "react";
import man from "public/assets/images/man-about-otmane.png";

const AboutSec = () => {
  return (
      <>
        <div id="aboutsec" className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
          {/* bottom */}
          <div className=" flex-wrap flex items-center justify-between">
            {/* left */}
            <div className="md:w-[48%] w-full">
              {/* title */}
              <div className=" mb-12">
                <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                  <div className="">
                    <span className="text-[#C778DD]">#</span>about-me
                  </div>
                  <div className="line w-1/3 h-px bg-[#C778DD]"></div>
                </div>
              </div>
              {/* disc */}
              <p className="text-[#ABB2BF] ">
                Hello, i’m Otmane Omry!
                <br/>
                <br/>
                I&apos;m a software developer from Casablanca (Morocco).
                <br/>
                <br/>
                I&apos;m 32 years old and I have 7 years of professional experience working for companies in Morocco,
                Switzerland, and France. I love clean, organized, and well structured codebases.
                <br/>
                <br/>
                I&apos;m a fan of React.js, Next.js, Node.js, Laravel and Tailwind.
                <br/>
                <br/>
                In my free time I love spending time with my friends and my chess board, and to play soccer with my
                friends.
              </p>
              {/* button */}
              <div className="mt-7">
                <Link
                    href="https://github.com/otmaneomry"
                    className=" duration-150 hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white "
                >
                  <button>Read more -{">"}</button>
                </Link>
              </div>
            </div>
            {/* right */}
            <div className=" mx-auto">
              <img className="mx-auto" src={man.src} alt=""/>
            </div>
          </div>
        </div>
      </>
  );
};

export default AboutSec;
