const Resume = (props) => {
  return (
    <>
      <section className="flex  items-center flex-col sm:leading-relaxed font-wotfard-300">
        <div
          className="p-8 font-sans subpixel-antialiased font-normal
         text-ui-text-regular sm:w-5/6 justify-center sm:max-w-5xl max-w-full"
        >
          <h2 className="text-xl mb-4 mt-6 text-center font-wotfard-300 uppercase tracking-wider sm:mb-16 sm: mt-20 text-ui-pink">
            RESUME
          </h2>

          <section className="font-wotfard-300">
            <h3 className="text-3xl text-ui-purple pb-0 font-wotfard-400">
              Career Summary
            </h3>
            <div className="pt-0 pb-1 text-ui-gray mb-5">
              Software Engineer • Lifelong Learner • Web Developer
            </div>
            <ul className="list-inside sm:text-lg list-disc mb-7">
              <li>
                <span className="font-wotfard-500 text-ui-text-darker">
                  Motivated and fast learning
                </span>{" "}
                software developer with experience developing web applications,
                working in teams, and the Software Development Life Cycle
                (SDLC).
              </li>
              <li>
                <span className="font-wotfard-500 text-ui-text-darker">
                  Strong communicator
                </span>{" "}
                with a deep understanding of team dynamics and what is needed to
                complete projects on time.
              </li>
              <li>
                <span className="font-wotfard-500 text-ui-text-darker">
                  Dedicated to learning and problem solving.
                </span>{" "}
                Developing and writing code that is outside of my comfort zone
                to learn and grow as a developer
              </li>
            </ul>
          </section>

          <section className="font-wotfard-300 mb-7">
            <h3 className="text-3xl text-ui-purple font-wotfard-400 pt-1">
              Skills
            </h3>
            <div>
              JavaScript, Java, React, Python, Node.js, TypeScript, HTML5, CSS,
              Restful web services, Web Development, TailwindCSS, SQL, Git,
              Communication, Agile
            </div>
          </section>

          <section className="mb-7">
            <h3 className="text-3xl pt-2 text-ui-purple font-wotfard-400 ">
              Education
            </h3>
            <div className="flex flex-col sm:text-lg md:flex-row md:gap-3 items-baseline">
              <div className="text-lg text-ui-text-darker font-medium basis-10/12">
                The University of North Carolina at Charlotte
              </div>
              <div className="basis-2/12 text-ui-gray font-wotfard-300-i text-lg pb-2 sm:pb-0 text-right">
                2018-Present
              </div>
            </div>
            <div className="sm:indent-8 sm:text-lg">
              <p>
                Bachelor&apos;s of Science in Computer Science, Software
                Engineering Concentration
              </p>
              <p>Minor in Environmental Science</p>
              <p>
                Overall GPA: <b>3.8</b> | Software Engineering GPA: <b>3.9</b>
              </p>
              <ul className="list-disc list-inside">
                <li className="pl-3">
                  Degree in progress; expected graduation May 2022
                </li>
                <li className="pl-3">
                  The University of North Carolina at Charlotte Dean&apos;s List
                  (Fall 2019, Fall 2019, Spring 2021)
                </li>
                <li className="pl-3">
                  The University of North Carolina at Charlotte
                  Chancellor&apos;s List (Spring 2019, Fall 2020, Fall 2021)
                </li>
              </ul>
            </div>

            <section className="mb-7">
              <h4 className="font-wotfard-400-i text-ui-text-darker">
                Key Projects
              </h4>
              <ul className="list-disc list-inside sm:text-lg">
                <li className="pl-3">
                  Meetup application built on Node.js, Express, and MongoDB
                </li>
                <li className="pl-3">
                  This personal website built with Next.js, React, and
                  TailwindCSS
                </li>
                <li className="pl-3">
                  Currently building movie search application for my capstone
                  course using API&apos;s
                </li>
              </ul>
            </section>

            <section>
              <h4 className="font-wotfard-400-i sm:text-lg text-ui-text-darker pt-1">
                Relevant Coursework
              </h4>
              <ul className="list-disc list-inside sm:text-lg">
                <li className="pl-3">Software Engineering</li>
                <li className="pl-3">
                  Web-based Application Design and Development
                </li>
                <li className="pl-3">
                  Introduction to Software Testing and Assurance
                </li>
                <li className="pl-3">Database Design and Implementation</li>
                <li className="pl-3">
                  Secure Programming and Penetration Testing
                </li>
              </ul>
            </section>
          </section>

          <div>
            <p className="text-3xl pt-2 text-ui-purple font-wotfard-400 ">
              Work History
            </p>
            <div className="flex flex-col text-xl font-medium md:flex-row md:gap-3 items-baseline">
              <div className="sm:basis-10/12">
                <span className="underline decoration-ui-aqua">
                  The University of North Carolina at Charlotte,
                </span>
                <span className="font-normal"> Charlotte, NC</span>
              </div>
              <div className="sm:basis-2/12 font-wotfard-300-i text-ui-gray text-lg sm:text-right sm:pb-0 pb-2 sm:text-lg">
                2021-Present
              </div>
            </div>
            <div className="pt-1 sm:text-lg">
              Second largest University in North Carolina by enrollment.
              <p>
                In between classes I work at the University gym. I have quickly
                improved my communication skills and found ways the facility can
                better meet patrons needs.
              </p>
              <p className="font-wotfard-400-i text-ui-navy">
                Patron Service Assistant
              </p>
              <ul className="list-disc list-inside">
                <li className="pl-3">
                  Interact with patrons for knowledge on how the facility can be
                  better utilized and improved.
                </li>
                <li className="pl-3">
                  Communicate with supervisors about the state of the facility.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
