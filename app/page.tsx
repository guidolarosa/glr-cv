
import Education from "@/components/columns/Education";
import Info from "@/components/columns/Info";
import Skills from "@/components/columns/Skills";
import Work from "@/components/columns/Work";
import clsx from "clsx";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsmono = JetBrains_Mono({ weight: ["100", "200", "300", "400"] });

export default function Home() {
  return (
    <div
      className={clsx(
        "min-h-screen grid lg:grid-cols-[1fr_2fr_1fr_1fr] gap-6 p-8 h-screen lg:overflow-hidden",
        jetbrainsmono.className
      )}
    >
      <Info />
      <Work />
      <Education />
      <Skills />
    </div>
  );
}
