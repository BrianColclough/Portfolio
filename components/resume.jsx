const Resume = (props) => {
  return (
    <>
      <div className="flex items-center flex-col ">
        <div
          className="p-8 font-sans subpixel-antialiased font-normal
         text-slate-500 w-5/6 justify-center"
        >
          <p className="text-2xl text-center font-medium">Resume</p>

          <p className="text-xl text-purple-400 font-medium pb-1">Education</p>

          <div className="flex flex-row italic gap-3 items-baseline">
            <div className="text-lg font-medium">
              University of North Carolina at Charlotte
            </div>
            <div className="text-light text-base">2018-2022</div>
          </div>
          <div className="indent-8">
            Bachelor's of Science in Computer Science with a concentration in
            Software Engineering
          </div>

          <p className="text-xl text-purple-400 font-medium">Skills</p>
          <p>nothing</p>
          <p className="text-xl text-purple-400 font-medium">Awards</p>
          <p>nothing</p>
        </div>
      </div>
    </>
  );
};

export default Resume;
