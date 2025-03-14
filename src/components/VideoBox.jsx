import React from "react";
import Img from "./Img";

export default function VideoBox({
  url,
  imgSrc = "./imgs/core/placeholder.png",
  imgClassName,
}) {
  return (
    <>
      <a href={url} className="relative block cursor-pointer">
        <Img src={imgSrc} className={`${imgClassName}`} />
        <div className="bg-indigo-500 px-8 py-5 animate-pulseBlink absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all hover:scale-110">
          PLAY
        </div>
      </a>
    </>
  );
}
