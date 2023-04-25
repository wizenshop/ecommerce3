/*
"use client";

import * as React from "react";
import * as Style from "./styles";
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function App() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <Style.SliderContainer ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <Image
            src="banner1.png"
            alt="Picture of the author"
            placeholder="blur"
            width={500}
            height={500}
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="banner2.png"
            alt="Picture of the author"
            placeholder="blur"
            width={500}
            height={500}
          />
        </div>
      </Style.SliderContainer>
    </>
  );
}
*/