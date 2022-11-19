function CurrentlyLearning() {
  return (
    <section className="flex text-ui-text-regular justify-center subpixel-antialiased sm:leading-relaxed">
      <div className="mt-4 bg-white rounded-t-3xl shadow-xl w-5/6 py-2 px-4 sm:max-w-5xl  rounded-2xl">
        <h2 className="text-ui-pink uppercase tracking-wider text-center sm:text-start rounded-t-3xl px-4 font-wotfard-300 py-2 my-5 text-xl ">
          Currently Learning
        </h2>
        <div className="flex flex-col md:flex-row text-left justify-items-center font-wotfard-300 sm:text-lg sm:justify-start ">
          <div className="flex items-start flex-col sm:flex-row rounded-lg">
            <div className="flex flex-col items-start sm:pb-4 sm:px-4 sm:pr-4">
              <div>
                Right now I am currently learning{" "}
                <span className="font-wotfard-400-i text-ui-bright-blue ">
                  React
                </span>{" "}
                which is funny because this website is built on React, but I feel I
                have so much more to learn
              </div>
              <div className="sm:basis-1/2">
                I am going to transition this website over to a blog where I
                write about different topics that might not always be
                programming related. I&apos;m interested in lots of things and I
                think when I learn about something new I want to try to help
                others who might have the same difficulties I did.
              </div>
            </div>
          </div>
          <div>
            <img
              src="/icons/React-icon.svg"
              alt="react icon"
              className="w-72 pr-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentlyLearning;