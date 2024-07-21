import Link from "next/link";
import React from "react";
import { TfiArrowLeft } from "react-icons/tfi";
import { Button } from "./ui/button";
import Chapter from "./Chapter";
import "./components.css";

const StoryMode = ({ storyData, chapterData, storyId }: any) => {
  const storyName = storyData[0]?.story_name;
  return (
    <div className="mt-16">
      <div className="flex flex-row items-center justify-between">
        <Link href="/storylines">
          <TfiArrowLeft className="cursor-pointer" />
        </Link>
        <h4 className="font-semibold text-lg cursor-pointer underline-animation">{storyName}</h4>
        <div className="flex flex-row items-center justify-center gap-4">
          <Link href={`${storyId}/create`}>
            <Button>Author a new chapter</Button>
          </Link>
        </div>
      </div>
      {chapterData.map((chapter: any) => (
        <Chapter
          name={chapter?.chapter_name}
          chapterId={chapter?.id}
          storyId={storyId}
        />
      ))}
    </div>
  );
};

export default StoryMode;
