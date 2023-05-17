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
      size={8}
      targetIndex={2}
      rotateCount={30}
      onStart={false}
      onEnd={({ index, degree }) => {
        console.log("end", index, degree);
      }}
      width={300}
      height={300}
      backgroundImageSrc="./m-img-roulette.svg"
      pinComponent={<PinComponent />}
    />
  );
};

export default App;
