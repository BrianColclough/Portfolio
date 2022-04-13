import TypeScriptSVG from "./svg/TypeScript";

function CurrentlyLearning() {
  return (
    <section className="flex text-ui-text-regular justify-center subpixel-antialiased sm:leading-relaxed">
      <div className="mt-4 bg-white rounded-t-3xl shadow-xl w-5/6 py-2 px-4 sm:max-w-5xl  rounded-2xl">
        <h2 className="text-ui-pink text-start rounded-t-3xl px-4 font-wotfard-500 py-2 text-2xl ">
          Currently Learning
        </h2>
        <div className="flex flex-col md:flex-row text-left justify-items-center font-wotfard-300 sm:text-lg sm:justify-start ">
          <div className="flex items-start flex-col sm:flex-row rounded-lg">
            <div className="flex flex-col items-start sm:pb-4 sm:px-4 sm:pr-4">
              <div>
                Right now I am currently learning{" "}
                <span className="font-wotfard-400-i underline decoration-ui-pink text-ui-navy underline-offset-2">
                  TypeScript
                </span>{" "}
                and transitioning my website over to it.
              </div>
              <div className="sm:basis-1/2">
                My current goal is to expand this website to include projects
                that I have worked on throughout college to highlight my skills
                as a developer. I also want to work on website responsiveness
                and continue working on optimizations for fast load times and
                better SEO.
              </div>
            </div>
          </div>
          <aside>
            <TypeScriptSVG />
          </aside>
        </div>
      </div>
    </section>
  );
}

export default CurrentlyLearning;
