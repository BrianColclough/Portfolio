import React, { Fragment, useState } from "react";
import Picture from "./picture";

const PictureViewer = (props) => {
  return (
    <>
      <div className="flex flex-col sm:px-8 sm:py-0 sm:flex-row sm:flex-wrap gap-8 sm:items-center sm:justify-center py-2 px-2">
        <Picture
          image="/assets/ConcordParkNov 12 2021-0163.jpg"
          href={"picture of leaves in a park in corcord"}
        />
        <Picture
          image="/assets/ConcordParkNov 12 2021-0185.jpg"
          alt={"picture of music shop"}
        />
        <Picture
          image="/assets/ConcordParkNov 12 2021-0164.jpg"
          alt={"picture of park house"}
        />
        <Picture
          image="/assets/Xmas-Dec 24 2021-0041.jpg"
          alt={"picture of pit bull eating"}
        />
        <Picture
          image="/assets/bwalk-Feb 01 2022-0010.jpg"
          alt={"picture of girl walking on boardwalk"}
        />
        <Picture
          image="/assets/FujiRecipeTesting_Nov 24 2021-0033.jpg"
          alt={"Leaves at UNCC botanical garden"}
        />
        <Picture
          image="/assets/ConcordParkNov 12 2021-0111.jpg"
          alt={"picture of plant in concord park"}
        />
        <Picture
          image="/assets/CampusWalkDiffusion0005Nov 07 2021.jpg"
          alt={"parking deck at uncc"}
        />
        <Picture
          image="/assets/FujiRecipeTesting_Nov 24 2021-0013.jpg"
          alt={"Picture from UnCC botanical gardens"}
        />
        <Picture
          image="/assets/ConcordParkNov 12 2021-0182.jpg"
          alt={"Portrait in Concord"}
        />
      </div>
    </>
  );
};

export default PictureViewer;
