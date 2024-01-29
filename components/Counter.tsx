"use client";
import React, { useContext, useState } from "react";
import { LangContext } from "../context/LangWrapper";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const lang = useContext(LangContext);

  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {lang === "de" ? "Zählen" : "Count"}: {count}
      <div>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
