import Image from "next/image";

const Intro = (props) => {
  return (
    <>
      <div className="bg-hero bg-cover bg-fixed flex justify-center">
        <div className="flex sm:h-96 sm:flex-row sm:justify-center items-center p-8 sm:gap-x-20 flex-col max-w-7xl">
          <div className="sm:basis-1/4 h-auto w-40 py-6">
            <Image
              className="rounded-full"
              alt="Concord park"
              src="/assets/Uptown-Dec 03 2021-0188.jpg?webp"
              layout="responsive"
              objectFit="contain"
              objectPosition="50% 50%"
              width="50vw"
              height="50vw"
              priority
            />
          </div>
          <div
            className="bg-white shadow-lg font-sans shadow-amber-600 rounded-2xl text-neutral-700 p-2 
          text-center basis-1/2 font-medium"
          >
            Hello! Im{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Brian Colclough
            </span>
            , an aspiring software engineer and amature photographer! I am
            currently a student at The University of North Carolina at Charlotte
            and I&apos;m expecting to graduate in May 2022. I am activly looking
            for full-time opportunities where I can learn and grow become a
            great developer
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
