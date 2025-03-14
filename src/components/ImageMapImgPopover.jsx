import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import "./ImageMap.css";
import Img from "./Img";

/**
 * Component that renders an image with popover points.
 *
 * @param {string} imgSrc - URL of the main image.
 * @param {string} imgClassName - CSS classes for styling the main image.
 * @param {Object[]} popovers - Array containing information about the popovers.
 * @param {string} popovers[].imgSrc - URL of the image used in the popover trigger.
 * @param {string} popovers[].width - CSS width for the popover trigger.
 * @param {string} popovers[].position - CSS position for the popover trigger on the image.
 * @param {string|function} popovers[].content - Content of the popover, could be a string or a function returning JSX.
 *
 * @returns React component with the image and its associated popovers.
 */

export default function ImageMapImgPopover({
  imgSrc = "./imgs/core/placeholder.png",
  imgClassName,
  popovers,
}) {
  return (
    <>
      <div className="relative image-map-popover">
        <Img src={imgSrc} className={`${imgClassName}`} />

        {popovers.map((item, key) => (
          <Popover key={key}>
            <PopoverTrigger
              className={`w-[5%] absolute animate-pulseBlink hover:scale-110 transition-all ${item.width} ${item.position}`}
              data-aos="fade-up"
            >
              <Img src={`${item.imgSrc}`} />
            </PopoverTrigger>
            <PopoverContent className="popoverContent">
              {typeof item.content === "function"
                ? item.content()
                : item.content}
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </>
  );
}
