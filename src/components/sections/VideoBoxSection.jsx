import React from "react";
import VideoBox from "@/components/VideoBox";

export default function VideoBoxSection() {
  return (
    <>
      <div id="video-box" className="py-[80px] bg-gray-50">
        <div className="container--780  text-left">
          <h2>Video Box</h2>
          <VideoBox />
        </div>
      </div>
    </>
  );
}
