import React from "react";
import Img from "./Img";

export default function BoxAttention({
  boxClass = "bg-indigo-600", // Cor de fundo padrão
  imgSrc,
  imgClass = "w-full max-w-[30%] sm:mr-6 object-cover rounded-md",
  contentClass = "text-white",
  children,
}) {
  return (
    <div
      className={`flex items-start sm:items-center flex-col sm:flex-row rounded-lg p-6 my-10 bg-indigo-600 ${boxClass}`}
    >
      {imgSrc && <Img src={imgSrc} className={imgClass} />}

      <div className={`w-full ${contentClass}`}>{children}</div>
    </div>
  );
}
