import React, { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import ReactFlow, { Background, Panel } from "reactflow";

import "reactflow/dist/style.css";

import useStore from "../zustand/store";
const nodeTypes = {};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

function Flow() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    useShallow(selector)
  );

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
      </ReactFlow>
    </>
  );
}

export default Flow;
