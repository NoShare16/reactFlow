"use client";

import { Edge, Node, Position, ReactFlowProvider } from "reactflow";

import styles from "./page.module.css";
import Flow from "../components/Flow";

const nodeSize = {
  width: 100,
  height: 40,
};

// this example uses some v12 features that are not released yet
const initialNodes: Node[] = [];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
];

async function fetchData(): Promise<{ nodes: Node[]; edges: Edge[] }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ nodes: initialNodes, edges: initialEdges });
    }, 1000);
  });
}

export default async function App() {
  const { nodes, edges } = await fetchData();

  return (
    <main className={styles.main}>
      <ReactFlowProvider initialNodes={nodes} initialEdges={edges}>
        <Flow nodes={nodes} edges={edges} />
      </ReactFlowProvider>
    </main>
  );
}
