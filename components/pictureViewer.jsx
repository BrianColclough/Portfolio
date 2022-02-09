import Image from "next/image";
import concordPic from "../assets/ConcordParkNov 12 2021-0163.jpg";
import concordPic1 from "../assets/ConcordParkNov 12 2021-0185.jpg";
import concordPic2 from "../assets/ConcordParkNov 12 2021-0164.jpg";
import christmas from "../assets/Xmas-Dec 24 2021-0041.jpg";
import boardwalk from "../assets/bwalk-Feb 01 2022-0010.jpg";
import leaves from "../assets/FujiRecipeTesting_Nov 24 2021-0033.jpg";
import plant from "../assets/ConcordParkNov 12 2021-0111.jpg";
import parkingDeck from "../assets/CampusWalkDiffusion0005Nov 07 2021.jpg";
import plant1 from "../assets/FujiRecipeTesting_Nov 24 2021-0013.jpg";
import portrait from "../assets/ConcordParkNov 12 2021-0182.jpg";
import React, { Fragment, useState } from "react";
import SinglePicture from "./singlePicture";
import Grid from "./pictures/grid";

const imageList = [
  { image: concordPic, id: 1 },
  { image: concordPic1, id: 2 },
  { image: concordPic2, id: 3 },
  { image: christmas, id: 4 },
  { image: boardwalk, id: 5 },
  { image: leaves, id: 6 },
  { image: plant, id: 7 },
  { image: parkingDeck, id: 8 },
  { image: plant1, id: 9 },
  { image: portrait, id: 10 },
];

const pictureviewer = (props) => {
  //   const [pictureisopen, setpictureisopen] = usestate(false);

  //   function openhandler() {
  //     setpictureisopen(true);
  //   }
  //   function closehandler() {
  //     setpictureisopen(false);
  //   }

  return (
    <>
      <Grid>
        {imageList.map((images) => (
          <React.Fragment key={images}>
            <div className="basis-1/4 shadow-xl hover:shadow-2xl hover:shadow-purple-300">
              <Image
                className="rounded-lg"
                alt="Concord park"
                src={imageList.image}
                layout="responsive"
                objectFit="contain"
                onClick={openHandler}
              />
            </div>
            {pictureIsOpen && (
              <SinglePicture
                onClose={closeHandler}
                image={imageList[1].image}
              />
            )}
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
};

export default PictureViewer;
