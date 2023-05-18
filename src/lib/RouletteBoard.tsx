import React from "react";
import { useEffect, useRef, useState } from "react";

interface OnEndParams {
  index: number;
  degree: number;
}

interface Props {
  size: number;
  targetIndex: number;
  rotateCount?: number;
  onStart: boolean;
  onEnd?: ({ index, degree }: OnEndParams) => void;
  width?: number;
  height?: number;
  backgroundImageSrc: string;
  pinComponent?: React.ReactNode;
}

const RouletteBoard = (props: Props) => {
  const {
    size = 2,
    targetIndex = 0,
    rotateCount = 30,
    onStart = false,
    onEnd = () => {},
    width = 300,
    height = 300,
    backgroundImageSrc = "",
    pinComponent,
  } = props;
  const aniRef = useRef<ReturnType<typeof setInterval>>();

  const startRoulette = () => {
    clearInterval(aniRef.current);
    rRotate();
  };

  const rRotate = () => {
    const panel = document.getElementById("roulette-panel") as HTMLInputElement;
    panel.style.transition = "2s";
    const dividedDeg = 360 / size;
    const gap = dividedDeg / 2;
    let deg = [gap, 360 - gap];
    for (let i = 2; i < size; i++) {
      const prev = deg[i - 1];
      const value = prev - gap * 2;
      deg.push(value);
    }
    let num = 0;
    aniRef.current = setInterval(() => {
      num++;
      panel.style.transform = "rotate(" + 360 * num + "deg)";

      // done
      if (num === rotateCount) {
        clearInterval(aniRef.current);
        panel.style.transform = "rotate(" + deg[targetIndex] + "deg)";
        panel.style.transition = "0s";
        setTimeout(() => {
          onEnd({ index: targetIndex, degree: deg[targetIndex] });
        }, 500);
      }
    }, 50);
  };

  useEffect(() => {
    if (!onStart) return;
    startRoulette();
  }, [onStart, targetIndex]);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        id="roulette-panel"
        style={{
          width: width,
          height: height,
          borderRadius: "50%",
          transitionTimingFunction: "ease-in-out",
          backgroundImage: `url(${backgroundImageSrc})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          cursor: "pointer",
          background: "yellow",
        }}
        onClick={startRoulette}
      >
        {pinComponent}
      </div>
    </div>
  );
};

export default RouletteBoard;
