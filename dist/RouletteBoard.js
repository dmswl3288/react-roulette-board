"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var RouletteBoard = function (props) {
    var _a = props.size, size = _a === void 0 ? 2 : _a, _b = props.targetIndex, targetIndex = _b === void 0 ? 0 : _b, _c = props.rotateCount, rotateCount = _c === void 0 ? 30 : _c, _d = props.onStart, onStart = _d === void 0 ? false : _d, _e = props.onEnd, onEnd = _e === void 0 ? function () { } : _e, _f = props.width, width = _f === void 0 ? 300 : _f, _g = props.height, height = _g === void 0 ? 300 : _g, _h = props.backgroundImageSrc, backgroundImageSrc = _h === void 0 ? "" : _h, pinComponent = props.pinComponent;
    var aniRef = (0, react_2.useRef)();
    var startRoulette = function () {
        clearInterval(aniRef.current);
        rRotate();
    };
    var rRotate = function () {
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
                    onEnd({ index: targetIndex, degree: deg[targetIndex] });
                }, 500);
            }
        }, 50);
    };
    (0, react_2.useEffect)(function () {
        if (!onStart)
            return;
        startRoulette();
    }, [onStart, targetIndex]);
    return (react_1.default.createElement("div", { style: {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        } },
        react_1.default.createElement("div", { id: "roulette-panel", style: {
                width: width,
                height: height,
                borderRadius: "50%",
                transitionTimingFunction: "ease-in-out",
                backgroundImage: "url(".concat(backgroundImageSrc, ")"),
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            } }),
        react_1.default.createElement("div", { style: {
                position: "absolute",
                borderRadius: "50%",
                cursor: "pointer",
                background: "yellow",
            }, onClick: startRoulette }, pinComponent)));
};
exports.default = RouletteBoard;
