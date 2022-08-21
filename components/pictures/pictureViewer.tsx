import React from "react";
import { Pictures } from "./pictureArr";

const PictureViewer = () => {
  return (
    <>
      <section className="flex  items-center flex-col sm:leading-relaxed font-wotfard-300 pt-4">
        <div
          className="font-sans subpixel-antialiased font-normal
                    text-ui-text-regular sm:w-5/6 justify-center sm:max-w-5xl max-w-full"
        >
          <div className="flex flex-row flex-wrap justify-center gap-4">
            {Pictures.map((item) => (
              <React.Fragment key={item.id}>
                <div className="basis-full h-fit w-fit flex flex-row items-center justify-center mx-2 sm:mx-0">
                  <img src={item.path} className="rounded-lg max-h-screen" alt="{item.description}"/>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PictureViewer;
