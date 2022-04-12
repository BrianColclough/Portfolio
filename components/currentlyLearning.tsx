import TypeScriptSVG from "./svg/TypeScript";

function CurrentlyLearning() {
  return (
    <section className="flex justify-center subpixel-antialiased sm:leading-relaxed">
      <div className="mx-2 mt-4 md:px-2 rounded-2xl">
        <div className="flex  flex-col sm:flex-col sm:w-5/6 px-8 sm:max-w-7xl text-center justify-items-center sm:text-left font-wotfard-300 sm:justify-start ">
          <h2 className="text-ui-pink text-start rounded-t-3xl font-wotfard-400 pt-2 text-2xl ">
            Currently Learning
          </h2>
          <div className="flex px-8 sm:px-0 justify-start flex-col sm:flex-row sm:items-center rounded-lg">
            <div className="flex flex-col sm:pr-4">
              <div className="font-sans">
                <div>
                  Right now I am currently learning{" "}
                  <span className="font-wotfard-400-i underline decoration-ui-pink text-ui-navy underline-offset-2">
                    TypeScript
                  </span>{" "}
                  and transitioning my website over to it.
                </div>
                <div className="sm:basis-1/2">
                  My current goal is to expand this website to include projects
                  that I have worked on throughout college to highlight my
                  skills as a developer. I also want to work on website
                  responsiveness and continue working on optimizations for fast
                  load times and better SEO.
                </div>
              </div>
            </div>
            <aside>
              <TypeScriptSVG />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentlyLearning;
