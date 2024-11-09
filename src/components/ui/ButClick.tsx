"use client";

import { useState } from "react";
import { Button } from "./button";

export default function ButClick() {
  const symbolX = "opacity-0";
  const symbolY = "animate-pulse";
  const [currentStep, setCurrentStep] = useState(symbolX);

  const buttonClick = () => {
    setCurrentStep(currentStep === symbolX ? symbolY : symbolX);
  };

  return (
    <div className="flex flex-col items-center">
      <Button onClick={buttonClick}>Нажми меня</Button>
      <div
        className={`header text-red-700 ${currentStep} font-black items-center mt-2`}
      >
        Я ТЕБЯ ЛЮБЛЮ!
      </div>
    </div>
  );
}
