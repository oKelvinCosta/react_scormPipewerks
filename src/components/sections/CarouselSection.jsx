import React from "react";
import CarouselCard from "@/components/CarouselCard";
import CarouselLabel from "@/components/CarouselLabel";

export default function CarouselSection() {
  const firstCarouselItems = [
    {
      imgSrc: "./imgs/kelvin-costa-boards-temple-1.jpg",

      title: () => {
        return (
          <>
            <h4>My Title</h4>
          </>
        );
      },
      content: () => {
        return (
          <>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
              malandris se pirulitá. A ordem dos tratores não altera o pão
              duris. Suco de cevadiss deixa as pessoas mais interessantis. Viva
              Forevis aptent taciti sociosqu ad litora torquent.
            </p>
            <p>
              Suco de cevadiss deixa as pessoas mais interessantis. Viva Forevis
              aptent taciti sociosqu ad litora torquent.
            </p>
          </>
        );
      },
    },
    {
      imgSrc: "./imgs/09_20_02_2024_Haki-Estande_Kelvin.png",

      title: () => {
        return (
          <>
            <h4>My Title</h4>
          </>
        );
      },
      content: () => {
        return (
          <>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
              malandris se pirulitá. A ordem dos tratores não altera o pão
              duris. Suco de cevadiss deixa as pessoas mais interessantis. Viva
              Forevis aptent taciti sociosqu ad litora torquent.
            </p>
          </>
        );
      },
    },
    {
      imgSrc: "./imgs/Task.jpg",

      title: () => {
        return (
          <>
            <h4>My Title</h4>
          </>
        );
      },
      content: () => {
        return (
          <>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
              malandris se pirulitá. A ordem dos tratores não altera o pão
              duris. Suco de cevadiss deixa as pessoas mais interessantis. Viva
              Forevis aptent taciti sociosqu ad litora torquent.
            </p>
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
              malandris se pirulitá. A ordem dos tratores não altera o pão
              duris. Suco de cevadiss deixa as pessoas mais interessantis. Viva
              Forevis aptent taciti sociosqu ad litora torquent.
            </p>
          </>
        );
      },
    },
  ];
  // Adiciona IDs dinâmicos aos itens
  const carouselItemsWithIds = firstCarouselItems.map((item, index) => ({
    ...item,
    id: `first-${index + 1}`,
  }));

  return (
    <>
      <div id="carousel" className="py-[80px] bg-gray-50">
        <div className="container--780  text-left">
          <h2>Carousel</h2>
          <h3>Carousel Card</h3>
          <CarouselCard items={carouselItemsWithIds} />

          <h3>Carousel Label</h3>
          <CarouselLabel items={carouselItemsWithIds} />
        </div>
      </div>
    </>
  );
}
