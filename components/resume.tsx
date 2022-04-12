const Resume = (props) => {
  return (
    <>
      <section className="flex items-center flex-col sm:leading-relaxed">
        <div
          className="p-8 font-sans subpixel-antialiased font-normal
         text-slate-600 sm:w-5/6 justify-center sm:max-w-7xl max-w-full"
        >
          <h2 className="text-3xl text-center font-medium text-ui-navy">
            Resume
          </h2>

          <section>
            <h3 className="text-2xl text-ui-purple font-medium pb-0">
              Career Summary
            </h3>
            <div className="pt-0 pb-1">
              Software Engineer • Lifelong Learner • Web Developer
            </div>
            <ul className="list-inside list-disc">
              <li>
                <b className="text-ui-navy">Motivated and fast learning</b>{" "}
                software developer with experience developing web applications,
                working in teams, and the Software Devleopment Life Cycle
                (SDLC).
              </li>
              <li>
                <b className="text-ui-navy">Strong communicator</b> with a deep
                understanding of team dynamics and what is needed to complete
                projects on time.
              </li>
              <li>
                <b className="text-ui-navy">
                  Dedicated to learning and problem solving.
                </b>{" "}
                Developing and writing code that is outside of my comfort zone
                to learn and grow as a developer
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl text-ui-purple font-medium pt-1">Skills</h3>
            <div>
              JavaScript, Java, React, Python, Node.js, Go, HTML5, CSS, Restful
              web services, Web Development, TailwindCSS, C++, SQL, Git,
              Communication, Agile
            </div>
          </section>

          <section>
            <h3 className="text-2xl pt-2 text-ui-purple font-medium ">
              Education
            </h3>
            <div className="flex flex-col md:flex-row md:gap-3 items-baseline">
              <div className="text-lg font-medium basis-10/12">
                The University of North Carolina at Charlotte
              </div>
              <div className="basis-2/12 text-ui-aqua text-light italic text-lg pb-2 sm:pb-0 text-right">
                2018-Present
              </div>
            </div>
            <div className="sm:indent-8">
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

            <section>
              <h4 className="font-semibold text-ui-pink">Key Projects</h4>
              <ul className="list-disc list-inside">
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
              <h4 className="font-semibold text-ui-pink pt-1">
                Relevant Coursework
              </h4>
              <ul className="list-disc list-inside">
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
            <p className="text-2xl pt-2 text-ui-purple font-medium ">
              Work History
            </p>
            <div className="flex flex-col text-xl font-medium md:flex-row md:gap-3 items-baseline">
              <div className="sm:basis-10/12">
                <span className="underline decoration-ui-aqua">
                  The University of North Carolina at Charlotte,
                </span>
                <span className="font-normal"> Charlotte, NC</span>
              </div>
              <div className="sm:basis-2/12 font-normal text-ui-aqua italic text-lg sm:text-right sm:pb-0 pb-2">
                2021-Present
              </div>
            </div>
            <div className="pt-1">
              Second largest University in North Carolina by enrollment.
              <p>
                In between classes I work at the University gym. I have quickly
                improved my communication skills and found ways the facility can
                better meet patrons needs.
              </p>
              <p className="italic text-ui-navy">Patron Service Assistant</p>
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
