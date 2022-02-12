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
import Picture from "./picture";

const PictureViewer = (props) => {
  return (
    <>
      <Grid>
        <Picture
          image={concordPic}
          href={"picture of leaves in a park in corcord"}
        />
        <Picture image={concordPic1} alt={"picture of music shop"} />
        <Picture image={concordPic2} alt={"picture of park house"} />
        <Picture image={christmas} alt={"picture of pit bull eating"} />
        <Picture
          image={boardwalk}
          alt={"picture of girl walking on boardwalk"}
        />
        <Picture image={leaves} alt={"Leaves at UNCC botanical garden"} />
        <Picture image={plant} alt={"picture of plant in concord park"} />
        <Picture image={parkingDeck} alt={"parking deck at uncc"} />
        <Picture image={plant1} alt={"Picture from UnCC botanical gardens"} />
        <Picture image={portrait} alt={"Portrait in Concord"} />
      </Grid>
    </>
  );
};

export default PictureViewer;
