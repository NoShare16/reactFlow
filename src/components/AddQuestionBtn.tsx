import React from "react";

const AddQuestionBtn = ({ nodes, setNodes }: { nodes: any; setNodes: any }) => {
  const addQuestionNode = (event: any) => {
    event.stopPropagation();
    const newNode = {
      id: `${nodes.length + 1}`, // Generate a unique ID based on length; adjust accordingly for more robust ID generation
      //   id: "Z",
      type: "question",
      style: {
        width: 177,
        height: 140,
      },
      position: {
        x: 100, // Set fixed position or calculate based on existing nodes
        y: 200,
      },
      data: {
        label: `New Question Node ${nodes.length + 1}`,
        nodes: { nodes },
        setNodes: { setNodes },
      },
    };

    setNodes([...nodes, newNode]); // Append the new node to the existing array
  };

  return <button onClick={addQuestionNode}>Add Question</button>;
};

export default AddQuestionBtn;
