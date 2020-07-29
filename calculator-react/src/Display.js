import React from "react";

function Display(props) {
  const isError = props.result === "Error";
  return (
    <div className="display" style={{ color: isError ? "red" : "navy" }}>
      {props.result}
    </div>
  );
}
export default Display;
