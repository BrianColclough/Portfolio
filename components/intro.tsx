import Image from "next/image";

const Intro = (props) => {
  return (
    <>
      <div className="relative">
        <Image
          layout="fill"
          objectFit="cover"
          className="object-center object-cover pointer-events-none"
          src="/assets/FujiRecipeTesting_Nov 24 2021-0028.webp?jpg"
          alt="Picture of leaves in botanical gardens at UNCC"
          sizes="100vw"
          priority
        />
        <article className="flex z-1 w-full justify-center sm:leading-relaxed">
          <div className="flex sm:h-96 sm:flex-row sm:justify-center items-center p-8 sm:gap-x-20 flex-col max-w-7xl">
            <div className="sm:basis-1/4 h-auto w-40 py-6">
              <Image
                className="rounded-full"
                alt="Headshot of Brian Colclough"
                src="/assets/Uptown-Dec 03 2021-0188.jpg?webp"
                layout="responsive"
                objectFit="contain"
                objectPosition="50% 50%"
                sizes="50vw"
                width="50vw"
                height="50vw"
                priority
              />
            </div>
            <div
              className="bg-white z-10 shadow-lg font-sans shadow-amber-600 rounded-2xl text-neutral-700 p-2 
          text-center basis-1/2 font-medium"
            >
              Hello! Im{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-ui-purple to-ui-blue">
                Brian Colclough
              </span>
              , an aspiring software engineer and amature photographer! I am
              currently a student at The University of North Carolina at
              Charlotte and I&apos;m expecting to graduate in May 2022. I am
              activly looking for full-time opportunities where I can learn and
              grow become a great developer
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Intro;
