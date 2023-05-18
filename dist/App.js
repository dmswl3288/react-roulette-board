"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lib_1 = require("./lib");
var App = function () {
    var PinComponent = function () {
        return (react_1.default.createElement("div", { style: {
                width: 100,
                height: 100,
                borderRadius: "50%",
                backgroundColor: "red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
            } }, "START"));
    };
    return (react_1.default.createElement(lib_1.RouletteBoard, { size: 8, targetIndex: 2, rotateCount: 30, onStart: false, onEnd: function (_a) {
            var index = _a.index, degree = _a.degree;
            console.log("end", index, degree);
        }, width: 300, height: 300, backgroundImageSrc: "./m-img-roulette.svg", pinComponent: react_1.default.createElement(PinComponent, null) }));
};
exports.default = App;
