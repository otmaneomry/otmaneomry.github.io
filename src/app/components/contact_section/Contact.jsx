import Mail from "@/app/components/svg/mail";
import Link from "next/link";
import Github from "@/app/components/svg/github";

const Contact = () => {
  return (
      <>
        <div id="contacts" className="px-5 max-w-[1560px] mx-auto mt-10 py-10">
          {/* top */}
          <div className="">
            {/* header */}
            <div className="mb-4 ">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#C778DD]">#</span>contacts
                </div>
                <div className="line w-1/3 h-px bg-[#C778DD]"></div>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-wrap items-start justify-between gap-10 ">
            {/* left */}
            <div className="w-full left md:w-1/2">
              <p className=" text-[#ABB2BF]">
                I’m interested in freelance opportunities. However, if you have
                other request or question, don’t hesitate to contact me
              </p>
            </div>
            {/* right */}
            <div className="mx-auto w-full md:w-1/3">
              {/* box */}
              <div className="border border-[#ABB2BF] p-4">
                <h2 className="mb-4 font-semibold text-white ">
                  Message me here
                </h2>
                {/* get in touch */}
                <div className="flex flex-col gap-2">
                  {/* links */}
                  <Link href="mailto:omry.otmane@gmail.com" className="flex items-center gap-1" alt="mail of otmane omry">
                    <Mail/>
                    <span className="text-[#ABB2BF]">omry.otmane@gmail.com</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Contact;
