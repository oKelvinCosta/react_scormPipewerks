import React from "react";
import Img from "@/components/Img";

export default function GridSection() {
  return (
    <>
      <div id="grid" className="py-[80px] bg-indigo-500">
        <div className="container--780">
          <div className="grid md:grid-cols-12 gap-6 mt-10 items-center">
            <div className="md:col-span-3">
              <Img
                src={`./imgs/kelvin-costa-boards-temple-1.jpg`}
                isCircle={true}
                className={"max-w-[250px] md:max-w-[150px]"}
              />
            </div>
            <div className="md:col-span-9">
              <h4>title</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-10 items-center">
            <div>
              <Img src="./imgs/core/placeholder.png" />
            </div>
            <div>
              <h4>title</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
