import TypeScriptSVG from "./svg/TypeScript";

function CurrentlyLearning() {
  return (
    <>
      <div className="flex justify-center subpixel-antialiased sm:leading-relaxed">
        <div className=" mx-2 mt-4 max-w-5xl rounded-2xl shadow-xl">
          <div className="text-slate-800 bg-ui-blue rounded-t-2xl font-sans py-2 text-xl text-center underline decoration-ui-pink underline-offset-2">
            Currently Learning
          </div>
          <div className="flex text-center justify-items-center sm:text-left sm:justify-center sm:items-center py-1">
            <div className="flex sm:w-5/6 md:max-w-5xl  px-8 justify-center flex-col sm:flex-row sm:items-center rounded-lg">
              <div className="flex flex-col sm:pr-4">
                <div className="font-normal">
                  <div>
                    Right now I am currently learning{" "}
                    <span className="italic underline decoration-ui-pink underline-offset-2">
                      TypeScript
                    </span>{" "}
                    and transitioning my website over to it.
                  </div>
                  <div className="sm:basis-1/2">
                    My current goal is to expand this website to include
                    projects that I have worked on throughout college to
                    highlight my skills as a developer. I also want to work on
                    website responsiveness and continue working on optimizations
                    for fast load times and better SEO.
                  </div>
                </div>
              </div>
              <TypeScriptSVG />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentlyLearning;
