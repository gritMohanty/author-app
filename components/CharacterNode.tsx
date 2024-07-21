import { Handle } from "@xyflow/react";
import React from "react";
import { Button } from "./ui/button";

const CharacterNode = ({ data }) => {
  return (
    <div className="border-4 border-blue-300 p-6 bg-gray-800 text-white rounded-xl">
      <div className="font-bold text-2xl">{data.label}</div>
      <div className="flex flex-row items-center gap-2">
        <span className="text-gray-400 italic text-sm">{data.role}</span>{" "}
        <span
          className="p-1 pl-2 pr-2 bg-red-400 rounded-md"
          style={{ fontSize: "8px" }}
        >
          {data.type}
        </span>
      </div>
      <ul className="font-normal text-sm mt-4">
        {data.deeds.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <div className="flex flex-row gap-2 mt-4 bg-transparent">
        {data.relations.map((conn, index) => (
          <Button variant="secondary" size="sm">
            {conn}
          </Button>
        ))}
      </div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ background: "#555" }}
      />
      <Handle
        type="target"
        position="left"
        id="b"
        style={{ background: "#555" }}
      />
    </div>
  );
};

export default CharacterNode;
