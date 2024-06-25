import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
import "../app/globals.css";

import useStore, { NodeData } from "../zustand/store";

function StandartNode({ id, data }: NodeProps<NodeData>) {
  console.log("StandartNode", id, data);
  return (
    <div className="bg-blue-500 border-2 border-solid border-blue-800 rounded p-2 flex flex-col items-start">
      <Handle type="target" position={Position.Left} />
      <button>Add Node</button>
    </div>
  );
}

export default StandartNode;
