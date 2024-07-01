import React from "react";
import Tag from "./Tag";
import Button from "./Button";

type Scene = {
  id: number;
  name: string;
};

const Chapter = ({ name, scenes }: { name: string; scenes: Scene[] }) => {
  return (
    <div className="mt-12">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-2">
          <h4 className="text-md font-semibold">{name}</h4>
          <Tag tag="Chapter" />
        </div>
        <div className="flex mt-4 justify-end gap-4">
          <Button variant="secondary" label="Discard" type="delete" />
          <Button label="Add new plot" />
        </div>
      </div>

      <div className="border-black outline-dashed mt-4 p-4">
        {scenes.map((scene) => (
          <div className="border-black border-2 p-4 mb-2">{scene.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Chapter;
