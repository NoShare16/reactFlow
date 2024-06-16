import React from "react";

const AddAnswerBtn = ({
  nodes,
  setNodes,
  questionId,
}: {
  nodes: any;
  setNodes: any;
  questionId: any;
}) => {
  const addAnswerNode = () => {
    console.log("Button Clicked - Starting to add answer node");
    console.log("Adding new answer node for questionId:", questionId);
    const newId = `answer-${questionId}-${nodes.length + 1}`;

    const newNode = {
      id: newId,
      type: "answer",
      parentId: questionId,
      extent: "parent",
      style: {
        width: 177,
        height: 140,
      },
      position: {
        x: 10,
        y:
          100 + 50 * nodes.filter((n: any) => n.parentId === questionId).length,
      },
      data: { label: `New Answer Node ${nodes.length + 1}` },
      draggable: true,
    };

    console.log("New node to add:", newNode);
    setNodes([...nodes, newNode]);
  };

  return <button onClick={addAnswerNode}>Add Answer</button>;
};

export default AddAnswerBtn;
