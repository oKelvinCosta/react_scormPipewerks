import React from "react";

// Estilos
import "./Exemplo1.css";

// Componentes
import ProgressBarCourse from "@/components/ProgressBarCourse";

// Seções
import ScormConcludeSection from "@/components/sections/ScormConcludeSection";
import TypographySection from "@/components/sections/TypographySection";
import CardSection from "@/components/sections/CardSection";
import BoxAttentionSection from "@/components/sections/BoxAttentionSection";
import GridSection from "@/components/sections/GridSection";
import AccordionSection from "@/components/sections/AccordionSection";
import VideoBoxSection from "@/components/sections/VideoBoxSection";
import ImgMapSection from "@/components/sections/ImgMapSection";
import CarouselSection from "@/components/sections/CarouselSection";

export default function Home() {
  return (
    <>
      <ProgressBarCourse />

      <ScormConcludeSection />

      <TypographySection />

      <AccordionSection />

      <CardSection />

      <BoxAttentionSection />

      <GridSection />

      <ImgMapSection />

      <CarouselSection />

      <VideoBoxSection />
    </>
  );
}
