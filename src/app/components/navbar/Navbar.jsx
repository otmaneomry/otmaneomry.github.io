'use client';
import React, {useState} from "react";

import Link from "next/link";
import Logo from "@/app/components/svg/logo";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
      <>
        <div className="fixed top-0 left-0 right-0 bg-[#282C33]">
          <div className=" px-5 max-w-[1560px] mx-auto flex items-center justify-between pt-6 my-2">
            <div className="left flex gap-2 items-center font-bold text-white text-base">
              {/* logo */}
              <div className="img">
                <Logo/>
              </div>
              <span className="uppercase">Otmane Omry</span>
            </div>
            <div className="right flex items-center">
              <div
                  className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${!toggle ? `right-[-100%] top-0 bottom-0` : `right-0 top-0 bottom-0`} bg-[#282C33] md:static`}>
                <Link href="#home">
                  <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                    <span className="text-[#C778DD] font-medium">#</span>home
                  </li>
                </Link>
                <Link href="#work">
                  <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                    <span className="text-[#C778DD] font-medium">#</span>work
                  </li>
                </Link>
                <Link href="#aboutsec">
                  <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                    <span className="text-[#C778DD] font-medium">#</span>about-me
                  </li>
                </Link>
                <Link href="#contacts">
                  <li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4">
                    <span className="text-[#C778DD] font-medium">#</span>contacts
                  </li>
                </Link>
                <div onClick={() => setToggle(false)} className="close absolute block md:hidden right-3 top-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                       stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </div>
            </div>
            {/* CLOSE&OPEN btns */}
            <div onClick={()=>setToggle(true)} className="">
              <div className="open block md:hidden w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-10 h-10 text-white ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
