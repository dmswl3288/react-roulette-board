"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var RouletteBoard = function RouletteBoard(props) {
  var size = props.size,
    targetIndex = props.targetIndex,
    rotateCount = props.rotateCount,
    onStart = props.onStart,
    onEnd = props.onEnd,
    width = props.width,
    height = props.height,
    backgroundImageSrc = props.backgroundImageSrc,
    pinComponent = props.pinComponent;
  var aniRef = (0, _react.useRef)();
  var startRoulette = function startRoulette() {
    clearInterval(aniRef.current);
    rRotate();
  };
  var rRotate = function rRotate() {
    var panel = document.getElementById("roulette-panel");
    panel.style.transition = "2s";
    var dividedDeg = 360 / size;
    var gap = dividedDeg / 2;
    var deg = [gap, 360 - gap];
    for (var i = 2; i < size; i++) {
      var prev = deg[i - 1];
      var value = prev - gap * 2;
      deg.push(value);
    }
    var num = 0;
    aniRef.current = setInterval(function () {
      num++;
      panel.style.transform = "rotate(" + 360 * num + "deg)";

      // done
      if (num === rotateCount) {
        clearInterval(aniRef.current);
        panel.style.transform = "rotate(" + deg[targetIndex] + "deg)";
        panel.style.transition = "0s";
        setTimeout(function () {
          onEnd({
            index: targetIndex,
            degree: deg[targetIndex]
          });
        }, 500);
      }
    }, 50);
  };
  (0, _react.useEffect)(function () {
    if (!onStart) return;
    startRoulette();
  }, [onStart, targetIndex]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    id: "roulette-panel",
    style: {
      width: width,
      height: height,
      borderRadius: "50%",
      transitionTimingFunction: "ease-in-out",
      backgroundImage: "url(".concat(backgroundImageSrc, ")"),
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      borderRadius: "50%",
      cursor: "pointer",
      background: "yellow"
    },
    onClick: startRoulette
  }, pinComponent));
};
var _default = RouletteBoard;
exports.default = _default;