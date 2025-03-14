import React from "react";

export default function Img({ className, isCircle, ...props }) {
  return (
    <>
      <img
        className={`w-full object-cover object-center ${
          isCircle && "aspect-square rounded-full"
        } ${className}`}
        alt="Imagem"
        loading="lazy"
        {...props}
      />
    </>
  );
}
