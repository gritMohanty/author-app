"use client";
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  useNodesState,
  useEdgesState,
  MiniMap,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useState } from "react";
import "../../tailwind.config";
import CharacterNode from "./CharacterNode";

const nodeTypes = { customNode: CharacterNode };

const initialNodes = [
  {
    id: "1",
    type: "customNode",
    position: { x: 250, y: 5 },
    data: {
      label: "Lyra",
      role: "Antagonist",
      type: "internal",
      deeds: ["Has killed Allison", "Hiding", "Building own army"],
      relations: ["Malakai", "Zephyr"],
    },
  },
];

const initialEdges = [];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default Flow;
