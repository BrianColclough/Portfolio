const Resume = (props) => {
  return (
    <>
      <div className="flex items-center flex-col ">
        <div
          className="p-8 font-sans subpixel-antialiased font-normal
         text-slate-500 w-5/6 justify-center max-w-7xl"
        >
          <p className="text-3xl text-center font-medium">Resume</p>

          <div>
            <div className="text-2xl text-purple-400 font-medium pb-0">
              Career Summary
            </div>
            <div className="pt-0 pb-1">
              Software Engineer • Lifelong Learner • Web Developer
            </div>
            <ul className="list-inside list-disc">
              <li>
                <b className="text-neutral-700">Motivated and fast learning</b>{" "}
                software developer with experience developing web applications,
                working in teams, and the Software Devleopment Life Cycle
                (SDLC).
              </li>
              <li>
                <b className="text-neutral-700">Strong communicator</b> with a
                deep understanding of team dynamics and what is needed to
                complete projects on time.
              </li>
              <li>
                <b className="text-neutral-700">
                  Dedicated to learning and problem solving.
                </b>{" "}
                Developing and writing code that is outside of my comfort zone
                to learn and grow as a developer
              </li>
            </ul>
          </div>

          <div>
            <div className="text-2xl text-purple-400 font-medium pt-1">
              Skills
            </div>
            <div>
              JavaScript, Java, React, Python, Node.js, HTML5, CSS, Restful web
              services, Web Development, TailwindCSS, C++, SQL, Git,
              Communication, Agile
            </div>
          </div>

          <div>
            <p className="text-2xl pt-2 text-purple-400 font-medium ">
              Education
            </p>
            <div className="flex flex-col sm:flex-row sm:gap-3 items-baseline">
              <div className="text-lg font-medium basis-10/12">
                The University of North Carolina at Charlotte
              </div>
              <div className="basis-2/12 text-purple-400 text-light italic text-lg pb-2 sm:pb-0 text-right">
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

            <div>
              <div className="font-semibold text-purple-400">Key Projects</div>
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
            </div>

            <div>
              <div className="font-semibold text-purple-400 pt-1">
                Relevant Coursework
              </div>
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
            </div>
          </div>

          <div>
            <p className="text-2xl pt-2 text-purple-400 font-medium ">
              Work History
            </p>
            <div className="flex text-xl font-medium items-baseline">
              <div className="basis-10/12">
                <span className="underline">
                  The University of North Carolina at Charlotte,
                </span>
                <span className="font-normal"> Charlotte, NC</span>
              </div>
              <div className="basis-2/12 font-normal text-purple-400 italic text-lg text-right">
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
              <p className="italic text-neutral-700 font-medium">
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
      </div>
    </>
  );
};

export default Resume;
