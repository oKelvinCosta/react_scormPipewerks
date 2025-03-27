import React from "react";
import BoxAttention from "@/components/BoxAttention";
import Img from "@/components/Img";

export default function BoxAttentionSection() {
  return (
    <>
      <div id="box-attention" className="py-[80px]">
        <div className="container--780  text-left">
          <h2>Box Attention</h2>

          <BoxAttention
            boxClass="bg-primary"
            contentClass="text-center text-white"
          >
            <h4>Teste do Kelvin</h4>
            <p>
              Casamentiss faiz malandris se pirulitá. A ordem dos tratores não
              altera o pão duris. Suco de cevadiss deixa as pessoas mais
              interessantis
            </p>
          </BoxAttention>

          <BoxAttention
            boxClass="bg-red-600"
            imgSrc={"./imgs/kelvin-costa-boards-temple-1.jpg"}
            imgClass="max-w-[50%] sm:mr-6 object-cover rounded-md"
          >
            <h4>Teste do Kelvin</h4>
            <p>
              Casamentiss faiz malandris se pirulitá. A ordem dos tratores não
              altera o pão duris. Suco de cevadiss deixa as pessoas mais
              interessantis
            </p>
          </BoxAttention>

          <div className="flex items-start sm:items-center flex-col sm:flex-row  rounded-lg bg-indigo-600 p-6 my-10">
            <Img
              src={`./imgs/Task.jpg`}
              className={`max-w-[150px] sm:mr-6  object-cover rounded-md`}
            />
            <div className=" text-white">
              <h3>Box Attention</h3>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
                malandris se pirulitá. A ordem dos tratores não altera o pão
                duris. Suco de cevadiss deixa as pessoas mais interessantis
              </p>
            </div>
          </div>

          <div className="flex items-start sm:items-center flex-col sm:flex-row  rounded-lg bg-indigo-600 p-6 my-10">
            <img
              src="./imgs/Task.jpg"
              alt=""
              className="w-full max-w-[30%] sm:mr-6  object-cover rounded-md"
            />
            <div className=" text-white">
              <h3>Box Attention</h3>
              <p>
                Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
                malandris se pirulitá. A ordem dos tratores não altera o pão
                duris. Suco de cevadiss deixa as pessoas mais interessantis
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
