"use client";

import QuestionNode from "@/nodeTypes/QuestionNode";
import { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  addEdge,
  Node,
  Edge,
  applyNodeChanges,
  applyEdgeChanges,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
} from "reactflow";

import "reactflow/dist/style.css";
import AddQuestionBtn from "./AddQuestionBtn";
import AnswerNode from "@/nodeTypes/AnswerNode";

export default function App({
  nodes: initNodes,
  edges: initEdges,
}: {
  nodes: Node[];
  edges: Edge[];
}) {
  const [nodes, setNodes] = useState<Node[]>(initNodes);
  const [edges, setEdges] = useState<Edge[]>(initEdges);

  const onNodesChange: OnNodesChange = useCallback(
    (chs) => {
      setNodes((nds) => applyNodeChanges(chs, nds));
    },
    [setNodes]
  );

  const onEdgesChange: OnEdgesChange = useCallback(
    (chs) => {
      setEdges((eds) => applyEdgeChanges(chs, eds));
    },
    [setEdges]
  );

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const nodeTypes = useMemo(
    () => ({
      answer: AnswerNode,
      question: (nodeData: any) => {
        console.log("Node data in question nodeType:", nodeData);
        return (
          <QuestionNode
            nodes={nodes}
            setNodes={setNodes}
            questionId={nodeData.id}
            label={nodeData.data.label} // Added to pass the label explicitly if needed
          />
        );
      },
    }),
    []
  );

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        />
      </div>
      <AddQuestionBtn nodes={nodes} setNodes={setNodes} />
    </>
  );
}
