import Image from "next/image";
import headshot from "../assets/Uptown-Dec 03 2021-0188.jpg";

const Intro = (props) => {
  return (
    <>
      <div className="bg-hero bg-cover bg-fixed flex justify-center">
        <div className="flex h-96 flex-row justify-center items-center p-8 gap-x-20 max-w-7xl">
          <div className="basis-1/4 h-auto">
            <Image
              className="rounded-full mx-h-60"
              alt="Concord park"
              src={headshot}
              layout="responsive"
              objectFit="contain"
              objectPosition="50% 50%"
              sizes="50vw"
            />
          </div>
          <div
            className="bg-white shadow-lg shadow-amber-600 rounded-2xl text-neutral-700 p-2 
          text-center basis-1/2 font-medium"
          >
            Hello! Im{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Brian Colclough
            </span>
            , an aspiring software engineer! I am currently a student at The
            University of North Carolina at Charlotte and am expecting to
            graduate in May 2022. I am currently looking for internships and or
            other full-time opportunities to grow and learn.
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
