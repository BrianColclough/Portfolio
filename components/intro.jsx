import Image from "next/image";
import headshot from "../assets/Uptown-Dec 03 2021-0188.jpg";

const Intro = (props) => {
  return (
    <>
      <div className="bg-hero bg-cover bg-fixed flex justify-center ">
        <div className="flex h-96 flex-row items-center p-8 gap-x-40 max-w-7xl">
          <div className="basis-1/4">
            <Image
              className="rounded-full max-h-60"
              alt="Concord park"
              src={headshot}
              layout="responsive"
              objectFit="contain"
              objectPosition="50% 50%"
              sizes="50vw"
            />
          </div>
          <div
            className="backdrop-blur-md rounded-full p-2 text-slate-200 
          text-center basis-1/2 font-medium"
          >
            Hello! Im Brian Colclough, an aspiring software engineer! I am
            currently a student at The University of North Carolina at Charlotte
            and am expecting to graduate in May 2022. I am currently looking for
            internships and or other full-time opportunities to grow and learn.
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
