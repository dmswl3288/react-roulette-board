import React from "react";
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
declare const RouletteBoard: (props: Props) => React.JSX.Element;
export default RouletteBoard;
