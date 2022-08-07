import Image from "next/image";

const Intro = (props: any) => {
  return (
    <>
      <section className="relative">
        <Image
          layout="fill"
          objectFit="cover"
          className="object-center object-cover pointer-events-none"
          src="/assets/break-Mar 06 2022-0099.webp"
          alt="Picture of leaves in botanical gardens at UNCC"
          placeholder="blur"
          blurDataURL="/assets/break-Mar 06 2022-0099.webp"
          sizes="100vw"
          priority
        />
        <article className="font-wotfard-300 flex z-1 w-full justify-center sm:leading-relaxed">
          <div className="flex sm:h-96 sm:flex-row sm:justify-center items-center p-8 sm:gap-x-20 flex-col max-w-5xl">
            <div className="sm:basis-1/4 h-auto w-40 py-6">
              <Image
                className="rounded-full z-10"
                alt="Headshot of Brian Colclough"
                src="/assets/headshot.webp"
                layout="responsive"
                placeholder="blur"
                blurDataURL="/assets/headshot.webp"
                objectFit="scale-down"
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
              , an entry level software engineer. Right now, im currently interested
              in web development and am working to turn my website into a personal blog/space
              where I can share the pictures I take as well as stories from places and things I 
              do. Down the line when I have more knowledge about programming and software
              engineering I hope to share that knowledge too.
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Intro;
