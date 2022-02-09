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
import Grid from "./pictures/grid";

const imageList = [
  { image: concordPic },
  { image: concordPic1 },
  { image: concordPic2 },
  { image: christmas },
  { image: boardwalk },
  { image: leaves },
  { image: plant },
  { image: parkingDeck },
  { image: plant1 },
  { image: portrait },
];

const PictureViewer = (props) => {
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
                src={images.image}
                layout="responsive"
                objectFit="contain"
                // onClick={openHandler}
              />
            </div>
            {/* {pictureIsOpen && (
              <SinglePicture
                onClose={closeHandler}
                image={imageList[1].image}
              />
            )} */}
          </React.Fragment>
        ))}
      </Grid>
    </>
  );
};

export default PictureViewer;
