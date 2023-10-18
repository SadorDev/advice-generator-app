import React, { useEffect, useState } from "react";
import button from "../images/icon-dice.svg";
import "../styles/tailwind.css";
import divider from "../images/pattern-divider-desktop.svg";

const AdviceContainer = () => {
  const [advice, setAdvice] = useState({ id: null, advice: "" });

  const handleGetAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((advice) => {
        setAdvice(advice.slip);
      });
  };

  useEffect(() => {
    handleGetAdvice();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen text-white">
      <div className="rounded-lg bg-box w-11/12 md:w-4/5 lg:w-2/5 h-custom text-center relative p-4 md:p-8 flex items-center flex-col">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-green-500 text-center mb-2 mt-4">
          Advice #{advice?.id}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-center mt-2 md:mt-4 mb-2 md:mb-4">
          {advice.advice}
        </p>
        <button type="button"
          onClick={handleGetAdvice}
          className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center glow-on-hover"
        >
          <img src={button} alt="dice" />
        </button>
        <img
          src={divider}
          alt="divider"
          className="absolute bottom-[20%] md:bottom-[25%] left-1/2 transform -translate-x-1/2"
        />
      </div>
    </main>
  );
};

export default AdviceContainer;
