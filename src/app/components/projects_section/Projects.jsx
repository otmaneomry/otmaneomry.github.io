import Project_card from "../project_card/Project_card";
import first from "public/assets/images/company-zabaqist.png";
import second from "public/assets/images/company-ompharma.png";
import third from "public/assets/images/company-basf.png";

const Projects = () => {
  // date
  const projects = [
    {
      img: first,
      langs: ["Node.js", "Next.js", "React.js", "Typescript", "Tailwind css"],
      title: "Zabaqist",
      disc: "e-learning platforme for students and teachers",
    },
    {
      img: second,
      langs: ["Laravel", "React Native", "React"],
      title: "Om Pharma",
      disc: "Quiz app for users to test their knowledge about medicine",
    },
    {
      img: third,
      langs: ["Laravel", "React Native", "React"],
      title: "BASF Morocco",
      disc: "platforme ecomerce for users to buy products from basf",
    },
  ];

  return (
      <>
        <div id="work" className="px-5 max-w-[1560px] mx-auto mt-10">
          {/* top */}
          <div className="flex items-center justify-between gap-5 ">
            {/* left */}
            <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
              <div className="">
                <span className="text-[#C778DD]">#</span>projects
              </div>
              <div className="line w-2/3 h-px bg-[#C778DD]"></div>
            </div>
            {/* right */}
            <div className="font-medium text-white ">
              <a href="">
                <span>View all ~~&gt;</span>
              </a>
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-wrap justify-between gap-4 my-12">
            {/* cards */}
            {projects.map(({img, langs, title, disc}, index) => {
              return (
                  <Project_card
                      key={`homeproject-${index}`}
                      index={index}
                      img={img.src}
                      langs={langs}
                      title={title}
                      disc={disc}
                  />
              );
            })}
          </div>
        </div>
      </>
  );
};

export default Projects;
