import React from "react";
import { Handle, NodeProps, Position } from "reactflow";

function QuestionNode({
  nodes,
  setNodes,
  questionId,
  label,
}: {
  nodes: any;
  setNodes: any;
  questionId: any;
  label: any;
}) {
  console.log("FrageNode Props:", { nodes, setNodes, questionId, label });

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
  const handleButtonClick = (event: any) => {
    console.log("React Click Event");
    event.stopPropagation(); // Temporarily stop propagation to see if it affects the outcome
  };

  return (
    <div className="card-container">
      <div className="full-width-input">
        <input className="nodrag" />
      </div>
      <h4>FrageNode ID: {questionId}</h4>
      <p>{label}</p> {/* Displaying the label if passed */}
      <button onClick={addAnswerNode}>Add Answer</button>
    </div>
  );
}

export default QuestionNode;
