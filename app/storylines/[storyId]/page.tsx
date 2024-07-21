"use client";
import MapMode from "@/components/MapMode";
import StoryMode from "@/components/StoryMode";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";

const Story = ({ params }: { params: { storyId: number } }) => {
  const [storyData, setStoryData] = useState([]);
  const [chapterData, setChapterData] = useState([]);
  const fetchStoryData = async () => {
    try {
      const response = await fetch(`/storylines/${params.storyId}/api`);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid content type. Expected application/json.");
      }

      const data = await response.json();
      setStoryData(data.story);
      setChapterData(data.chapter);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchStoryData();
  }, []);

  return (
    <Tabs defaultValue="story" className="w-[100%]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="story">Story Mode</TabsTrigger>
        <TabsTrigger value="character">Map Mode</TabsTrigger>
      </TabsList>
      <TabsContent value="story">
        <StoryMode
          storyData={storyData}
          chapterData={chapterData}
          storyId={params?.storyId}
        />
      </TabsContent>
      <TabsContent value="character" className="w-full h-full">
        <div style={{ height: 1800, width: 1800 }}>
          <MapMode />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default Story;
