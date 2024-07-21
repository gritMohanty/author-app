"use client";
import React, { useEffect, useState } from "react";
import SceneSorter from "./SceneSorter";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";
import "./components.css";

type Scene = {
  id: number;
  name: string;
};

const Chapter = ({
  name,
  chapterId,
  storyId,
}: {
  name: string;
  chapterId: number;
  storyId: number;
}) => {
  const [scenes, setScenes] = useState([]);
  const fetchScenes = async () => {
    try {
      const response = await fetch(`/storylines/${storyId}/${chapterId}/api`);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid content type. Expected application/json.");
      }

      const data = await response.json();
      console.log(data, "plots here");
      setScenes(data?.plots);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchScenes();
  }, []);
  return (
    <div className="mt-12">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start gap-2">
          <h4 className="text-md font-semibold underline-animation cursor-pointer">
            {name}
          </h4>
          <Badge>Chapter</Badge>
        </div>
        <div className="flex mt-4 justify-end gap-4">
          <Button variant="destructive">Discard</Button>
          <Link href={`${storyId}/${chapterId}/create`}>
            <Button variant="outline">Add a new plot</Button>
          </Link>
        </div>
      </div>

      <div className="rounded-md border p-4 mt-4 w-full">
        <SceneSorter scenes={scenes} />
      </div>
    </div>
  );
};

export default Chapter;
