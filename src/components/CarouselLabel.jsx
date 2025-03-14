import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Img from "./Img";

/**
 * Componente que renderiza um card com um carrossel de imagens.
 *
 * @prop {Object[]} items - Array com as informações dos slides do carrossel.
 * @prop {string} items[].imgSrc - URL da imagem do slide.
 * @prop {ReactNode} items[].title - Titulo do slide.
 * @prop {ReactNode} items[].content - Conte do do slide.
 *
 * @returns Um carrossel com os slides informados.
 */

export default function CarouselLabel({ items }) {
  // Informação do Slide atual
  const [api, setApi] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi} className="w-full p-x-[80px]">
        <CarouselContent className="items-center">
          {items.map((item, key) => {
            return (
              <CarouselItem key={key}>
                <Card className={`relative h-[400px]`}>
                  <Img
                    src={`${item.imgSrc}`}
                    className={`absolute h-full w-full rounded-md   z-[1] brightness-10`}
                  />
                  <CardContent className="opacity-85 p-3 bg-gray-50 absolute bottom-5 mx-[10%] rounded-md z-[2]">
                    {item.title()}
                    {item.content()}
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <ul className="py-2 text-center text-sm flex space-x-2 justify-center">
          {Array.from({ length: count }).map((_, key) => {
            return (
              <li key={key}>
                <button
                  onClick={() => api.scrollTo(key)}
                  className={`rounded-full w-3 h-3 ${
                    key + 1 == current
                      ? "bg-primary outline-0"
                      : "bg-gray-100 outline-gray-300 "
                  }  outline outline-1 transition-all`}
                ></button>
              </li>
            );
          })}
        </ul>
      </Carousel>
    </>
  );
}
