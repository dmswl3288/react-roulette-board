import { useEffect, useRef, useState } from "react";

const RouletteBoard = (props) => {
  const {
    targetIndex,
    rotateCount,
    onStart,
    onEnd,
    width,
    height,
    backgroundImageSrc,
    pinComponent,
  } = props;
  const aniRef = useRef();

  const startRoulette = () => {
    clearInterval(aniRef.current);
    rRotate();
  };

  const rRotate = () => {
    const panel = document.getElementById("roulette-panel");
    panel.style.transition = "2s";
    const deg = [30, 330, 270, 210, 150, 90];
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
          console.log(panel.style.transform);
          console.log("rotate(" + deg[targetIndex] + "deg)");
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
      >
        {/* <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
            backgroundImage: `url(https://eppy.world/assets/images/enjoy/roulette/pin@3x.png)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        /> */}
      </div>
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
      {/* <button
        style={{
          position: "absolute",
          width: 100,
          height: 100,
          borderRadius: "50%",
          backgroundColor: "red",
          cursor: "pointer",
          border: "none",
          padding: 0,
        }}
        onClick={startRoulette}
      >
        START
      </button> */}
    </div>
  );
};

export default RouletteBoard;
