import React, { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import ReactFlow, { Background, Panel } from "reactflow";

import "reactflow/dist/style.css";
import "../app/globals.css";

import useStore from "../zustand/store";

import StandartNode from "../nodeTypes/StandartNode";
const nodeTypes = {
  standart: StandartNode,
};

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
  const addStandartNode = useStore((state) => state.addStandartNode);

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
        <p>test</p>
        <Panel position="top-right" className="bg-black">
          <button onClick={addStandartNode} className="bg-black">
            Add Standart Node
          </button>
        </Panel>
        <Background />
      </ReactFlow>
    </>
  );
}

export default Flow;
