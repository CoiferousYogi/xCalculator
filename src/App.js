//import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // function to execute when a button is clicked
  const buttonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleCalculations = () => {
    try {
      const evalResult = eval(input);

      // check for the edge cases : division by 0 and NaN
      if (input.includes("0/0") && !evalResult) {
        setResult("NaN");
      } else if (input.includes("/0") && !evalResult) {
        setResult("Infinity");
      } else if (isNaN(evalResult)) {
        setResult("Error");
      } else {
        setResult(evalResult.toString());
      }
    } catch {
      setResult("Error");
    }
  };

  // function for clear
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="App">
      <h1 className="mainHeading">React Calculator</h1>
      <div className="calculator">
        {/* Input area */}
        <input className="input-field" type="text" value={input} readOnly />
        {/* Result Display */}
        <div className="result">{result}</div>
        {/* buttons */}
        <div className="buttons">
          <button onClick={() => buttonClick("7")}>7</button>
          <button onClick={() => buttonClick("8")}>8</button>
          <button onClick={() => buttonClick("9")}>9</button>
          <button onClick={() => buttonClick("+")}>+</button>
          <button onClick={() => buttonClick("4")}>4</button>
          <button onClick={() => buttonClick("5")}>5</button>
          <button onClick={() => buttonClick("6")}>6</button>
          <button onClick={() => buttonClick("-")}>-</button>
          <button onClick={() => buttonClick("1")}>1</button>
          <button onClick={() => buttonClick("2")}>2</button>
          <button onClick={() => buttonClick("3")}>3</button>
          <button onClick={() => buttonClick("*")}>*</button>
          <button onClick={handleClear}>C</button>
          <button onClick={() => buttonClick("0")}>0</button>
          <button onClick={handleCalculations}>=</button>
          <button onClick={() => buttonClick("/")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
