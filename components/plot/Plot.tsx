"use client";
import TextEditor from "@/components/misc/TextEditor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TfiArrowLeft } from "react-icons/tfi";
import { Textarea } from "../ui/textarea";

export default function Plot({
  storyId,
  chapterId,
  mode,
  plotId,
}: {
  storyId: number;
  chapterId: number;
  mode: string;
  plotId?: number;
}) {
  const [summary, setSummary] = useState("");
  const [plot, setPlot] = useState("");
  useEffect(() => {
    if (mode === "edit") {
      fetchPlot();
    }
  }, []);
  const fetchPlot = async () => {
    const res = await fetch(
      `/storylines/${storyId}/chapters/${chapterId}/${plotId}/api`
    );
    const plotFetched = await res.json();
    const { data } = plotFetched;
    setPlot(data[0]?.content);
    setSummary(data[0]?.summary);
  };
  return (
    <div>
      <Head>
        <title>Text Editor</title>
        <link
          rel="stylesheet"
          href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
        />
      </Head>
      <main className="mx-auto flex flex-col justify-between items-end w-full p-4">
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full items-center gap-8">
            <Link href={`/storylines/${storyId}`}>
              <TfiArrowLeft className="cursor-pointer" />
            </Link>
            <h3 className="font-medium text-lg">{`${
              mode === "create" ? "Create" : "Edit"
            } plot`}</h3>
          </div>
          <div className="w-full mt-6 flex flex-col gap-2 items-start">
            <Label htmlFor="name">Summary of the plot</Label>
            <Textarea
              id="name"
              placeholder="Give summary of the plot here."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
        </div>

        <TextEditor value={plot} setValue={setPlot} />
        <Button>Save</Button>
      </main>
    </div>
  );
}
