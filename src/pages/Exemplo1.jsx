import React, { useEffect, useState } from "react";

// Estilos
import "./Exemplo1.css";

// Componentes
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CarouselCard from "@/components/CarouselCard";
import BoxAttention from "@/components/BoxAttention";
import CollapsiblePulse from "@/components/CollapsiblePulse";
import CarouselLabel from "@/components/CarouselLabel";
import ImageMapPopover from "@/components/ImageMapPopover";
import ImageMapImgPopover from "@/components/ImageMapImgPopover";
import ProgressBarCourse from "@/components/ProgressBarCourse";
import Divisor from "@/components/Divisor";
import Img from "@/components/Img";
import VideoBox from "@/components/VideoBox";

// Assets
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";

// SCORM
import { SCORM } from "pipwerks-scorm-api-wrapper";

export default function Home() {
  const [lessonStatus, setlessonStatus] = useState(null);

  const handleConclude = () => {
    // Se o código carregou o App corretamente, então já está conectado ao LMS/SCORM

    // Obtém o status da lição

    const studentName = SCORM.get("cmi.core.student_name");

    alert("cmi.core.student_name: " + studentName);

    // Define o status da lição como 'completed'
    SCORM.set("cmi.core.lesson_status", "completed");
    const lessonStatus = SCORM.get("cmi.core.lesson_status");
    alert("cmi.core.lesson_status: " + lessonStatus);

    // Salva as alterações no LMS
    SCORM.save();
    SCORM.quit();
  };

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
      <ProgressBarCourse />
      <div id="intro" className="py-[80px] bg-slate-100">
        <div className="container--780 text-center">
          <div className="flex justify-center">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="mb-10 mt-6">
            <Button variant="secondary" onClick={() => handleConclude()}>
              SCORM Conclude
            </Button>
          </div>

          <div className="read-the-docs">
            <p>
              Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
              malandris se pirulitá. A ordem dos tratores não altera o pão
              duris. Suco de cevadiss deixa as pessoas mais interessantis. Viva
              Forevis aptent taciti sociosqu ad litora torquent.
            </p>
            <p>
              Praesent malesuada urna nisi, quis volutpat erat hendrerit non.
              Nam vulputate dapibus. Quem num gosta di mé, boa gentis num é.
              Quem num gosta di mim que vai caçá sua turmis! Detraxit consequat
              et quo num tendi nada.
            </p>
          </div>
        </div>
      </div>

      <div id="typography" className="py-[80px]  bg-sky-500">
        <div className="container--780  text-left">
          <h2>Typography</h2>

          <h1>Title h1</h1>
          <h2>Title h2</h2>
          <h3>Title h3</h3>
          <h4>Title h4</h4>
          <h5>Title h5</h5>
          <h6>Title h6</h6>
          <p>Paragraph:</p>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
            malandris se pirulitá. A ordem dos tratores não altera o pão duris.
            Suco de cevadiss deixa as pessoas mais interessantis. Viva Forevis
            aptent taciti sociosqu ad litora torquent.
          </p>
          <p>
            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam
            vulputate dapibus. Quem num gosta di mé, boa gentis num é. Quem num
            gosta di mim que vai caçá sua turmis! Detraxit consequat et quo num
            tendi nada.
          </p>
        </div>
      </div>

      <div
        id="accordion"
        className="py-[80px] bg-gradient-to-r from-violet-500 to-fuchsia-500"
      >
        <div className="container--780">
          <h2>Accordion</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Accordion type="single" collapsible>
              {Array.from({ length: 5 }).map((_, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className=" "
                >
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div>
              <CollapsiblePulse>
                <CollapsiblePulse.Header>
                  <h6>@peduarte starred 3 repositories</h6>
                </CollapsiblePulse.Header>
                <CollapsiblePulse.Content>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    @radix-ui/colors
                  </div>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    @stitches/react
                  </div>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    @stitches/react
                  </div>
                </CollapsiblePulse.Content>
              </CollapsiblePulse>

              <CollapsiblePulse className="mt-6">
                <CollapsiblePulse.Header>
                  <h6>@peduarte starred 3 repositories</h6>
                </CollapsiblePulse.Header>
                <CollapsiblePulse.Content>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    @radix-ui/colors
                  </div>
                  <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                    @stitches/react
                  </div>
                </CollapsiblePulse.Content>
              </CollapsiblePulse>
            </div>
          </div>
        </div>
      </div>

      <div id="cards" className="py-[80px] bg-slate-100">
        <div className="container--780  text-left">
          <h2>Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
            <Card>
              <CardHeader>
                <Img
                  src={`./imgs/Task.jpg`}
                  className={`aspect-video`}
                  alt="Vite logo"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>Card Title</CardTitle>
                <p>Card Content</p>
              </CardContent>
            </Card>

            <Card>
              <Img
                src={`./imgs/Task.jpg`}
                className={`mb-5 aspect-video`}
                alt="Vite logo"
              />
              <CardContent>
                <CardTitle>Card Title</CardTitle>
                <p>
                  Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz
                  malandris se pirulitá. A ordem dos tratores não altera o pão
                  duris. Suco de cevadiss deixa as pessoas mais interessantis
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Img
                  src={`./vite.svg`}
                  className={`rounded-lg mx-auto w-full max-w-[140px]`}
                  alt="Vite logo"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>Card Title</CardTitle>
                <p>Card Content</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div id="carousel" className="py-[80px] bg-gray-50">
        <div className="container--780  text-left">
          <h2>Carousel</h2>
          <h3>Carousel Card</h3>
          <CarouselCard items={carouselItemsWithIds} />

          <h3>Carousel Label</h3>
          <CarouselLabel items={carouselItemsWithIds} />
        </div>
      </div>

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

      <div id="grid" className="py-[80px] bg-indigo-500">
        <div className="container--780">
          <div className="grid md:grid-cols-12 gap-6 mt-10 items-center">
            <div className="md:col-span-3">
              <Img
                src={`./imgs/kelvin-costa-boards-temple-1.jpg`}
                isCircle={true}
                className={"max-w-[250px] md:max-w-[150px]"}
              />
            </div>
            <div className="md:col-span-9">
              <h4>title</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-10 items-center">
            <div>
              <Img src="./imgs/core/placeholder.png" />
            </div>
            <div>
              <h4>title</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
              </p>
            </div>
          </div>
        </div>
      </div>

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

      <div id="video-box" className="py-[80px] bg-gray-50">
        <div className="container--780  text-left">
          <h2>Video Box</h2>
          <VideoBox />
        </div>
      </div>
    </>
  );
}
