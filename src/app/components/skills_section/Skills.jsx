import Mandelbrot from "@/app/components/svg/mandelbrot";
import React from "react";

const Skills = () => {
  const skills = [
    {title : "Operating system", languages : ["Linux", "macOS", "Windows"]},
    {title: "Development languages", languages: ["JAVA", "C", "C++", "PHP", "Python", "Node.js"]},
    {title: "Mobile development", languages: ["Android", "Kotlin", "React native", "Ionic", "Unity"]},
    {title: "Web", languages: ["Vue.js 3", "Vue.js 2", "NuxtJS", "React", "Semantic Web"]},
    {title: "Frameworks", languages: ["Laravel", "Express.js", "AdonisJS", "Angular"]},
    {title: "Analysis and Design", languages: ["UML", "Merise", "MDA", "Design Patterns"]},
    {title: "ERP", languages: ["Open ERP", "Odoo"]},
    {title: "Web Service", languages: ["SOAP", "REST", "GrapheQL"]},
    {title: "Versioning", languages: ["GIT", "GitHub", "GitLab", "Bitbucket"]},
    {title: "CI/CD", languages: ["GitLab", "Jenkins", "Docker", "Ansible", "Talend", "Apache Maven"]},
    {title: "PaaS", languages: ["Amazon", "Azure", "Google C"]},
  ];
  return (
      <>
        <div className="px-5 max-w-[1560px] mx-auto mt-10 py-10">
          {/* top */}
          <div className="mb-4 ">
            <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
              <div className="">
                <span className="text-[#C778DD]">#</span>skills
              </div>
              <div className="line w-1/3 h-px bg-[#C778DD]"></div>
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-wrap items-center justify-between gap-10 text-white ">
            {/* left */}
            <div className="mx-auto">
              <Mandelbrot />
            </div>
            {/* right & mapping */}
            <div className="flex flex-wrap justify-around w-full gap-4 mx-auto  md:justify-end md:w-1/2">
              {skills.map(({title, languages}, index) => {
                return (
                    <div key={`skills-${index}`} className="w-full sm:w-[45%] lg:w-[30%] border border-[#ABB2BF]">
                      <div className="p-2">
                        <h2 className="font-semibold ">{title}</h2>
                      </div>
                      <div className=" flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]">
                        {languages.map((e, i) => {
                          return <span key={`skillsspan-${i}`}>{e}</span>;
                        })}
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
  );
};

export default Skills;
