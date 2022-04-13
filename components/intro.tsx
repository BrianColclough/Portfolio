import Image from "next/image";

const Intro = (props) => {
  return (
    <>
      <section className="relative">
        <Image
          layout="fill"
          objectFit="cover"
          className="object-center object-cover pointer-events-none"
          src="/assets/break-Mar 06 2022-0099.jpg?webp"
          alt="Picture of leaves in botanical gardens at UNCC"
          placeholder="blur"
          blurDataURL="/assets/break-Mar 06 2022-0099.jpg?webp"
          sizes="100vw"
          priority
        />
        <article className="font-wotfard-300 flex z-1 w-full justify-center sm:leading-relaxed">
          <div className="flex sm:h-96 sm:flex-row sm:justify-center items-center p-8 sm:gap-x-20 flex-col max-w-5xl">
            <div className="sm:basis-1/4 h-auto w-40 py-6">
              <Image
                className="rounded-full"
                alt="Headshot of Brian Colclough"
                src="/assets/Uptown-Dec 03 2021-0188.jpg?webp"
                layout="responsive"
                placeholder="blur"
                blurDataURL="/assets/Uptown-Dec 03 2021-0188.jpg?webp"
                objectFit="contain"
                objectPosition="50% 50%"
                sizes="50vw"
                width="50vw"
                height="50vw"
                priority
              />
            </div>
            <div
              className="bg-ui-white z-10 shadow-lg rounded-2xl text-ui-text-regular sm:text-lg p-2 
          text-center basis-1/2 font-medium"
            >
              Hello! Im{" "}
              <span className=" font-wotfard-400 bg-clip-text text-transparent bg-gradient-to-r from-ui-pink to-ui-purple">
                Brian Colclough
              </span>
              , an aspiring software engineer and amateur photographer! I am
              currently a student at The University of North Carolina at
              Charlotte and I&apos;m expecting to graduate in May 2022. I am
              actively looking for full-time opportunities where I can learn and
              grow become a great developer
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Intro;
