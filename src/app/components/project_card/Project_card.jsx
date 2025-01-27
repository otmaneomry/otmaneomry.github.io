

const Project_card = ({index, img, langs, title, disc}) => {
  return (
      <div key={`project-${index}`} className="border mx-auto w-full md:w-[48%] lg:w-[30%] border-[#ABB2BF] p-0">
        {/* img */}
        <div className="">
          <img className=" w-full" src={img} alt={title}/>
        </div>
        {/* skills */}
        <div className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF]">
          {langs.map((e, i) => {
            return <span key={`projectspan-${i}`} className=" text-[#ABB2BF]">{e}</span>;
          })}
        </div>
        {/* disc */}
        <div className=" p-4">
          <h2 className="text-[#FFFFFF] text-2xl font-medium">{title}</h2>
          <p className=" py-4 text-[#ABB2BF]">{disc}</p>
          {/* btns */}
          <div className="">
            <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
              Live {"<"}~{">"}
            </button>
          </div>
        </div>
      </div>
  );
};

export default Project_card;
