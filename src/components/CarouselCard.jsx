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

export default function CarouselCard({ items }) {
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
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <Img
                        src={`${item.imgSrc}`}
                        className={`aspect-square md:aspect-video rounded-md mb-4 sm:mb-0`}
                      />
                      <div className="flex items-center  ml-0 sm:ml-4">
                        <div>
                          {item.title()}
                          {item.content()}
                        </div>
                      </div>
                    </div>
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
