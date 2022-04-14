import { useState } from "react";
import Image from "next/image";
import Viewer from "./viewer";

const Picture = (props) => {
  type pictureIsOpen = boolean;

  const [pictureIsOpen, setPictureisOpen] = useState(false);

  function openHandler() {
    document.body.style.overflow = "hidden";
    setPictureisOpen(true);
  }
  function closeHandler() {
    setPictureisOpen(false);
  }
  if (props.height > props.width) {
    return (
      <>
        <div className="basis-full bg-transparent sm:transition sm:hover:scale-105 sm:basis-1/4 shadow-xl hover:shadow-2xl hover:shadow-ui-pink">
          <Image
            className="rounded-lg "
            alt={props.alt}
            src={props.image}
            placeholder="blur"
            blurDataURL={props.image}
            layout="responsive"
            objectFit="contain"
            width={props.width}
            height={props.height}
            onClick={openHandler}
            quality={50}
          />
        </div>
        {pictureIsOpen && <Viewer onClose={closeHandler} image={props.image} />}
      </>
    );
  } else {
    return (
      <>
        <div className="basis-full bg-transparent sm:transition sm:hover:scale-105 sm:basis-1/4 shadow-xl hover:shadow-2xl hover:shadow-ui-pink">
          <Image
            className="rounded-lg "
            alt={props.alt}
            src={props.image}
            placeholder="blur"
            layout="responsive"
            blurDataURL={props.image}
            objectFit="contain"
            width={props.width}
            height={props.height}
            onClick={openHandler}
            quality={50}
          />
        </div>
        {pictureIsOpen && <Viewer onClose={closeHandler} image={props.image} />}
      </>
    );
  }
};

export default Picture;
