"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const symbolX = "";
const symbolY = "Я ТЕБЯ ЛЮБЛЮ!";

export default function Home() {
  const [currentStep, setCurretStep] = useState(symbolX);

  const butClick = () => {
    setCurretStep(currentStep === symbolX ? symbolY : symbolX);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Button onClick={butClick}>Нажми меня</Button>
        {/* <TextClcik symbol={currentStep} /> */}
        <div className="header text-red-700 animate-pulse font-black">
          {currentStep}
        </div>
      </main>
    </div>
  );
}

// function TextClcik({ symbol }) {
//   return (
//     <div className="header text-red-700  animate-slow-appear font-black">
//       {}
//     </div>
//   );
// }
