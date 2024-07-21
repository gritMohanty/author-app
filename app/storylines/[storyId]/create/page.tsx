"use client";
import Link from "next/link";
import React, { useState } from "react";
import { TfiArrowLeft } from "react-icons/tfi";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CreateChapter = ({ params }: { params: { storyId: String } }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const addChapter = async () => {
    const res = await fetch(`/storylines/${params.storyId}/create/api`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        payload: {
          name: name,
          description: description,
        },
      }),
    });
    const data = await res.json();
    console.log(data, "data here after chapter");
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row justify-start items-center gap-8">
          <Link href={`/storylines/${params.storyId}`}>
            <TfiArrowLeft className="cursor-pointer" />
          </Link>
          <h3 className="font-medium text-lg">Author a new Chapter</h3>
        </CardTitle>
        <CardDescription>
          The name and description can be changed in future as per your needs.
          The description is primarily for your reference.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full flex flex-col gap-12 mt-8 items-end">
        <div className="w-full">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name of the chapter</Label>
            <Input
              type="name"
              id="name"
              placeholder="Type name of the chapter here."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Description about your chapter</Label>
            <Textarea
              placeholder="Type your description here."
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={addChapter}>Save</Button>
      </CardContent>
    </Card>
  );
};

export default CreateChapter;
