import React, { useState } from "react";

const UseState = () => {
  const [state, updatestate] = useState("Helloworld");
  const [style, setStyle] = useState({
    color: "red",
    backgroundColor: "skyblue"
  });
  const changeText = () => {
    updatestate("Great Shot!");
  };
  // 1st way

  const changecolor = () => {
    console.log("running");
    setStyle({
      display: "none"
    });
  };
  //There are two ways to change the color or whatever we want.

  // 2nd way

  // const changecolor = () => {
  //   console.log("##");
  //   updateStyle((prevStyle) => {
  //     return { ...prevStyle, display: "none" };
  //   });
  // };
  return (
    <>
      <h1>
        {state}
        {style.color}
      </h1>
      <button
        onClick={() => {
          changeText();
          changecolor();
        }}
        style={style}
      >
        click to change the state.
      </button>
    </>
  );
};
export default UseState;
