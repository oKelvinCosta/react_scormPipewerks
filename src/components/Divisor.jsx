import React from "react";
import Img from "./Img";

/**
 * Componente para criar um divisor de sess o no layout.
 *
 * @prop {string} [space="mtop"]  - Tipo de espaçamento do divisor. Aceita "mtop" ou "mbot".
 * @prop {string} src - URL da imagem do divisor.
 * @returns Uma imagem de divisor.
 */
export default function Divisor({ space = "mtop", src }) {
  const spaceType = space === "mtop" ? true : false;

  return (
    <>
      <div
        className={`overflow-hidden ${spaceType ? "mt-[80px]" : "mb-[80px]"}`}
        style={{ lineHeight: 0 }}
      >
        <Img
          src={`${src}`}
          className={`w-auto sm:w-full${spaceType ? "-mb-[3px]" : "-mt-[3px]"}`}
          alt="Imagem de divisão"
        />
      </div>
    </>
  );
}
