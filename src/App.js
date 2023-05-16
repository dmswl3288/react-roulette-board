import { RouletteBoard } from "./lib";

const App = () => {
  const PinComponent = () => {
    return (
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          backgroundColor: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        START
      </div>
    );
  };

  return (
    <RouletteBoard
      targetIndex={0}
      rotateCount={30}
      onStart={false}
      onEnd={({ index, degree }) => {
        console.log("end", index, degree);
      }}
      width={300}
      height={300}
      backgroundImageSrc="https://www.sonamarket.com/views/res/imgs/page/roulette/m-img-roulette.svg"
      pinComponent={<PinComponent />}
    />
  );
};

export default App;
