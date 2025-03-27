import React from "react";
import ImageMapPopover from "@/components/ImageMapPopover";
import ImageMapImgPopover from "@/components/ImageMapImgPopover";

export default function ImgMapSection() {
  const popovers = [
    {
      position: "top-[45%] left-[30%]",
      content: () => (
        <>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
            malandris se pirulitá. A ordem dos tratores não altera o pão duris.
            Suco de cevadiss deixa as pessoas mais interessantis.
          </p>
        </>
      ),
    },
    {
      position: "top-[30%] left-[50%]",
      content: () => (
        <>
          <h4>Title</h4>
          <p>Mussum Ipsum, cacilds vidis litro abertis.</p>
        </>
      ),
    },
    {
      position: "top-[80%] left-[50%]",
      content: () => (
        <>
          <h4>Title</h4>
          <p>Mussum Ipsum, cacilds vidis litro abertis.</p>
        </>
      ),
    },
  ];

  const popoversImg = [
    {
      imgSrc: "./imgs/sala-01.png",
      width: "w-[5%]",
      position: "top-[32%] left-[30%]",
      content: () => (
        <>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
            malandris se pirulitá. A ordem dos tratores não altera o pão duris.
            Suco de cevadiss deixa as pessoas mais interessantis.
          </p>
        </>
      ),
    },
    {
      imgSrc: "./imgs/sala-04.png",
      width: "w-[7%]",
      position: "top-[55%] left-[55%]",
      content: () => (
        <>
          <h4>Title</h4>
          <p>Mussum Ipsum, cacilds vidis litro abertis.</p>
        </>
      ),
    },
  ];

  return (
    <>
      <div id="img-map" className="py-[80px] bg-gray-50">
        <div className="container--780  text-left">
          <h2>Image Map</h2>
          <h3>Popover</h3>
          <ImageMapPopover imgSrc="./imgs/Quadro.webp" popovers={popovers} />

          <h3 className="mt-10">Popover with Images</h3>
          <ImageMapImgPopover
            imgSrc="./imgs/Quadro.webp"
            popovers={popoversImg}
          />
        </div>
      </div>
    </>
  );
}
