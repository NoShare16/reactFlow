import React from "react";

function AnswerNode({ data }: { data: any }) {
  return (
    <div
      style={{
        padding: 10,
        border: "2px solid green",
        backgroundColor: "lightgreen",
      }}
    >
      <p>Answer: {data.label}</p>
    </div>
  );
}

export default AnswerNode;
