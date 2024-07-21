// pages/index.js
"use client";
import TextEditor from "@/components/TextEditor";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import Link from "next/link";
import { TfiArrowLeft } from "react-icons/tfi";

export default function Home({
  params,
}: {
  params: { storyId: string; chapterId: string };
}) {
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
        <div className="flex flex-row w-full items-center gap-8">
          <Link href={`/storylines/${params.storyId}`}>
            <TfiArrowLeft className="cursor-pointer" />
          </Link>
          <h3 className="font-medium text-lg">Create a new Plot</h3>
        </div>
        <TextEditor />
        <Button>Save</Button>
      </main>
    </div>
  );
}
