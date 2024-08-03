import React from "react";
import { Handle, Position } from "reactflow";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CharacterNode = ({ data }) => (
  <Card className="w-64 bg-slate-800 text-slate-100 shadow-lg">
    <CardHeader>
      <h3 className="text-lg font-semibold text-sky-400">{data.name}</h3>
      <Badge variant="outline" className="bg-sky-900 text-sky-100">
        {data.role}
      </Badge>
    </CardHeader>
    <CardContent>
      <p className="text-sm mb-2">{data.description}</p>
      <Separator className="my-2 bg-slate-600" />
      <div className="mt-2">
        <h4 className="text-sm font-semibold text-sky-400">Traits:</h4>
        <div className="flex flex-wrap gap-1 mt-1">
          {data.traits.map((trait, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-slate-700 text-slate-100"
            >
              {trait}
            </Badge>
          ))}
        </div>
      </div>
      <Separator className="my-2 bg-slate-600" />
      <div className="mt-2">
        <p>
          <span className="text-sky-400">Goal:</span> {data.goal}
        </p>
        <p>
          <span className="text-sky-400">Conflict:</span> {data.conflict}
        </p>
        <p>
          <span className="text-sky-400">Arc:</span> {data.arc}
        </p>
      </div>
    </CardContent>
    <Handle
      type="source"
      position={Position.Right}
      className="w-3 h-3 bg-sky-400"
    />
    <Handle
      type="target"
      position={Position.Left}
      className="w-3 h-3 bg-sky-400"
    />
  </Card>
);

const ChapterNode = ({ data }) => (
  <Card className="w-64 bg-slate-700 text-slate-100 shadow-lg">
    <CardHeader>
      <h3 className="text-lg font-semibold text-emerald-400">
        {data.number}. {data.title}
      </h3>
      <Badge variant="outline" className="bg-emerald-900 text-emerald-100">
        {data.pov} POV
      </Badge>
    </CardHeader>
    <CardContent>
      <p className="text-sm mb-2">{data.summary}</p>
      <Separator className="my-2 bg-slate-600" />
      <div className="mt-2">
        <h4 className="text-sm font-semibold text-emerald-400">Key Events:</h4>
        <ul className="list-disc list-inside text-sm">
          {data.keyEvents.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
      <Separator className="my-2 bg-slate-600" />
      <div className="mt-2 text-sm">
        <p>
          <span className="text-emerald-400">Characters:</span>{" "}
          {data.characters.join(", ")}
        </p>
        <p>
          <span className="text-emerald-400">Setting:</span> {data.setting}
        </p>
        <p>
          <span className="text-emerald-400">Word Count:</span> {data.wordCount}
        </p>
        <p>
          <span className="text-emerald-400">Tone:</span> {data.tone}
        </p>
      </div>
    </CardContent>
    <Handle
      type="source"
      position={Position.Bottom}
      className="w-3 h-3 bg-emerald-400"
    />
    <Handle 
      type="target"
      position={Position.Top}
      className="w-3 h-3 bg-emerald-400"
    />
  </Card>
);

export { CharacterNode, ChapterNode };
