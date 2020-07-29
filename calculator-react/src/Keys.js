import React from "react";

function Keys(props) {
  function displayNum(e) {
    props.displayNum(e.target.name);
  }
  return (
    <div className="calc">
      <ul>
        <button
          name="("
          onClick={displayNum}
          style={{ backgroundColor: "white" }}
        >
          (
        </button>
        <button
          name=")"
          onClick={displayNum}
          style={{ backgroundColor: "white" }}
        >
          )
        </button>
        <button
          name="ac"
          onClick={displayNum}
          style={{ backgroundColor: "white" }}
        >
          AC
        </button>
        <button
          name="/"
          onClick={displayNum}
          style={{ backgroundColor: "white" }}
        >
          /
        </button>
      </ul>
      <ul>
        <button name="7" onClick={displayNum}>
          7
        </button>
        <button name="8" onClick={displayNum}>
          8
        </button>
        <button name="9" onClick={displayNum}>
          9
        </button>
        <button
          name="*"
          onClick={displayNum}
          style={{ backgroundColor: "white" }}
        >
          x
        </button>
      </ul>
      <ul>
        <button name="4" onClick={displayNum}>
          4
        </button>
        <button name="5" onClick={displayNum}>
          5
        </button>
        <button name="6" onClick={displayNum}>
          6
        </button>
        <button
          name="-"
          onClick={displayNum}
          style={{ backgroundColor: "white" }}
        >
          -
        </button>
      </ul>

      <ul>
        <button name="1" onClick={displayNum}>
          1
        </button>
        <button name="2" onClick={displayNum}>
          2
        </button>
        <button name="3" onClick={displayNum}>
          3
        </button>
        <button
          name="+"
          onClick={displayNum}
          style={{ backgroundColor: "white" }}
        >
          +
        </button>
      </ul>
      <ul>
        <button name="0" onClick={displayNum}>
          0
        </button>
        <button name="." onClick={displayNum} style={{ fontSize: 20 }}>
          .
        </button>
        <button
          name="ce"
          onClick={displayNum}
          style={{ backgroundColor: "white" }}
        >
          CE
        </button>
        <button
          name="="
          onClick={displayNum}
          style={{ backgroundColor: "#3F8EBF" }}
        >
          =
        </button>
      </ul>
    </div>
  );
}
export default Keys;
