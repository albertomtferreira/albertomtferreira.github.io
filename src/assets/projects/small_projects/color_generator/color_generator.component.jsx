import { useEffect, useState } from "react";

export default function ColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("HEX");
  const [color, setColor] = useState("#000000");

  function handleCreateHexColor() {
    const hexColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${hexColor}`);
  }

  function handleCreateRgbColor() {
    const rgbColorR = Math.floor(Math.random() * 255);
    const rgbColorG = Math.floor(Math.random() * 255);
    const rgbColorB = Math.floor(Math.random() * 255);
    setColor(`rgb(${rgbColorR},${rgbColorG},${rgbColorB})`);
  }

  useEffect(() => {
    typeOfColor === "hex" ? handleCreateHexColor() : handleCreateRgbColor();
  }, [typeOfColor]);

  return (
    <div
      className="container"
      style={{
        width: "25vw",
        height: "25vh",
        backgroundColor: color,
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeOfColor === "hex" ? handleCreateHexColor : handleCreateRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "60px",
          marginTop: "50px",
          color:
            color === "rgb(255,255,255)" || color === "#ffffff"
              ? "#000000"
              : "#ffffff",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
