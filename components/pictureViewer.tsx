import React, { Fragment, useState } from "react";
import Picture from "./picture";

const PictureViewer = (props) => {
  return (
    <>
      <section className="flex flex-col sm:px-8 sm:py-0 sm:flex-row sm:flex-wrap gap-8 sm:items-center sm:justify-center py-2 px-2">
        <Picture
          image="/assets/ConcordParkNov 12 2021-0163.webp"
          href={"picture of leaves in a park in corcord"}
          height={200}
          width={300}
        />
        <Picture
          image="/assets/ConcordParkNov 12 2021-0185.webp"
          alt={"picture of music shop"}
          height={200}
          width={300}
        />
        <Picture
          image="/assets/ConcordParkNov 12 2021-0164.webp"
          alt={"picture of park house"}
          height={200}
          width={300}
        />
        <Picture
          image="/assets/Xmas-Dec 24 2021-0041.webp"
          alt={"picture of pit bull eating"}
          height={300}
          width={200}
        />
        <Picture
          image="/assets/bwalk-Feb 01 2022-0010.webp"
          alt={"picture of girl walking on boardwalk"}
          height={300}
          width={200}
        />
        <Picture
          image="/assets/FujiRecipeTesting_Nov 24 2021-0033.webp"
          alt={"Leaves at UNCC botanical garden"}
          height={200}
          width={300}
        />
        <Picture
          image="/assets/ConcordParkNov 12 2021-0111.webp"
          alt={"picture of plant in concord park"}
          height={300}
          width={200}
        />
        <Picture
          image="/assets/CampusWalkDiffusion0005Nov 07 2021.webp"
          alt={"parking deck at uncc"}
          height={300}
          width={200}
        />
        <Picture
          image="/assets/FujiRecipeTesting_Nov 24 2021-0013.webp"
          alt={"Picture from UnCC botanical gardens"}
          height={300}
          width={200}
        />
        <Picture
          image="/assets/ConcordParkNov 12 2021-0182.webp"
          alt={"Portrait in Concord"}
          height={200}
          width={300}
        />
        <Picture
          image="/assets/springBreak01.webp"
          alt={"Portrait in Concord"}
          height={300}
          width={200}
        />
        <Picture
          image="/assets/springBreak02.webp"
          alt={"Portrait in Concord"}
          height={300}
          width={200}
        />
        <Picture
          image="/assets/springBreak03.webp"
          alt={"Portrait in Concord"}
          height={200}
          width={300}
        />
        <Picture
          image="/assets/springBreak04.webp"
          alt={"Portrait in Concord"}
          height={200}
          width={300}
        />
      </section>
    </>
  );
};

export default PictureViewer;
