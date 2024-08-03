"use client"
import { useContext } from "react";
import { StoryContext } from "../provider/storyContext";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription } from "../ui/card";

const ChapterDetails = ({ summary }) => {
  const { toggleShowDetails } = useContext(StoryContext);
  return (
    <Card className="p-4 mt-4">
      <CardDescription className="flex flex-row justify-between items-center">
        {summary}
        <Button variant="secondary" onClick={() => toggleShowDetails(false)}>
          Show Plots and Characters
        </Button>
      </CardDescription>
    </Card>
  );
};

export default ChapterDetails;
