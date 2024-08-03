"use client";
import React, { useEffect, useState, useContext } from "react";

import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import "../components.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Trash2 } from "lucide-react";

import PlotSorter from "./SceneSorter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { StoryContext } from "../provider/storyContext";
import ChapterDetails from "./ChapterDetails";

type Scene = {
  id: number;
  name: string;
};

const Chapter = ({
  name,
  chapterId,
  storyId,
  summary,
}: {
  name: string;
  chapterId: number;
  storyId: number;
  summary: string;
}) => {
  const [scenes, setScenes] = useState([]);

  const { showDetails, toggleShowDetails } = useContext(StoryContext);

  console.log(showDetails, "show details");

  const fetchScenes = async () => {
    try {
      const response = await fetch(
        `/storylines/${storyId}/chapters/${chapterId}/api`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid content type. Expected application/json.");
      }

      const data = await response.json();

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
          <h4
            className="text-md font-semibold underline-animation cursor-pointer"
            onClick={() => toggleShowDetails(true)}
          >
            {name}
          </h4>
          <Badge>Chapter</Badge>
        </div>
        <div className="flex mt-4 justify-end gap-4">
          <Button variant="destructive">
            <Trash2 />
          </Button>
        </div>
      </div>
      {showDetails ? (
        <ChapterDetails summary={summary} />
      ) : (
        <Tabs
          defaultValue="plots"
          className="w-[100%] mt-6 border-2 rounded-md p-4"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="plots">Plots</TabsTrigger>
            <TabsTrigger value="characters">Characters</TabsTrigger>
          </TabsList>
          <TabsContent value="plots" className="flex flex-col items-end">
            <div className="rounded-md border p-4 mt-4 w-full">
              <PlotSorter
                plots={scenes}
                storyId={storyId}
                chapterId={chapterId}
              />
            </div>
            <Link href={`${storyId}/chapters/${chapterId}/create`}>
              <Button variant="outline" className="mt-4">
                Add a new plot
              </Button>
            </Link>
          </TabsContent>
          <TabsContent value="characters" className="w-full h-full">
            <Link href={`${storyId}/characters/create`}>
              <Card className="p-4">
                <CardTitle>Ariana Grande</CardTitle>
              </Card>
            </Link>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default Chapter;
