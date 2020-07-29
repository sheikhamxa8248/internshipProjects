import React, { useState } from "react";
import Display from "./Display";
import Keys from "./Keys";

function Calculator() {
  function calculate(buttonNum) {
    try {
      // eslint-disable-next-line
      setNum((eval(num) || "") + "");
    } catch (e) {
      setNum("Error");
    }
  }
  const [num, setNum] = useState("");
  function displayNum(buttonNum) {
    if (buttonNum === "=") {
      calculate(buttonNum);
    } else if (buttonNum === "ac") {
      setNum("");
    } else if (buttonNum === "ce") {
      setNum(num.slice(0, -1));
    } else {
      setNum(num + buttonNum);
    }
  }

  return (
    <div>
      <Display result={num} />
      <Keys displayNum={displayNum} />
    </div>
  );
}
export default Calculator;
