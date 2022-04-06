import { useState } from "react";
import Image from "next/image";
import Viewer from "./viewer";

const Picture = (props) => {
  const [pictureIsOpen, setPictureisOpen] = useState(false);

  function openHandler() {
    document.body.style.overflow = "hidden";
    setPictureisOpen(true);
  }
  function closeHandler() {
    setPictureisOpen(false);
  }

  return (
    <>
      <div className="basis-full sm:transition sm:hover:scale-105 sm:basis-1/4 shadow-xl hover:shadow-2xl hover:shadow-purple-300">
        <Image
          className="rounded-lg"
          alt={props.alt}
          src={props.image}
          layout="responsive"
          objectFit="contain"
          width="300px"
          height="300px"
          onClick={openHandler}
        />
      </div>
      {pictureIsOpen && <Viewer onClose={closeHandler} image={props.image} />}
    </>
  );
};

export default Picture;
