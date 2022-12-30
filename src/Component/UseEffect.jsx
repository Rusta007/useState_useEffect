import React, { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const changeWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("regular width");
    window.addEventListener("resize", changeWidth);

    // return () => {
    //   console.log("remove width");
    //   window.removeEventListener("resize", changeWidth);
    // };
  }, [windowWidth]);
  return (
    <>
      <h1>Helloworld</h1>
      <h2>{windowWidth}</h2>
    </>
  );
};
export default UseEffectExample;
